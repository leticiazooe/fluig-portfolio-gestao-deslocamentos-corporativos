/* Integração cambial. Configure um serviço REST no Fluig com código AWESOME_API_CAMBIO e URL base https://economia.awesomeapi.com.br. */
function createDataset(fields,constraints,sortFields){
 var ds=DatasetBuilder.newDataset(),cols=['moeda','compra','venda','maxima','minima','variacaoPct','dataHora','timestamp','fonte','status','mensagem'];
 for(var i=0;i<cols.length;i++)ds.addColumn(cols[i]);
 function add(v){ds.addRow(cols.map(function(k){return String(v[k]==null?'':v[k]);}));}
 try{
  var moeda='USD';
  for(var c=0;constraints&&c<constraints.length;c++)if(String(constraints[c].fieldName)==='moeda')moeda=String(constraints[c].initialValue||'USD').toUpperCase();
  if(moeda==='BRL'){add({moeda:'BRL',compra:'1',venda:'1',maxima:'1',minima:'1',variacaoPct:'0',dataHora:new Date().toISOString(),timestamp:String(new Date().getTime()),fonte:'Conversão interna',status:'ok'});return ds;}
  if(!/^[A-Z]{3}$/.test(moeda))throw new Error('Código de moeda inválido.');
  var client=fluigAPI.getAuthorizeClientService();
  var req={companyId:String(getValue('WKCompany')),serviceCode:'AWESOME_API_CAMBIO',endpoint:'/json/last/'+moeda+'-BRL',method:'get',timeoutService:'10'};
  var res=client.invoke(JSON.stringify(req));
  if(!res||!res.result)throw new Error('Resposta vazia do serviço de câmbio.');
  var body=JSON.parse(res.result),item=body[moeda+'BRL'];
  if(!item)throw new Error('Par '+moeda+'/BRL não retornado pela API.');
  add({moeda:moeda,compra:item.bid,venda:item.ask,maxima:item.high,minima:item.low,variacaoPct:item.pctChange,dataHora:item.create_date||'',timestamp:item.timestamp||'',fonte:'AwesomeAPI',status:'ok',mensagem:''});
 }catch(e){add({moeda:'',fonte:'AwesomeAPI',status:'erro',mensagem:String(e.message||e)});}
 return ds;
}
