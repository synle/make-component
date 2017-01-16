function _prompt(strPrompt, resolve){
    console.log(strPrompt);

    var stdin = process.openStdin();

    stdin.addListener("data", function(d) {
        // note:  d is an object, and when converted to a string it will
        // end with a linefeed.  so we (rather crudely) account for that
        // with toString() and then trim()

        var userInput = d.toString().trim();
        if(userInput.length > 0){
            console.log("You entered: [" + userInput + "]");
            resolve(userInput);
        } else {
            console.log("Invalid Value, please enter non-empty value");
            // re-prompt
            console.log(strPrompt);
            process.openStdin();
            // _prompt(strPrompt, resolve);
        }

      });
}

module.exports = function(strPrompt){
    return new Promise(function(resolve){
        return _prompt(strPrompt, resolve);
    });
}
