function spongeBobIt(phrase) {
    var output = ""
    for(var i = 0; i < phrase.length; i++) {
        if(i % 2 === 1) {
            output = output + phrase.charAt(i).toUpperCase();
        }
        else {
            output = output + phrase.charAt(i).toLowerCase();
        }
    }
    return output;
}

document.write(spongeBobIt(prompt("What phrase do you want to say","hello there")));

