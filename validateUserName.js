// ================================================================
// I am trying to validate a username. I want to have a regex that,
// 1. At least 4 characters long.
// 2. Must contain only letters, numbers and an optional underscore
// 3. It must not end with an underscore
// 4. It must start with a letter
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

function isNumeric(char){
    var c = String(char);

    var numbers = "0123456789".split("");

    return numbers.some((letter) => {
            return c === letter;
        });
}

function isAlphanumeric(char){
    return isAlphabetic(char) || isNumeric(char);
}

// let's don't use Regex
function validate_v2(username){
    if (username === undefined || username === null)
        return false;

    var s = String(username);
    if (s.length < 4)
        return false;

    var u = username.split("");
    var isUnderscorMet = false;
    for(i=0; i<u.length; i++){
        // check first character is alphabetical only
        if (i == 0){
            if (!isAlphabetic(u[i]))
                return false;
        }

        // middle is alphanumeric or underscore
        if (i > 0 && i < u.length - 1){
            if (!isAlphanumeric(u[i]) && u[i] != "_") 
                return false;

            // check for only one underscore
            if (u[i] == "_"){
                if (isUnderscorMet)
                    return false;
                else
                    isUnderscorMet = true;
            }
        }

        // last is only alphanumeric 
        if (i == u.length - 1 ){
            if (!isAlphanumeric(u[i]))
                return false;
        }
    }
        
    return true;
}


function test(name){
    console.log('"' + name + '" ' + validate_v2(name)); 
}

test('Se_rg');
test('Serg_');
test('Serge_Klokov');
test('Serge2');
test();
test(null);
test('Ser');
test('Serge__Klokov');
test('2Serge');
