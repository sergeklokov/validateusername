// ================================================================
// I am trying to validate a username. I want to have a regex that,
// At least 4 characters long.
// Must contain only letters, numbers and an optional underscore
// It must not end with an underscore
// It must start with a letter
// ================================================================

Let's use ECMA script 
1st version with Regex
2nd version without


Output:

PS C:\..\validateusername> node validateUserName
"Se_rg" true
"Serg_" false
"Serge_Klokov" true
"Serge2" true
"undefined" false
"null" false
"Ser" false
"Serge__Klokov" false
"2Serge" false
