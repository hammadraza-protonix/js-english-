let score = "33"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let marks = "13abc"

//yaha pe 13abc koi number nhi hai isliye iska type NaN not a number aayega 
//lekin ye number me convert ho jayega string se to using Number dhyan rahe capital N wala number se convert hoga string se number me 
//ek variable lena hai ar usko Number (jo naam hai ) wo karke kar dena hai 
//console.log(typeof marks);
let valueInMarks = Number(marks);
// console.log(valueInMarks);
// console.log(typeof (valueInMarks));

/* ab bete baat karte hain hum null ko le kar null ko number me convert karenge to 0 aayega okay
*/
let price = null 
//console.log(typeof null);
let valueInPrice = Number(price)
// console.log(valueInPrice);
// console.log(typeof valueInPrice);

//now ab dekh lete hain undefined ke liye to karte hain 
let value = undefined
// console.log(typeof undefined);
// console.log(value);
let ValueInvalue = Number (value);
// console.log(typeof ValueInvalue);
// console.log(ValueInvalue);

//now ab string ko bhi chnage karenge number me to bhi NaN hi aayega
let name = "tabish"
let valueInName = Number(name )
// console.log ( typeof valueInName);
// console.log(valueInName)

//ab boolean me karte hain consrsion to ya to tru aayega ya to false "" isme false aayega 1 me true aayega 0 me false aayega 

let isLoggedIn = 1 
let valueinisLoggedIn = Boolean ( isLoggedIn);
// console.log(valueinisLoggedIn);
// console.log( typeof valueinisLoggedIn);

let string = ("tabish" ,"2");
let valueInString = Boolean (string);
// console.log(typeof valueInString);
// console.log(valueInString)

// ****************************************operations**************************************************************//

let Value = 3 
let negValue = -Value
// console.log(negValue);

// console.log( 2+2 );
// console.log( 2-1 );
// console.log(2 * 1);
// console.log(2**10);
// console.log(2 / 4);
// console.log(2 % 3);

let str1 = "hello"
let str2 = " tabish"
let str3 = str1 + str2 
// console.log(str3);

// console.log( "1" + 2 );
// console.log( 2 + "1");
// console.log("1" + 2 + 2 );
// console.log( 1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

// console.log(true+); // ye error de dega//

let gameCounter = 100 
gameCounter++ // postfix increment * (++gameCounter => prefix increment )
// prefix increment not equals to postfix increment
console.log(gameCounter);







