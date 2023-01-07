var commands = document.getElementById("commands");
var commandline = document.getElementById("user_input");



/* BUTTON OPTION BELOW

var temp_btn = document.getElementById("temp_btn") 

temp_btn.addEventListener("click", function(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = commandline.value;
    commands.appendChild(newCommand);  
    commandline.value = "";
});
*/

function execute(input){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = input;
    commands.appendChild(newCommand); 
}

function key(e){
    const input = user_input.value;

    if(e.key == "Enter"){
        execute(input);
        user_input.value = "";
        return;
    }
    else {
        user_input.innerHTML = input + e.key;
    }
}  

document.addEventListener("keypress", key);