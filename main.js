var writer = document.getElementById('writer');
var quote = document.getElementById('qoute');

var writerList =[
    'The best revenge is massive success. Frank Sinatra' ,
     '“So many books, so little time.”'
     ,'“A room without books is like a body without a soul.”'
     ,'“You only live once, but if you do it right, once is enough.”'
     ,'“In three words I can sum up everything I ve learned about life: it goes on.”'];
var qouteList =['Oscar Wilde','Frank Zappa','Marcus Tullius Cicero','Mae West',' Robert Frost'];

var index = 0;
function switchQuote(){
    writer.textContent = writerList[index];
    quote.textContent = qouteList[index];
    index += 1 ;
    if (index ===writerList.length){
        index = 0 ;
    }
}

