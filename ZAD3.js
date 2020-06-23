var stringVar = new String(100);
function ObrnutiIspis(recenica){
    var obrnuto = "";
    for (i = recenica.length - 1; i>=0; i--)
        obrnuto+=recenica.substring(i,i+1);
    return obrnuto;
    }