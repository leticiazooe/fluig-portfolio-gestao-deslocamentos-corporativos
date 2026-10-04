function displayFields(form,customHTML){
 var codigo=Number(getValue('WKNumState'))||0,modo=String(form.getFormMode())==='VIEW'?'VIEW':'EDIT';
 if(modo!=='VIEW'){
  if(!form.getValue('dataAbertura'))form.setValue('dataAbertura',MobilidadeServidor.hoje());
  var numero=String(getValue('WKNumProces')||'');form.setValue('numeroProcesso',numero==='0'?'':numero);
 }
 customHTML.append('<script>var MobilidadeContexto={atividade:'+codigo+',modo:"'+modo+'"};</script>');
}
