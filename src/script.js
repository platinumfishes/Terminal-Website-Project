var commands = document.getElementById("commands");
var commandline = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");
 
function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>➤ The input is "${input}"</div>`; 
    terminal_outputs.innerHTML = `${terminal_outputs.innerHTML+output}`
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