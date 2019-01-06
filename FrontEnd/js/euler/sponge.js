var spongeInput = document.querySelector("#tainput");
var spongeOutput = document.querySelector("#taoutput");
var spongeButton = document.querySelector("#spongeButton");

spongeButton.addEventListener("click",flipReverseItProper);

function flipReverseItProper(){
    var phrase = spongeInput.value;
    var output = "";
    var upperLower = false;
    
    for(var i = 0; i < phrase.length; i++) {
        // check if it should do the thing
        if(isLetter(i)){

            // the if formula that does the thing
            if(upperLower) {
                output = output + phrase.charAt(i).toUpperCase();
            }
            else {
                output = output + phrase.charAt(i).toLowerCase();
            }
            upperLower = !upperLower;
        }
        else {
            output+= "tits";
        }

    }
    spongeOutput.value = output;
};

function isLetter(str) {
    nowString = toString(str);
    if(nowString.match(/[a-z]/)){
        return true;
    }
    else{
        return false;
    };
  };


function flipReverseIt(){
    var phrase = spongeInput.value;
    var output = "";
    for(var i = 0; i < phrase.length; i++) {
        if(i % 2 === 1) {
            output = output + phrase.charAt(i).toUpperCase();
        }
        else {
            output = output + phrase.charAt(i).toLowerCase();
        }
    }
    spongeOutput.value = output;
};
