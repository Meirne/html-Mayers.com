
function FuncExercise1() {
    let number1 = parseInt(prompt("please enter a positive number: "));
      let smallNum = (number1 => 0) && (number1 <= 100);
      let mediumNum = (number1 => 101) && (number1 <= 1000);
      const emet=true;
      let largeNum = (number1 => 1001) && (emet === true);
      if(isNaN(number1)){
          alert("Error: wrong data inserted, please use numbers only!")
      }
     else if (smallNum) {
    alert("Small");
} else if (mediumNum) { 
    alert("Medium");
} else if (largeNum) { 
    alert("Large");
}
}
function FuncExercise2() {
    const firstName = prompt("Please enter your first name: ");
      const surName = prompt("Please enter your surname: ");
      const okName= (isNaN(firstName)) && (isNaN(surName));
      if(okName){
          alert('Hello'+' '+firstName+' '+surName +' , '+'welcome back to the system !');  
      }
      else {
          alert("Error: Name must contain letters! ")
      }
      
  }
  function FuncExercise3() {
      const pass = prompt("Please enter your password  : ");
      const pass1= 'Mayers123';
      let truePass=(pass===pass1);
    if(truePass) {
    alert("Your identification was successfull!");
  }else
  alert("password is incorrect, there's a need for user identification!              [Caution: upper-case letters will not work the same as lower-case!!] ");
}
function FuncExercise4() {
  let ageNum = parseInt(prompt("Please enter your age [using numbers only] : "));
      let ageKid = (ageNum < 16);
      let ageTeen = (ageNum => 16) && (ageNum <= 18);
      let ageAdult = (ageNum > 18)&&(ageNum<=125) ;

      if (ageKid) {
    alert("entrance is not allowed for you!");
} else if (ageTeen) { 
    alert("You may enter, with parental permission only! ");
} else if (ageAdult) { 
    alert("You're most welcome to join! ");
}
else  { 
    alert("Error: please enter an acceptable age. ");
}
   }
   function FuncExercise5() {
     let numb1 = Number(prompt("please enter a number: "));
     let siman = prompt("please enter your chosen mathematical mark: + or - only!  ");
     let numb2 = Number(prompt("please enter a second number: "));
     let numPlus= numb1+numb2;
     let numMinus=numb1-numb2;
     const simanNotOK = (siman!='+')&&(siman!='-');
  
     if (siman==='+') {
    alert ('The answer is: '+ numPlus);
} else if (siman==='-') { 
    alert('The answer is: '+ numMinus);
} else if (simanNotOK) {
    alert("wrong data inserted, please follow the instructions");
}
}