// ================================================================
// I am trying to validate a username. I want to have a regex that,
// At least 4 characters long.
// Must contain only letters, numbers and an optional underscore
// It must not end with an underscore
// It must start with a letter
// ================================================================

function validate(username){
    if (username === undefined || username === null)
        return false;

    // https://stackoverflow.com/questions/60068785/regex-to-username-that-contains-alphanumeric-characters-and-at-most-one-undersco
    // return /^(?=.{4})[a-z\d]*_?[a-z\d]+$/i.test(username);

    // https://stackoverflow.com/questions/11431154/regular-expression-for-username-start-with-letter-and-end-with-letter-or-number
    // return /^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$/i.test(username);

    // my version: 
    return /^(?=.{4})[a-z]([_]?[a-z\d]+)*$/i.test(username);
}

function isAlphabetic(char){
    var c = String(char);

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return alphabet.some((letter) => {
            return c.toUpperCase() === letter;
        });
}

// let's don't use Regex
function validate_v2(username){
    if (username === undefined || username === null)
        return false;

    var s = String(username);
    if (s.length < 4)
        return false;

    var first = s.charAt(0);
    var isFirstAlphabeting = isAlphabetic(first);
    if (!isFirstAlphabeting)
        return false;
    
    return true;
}

console.log('Serge ' + validate_v2('Serge')); 

// console.log('undefind ' + validate_v2()); // invalid user name
// console.log('null ' + validate_v2(null)); // invalid user name
// console.log('Ser ' + validate_v2('Ser')); // invalid user name
// console.log('Serge_Klokov ' + validate_v2('Serge_Klokov')); // valid user name
// console.log('Serge__Klokov ' + validate_v2('Serge__Klokov')); 
// console.log('Serge Klokov ' + validate_v2('Serge Klokov')); // invalid user name
// console.log('Serge_Klokov1 ' + validate_v2('Serge_Klokov1')); 
// console.log('Serge_Klokov22 ' + validate_v2('Serge_Klokov22')); 
// console.log('Serge ' + validate_v2('Serge')); 
// console.log('3Serge ' + validate_v2('3Serge')); 
// console.log('Serge_ ' + validate_v2('Serge_')); 
// console.log('Ser.ge ' + validate_v2('Ser.ge')); 
// console.log('Ser-ge ' + validate_v2('Ser-ge')); 
// console.log('Serge+ ' + validate_v2('Serge+')); 
