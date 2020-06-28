const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const years = document.getElementById('years');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});



function checkInputs() {
	
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const yearsValue = years.value.trim();
	const messageValue = message.value.trim();
	
	if(nameValue === ''){
        setErrorFor(name,'Obavezan unos' );
     }// else if(!(nameValue === ' ')){
    //     setErrorFor(name, 'Između imena i prezimena mora stajati razmak');}
      else if(nameValue.length < 5){
        setErrorFor(name, 'Ukucajte više od 5 karaktera');
    } 
    else {
        setSuccessFor(name);
    }
    
	
	if(emailValue === '' || emailValue.length > 50) {
        setErrorFor(email, 'Obavezan email, upisati manje od 50 karaktera');
	} else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Nije validan email (@,.com)');
	} else {
        setSuccessFor(email);
	}
	
	if(yearsValue === '' && yearsValue.length < 17) {
        setErrorFor(years, 'Upišite godine starosti koje moraju biti preko 18 godina ');
	} else {
        setSuccessFor(years);
	}
	
	if(messageValue === '') {
		setErrorFor(message, 'Upišite opis');
	} else if(messageValue.length > 100) {
        setErrorFor(message, 'Nije dozvoljeno preko 100 karaktera');
	} else{
        setSuccessFor(message);
	}
}

function setErrorFor(input, messages) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
    small.innerText = messages;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

document.getElementById("MyBtn").disabled = true;

function enableBtn(){
    
        document.getElementById("MyBtn").disabled = false;
        document.getElementById("MyBtn").style.backgroundColor = '#9b59b6';
    
    
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function enableBtnValue(){
//     if (!(document.getElementById("form").validity.valid)) {
//         document.getElementById("MyBtn").disabled = true;}
//         else {
//             EnableBtn();  
//         }
      
// }
