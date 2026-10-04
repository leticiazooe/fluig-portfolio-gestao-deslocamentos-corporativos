function enableFields(form){
 var codigo=Number(getValue('WKNumState'))||1100,consulta=String(form.getFormMode())==='VIEW',e;
 try{e=MobilidadeRegras.etapa(codigo,MobilidadeConfig);}catch(erro){consulta=true;}
 form.setEnhancedSecurityHiddenInputs(true);
 MobilidadeServidor.campos().forEach(function(k){form.setEnabled(k,false);});
 if(!consulta&&codigo===1810){form.setEnabled('situacaoLiberacaoVeiculo',true);form.setEnabled('aceiteNormativo',true);}
 if(!consulta){e.campos.forEach(function(c){form.setEnabled(c.nome,true);});['destinoMobilidade','responsavelUltimaAcao','dataUltimaAcao'].forEach(function(k){form.setEnabled(k,true);});}
 var auto={dataAbertura:[1100],numeroProcesso:[1100],cancelamentoAtivo:[1100,1200,1300,1400,1500,1550,1600,1700],assinaturaPlanoAprovado:[1400,1500,1550],assinaturaLiberacao:[1100,1800,1810],distanciaPercorrida:[1900],despesasColaboradorCentavosBRL:[1950,2000],despesasEmpresaCentavosBRL:[1950,2000],adiantamentoCentavosBRL:[1950,2000],reembolsoCentavosBRL:[1950,2000],devolucaoCentavosBRL:[1950,2000]};
 Object.keys(auto).forEach(function(k){var permitida=!consulta&&auto[k].indexOf(codigo)>=0;if(k==='dataAbertura'&&form.getValue(k)&&String(form.getFormMode())!=='ADD'&&Number(getValue('WKNumState'))!==0)permitida=false;form.setEnabled(k,permitida);});
 MobilidadeConfig.seguranca.itens.forEach(function(c){form.setEnabled('inspecao_'+c.codigo,!consulta&&[1800,1810].indexOf(codigo)>=0);form.setEnabled('retorno_'+c.codigo,!consulta&&[1900,1930].indexOf(codigo)>=0);});
 Object.keys(MobilidadeConfig.tabelas).forEach(function(key){var s=MobilidadeConfig.tabelas[key],indices=MobilidadeServidor.indicesForm(form,s.nome);indices.forEach(function(i){s.campos.forEach(function(c){var habilitado=!consulta&&s.etapasEdicao.indexOf(codigo)>=0;if(key==='servicos'&&codigo!==1100){habilitado=!consulta&&(codigo===1300&&['valorCotadoServico','referenciaCotacao'].indexOf(c)>=0||[1600,2090].indexOf(codigo)>=0&&['situacaoServico','referenciaServico'].indexOf(c)>=0);}form.setEnabled(c+'___'+i,habilitado);});});});
}
