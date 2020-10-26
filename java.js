
// kreirati niz studenata
// -sortirati ih po index-u
// -napraviti funkciju za filtriranje po gordini studiranja
// -obrisati najstarijeg studenta
// -dodati novog studenta
var student = [  
    {id: 1, ime: "Slavko", prezime: "Mirkovic", indeks: 45, godinaStudiranja: "prva", godinaRodjenja : 2002},
    {id: 2, ime: "Marko", prezime: "Markovic", indeks: 33, godinaStudiranja:  "prva", godinaRodjenja : 2002},
    {id: 2, ime: "Marko", prezime: "Markovic", indeks: 55, godinaStudiranja:  "druga", godinaRodjenja: 2001},
    {id: 2, ime: "Marko", prezime: "Markovic", indeks: 68, godinaStudiranja:  "druga", godinaRodjenja: 2001},
    {id: 2, ime: "Marko", prezime: "Markovic", indeks: 88, godinaStudiranja:  "prva", godinaRodjenja : 2002},
    {id: 2, ime: "Marko", prezime: "Markovic", indeks: 72, godinaStudiranja:  "cetvrta", godinaRodjenja: 1998},
    {id: 2, ime: "Marko", prezime: "Markovic", indeks: 67, godinaStudiranja:  "prva", godinaRodjenja : 2002},
    {id: 2, ime: "Marko", prezime: "Markovic", indeks: 41, godinaStudiranja:  "cetvrta",godinaRodjenja: 1998},
    {id: 3, ime: "Milica", prezime: "Perovic", indeks: 11, godinaStudiranja:  "treca", godinaRodjenja: 1999}
    
];


//ispis
var s = student.length;
var text = "<ol>";

for (var i = 0; i < s; i++) {
        
     text += "<li>" + "ID: " + student[i].id + " " + student[i].ime +" "+ student[i].prezime + ", broj indeksa: " + student[i].indeks + 
     ",  godina studiranja: " + student[i].godinaStudiranja + ", godina rođenja: " + student[i].godinaRodjenja + "</li>";

}
text += "</ol>";
document.write(text);


//sort

const sortedStudents= student.sort((a,b) => (a.indeks > b.indeks ? 1 : -1));
console.log(sortedStudents);


//filter

const studentFilter = student.filter(function(godSt){
    if(godSt.godinaStudiranja === 'prva'){
        return true;
    }
});
console.log(studentFilter);

// delete

for (var i = 0; i < s; i++) {
    if(student[i].godinaRodjenja === 1998){
        delete student[i];
    }
}
console.log(student);

// dodavanje

const newStudent = Object.create(student, {
    id: { value: '22'},
    ime: { value: "Hajdana"}, 
    prezime: {value: "Mirkovic"}, 
    indeks: {value: 11},
    godinaStudiranja: { value: "prva"},
    godinaRodjenja : {value: 2002}
});
console.log(newStudent);
