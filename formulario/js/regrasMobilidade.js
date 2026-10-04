/* Regras de domínio compartilhadas com os eventos. ES5, sem DOM ou rede. */
var MobilidadeRegras = (function () {
    var MAX = 9007199254740991;
    function texto(v) { return v === null || typeof v === 'undefined' ? '' : String(v).replace(/^\s+|\s+$/g, ''); }
    function exigir(v, label) { if (!texto(v)) throw new Error('Preencha: ' + label + '.'); }
    function inteiroSeguro(n) { return isFinite(n) && Math.floor(n) === n && Math.abs(n) <= MAX; }
    function decimal(v, casas, label) {
        var s = texto(v).replace(',', '.');
        if (!(new RegExp('^\\d{1,9}(?:\\.\\d{1,' + casas + '})?$')).test(s)) throw new Error('Valor inválido: ' + label + '. Use número positivo, sem separador de milhar.');
        var partes = s.split('.'), frac = partes[1] || '';
        while (frac.length < casas) frac += '0';
        var n = Number(partes[0]) * Math.pow(10, casas) + Number(frac);
        if (!inteiroSeguro(n)) throw new Error('Valor fora do limite: ' + label + '.');
        return n;
    }
    function dinheiro(v) { return decimal(v, 2, 'valor monetário'); }
    function moedaParaBRL(v, dados) {
        var centavos = dinheiro(v), taxa = dados.moedaProcesso === 'BRL' ? 1000000 : decimal(dados.taxaCambio, 6, 'cotação');
        if (!taxa || !inteiroSeguro(centavos * taxa + 500000)) throw new Error('Cotação ou valor fora do limite seguro.');
        return Math.floor((centavos * taxa + 500000) / 1000000);
    }
    function somar(total, valor) { var n = total + valor; if (!inteiroSeguro(n)) throw new Error('Total fora do limite seguro.'); return n; }
    function dataValida(s) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto(s))) return false;
        var p = s.split('-'), d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
        return d.getFullYear() === Number(p[0]) && d.getMonth() + 1 === Number(p[1]) && d.getDate() === Number(p[2]);
    }
    function instanteValido(s) { return /^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):[0-5]\d$/.test(texto(s)) && dataValida(s.slice(0, 10)); }
    function numero(v, label, max) {
        if (!/^\d+(?:\.\d{1,3})?$/.test(texto(v))) throw new Error('Informe um número válido: ' + label + '.');
        var n = Number(v); if (!isFinite(n) || n > max) throw new Error('Valor fora do limite: ' + label + '.'); return n;
    }
    function nivel(v) { return numero(v, 'nível de combustível (%)', 100); }
    function etapa(codigo, cfg) {
        if (Number(codigo) === cfg.processo.inicio) codigo = 1100;
        for (var i = 0; i < cfg.processo.etapas.length; i++) if (cfg.processo.etapas[i].codigo === Number(codigo)) return cfg.processo.etapas[i];
        throw new Error('Atividade não editável ou desconhecida.');
    }
    function servico(codigo, cfg) {
        for (var i = 0; i < cfg.servicos.length; i++) if (cfg.servicos[i].codigoServico === codigo) return cfg.servicos[i];
        throw new Error('Serviço não reconhecido.');
    }
    function referencia(lista, coluna, valor, cliente) {
        var encontrados = lista.filter(function (r) { return String(r[coluna]) === String(valor) && (!cliente || r.codigoClienteOrigem === cliente); });
        if (encontrados.length !== 1) throw new Error('Seleção não encontrada para o cliente: ' + coluna + '.'); return encontrados[0];
    }
    function validarServico(s, d, cfg) {
        var spec = servico(texto(s.codigoServico), cfg);
        if (spec.tiposViagem.indexOf(d.tipoViagem) < 0) throw new Error('Serviço incompatível com o tipo de viagem: ' + spec.nomeServico + '.');
        if (!instanteValido(s.inicioServico) || !instanteValido(s.fimServico) || s.fimServico < s.inicioServico) throw new Error('Confira as datas do serviço.');
        if (s.inicioServico < d.inicioPrevisto || s.fimServico > d.fimPrevisto) throw new Error('O serviço precisa estar dentro do período planejado.');
        if (!/^\d+$/.test(texto(s.quantidadeServico)) || Number(s.quantidadeServico) < 1 || Number(s.quantidadeServico) > 99) throw new Error('Quantidade do serviço: inteiro de 1 a 99.');
        dinheiro(s.valorPrevistoServico); exigir(s.detalhesServico, 'Detalhes / finalidade do serviço');
        var limpo = { codigoServico: spec.codigoServico, nomeServico: spec.nomeServico, inicioServico: s.inicioServico, fimServico: s.fimServico,
            quantidadeServico: texto(s.quantidadeServico), valorPrevistoServico: texto(s.valorPrevistoServico), detalhesServico: texto(s.detalhesServico) };
        var extras = {};
        cfg.servicos.forEach(function (tipo) { tipo.campos.forEach(function (c) { extras[c.nome] = true; }); });
        for (var nome in extras) if (extras.hasOwnProperty(nome)) limpo[nome] = '';
        spec.campos.forEach(function (c) { exigir(s[c.nome], c.rotulo); if (c.tipo === 'number' && (!/^\d+$/.test(texto(s[c.nome])) || Number(s[c.nome]) < 1 || Number(s[c.nome]) > 99)) throw new Error('Quantidade inválida: ' + c.rotulo); limpo[c.nome] = texto(s[c.nome]); });
        return limpo;
    }
    function temVeiculo(d) { return ['corporativo', 'locado', 'proprio'].indexOf(d.modalidadeVeiculo) >= 0; }
    function validarVinculos(d, tabelas, cfg) {
        var base = cfg.dados, cliente = referencia(base.clientes, 'codigoClienteOrigem', d.codigoClienteOrigem);
        referencia(base.areas, 'codigoAreaAdministrativa', d.codigoAreaAdministrativa, cliente.codigoClienteOrigem);
        referencia(base.pessoas, 'identificadorColaborador', d.identificadorSolicitante, cliente.codigoClienteOrigem);
        referencia(base.pessoas, 'identificadorColaborador', d.identificadorBeneficiario, cliente.codigoClienteOrigem);
        var vistos = {};
        if (!tabelas.participantes.length) throw new Error('Inclua pelo menos um participante.');
        tabelas.participantes.forEach(function (p) {
            var pessoa = referencia(base.pessoas, 'identificadorColaborador', p.identificadorParticipante, cliente.codigoClienteOrigem);
            if (p.nomeParticipante !== pessoa.nomeColaborador || p.emailParticipante !== pessoa.emailColaborador) throw new Error('Dados do participante divergem do catálogo.');
            if (Object.prototype.hasOwnProperty.call(vistos, p.identificadorParticipante)) throw new Error('Participante duplicado.'); vistos[p.identificadorParticipante] = true;
        });
        if (!vistos[d.identificadorBeneficiario]) throw new Error('O beneficiário deve ser participante da viagem.');
    }
    function validarVeiculo(d, tabelas, cfg, hoje, operacional) {
        if (!temVeiculo(d)) return;
        var v = referencia(cfg.dados.veiculos, 'codigoVeiculo', d.codigoVeiculo, d.codigoClienteOrigem);
        var c = referencia(cfg.dados.condutores, 'identificadorCondutor', d.identificadorCondutor, d.codigoClienteOrigem);
        if (v.modalidadeVeiculo !== d.modalidadeVeiculo) throw new Error('Veículo incompatível com a modalidade selecionada.');
        if (c.categoriaHabilitacao !== v.categoriaHabilitacao || c.autorizado !== 'sim') throw new Error('Condutor sem autorização ou categoria compatível.');
        var dataNecessaria = operacional && hoje && hoje > d.fimPrevisto.slice(0, 10) ? hoje : d.fimPrevisto.slice(0, 10);
        if (!dataValida(c.validadeHabilitacao) || c.validadeHabilitacao < dataNecessaria) throw new Error('Habilitação não cobre o período de uso.');
        if (v.situacaoVeiculo !== 'disponivel' || v.licenciamentoConferido !== 'sim') throw new Error('Veículo indisponível ou com documentação pendente.');
        var ocupantes = tabelas.participantes.length + (tabelas.participantes.some(function(p){return p.identificadorParticipante === c.identificadorColaborador;}) ? 0 : 1);
        if (ocupantes > Number(v.capacidadeOcupantes)) throw new Error('Participantes excedem a capacidade do veículo.');
    }
    function validarPlanejamento(d, t, cfg, hoje) {
        ['tipoViagem','codigoClienteOrigem','codigoAreaAdministrativa','identificadorSolicitante','contatoSolicitante','finalidadeViagem','origemViagem','destinoViagem','paisOrigem','paisDestino','codigoCentroCusto','moedaProcesso','identificadorBeneficiario','modalidadeVeiculo','contatoEmergencia'].forEach(function (k) { exigir(d[k], k); });
        if (['cidade','nacional','internacional'].indexOf(d.tipoViagem) < 0 || ['nenhum','corporativo','locado','proprio'].indexOf(d.modalidadeVeiculo) < 0 || cfg.processo.moedas.indexOf(d.moedaProcesso) < 0) throw new Error('Tipo, moeda ou modalidade inválida.');
        if (!/^[A-Z]{2}$/.test(d.paisOrigem) || !/^[A-Z]{2}$/.test(d.paisDestino)) throw new Error('Use códigos de país com duas letras maiúsculas.');
        if (!instanteValido(d.inicioPrevisto) || !instanteValido(d.fimPrevisto) || d.fimPrevisto < d.inicioPrevisto) throw new Error('Confira início e retorno previstos.');
        if (hoje && d.inicioPrevisto.slice(0, 10) < hoje) throw new Error('O início previsto não pode estar no passado.');
        if (d.tipoViagem === 'cidade' && (d.paisOrigem !== d.paisDestino || texto(d.origemViagem).toLowerCase() !== texto(d.destinoViagem).toLowerCase())) throw new Error('Deslocamento na cidade exige a mesma cidade e país.');
        if (d.tipoViagem === 'nacional' && (d.paisOrigem !== d.paisDestino || texto(d.origemViagem).toLowerCase() === texto(d.destinoViagem).toLowerCase())) throw new Error('Viagem nacional exige cidades diferentes no mesmo país.');
        if (d.tipoViagem === 'internacional' && d.paisOrigem === d.paisDestino) throw new Error('Viagem internacional exige países diferentes.');
        if (d.moedaProcesso === 'BRL' && texto(d.taxaCambio) !== '1') throw new Error('Para BRL, informe cotação 1.');
        moedaParaBRL('1',d); dinheiro(d.valorAdiantamento);
        validarVinculos(d,t,cfg); validarVeiculo(d,t,cfg,hoje,false);
        t.servicos.forEach(function (s) { validarServico(s,d,cfg); });
        if (t.servicos.some(function (s) { return s.codigoServico === 'locacao'; }) && d.modalidadeVeiculo !== 'locado') throw new Error('Aluguel de carro exige modalidade de veículo locado.');
        if (d.modalidadeVeiculo === 'locado' && !t.servicos.some(function (s) { return s.codigoServico === 'locacao'; })) throw new Error('Inclua o serviço de aluguel de carro.');
        if (temVeiculo(d) && !/^[A-Z]{2}$/.test(d.paisUsoVeiculo)) throw new Error('Informe o país de uso do veículo.');
    }
    function orcamento(d,t,cotado) {
        return t.servicos.reduce(function (total,s) { return somar(total,moedaParaBRL(cotado ? s.valorCotadoServico : s.valorPrevistoServico,d)); },0);
    }
    function assinatura(d,t) {
        return JSON.stringify([d.codigoClienteOrigem,d.codigoVeiculo,d.identificadorCondutor,d.modalidadeVeiculo,d.paisUsoVeiculo,d.inicioPrevisto,d.fimPrevisto,t.participantes.map(function(p){return p.identificadorParticipante;}).sort()]);
    }
    function assinaturaPlano(d,t) {
        return JSON.stringify([d.tipoViagem,d.codigoClienteOrigem,d.codigoAreaAdministrativa,d.identificadorSolicitante,d.identificadorBeneficiario,d.finalidadeViagem,d.origemViagem,d.destinoViagem,d.paisOrigem,d.paisDestino,d.codigoCentroCusto,d.moedaProcesso,d.taxaCambio,d.valorAdiantamento,assinatura(d,t),t.servicos.map(function(s){return [s.codigoServico,s.inicioServico,s.fimServico,s.quantidadeServico,s.valorCotadoServico,s.detalhesServico,s.trechoOrigem,s.trechoDestino,s.horarioPreferencial,s.bagagem,s.cidadeHotel,s.quartos,s.localRetirada,s.localDevolucao,s.categoriaCarro,s.nomeEvento];})]);
    }
    function guard(nome,d,t,cfg) {
        var valor = orcamento(d,t,true), exec = d.tipoViagem === 'internacional' && cfg.processo.alcadasFicticias.internacionalExigeExecutiva || valor >= cfg.processo.alcadasFicticias.executivaCentavosBRL;
        var principal = valor >= cfg.processo.alcadasFicticias.principalCentavosBRL;
        var advance = dinheiro(d.valorAdiantamento) > 0, vehicle = temVeiculo(d);
        var flags = {sempre:true,comServicos:t.servicos.length>0,semServicos:t.servicos.length===0,alcadaExecutiva:exec,semAlcadaExecutiva:!exec,alcadaPrincipal:principal,semAlcadaPrincipal:!principal,comAdiantamento:advance,semAdiantamentoComVeiculo:!advance&&vehicle,semAdiantamentoSemVeiculo:!advance&&!vehicle,comVeiculo:vehicle,semVeiculo:!vehicle,cancelado:d.cancelamentoAtivo==='sim',naoCancelado:d.cancelamentoAtivo!=='sim'};
        if (!Object.prototype.hasOwnProperty.call(flags,nome)) throw new Error('Condição não reconhecida.'); return flags[nome];
    }
    function proxima(codigo,d,t,cfg) {
        var e=etapa(codigo,cfg), valor=e.campoDecisao?texto(d[e.campoDecisao]):'concluir';
        // Não calcular orçamento para rotas simples que precedem as cotações.
        var candidatos=e.rotas.filter(function(r){return r.valor===valor && (r.quando==='sempre'||guardSemOrcamento(r.quando,d,t,cfg));});
        if(candidatos.length!==1) throw new Error('Decisão sem caminho único.'); return candidatos[0].destino;
    }
    function guardSemOrcamento(nome,d,t,cfg) {
        if(['alcadaExecutiva','semAlcadaExecutiva','alcadaPrincipal','semAlcadaPrincipal'].indexOf(nome)>=0) return guard(nome,d,t,cfg);
        var advance=dinheiro(d.valorAdiantamento)>0,vehicle=temVeiculo(d);
        var f={comServicos:t.servicos.length>0,semServicos:t.servicos.length===0,comAdiantamento:advance,semAdiantamentoComVeiculo:!advance&&vehicle,semAdiantamentoSemVeiculo:!advance&&!vehicle,comVeiculo:vehicle,semVeiculo:!vehicle,cancelado:d.cancelamentoAtivo==='sim',naoCancelado:d.cancelamentoAtivo!=='sim'};
        if(!Object.prototype.hasOwnProperty.call(f,nome)) throw new Error('Condição desconhecida.');return f[nome];
    }
    function validarChecklist(prefix,d,cfg,liberar) {
        cfg.seguranca.itens.forEach(function(c){var v=d[prefix+c.codigo];if(['conforme','naoConforme'].indexOf(v)<0) throw new Error('Confira o item: '+c.rotulo+'.');if(liberar&&c.critico&&v!=='conforme') throw new Error('Liberação bloqueada: '+c.rotulo+'.');if(v==='naoConforme') exigir(d[prefix==='inspecao_'?'observacaoInspecao':'observacaoRetorno'],'Descrição das não conformidades');});
    }
    function acerto(d,t,cfg) {
        var colaborador=0,empresa=0;
        t.despesas.forEach(function(s){if(!dataValida(s.dataDespesa))throw new Error('Data da despesa inválida.');exigir(s.categoriaDespesa,'Categoria');if(s.categoriaDespesa!=='taxaCancelamento')servico(s.categoriaDespesa,cfg);exigir(s.descricaoDespesa,'Descrição');exigir(s.referenciaComprovante,'Comprovante da despesa');var v=moedaParaBRL(s.valorDespesa,d);if(v<=0)throw new Error('Despesa deve ter valor positivo.');if(s.formaCusteio==='colaborador')colaborador=somar(colaborador,v);else if(s.formaCusteio==='empresa')empresa=somar(empresa,v);else throw new Error('Forma de custeio inválida.');});
        var adiantado=moedaParaBRL(texto(d.valorAdiantamentoLiberado)||'0',d),saldo=colaborador-adiantado;
        return {despesasColaboradorCentavosBRL:colaborador,despesasEmpresaCentavosBRL:empresa,adiantamentoCentavosBRL:adiantado,reembolsoCentavosBRL:Math.max(0,saldo),devolucaoCentavosBRL:Math.max(0,-saldo)};
    }
    function validar(codigo,d,t,cfg,hoje) {
        var e=etapa(codigo,cfg),key=e.chave,dec=e.campoDecisao?texto(d[e.campoDecisao]):'concluir';
        if(!e.rotas.some(function(r){return r.valor===dec;}))throw new Error('Selecione uma decisão válida para esta etapa.');
        if(key==='PLANEJAMENTO') { if(dec==='enviar')validarPlanejamento(d,t,cfg,hoje); }
        else if(['GESTOR','LOGISTICA','EXECUTIVA','PRINCIPAL'].indexOf(key)>=0) {
            if(dec!=='aprovado')exigir(d['observacao'+key.charAt(0)+key.slice(1).toLowerCase()],'Observação da decisão');
            if(dec==='aprovado'&&key!=='GESTOR'){t.servicos.forEach(function(s){dinheiro(s.valorCotadoServico);});orcamento(d,t,true);}
        } else if(key==='COTACAO'){if(dec==='concluir')t.servicos.forEach(function(s){dinheiro(s.valorCotadoServico);exigir(s.referenciaCotacao,'Referência da cotação');});else exigir(d.observacaoCotacao,'Observação');}
        else if(key==='ORGANIZACAO'){
            if(dec==='concluir'){
                if(d.assinaturaPlanoAprovado!==assinaturaPlano(d,t))throw new Error('Planejamento alterado: retorne para reaprovação.');
                t.servicos.forEach(function(s){if(s.situacaoServico!=='confirmado')throw new Error('Confirme todos os serviços selecionados.');exigir(s.referenciaServico,'Reserva / confirmação do serviço');});
                if(d.tipoViagem==='internacional'){if(d.situacaoDocumentacaoViagem!=='conferida')throw new Error('Documentação internacional pendente.');exigir(d.referenciaDocumentacaoViagem,'Conferência documental');}
                if(temVeiculo(d)&&d.paisUsoVeiculo!=='BR'){if(d.conferenciaRegrasDestino!=='sim')throw new Error('Confira as regras do país de uso do veículo.');exigir(d.referenciaRegrasDestino,'Referência das regras locais');}
            }else exigir(d.observacaoOrganizacao,'Motivo da alteração ou cancelamento');
        } else if(key==='ADIANTAMENTO'){
            if(dec==='liberado'){if(dinheiro(d.valorAdiantamentoLiberado)!==dinheiro(d.valorAdiantamento)||dinheiro(d.valorAdiantamentoLiberado)<=0)throw new Error('A liberação deve corresponder ao adiantamento aprovado.');exigir(d.referenciaTransferencia,'Referência da transferência');if(!dataValida(d.dataTransferencia))throw new Error('Data da transferência inválida.');}
        } else if(key==='INSPECAO'){
            if(dec==='liberado')validarVeiculo(d,t,cfg,hoje,true);nivel(d.nivelCombustivelSaida);numero(d.odometroInspecao,'Odômetro',9999999);validarChecklist('inspecao_',d,cfg,dec==='liberado');
            if(dec==='liberado'&&d.aceiteNormativo!=='sim')throw new Error('Confirme a verificação presencial conforme a base normativa.');if(dec==='bloqueado')exigir(d.observacaoInspecao,'Motivo do bloqueio');
        } else if(key==='REGULARIZACAO'){exigir(d.referenciaRegularizacao,'Referência da regularização');exigir(d.observacaoRegularizacao,'Descrição da regularização');validarVeiculo(d,t,cfg,hoje,true);}
        else if(key==='SAIDA'){
            if(d.situacaoLiberacaoVeiculo!=='liberado'||d.assinaturaLiberacao!==assinatura(d,t))throw new Error('Veículo ou planejamento sem liberação válida.');validarVeiculo(d,t,cfg,hoje,true);validarChecklist('inspecao_',d,cfg,true);
            if(d.confirmacaoCondutor!=='sim')throw new Error('O condutor deve confirmar a verificação antes de circular.');
            if(hoje&&d.dataHoraSaida.slice(0,10)>hoje)throw new Error('A saída realizada não pode estar no futuro.');if(!instanteValido(d.dataHoraSaida))throw new Error('Data/hora de saída inválida.');if(numero(d.odometroSaida,'Odômetro de saída',9999999)<numero(d.odometroInspecao,'Odômetro da inspeção',9999999))throw new Error('Odômetro de saída menor que o da inspeção.');
        } else if(key==='RETORNO'){
            if(hoje&&d.dataHoraRetorno.slice(0,10)>hoje)throw new Error('O retorno realizado não pode estar no futuro.');if(!instanteValido(d.dataHoraRetorno))throw new Error('Data/hora de retorno inválida.');var inicio=temVeiculo(d)?d.dataHoraSaida:d.inicioPrevisto;if(!instanteValido(inicio)||d.dataHoraRetorno<inicio)throw new Error('Retorno anterior ao início.');
            if(temVeiculo(d)){if(numero(d.odometroRetorno,'Odômetro no retorno',9999999)<numero(d.odometroSaida,'Odômetro de saída',9999999))throw new Error('Odômetro no retorno menor que o de saída.');nivel(d.nivelCombustivelRetorno);validarChecklist('retorno_',d,cfg,false);}
        } else if(key==='ABASTECIMENTO'){
            var veiculo=referencia(cfg.dados.veiculos,'codigoVeiculo',d.codigoVeiculo,d.codigoClienteOrigem);
            if(['abastecido','dispensado'].indexOf(d.situacaoAbastecimento)<0)throw new Error('Regularize o abastecimento antes de avançar.');
            if(nivel(d.nivelCombustivelRegularizado)<Number(veiculo.nivelReferenciaRetorno))throw new Error('Nível inferior à referência de devolução.');
            if(d.situacaoAbastecimento==='dispensado'){exigir(d.observacaoAbastecimento,'Justificativa de dispensa');if(nivel(d.nivelCombustivelRetorno)<Number(veiculo.nivelReferenciaRetorno))throw new Error('Nível no retorno não permite dispensa de abastecimento.');}
            else if(!t.abastecimentos.length)throw new Error('Registre o abastecimento e o comprovante.');
            var ultimo=numero(d.odometroSaida,'Odômetro de saída',9999999);
            t.abastecimentos.forEach(function(b){if(hoje&&b.dataHoraAbastecimento.slice(0,10)>hoje)throw new Error('O abastecimento realizado não pode estar no futuro.');if(!instanteValido(b.dataHoraAbastecimento)||b.dataHoraAbastecimento<d.dataHoraSaida)throw new Error('Data do abastecimento inválida.');var km=numero(b.odometroAbastecimento,'Odômetro de abastecimento',9999999);if(km<ultimo)throw new Error('Odômetros de abastecimento fora de ordem.');ultimo=km;if(b.tipoCombustivel!==veiculo.tipoCombustivel)throw new Error('Combustível incompatível com o veículo.');if(decimal(b.litros,3,'litros')<=0||dinheiro(b.valorAbastecimento)<=0)throw new Error('Litros e valor devem ser positivos.');exigir(b.postoAbastecimento,'Posto');exigir(b.referenciaAbastecimento,'Comprovante do abastecimento');});
        } else if(key==='DEVOLUCAO'){
            if(dec==='disponivel'){validarChecklist('retorno_',d,cfg,true);if(['abastecido','dispensado'].indexOf(d.situacaoAbastecimento)<0)throw new Error('Combustível pendente.');}
            else exigir(d.observacaoDevolucao,'Motivo da manutenção');
        } else if(key==='MANUTENCAO'){exigir(d.referenciaManutencao,'Referência da manutenção');exigir(d.observacaoManutencao,'Descrição da regularização');validarChecklist('retorno_',d,cfg,true);}
        else if(key==='CONTAS'){acerto(d,t,cfg);if(!t.despesas.length)exigir(d.observacaoContas,'Justificativa sem despesas');}
        else if(key==='CONFERENCIA'){var a=acerto(d,t,cfg);if(dec==='correcao')exigir(d.observacaoConferencia,'Motivo do ajuste');else if(a.reembolsoCentavosBRL||a.devolucaoCentavosBRL)exigir(d.referenciaAcerto,'Referência do acerto financeiro');}
        else if(key==='CANCELAMENTO'){exigir(d.motivoCancelamento,'Motivo do cancelamento');exigir(d.referenciaCancelamento,'Tratamento das reservas e valores');t.servicos.forEach(function(s){if(s.situacaoServico!=='cancelado')throw new Error('Trate o cancelamento de todos os serviços selecionados.');exigir(s.referenciaServico,'Referência do cancelamento');});}
        return true;
    }
    return {texto:texto,exigir:exigir,dinheiro:dinheiro,decimal:decimal,moedaParaBRL:moedaParaBRL,dataValida:dataValida,instanteValido:instanteValido,etapa:etapa,servico:servico,referencia:referencia,validarServico:validarServico,temVeiculo:temVeiculo,validarPlanejamento:validarPlanejamento,validarVeiculo:validarVeiculo,orcamento:orcamento,assinatura:assinatura,assinaturaPlano:assinaturaPlano,validarChecklist:validarChecklist,acerto:acerto,proxima:proxima,validar:validar};
})();
if(typeof module!=='undefined'&&module.exports)module.exports=MobilidadeRegras;
