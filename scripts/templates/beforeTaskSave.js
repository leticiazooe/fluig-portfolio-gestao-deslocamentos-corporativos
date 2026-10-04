function beforeTaskSave(colleagueId,nextSequenceId,userList){
 var codigo=Number(getValue('WKNumState'))||1100;
 // hAPI não fornece cartão persistido na abertura. validateForm cobre essa etapa.
 if(codigo===1100)return;
 try{var ctx=MobilidadeProcesso.contexto(),e=MobilidadeRegras.etapa(codigo,MobilidadeConfig);MobilidadeRegras.validar(codigo,ctx.dados,ctx.tabelas,MobilidadeConfig,MobilidadeServidor.hoje());var destino=MobilidadeRegras.proxima(codigo,ctx.dados,ctx.tabelas,MobilidadeConfig);if(Number(nextSequenceId)!==destino&&Number(nextSequenceId)!==e.gateway)throw new Error('Destino incompatível com a decisão e os controles desta etapa.');}catch(erro){throw String(erro.message||erro);}
}
