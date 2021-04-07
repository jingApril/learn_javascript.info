// 1. If with multiple conditions

// longhand
if (x === 'abc' || x == 'def' || x === 'ghi' || x === 'jkl') {

	// some code
}

// shorthand
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
	// some code
}

// 2. if true ... else shorthand

// longhand
var test= boolean;

if (x > 100) {
	test = true;
} else {
	test = false
}

// Shorthand
var test = (x >10) ? true : false;

console.log(test)

var x = 300
test2 = (x > 100) ? 'greater than 100' : (x < 50) ? 'less 50' : 'between 50 and 100';

console.log(test2); // 'greater than 100'

// 3. Declaring variables

//Longhand
let test1 = 1;
let test2 = 2;

//Shortahdn
let test1,test2 = 1;

//Longhand 
let test1: boolean;
let test2: boolean;
//Shorthand
let test1, test2: boolean

// 4.Null, Undefined, Empty Checks
// Longhand 
if( test1 !== null || test1 !== undefined  || test1 !== '' ) {
	var test2 = test1
}
// Shorthand
var test2 = test1 || ''

// 5.Null Value checks and Assigning Default Value
var test1 = null,
    test2 = test1 || '';
console.log(test2); // output: ''

// 6. Undefined Value checks and Assigning Default Value
var test1 = undefined,
	test2 = test1 || '';

console.log(test2); // output: ''


var test1 = 'test',
   	test2 = test1 || '';
console.log(test2); // outpust: 'test'

// 7. Assigning values to multiple variables

// Longahand
let test1, test2, test3;
test1 = 1;
test2 = 2;
test3 = 3;

//Shorthand 
let [test1, test2, test3] = [1, 2, 3];

// 8. Assigning Operators Shorthand
// Longhand
test1 = test1 + 1;
test2 = test2 - 1;
test3 = test3 * 10;

// Shorthand
test1++;
test2--
test3*= 10;


// 9.if Presence Shorthand
// Longhand
if(test1=== true)

// Shorthand
if(test1)

// opposite conditions

var test1;
if(test1 !== true) {
	// do something
}
// Shorthand

if(!test1) {
	// do something
}

// 10. AND(&&) Operator for multiple conditions
//Longhand
if(test1) {
	callMethod();
}
// Shorthand 
test1 && callMethod();

// 11. foreach Loop Shorthand
// Longhand
for(var i = 0; i < testData.length; i++)
// Shorthand
for(var i in testData)

funtion testData(element, index, array) {
	console.log('test[' + index + '] = ' + element);
}
[1, 2, 3].foreach(testData);
// output: test[0] = 1, test[1] = 2, test[2] =3


// 12. Comparison Returns
// Longhand
if ( !(test == undefined)) {
	return test;
} else  {
	return callMe('test');
}
// Shorthand
return ret || callMe('test');


// 13. Arrow funtion
// Longhand
function add(a1, a2) {
	return a1 + a2;
}
// Shorthand
const add = (a1, a2) => a1 + a2;

// Longhand
function callMe(name) {
	console.log('Hello', name);
}
// Shorthand
callMe = name => console.log('Hello', name);


// 14.Short Function Calling
// Longhand
function test1() {
	console.log('test1')
}
function test2() {
	console.log('test2')
}

var test3 = 1;
if(test3 == 1) {
	test1()
} else {
	test2()
}

// Shorthand
(test3 === 1 ? test1:test2)();

// 15. Switch Shorthands
// Longhand
switch(data) {
	case 1:
	 test1();
	break;

	case 2:
	 test2();
	break; 

	case 3:
	  test3();
	 break;
}

// Shorthand
data[test1]  && data[test1]()


// 16. Implicit Return Shorthand
// Longhand
funtion calcCircumference(diameter) {
	return Math.PI * diameter
}

//Shorthand
calcCircumference = diameter => (
	Math.PI * diameter
)

// 17.Decimal base exponents
// Longhand
for (var i = 0; i < 10000; i++) {
	// do somehting
}
// Shorthand
for(var i = 0; i <1e4; i++) {
	// do something
}

// 18.Default Parameter values
// Longhand
function add(test1, test2) {
	if (test1 === undefined) {
		test1 = 1;
	}

	if(test2 === undefined) {
		test2 = 2;
	}

	return test1 + test2;
}

// Shorthand
add = (test1 = 1, test2 = 2) => (test1 + test2);
add() // output: 3

// 19. Spread Operator Shorthand
//Longhand
const data = [1, 2, 3];
const test = [4, 5, 6].concat(data);

// Shorthand
const data = [1, 2, 3];
const test = [4, 5, 6, ...data]

// longhand
// cloning arrays
const test1 = [1, 2, 3];
const test2 = test1.slice()

// shorthand
// cloning arrays
const test1 = [1, 2, 3]
const test2 = [...test1];

// 20.Template Literals
// longhand
const welcome = 'Hi ' + test1 + '' + test2 + '.'
// shorthand
const welcome = `Hi ${test1} ${test2}`;

// 21.Multi-line String Shorthand

//longhand
const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t'
    + 'adipisicing elit, sed do eiusmod tempor incididunt\n\t'
    + 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
    + 'veniam, quis nostrud exercitation ullamco laboris\n\t'
    + 'nisi ut aliquip ex ea commodo consequat. Duis aute\n\t'
    + 'irure dolor in reprehenderit in voluptate velit esse.\n\t'
//shorthand
const lorem = `Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse.`

// 22. Object Property Assignment
let test1 = 'a';
let test1 = 'b';

// longhand
let obj = { test1: test1, test2: test2};
// shorthand
let obj =  { test1, test2}

// 23. String into a Number
// Longhand
let test1 = parseInt('123');
let test2 = parsetFloat('12.3');

// Shorthand
let test1 = +'123';
let test2 = +'12.3';

// 24. Destructuring Assignment Shorthand

//longhand
const test1 = this.data.test1;
const test2 = this.data.test2;
const test3 = this.data.test3;

// shorthand
const { test1, test2, test3} = this.data;

// 25. Array.find Shorthand
const data = [{
		type: 'test1',
		name: 'abc'
    },
    {
		type: 'test2',
		name: 'cde'
    },
    {
		type: 'test3',
		name: 'fgh'
    }]

    function findtest1(name) {
    	for (let i = 0; i < data.length; ++i) {
	    	if(data[i].type === 'test1' && data[i].name === name) {
	    		return   data[i]
	    	}
    	}
    }
  // Shorthand
  filteredData = data.find(data => data.type == 'test1' && data.name === 'fgh');
  console.log(filteredData); // {type: 'test1', name: 'fgh'}


// Lookup Conditions Shorthand
// longhand 
if( type === 'test1') {
	test1();
} else if (type === 'test2') {
	test2()
} else if( type === 'test3') {
	test3()
} else if( type === 'test4') {
 	test4()
} else {
	throw new Error('Invalid value ' + type);
}

// Shorthand
var types = {
	test1: test1,
	test2: test2,
	test3: test3,
	test4: test4
}
var func = types[type];
(!func) && throw new Error('Invalid value' + type);
func()

// 27.Bitwise indexOf Shorthand
// longhand
if(arr.indexOf(item) > -1) {
	// item found
}

if (arr.indexOf(item) === -1) {
	// item not found
}
// Shorthand
if(~arr.indexOf(item)) {
	// item found 
}

if( arr.includes(item)) {
	// true if the item found
}

// 28.Object.entries()
const data = { test1: 'abc', test2: 'cde', test3: 'efg'};
const arr = Object.entries(data);
console.log(arr);

/** Output: 
[ 
	['test1', 'abc'],
	['test2', 'cde'],
	['test3', 'efg'],
]
**/

// 29.Object.values()
const data = { tes1: 'abc', test2: 'cde'};
const arr = Object.values(data);
console.log(arr);

// Output: ['abc', 'cde']


// 30. Double Bitwise Shorthand
// longhand
Math.floor(1.9) === 1 // true 
// Shorthand 
~~1.9=== 1 // true

// 31.Repeat a string multiple times
// longhand
let test = '';
for( let i = 0; i < 5; i ++ ) {
	test += 'test'
}
console.log(str);// test test test test test
// shorthand
'test '.repeat(5);

// 32. Find max and min. number in the array
const arr = [1, 2, 3]
Math.max(...arr); // 3
Math.min(...arr); // 1

// 33. Get character from string
let str = 'abc';
//Longhand
str.charAt(2); // c
// Shorthhand
str[2]; // c

// 34.Power Shorthand
// longhand
Math.pow(2, 3); // 8

// shorthand
2 ** 3 // 8


