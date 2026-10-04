/* Adaptadores compartilhados pelos eventos, gerados de fontes únicas. */
var MobilidadeServidor=(function(){
 function campos(){var vistos={},out=[];MobilidadeConfig.processo.etapas.forEach(function(e){e.campos.forEach(function(c){if(!vistos[c.nome]){vistos[c.nome]=true;out.push(c.nome);}});});return out.concat(MobilidadeConfig.automaticos);}
 function indicesForm(form,table){var origem=form.getChildrenIndexes(table),out=[];var n=typeof origem.length==='number'?origem.length:origem.size();for(var i=0;i<n;i++)out.push(String(typeof origem.get==='function'?origem.get(i):origem[i]));return out;}
 function ler(get,indices){var d={},t={};campos().forEach(function(k){d[k]=String(get(k)||'');});MobilidadeConfig.seguranca.itens.forEach(function(c){['inspecao_','retorno_'].forEach(function(pre){d[pre+c.codigo]=String(get(pre+c.codigo)||'');});});Object.keys(MobilidadeConfig.tabelas).forEach(function(k){var spec=MobilidadeConfig.tabelas[k];t[k]=indices(spec.nome,spec.campos[0]).map(function(i){var row={};spec.campos.forEach(function(c){row[c]=String(get(c+'___'+i)||'');});row.__indice=String(i);return row;});});return {dados:d,tabelas:t};}
 function atualizar(codigo,ctx,set){var d=ctx.dados,t=ctx.tabelas,e=MobilidadeRegras.etapa(codigo,MobilidadeConfig),dest=MobilidadeRegras.proxima(codigo,d,t,MobilidadeConfig);set('destinoMobilidade',String(dest));
   if([1100,1200,1300,1400,1500,1550,1600,1700].indexOf(e.codigo)>=0)set('cancelamentoAtivo',dest===2090?'sim':'');
   if([1400,1500,1550].indexOf(e.codigo)>=0)set('assinaturaPlanoAprovado',dest===1600?MobilidadeRegras.assinaturaPlano(d,t):'');
   if(e.codigo===1100||e.codigo===1810)set('assinaturaLiberacao','');
   if(e.codigo===1800)set('assinaturaLiberacao',d.situacaoLiberacaoVeiculo==='liberado'?MobilidadeRegras.assinatura(d,t):'');
   if(e.codigo===1810){MobilidadeConfig.seguranca.itens.forEach(function(c){set('inspecao_'+c.codigo,'');});set('situacaoLiberacaoVeiculo','');set('aceiteNormativo','');}
   if(e.codigo===1100&&d.acaoPlanejamento==='enviar')t.servicos.forEach(function(s){var n=MobilidadeRegras.validarServico(s,d,MobilidadeConfig);Object.keys(n).forEach(function(k){set(k+'___'+s.__indice,n[k]);});set('valorCotadoServico___'+s.__indice,'');set('referenciaCotacao___'+s.__indice,'');set('situacaoServico___'+s.__indice,'pendente');set('referenciaServico___'+s.__indice,'');});
   if(e.codigo===1930)MobilidadeConfig.seguranca.itens.forEach(function(c){set('retorno_'+c.codigo,d['retorno_'+c.codigo]);});
   if([1950,2000].indexOf(e.codigo)>=0){var a=MobilidadeRegras.acerto(d,t,MobilidadeConfig);Object.keys(a).forEach(function(k){set(k,a[k]);});}
   if(e.codigo===1900&&MobilidadeRegras.temVeiculo(d))set('distanciaPercorrida',String(Number(d.odometroRetorno)-Number(d.odometroSaida)));
   return dest;
 }
 function conferirDatasets(ctx){var d=ctx.dados,t=ctx.tabelas;function unica(nome,filtros){var cs=Object.keys(filtros).map(function(k){return DatasetFactory.createConstraint(k,filtros[k],filtros[k],ConstraintType.MUST);});var ds=DatasetFactory.getDataset(nome,null,cs,null);if(!ds||Number(ds.rowsCount)!==1)throw new Error('Referência não localizada no dataset '+nome+'.');}
  unica('dsMobilidadeClientes',{codigoClienteOrigem:d.codigoClienteOrigem});unica('dsMobilidadeAreas',{codigoClienteOrigem:d.codigoClienteOrigem,codigoAreaAdministrativa:d.codigoAreaAdministrativa});
  [d.identificadorSolicitante,d.identificadorBeneficiario].concat(t.participantes.map(function(p){return p.identificadorParticipante;})).forEach(function(id){unica('dsMobilidadePessoas',{codigoClienteOrigem:d.codigoClienteOrigem,identificadorColaborador:id});});
  if(MobilidadeRegras.temVeiculo(d)){unica('dsMobilidadeVeiculos',{codigoClienteOrigem:d.codigoClienteOrigem,codigoVeiculo:d.codigoVeiculo});unica('dsMobilidadeCondutores',{codigoClienteOrigem:d.codigoClienteOrigem,identificadorCondutor:d.identificadorCondutor});}
 }
 function hoje(){var x=new Date();return x.getFullYear()+'-'+('0'+(x.getMonth()+1)).slice(-2)+'-'+('0'+x.getDate()).slice(-2);}
 return {campos:campos,indicesForm:indicesForm,ler:ler,atualizar:atualizar,conferirDatasets:conferirDatasets,hoje:hoje};
})();
