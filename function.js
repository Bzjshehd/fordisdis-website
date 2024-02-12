

let button = document.getElementById("btn");
let mssg = document.getElementById("mssg");
let input = document.getElementById("input");

let code1 = "04/28/22";
let code2 = "042822";
let code3 = "Code: 04/28/22";
let code4 = "04 28 22";

button.onclick = function() {
document.getElementById("enter").play();
    
    if(input.value == code1){
        window.location.assign("warning.html");
    }
    else if(input.value == code2){
        window.location.assign("warning.html");
    }
    else if(input.value == code3){
        window.location.assign("warning.html");
    }
    else if(input.value == code4){
        window.location.assign("warning.html");
    }
    
    else if(input.value == ""){
        mssg.textContent = "Pagbutang Code!🤧"
        document.getElementById("wrong").play();
    }
    else{
        mssg.textContent = "Mali An Code!😒";
        document.getElementById("wrong").play();
    }
}
