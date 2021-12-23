// Below are the variables.
var generateBtn = document.querySelector("#generate");
var charNum = "1234567890";
var charLow = "abcdefghijklmnopqrstuvwxyz" ;
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSpecial = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
var passwordLength;
var numInspect;
var specialInspect;
var upInspect;

// This function will assist in determining the length of the password.
function determineLength() {
    passwordLength = prompt("How many characters would you like your password to be? It must have between 8 and 128.): ");

if (passwordLength<8) {
alert("Password must be between 8-128 characters in length.");
determineLength();
}
else if (passwordLength>128){
    alert(" Password length must not exceed 128 characters in length.");
    determineLength();
}
else if (isNaN(passwordLength)){
    alert("Password must have between 8 and 128 characters.");
    determineLength(); 
}else{
    alert("answer Y for yes and N for no the the follow screens.\n If you choose no for all you will receive a password with all lowercase letters.");
}
return passwordLength;
}

// This function will help to determine if the consumer would like numbers in their password.
function numberOption(){
    numInspect = prompt("Would you like to include numbers in you password? \n (Yes or No)");
    numInspect = numInspect.toLowerCase();
    
    if (numInspect === null || numInspect === ""){
        alert("Please answer Yes or No");
        numberOption();
    
        }else if (numInspect === "yes" || numInspect === "y"){
            numInspect = true;
            return numInspect;
    
        }else if (numInspect === "no" || numInspect === "n"){
        numInspect = false; 
        return numInspect;
    
    }else {
        alert("Please answer Yes or No");
        numberOption();
    }
    return numInspect;
    }

// This function will help to determine if the consumer would like uppercase letters in their password.    
function uppercaseOption(){
    upInspect = prompt("Would you like to include uppercase letters in your password \n (Yes or No)?");
    upInspect =upInspect.toLowerCase();

if (upInspect === null || upInspect ===""){
    alert("Please answer Yes or No.");
    uppercaseOption();

}else if (upInspect === "yes" || upInspect === "y"){
    upInspect = true;
    return upInspect;

}else if (upInspect === "no" || upInspect === "y"){
upInspect = false;
return upInspect;

}else {
alert("Please answer Yes or No.");
uppercaseOption();
}
return upInspect;
}

// This function will help to determine if the consumer would like Special characters in their password.
function specialOption(){
    specialInspect = prompt("Would you like to include numbers in you password? \n (Yes or No)");
    specialInspect = specialInspect.toLowerCase();

    if (specialInspect === null || specialInspect === ""){
        alert("Please answer Yes or No");
        specialOption();

        }else if (specialInspect === "yes" || specialInspect === "y"){
            specialInspect = true;
            return specialInspect;

        }else if (specialInspect === "no" || specialInspect === "n"){
        specialInspect =false;
        return specialInspect;

    }else {
        alert("Please answer Yes or No");
        specialOption();
    }
return specialInspect;
}

