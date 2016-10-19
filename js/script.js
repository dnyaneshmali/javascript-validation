
// Contact Form Validation

function validateform(){
	var letters = /^[A-Za-z]+$/; 
	var emailexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var numberexp = /^[0-9]+$/
	var name = document.myform.fname.value;
	var email = document.myform.email.value;
	var number = document.myform.number.value;
	var subject = document.myform.subject.value;
	var message = document.myform.message.value;
	

		if(name == null || name == ""){
		 document.getElementById('errormsg').innerHTML = 'Name should Not be blank';   
		}
	 
		else if(!(name.match(letters))){
		document.getElementById('errormsg').innerHTML = 'Name should have only characters';
		
		}
		else{
			document.getElementById('errormsg').style.display = 'none';
		}
		if(email == null || email == ""){
		document.getElementById('emailerrormsg').innerHTML = 'Email should not be blank';		
		}
		else if(!emailexp.test(email)){
		document.getElementById('emailerrormsg').innerHTML = 'Enter Valid Email';
		}
		else{
			document.getElementById('emailerrormsg').style.display = 'none';
		}
		if(number == null || number == ""){
		document.getElementById('numbererrormsg').innerHTML = 'Number should not be blank';		
		}
		else if(!numberexp.test(number)){
		document.getElementById('numbererrormsg').innerHTML = 'Enter Valid Mobile Number';
		}
		else{
			document.getElementById('numbererrormsg').style.display = 'none';
		}
		if(subject == null || subject == ""){
		document.getElementById('suberrormsg').innerHTML = 'Subject Should not be blank';		
		}
		else if(!(subject.match(letters))){
		document.getElementById('suberrormsg').innerHTML = 'Subject Should have only characters';		
		}
		else{
			document.getElementById('suberrormsg').style.display = 'none';
		}
		if(message.length>20){
		document.getElementById('msgerrormsg').innerHTML = 'Limit 20 characters';		
		}
		else{
			document.getElementById('msgerrormsg').style.display = 'none';
		}
		return false;
}





