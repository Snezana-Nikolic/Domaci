var arrayVar = new Array(30);
document.getElementById("sortArray").innerHTML = arrayVar;
function sortArr(arrayVar) {
    arrayVar.sort();
    document.getElementById("sortArray").innerHTML = arrayVar;
 }