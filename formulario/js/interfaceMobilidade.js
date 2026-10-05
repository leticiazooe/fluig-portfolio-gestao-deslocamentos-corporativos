/* Interface independente; regras de negócio vêm de MobilidadeRegras. */
function campoMob(id){return document.getElementById(id)||document.getElementById('_'+id);}
function valorMob(id){var el=campoMob(id);return el?MobilidadeRegras.texto(el.value):'';}
function definirMob(id,v){var el=campoMob(id);if(el)el.value=v==null?'':String(v);}
function avisoMob(v){campoMob('mensagemMob').textContent=String(v||'');}
function contextoMob(){return typeof MobilidadeContexto==='undefined'?{atividade:0,modo:'EDIT'}:MobilidadeContexto;}
function codigoMob(){return Number(contextoMob().atividade)||1100;}
function hojeMob(){var d=new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);}
function dadosMob(){var out={};MobilidadeServidor.campos().forEach(function(k){out[k]=valorMob(k);});MobilidadeConfig.seguranca.itens.forEach(function(c){['inspecao_','retorno_'].forEach(function(p){out[p+c.codigo]=valorMob(p+c.codigo);});});return out;}
function linhasMob(key){var s=MobilidadeConfig.tabelas[key];return Array.from(campoMob(s.nome).querySelectorAll('tbody tr')).filter(function(row){return row.querySelector('[name^="'+s.campos[0]+'___"]')||row.querySelector('[id^="_'+s.campos[0]+'___"]');});}
function indiceMob(key,row){var first=MobilidadeConfig.tabelas[key].campos[0],el=row.querySelector('[name^="'+first+'___"]')||row.querySelector('[id^="_'+first+'___"]');return (el.name||el.id).split('___').pop();}
function tabelasMob(){var t={};Object.keys(MobilidadeConfig.tabelas).forEach(function(key){var s=MobilidadeConfig.tabelas[key];t[key]=linhasMob(key).map(function(row){var i=indiceMob(key,row),out={};s.campos.forEach(function(k){out[k]=valorMob(k+'___'+i);});out.__indice=i;return out;});});return t;}
function permitidoMob(codes){return contextoMob().modo!=='VIEW'&&codes.indexOf(codigoMob())>=0;}
function catalogoMob(name,filters){var cs=Object.keys(filters||{}).map(function(k){return DatasetFactory.createConstraint(k,filters[k],filters[k],ConstraintType.MUST);});var ds=DatasetFactory.getDataset(name,null,cs,null);if(!ds||!ds.values)throw new Error('Não foi possível consultar '+name+'.');return ds.values;}
function preencherSelectMob(el,rows,key,label){var old=el.value;el.replaceChildren(new Option('Selecione...',''));rows.forEach(function(r){el.add(new Option(r[label],r[key]));});el.value=old;}
function atualizarCatalogosMob(){
 var cliente=valorMob('codigoClienteOrigem'),f={codigoClienteOrigem:cliente||'__nenhum__'};
 var mapa={catalogoClientes:['dsMobilidadeClientes',{},'codigoClienteOrigem','nomeClienteOrigem'],catalogoAreas:['dsMobilidadeAreas',f,'codigoAreaAdministrativa','areaAdministrativa'],catalogoPessoas:['dsMobilidadePessoas',f,'identificadorColaborador','nomeColaborador'],catalogoVeiculos:['dsMobilidadeVeiculos',Object.assign({},f,{modalidadeVeiculo:valorMob('modalidadeVeiculo')||'__nenhum__'}),'codigoVeiculo','nomeVeiculo'],catalogoCondutores:['dsMobilidadeCondutores',f,'identificadorCondutor','nomeCondutor']};
 document.querySelectorAll('[data-catalogo]').forEach(function(el){var args=mapa[el.dataset.catalogo];preencherSelectMob(el,catalogoMob(args[0],args[1]),args[2],args[3]);});
 var selected=valorMob('entrada_codigoServico');var itens=MobilidadeConfig.servicos.filter(function(s){return s.tiposViagem.indexOf(valorMob('tipoViagem'))>=0;});preencherSelectMob(campoMob('entrada_codigoServico'),itens,'codigoServico','nomeServico');definirMob('entrada_codigoServico',selected);detalhesServicoMob();
}
function detalhesServicoMob(){var s;try{s=MobilidadeRegras.servico(valorMob('entrada_codigoServico'),MobilidadeConfig);}catch(e){s={campos:[]};}document.querySelectorAll('[data-servico-detalhe]').forEach(function(el){el.hidden=!s.campos.some(function(c){return c.nome===el.dataset.servicoDetalhe;});});}
function criarLinhaMob(key,row){var s=MobilidadeConfig.tabelas[key];if(typeof wdkAddChild!=='function')throw new Error('A tabela filha não está disponível.');var i=wdkAddChild(s.nome);s.campos.forEach(function(k){definirMob(k+'___'+i,row[k]||'');});return i;}
function lerCompositorMob(fields){var row={};fields.forEach(function(k){row[k]=valorMob('entrada_'+k);});return row;}
function adicionarMob(key){
 if(!permitidoMob([key==='participantes'||key==='servicos'?1100:key==='despesas'?1950:1910]))return;
 try{var d=dadosMob(),t=tabelasMob(),s=MobilidadeConfig.tabelas[key],row;
  if(key==='participantes'){var id=valorMob('entrada_participante'),p=MobilidadeRegras.referencia(MobilidadeConfig.dados.pessoas,'identificadorColaborador',id,d.codigoClienteOrigem);if(t.participantes.some(function(x){return x.identificadorParticipante===id;}))throw new Error('Participante já incluído.');row={identificadorParticipante:id,nomeParticipante:p.nomeColaborador,emailParticipante:p.emailColaborador};}
  if(key==='servicos'){row=MobilidadeRegras.validarServico(lerCompositorMob(s.campos),d,MobilidadeConfig);row.situacaoServico='pendente';}
  if(key==='despesas'){row=lerCompositorMob(s.campos);var proposta=Object.assign({},t,{despesas:t.despesas.concat([row])});MobilidadeRegras.acerto(d,proposta,MobilidadeConfig);}
  if(key==='abastecimentos'){row=lerCompositorMob(s.campos);var veiculo=MobilidadeRegras.referencia(MobilidadeConfig.dados.veiculos,'codigoVeiculo',d.codigoVeiculo,d.codigoClienteOrigem);var temporario=Object.assign({},d,{situacaoAbastecimento:'abastecido',nivelCombustivelRegularizado:veiculo.nivelReferenciaRetorno});MobilidadeRegras.validar(1910,temporario,Object.assign({},t,{abastecimentos:t.abastecimentos.concat([row])}),MobilidadeConfig,hojeMob());}
  criarLinhaMob(key,row);document.querySelector('[data-compositor="'+key+'"]').querySelectorAll('input,select,textarea').forEach(function(el){el.value='';});if(key==='servicos')detalhesServicoMob();atualizarTelaMob();avisoMob('Item adicionado.');
 }catch(erro){avisoMob(erro.message||erro);}
}
function removerLinhaMob(key,button){var code=key==='participantes'||key==='servicos'?1100:key==='despesas'?1950:1910;if(!permitidoMob([code]))return;if(window.confirm('Remover este item?')){fnWdkRemoveChild(button.closest('tr').querySelector('input'));atualizarTelaMob();avisoMob('Item removido.');}}
function realMob(centavos){return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(centavos/100);}
function numeroCambioMob(v){var n=Number(String(v==null?'':v).replace(',','.'));return isFinite(n)?n:null;}
function exibirCambioMob(info){
 var moeda=valorMob('moedaProcesso')||'BRL',compra=numeroCambioMob(info.compra),venda=numeroCambioMob(info.venda),pct=numeroCambioMob(info.variacaoPct);
 definirMob('fonteCambio',info.fonte||'AwesomeAPI');definirMob('dataHoraCambio',info.dataHora||'');definirMob('cotacaoCompra',compra==null?'':compra.toFixed(6));definirMob('cotacaoVenda',venda==null?'':venda.toFixed(6));definirMob('cotacaoVariacaoPct',pct==null?'':pct.toFixed(4));definirMob('cotacaoMaxima',info.maxima||'');definirMob('cotacaoMinima',info.minima||'');
 if(moeda==='BRL'){definirMob('taxaCambio','1');compra=1;venda=1;pct=0;}
 else if(venda!=null&&venda>0)definirMob('taxaCambio',venda.toFixed(6));
 var fmt=function(n){return n==null?'-':new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',minimumFractionDigits:4,maximumFractionDigits:6}).format(n);};
 campoMob('compraCambioMob').textContent=fmt(compra);campoMob('vendaCambioMob').textContent=fmt(venda);campoMob('variacaoCambioMob').textContent=pct==null?'-':(pct>0?'+':'')+pct.toFixed(2).replace('.',',')+'%';
 campoMob('statusCambioMob').textContent=moeda==='BRL'?'Moeda base do processo. Conversão 1:1.':'1 '+moeda+' convertido para BRL pela cotação de venda.';
 campoMob('fonteCambioMob').textContent='Fonte: '+(info.fonte||'AwesomeAPI')+(info.dataHora?' · '+info.dataHora:'');
 atualizarResumoMob();
}
function cambioViaDatasetMob(moeda){
 return new Promise(function(resolve,reject){
  try{
   if(typeof DatasetFactory==='undefined'||!DatasetFactory.getDataset)return reject(new Error('Dataset indisponível.'));
   var cs=[DatasetFactory.createConstraint('moeda',moeda,moeda,ConstraintType.MUST)];
   var ds=DatasetFactory.getDataset('dsMobilidadeCambio',null,cs,null),row=ds&&ds.values&&ds.values[0];
   if(!row||row.status==='erro')return reject(new Error(row&&row.mensagem||'Cotação indisponível.'));
   resolve({compra:row.compra,venda:row.venda,variacaoPct:row.variacaoPct,maxima:row.maxima,minima:row.minima,dataHora:row.dataHora,fonte:row.fonte||'AwesomeAPI'});
  }catch(e){reject(e);}
 });
}
function cambioViaApiMob(moeda){
 var par=encodeURIComponent(moeda+'-BRL');
 return fetch('https://economia.awesomeapi.com.br/json/last/'+par,{headers:{Accept:'application/json'}}).then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json();}).then(function(data){
  var item=data[moeda+'BRL'];if(!item)throw new Error('Par de moedas não retornado.');
  return {compra:item.bid,venda:item.ask,variacaoPct:item.pctChange,maxima:item.high,minima:item.low,dataHora:item.create_date||'',fonte:'AwesomeAPI'};
 });
}
function consultarCambioMob(){
 var moeda=valorMob('moedaProcesso')||'BRL',btn=campoMob('atualizarCambioMob');if(btn)btn.disabled=true;
 if(moeda==='BRL'){exibirCambioMob({compra:1,venda:1,variacaoPct:0,dataHora:new Date().toLocaleString('pt-BR'),fonte:'Conversão interna'});if(btn)btn.disabled=false;return Promise.resolve();}
 campoMob('statusCambioMob').textContent='Consultando '+moeda+'/BRL...';
 return cambioViaDatasetMob(moeda).catch(function(){return cambioViaApiMob(moeda);}).then(function(info){exibirCambioMob(info);avisoMob('Cotação '+moeda+'/BRL atualizada.');}).catch(function(e){campoMob('statusCambioMob').textContent='Não foi possível atualizar automaticamente. A cotação manual continua disponível.';avisoMob('Cotação automática indisponível: '+(e.message||e));}).then(function(){if(btn)btn.disabled=false;});
}
function atualizarResumoMob(){var d=dadosMob(),t=tabelasMob();try{campoMob('totalPrevistoMob').textContent=realMob(MobilidadeRegras.orcamento(d,t,false));}catch(e){campoMob('totalPrevistoMob').textContent='Confira o planejamento';}try{campoMob('totalCotadoMob').textContent=realMob(MobilidadeRegras.orcamento(d,t,true));}catch(e){campoMob('totalCotadoMob').textContent='Aguardando cotações';}try{var a=MobilidadeRegras.acerto(d,t,MobilidadeConfig);campoMob('reembolsoMob').textContent=realMob(a.reembolsoCentavosBRL);campoMob('devolucaoMob').textContent=realMob(a.devolucaoCentavosBRL);}catch(e){campoMob('reembolsoMob').textContent='Confira as despesas';campoMob('devolucaoMob').textContent='Confira as despesas';}}
function atualizarTelaMob(){
 var code=codigoMob(),stage,consulta=contextoMob().modo==='VIEW';try{stage=MobilidadeRegras.etapa(code,MobilidadeConfig);}catch(e){consulta=true;}
 var nomes=stage?stage.campos.map(function(c){return c.nome;}):[];
 document.querySelectorAll('#formMobilidade input,#formMobilidade textarea,#formMobilidade select').forEach(function(el){if(el.type==='hidden')return;var name=(el.name||el.id).replace(/^_/,''),liberado=!consulta&&nomes.indexOf(name)>=0;if(name.indexOf('inspecao_')===0)liberado=!consulta&&code===1800;if(name.indexOf('retorno_')===0)liberado=!consulta&&[1900,1930].indexOf(code)>=0;if(el.tagName==='SELECT')el.disabled=!liberado;else el.readOnly=!liberado;});
 Object.keys(MobilidadeConfig.tabelas).forEach(function(key){var s=MobilidadeConfig.tabelas[key],addCode=key==='participantes'||key==='servicos'?1100:key==='despesas'?1950:1910;document.querySelector('[data-compositor="'+key+'"]').hidden=consulta||code!==addCode;
  document.querySelector('[data-compositor="'+key+'"]').querySelectorAll('input,select,textarea').forEach(function(el){el.disabled=consulta||code!==addCode;el.readOnly=consulta||code!==addCode;});
  linhasMob(key).forEach(function(row){row.classList.add('mob-linha');var idx=indiceMob(key,row);s.campos.forEach(function(k){var el=campoMob(k+'___'+idx);if(!el||el.type==='hidden')return;var edit=!consulta&&s.etapasEdicao.indexOf(code)>=0&&key!=='participantes'&&key!=='servicos';if(key==='servicos')edit=!consulta&&(code===1300&&['valorCotadoServico','referenciaCotacao'].indexOf(k)>=0||[1600,2090].indexOf(code)>=0&&['situacaoServico','referenciaServico'].indexOf(k)>=0);if(el.tagName==='SELECT')el.disabled=!edit;else el.readOnly=!edit;});if(key==='servicos'){var dl=row.querySelector('[data-detalhes-reserva] dl'),item={};s.campos.forEach(function(k){item[k]=valorMob(k+'___'+idx);});dl.replaceChildren();var spec;try{spec=MobilidadeRegras.servico(item.codigoServico,MobilidadeConfig);}catch(x){spec={campos:[]};}[{nome:'quantidadeServico',rotulo:'Quantidade'},{nome:'detalhesServico',rotulo:'Detalhes / finalidade'}].concat(spec.campos).forEach(function(f){var dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=f.rotulo;dd.textContent=item[f.nome]||'Sem informação';dl.append(dt,dd);});}row.querySelector('[data-remover]').hidden=consulta||code!==addCode;});
  document.querySelector('[data-total="'+key+'"]').textContent=String(linhasMob(key).length);var bloco=document.querySelector('[data-tabela-painel="'+key+'"]');bloco.hidden=(key==='abastecimentos'&&!MobilidadeRegras.temVeiculo(dadosMob()))||(key==='despesas'&&!consulta&&[1950,2000,2090].indexOf(code)<0&&linhasMob(key).length===0);
 });
 document.querySelectorAll('[data-painel]').forEach(function(el){var n=Number(el.dataset.painel),atual=n===code,temValor=Array.from(el.querySelectorAll('input,select,textarea')).some(function(c){return c.value&&c.type!=='hidden';});el.hidden=!consulta&&!atual&&n!==1100&&!temValor;if([1800,1810,1850,1910,1920,1930].indexOf(n)>=0&&!MobilidadeRegras.temVeiculo(dadosMob()))el.hidden=true;el.open=atual||n===1100&&code===1100;el.classList.toggle('mob-atual',atual);});
 document.querySelectorAll('[data-checklist="retorno_"]').forEach(function(el){el.hidden=!MobilidadeRegras.temVeiculo(dadosMob());});
 document.querySelectorAll('[data-fase]').forEach(function(el){el.classList.toggle('is-current',stage&&el.dataset.fase===stage.fase);el.removeAttribute('aria-current');if(stage&&el.dataset.fase===stage.fase)el.setAttribute('aria-current','step');});atualizarResumoMob();
}
var beforeSendValidate=function(numState,nextState){if(contextoMob().modo==='VIEW')throw 'Processo em consulta.';var code=numState==null?codigoMob():Number(numState);try{var d=dadosMob(),t=tabelasMob();MobilidadeRegras.validar(code,d,t,MobilidadeConfig,hojeMob());if(nextState!=null){var stage=MobilidadeRegras.etapa(code,MobilidadeConfig),dest=MobilidadeRegras.proxima(code,d,t,MobilidadeConfig);if(Number(nextState)!==dest&&Number(nextState)!==stage.gateway)throw new Error('Próxima atividade incompatível.');}}catch(e){throw String(e.message||e);}return true;};
function telaCheiaMob(){var el=campoMob('paginaMobilidade');if(document.fullscreenElement===el){document.exitFullscreen();return;}if(el.classList.contains('mob-fullscreen')){el.classList.remove('mob-fullscreen');return;}var fallback=function(){el.classList.add('mob-fullscreen');};if(el.requestFullscreen)el.requestFullscreen().catch(fallback);else fallback();}
document.addEventListener('DOMContentLoaded',function(){
 try{atualizarCatalogosMob();}catch(e){avisoMob(e.message||e);}
 if(codigoMob()===1100&&contextoMob().modo!=='VIEW'){if(!valorMob('moedaProcesso'))definirMob('moedaProcesso','BRL');if(!valorMob('taxaCambio'))definirMob('taxaCambio','1');if(!valorMob('valorAdiantamento'))definirMob('valorAdiantamento','0');if(!valorMob('modalidadeVeiculo'))definirMob('modalidadeVeiculo','nenhum');}
 document.querySelectorAll('[data-adicionar]').forEach(function(b){b.addEventListener('click',function(){adicionarMob(b.dataset.adicionar);});});
 campoMob('codigoClienteOrigem').addEventListener('change',function(){if(!permitidoMob([1100]))return;['codigoAreaAdministrativa','identificadorSolicitante','identificadorBeneficiario','codigoVeiculo','identificadorCondutor'].forEach(function(k){definirMob(k,'');});linhasMob('participantes').forEach(function(row){fnWdkRemoveChild(row.querySelector('input'));});try{atualizarCatalogosMob();}catch(e){avisoMob(e.message);}atualizarTelaMob();avisoMob('Cliente alterado. Confira participantes, serviços e planejamento.');});
 campoMob('tipoViagem').addEventListener('change',function(){try{atualizarCatalogosMob();}catch(e){avisoMob(e.message);}atualizarTelaMob();});
 campoMob('moedaProcesso').addEventListener('change',function(){if(permitidoMob([1100]))consultarCambioMob();});
 if(campoMob('atualizarCambioMob'))campoMob('atualizarCambioMob').addEventListener('click',consultarCambioMob);
 campoMob('modalidadeVeiculo').addEventListener('change',function(){definirMob('codigoVeiculo','');definirMob('identificadorCondutor','');try{atualizarCatalogosMob();}catch(e){avisoMob(e.message);}atualizarTelaMob();});
 campoMob('entrada_codigoServico').addEventListener('change',detalhesServicoMob);
 campoMob('formMobilidade').addEventListener('input',function(){atualizarResumoMob();});campoMob('formMobilidade').addEventListener('change',function(){atualizarResumoMob();});campoMob('telaCheiaMob').addEventListener('click',telaCheiaMob);
 document.addEventListener('keydown',function(e){if(e.key==='Escape')campoMob('paginaMobilidade').classList.remove('mob-fullscreen');});atualizarTelaMob();
});
