function validateForm(form){
 if(String(form.getFormMode())==='VIEW')return;
 var codigo=Number(getValue('WKNumState'))||1100;
 var ctx=MobilidadeServidor.ler(function(k){return form.getValue(k);},function(table){return MobilidadeServidor.indicesForm(form,table);});
 try{
  MobilidadeRegras.validar(codigo,ctx.dados,ctx.tabelas,MobilidadeConfig,MobilidadeServidor.hoje());
  if(codigo===1100&&ctx.dados.acaoPlanejamento==='enviar'||[1800,1810,1850].indexOf(codigo)>=0)MobilidadeServidor.conferirDatasets(ctx);
  MobilidadeServidor.atualizar(codigo,ctx,function(k,v){form.setValue(k,String(v));});
  form.setValue('responsavelUltimaAcao',String(fluigAPI.getUserService().getCurrent().getFullName()));form.setValue('dataUltimaAcao',String(new Date().getTime()));
  if(codigo===1100){if(String(form.getFormMode())==='ADD'||Number(getValue('WKNumState'))===0||!form.getValue('dataAbertura'))form.setValue('dataAbertura',MobilidadeServidor.hoje());var n=String(getValue('WKNumProces')||'');form.setValue('numeroProcesso',n==='0'?'':n);}
 }catch(erro){throw String(erro.message||erro);}
}
