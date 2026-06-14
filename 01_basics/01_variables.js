const accountId = 144553 
let accountEmail = "mdhammadraza06@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2 // kyuki phle hi humne const declare kiya hua hai isliye ye hi hoga smjhe na const declare ke baad change nhi hoga isiye jab ise bina comment ke kiye to run hi nhi hua 

accountEmail = "tr@gmail.com"
accountPassword = "54321"
accountCity = "hyderabad"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity])

