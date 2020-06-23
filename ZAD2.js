var arrayVar = new Array(100);
function testArr(arrayVar){
    var max=arrayVar[0];
    for(var i = 1; i < arrayVar.length; i++){
        var j=0;
        if(arrayVar[i] > max){
           max=arrayVar[i];
           j=i+1;
       }
    }
    alert("Maksimalan broj u ovom nizu je " + max + " i nalazi se na " + j + " poziciji"); 
    return; 
}