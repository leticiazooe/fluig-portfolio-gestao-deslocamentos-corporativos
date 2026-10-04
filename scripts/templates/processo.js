/* Adaptador autocontido para leitura e validação do cartão nos eventos. */
var MobilidadeProcesso=(function(){
 function contexto(){var mapa=hAPI.getCardData(Number(getValue('WKNumProces'))),keys=[],it=mapa.keySet().iterator();while(it.hasNext())keys.push(String(it.next()));
  return MobilidadeServidor.ler(function(k){return mapa.get(k);},function(table,first){var re=new RegExp('^'+first+'___(\\d+)$');return keys.filter(function(k){return re.test(k);}).map(function(k){return k.split('___')[1];}).sort(function(a,b){return Number(a)-Number(b);});});
 }
 function podeSeguir(origem,destino){var ctx=contexto();return MobilidadeRegras.proxima(Number(origem),ctx.dados,ctx.tabelas,MobilidadeConfig)===Number(destino);}
 return {contexto:contexto,podeSeguir:podeSeguir};
})();
