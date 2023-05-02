function calculateAge() {
		let age = document.getElementById("age").value;
		let dogAge = age * 7;
  if(dogAge>=0){
		document.getElementById("result").innerHTML = `Your age in dog years is ${dogAge}.`;
  } else{
    document.getElementById("result").innerHTML = `Your Age is not valid`;
  }
	}

function myInput(e){
  if(e<0){
  alert("Please Enter Valid Age")
  }
}