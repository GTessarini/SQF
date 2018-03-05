 ![alt tag](https://github.com/GTessarini/SQF/blob/master/SQF_LOGO.jpg "SQF")

Simplified Query Functions to JavaScript

Lightweight JavaScript library (ultracompatible with browser support, old and new versions, and with many famous others libs) with great similarity with clauses and SQL commands that approach and simplify the human understanding turning lots of line of code in simple, literal and pratical words of command.

Functions for more easily dealing with actions related to searching, modifying, creating and manipulating in various ways the big (or even small) Arrays and JSON objects in Javascript dodging the browser version compatibility issues.

## _DATA DEFINITION FUNCTIONS:_

 - ### _Create_ JSON objects: 
#### sq.create("HOW", "MANY", "STRING", "ARGUMENTS", "TO", "DEFINE", "THE", "KEYS", "YOU" "WANT");
```javascript
 var users = sq.create("id", "firstName", "lastName", "email", "country", "state", "city", "faxNumber");
 // users: {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};   
```

 - ### _Alter_ the JSON object _Adding_ it a new key:
#### JSON_OBJECT = sq.alterAdd(JSON_OBJECT, "NEW_KEY");
```javascript
users = sq.alterAdd(users, "faxNumber");
// users: {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[], faxNumber:[]}; 
```

 - ### _Alter_ the JSON object _Dropping_ a specific owned key:
#### sq.alterDrop(JSON_OBJECT, "KEY_TO_BE_DROPPED");
```javascript
sq.alterDrop(users, "faxNumber");
// users: {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};
```

 - ### _Truncate_ the JSON object, removing all his data but keeping the structure and definitions:
#### sq.truncate(JSON_OBJECT);
```javascript
var dogs = {id:[1,2,3,4,5...9999], name:["A","B","C"..."ZZZZ"], blabla:[001,002...999], ...};
sq.truncate(dogs)
// dogs: {id:[], name:[], blabla:[], ...};
```

## _DATA MANIPULATION FUNCTIONS:_

 - ### _Insert_ data into JSON _objects/Arrays_: 
#### sq.insert(JSON_OBJECT/ARRAY_VALUES, VALUES_IN_ORDER_OF_YOUR_OBJECT_KEYS);
```javascript
sq.insert(users, 100, "John", "Doe", "e@email.com", "Brazil", "SP", "São Paulo");
// users: {id: [100], firstName: ["Joh"], lastName: ["Doe"], email: ["e@email.com"], country: ["Brazil"], state: ["SP"], city: ["São Paulo"]};

sq.insert(users, 200, "Joan", "Doe", "e2@email.com", "Brazil", "RJ", "Rio de Janeiro");
// users: {id: [100,200], firstName: ["John", "Joan"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo","Rio de Janeiro"]};
```   
```javascript
    var myArray=[], myArray2=[], myArray3=[];
    1.  sq.insert(myArray, 1,2,3,4,5,6,7,8,9,0,"A","B","C");
    2.  sq.insert(myArray2, [1,2,3,4,5,6,7,8,9,0,"A","B","C"]);
    3.  sq.insert(myArray3, [1,2,3,4,5,6,7,8,9,0],["A","B","C"]);
/*     1.  myArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C"];
       2.  myArray2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C"];
       3.  myArray3: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ["A", "B", "C"];   */
 ```
 - ### _Update_ data present in array of values:
#### sq.update(ARRAY_VALUES, VALUE_TO_BE_UPDATED, CHANGE_TO_BE_DONE);
```javascript
// users: {id: [100,200], firstName: ["John", "Joan"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo","Rio de Janeiro"]};
sq.update(users.lastName, "Joan", "Jannet");
// users: {id: [100,200], firstName: ["John", "Jannet"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo","Rio de Janeiro"]}; 
````

- ### _Delete_ data present in Array of values:
#### ARRAY_VALUES = sq.delet(ARRAY_VALUES, VALUE_TO_BE_DELETED);
```javascript
users.city = sq.delet(users.city, "Rio de Janeiro");
// users: {id: [100,200], firstName: ["John", "Jannet"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo"]}; 
var myArray = [1,2,3,4,5,6,7,"Ops"];
myArray = sq.delet(myArray, "Ops");
//myArray = [1,2,3,4,5,6,7];
````

## _DATA VALIDATION FUNCTIONS:_

- ### _Where_ condition is valid in a array of values, the data required or his position into the array is returned in the desired quantity when specified:
#### sq.where(ARRAY_VALUES, "CONDITION_OPERATOR", CONDITION_VALUE, [IS_THE_RESULT_POSITION], [QUANTITY])
When the condition is not valid inside he values, null is returned.

**Acceptable comparisions: "==","===","!=","!==",">",<",">=","<=","isNull","isNotNull","isEven","isOdd","typeof","instanceof".**
```javascript
var myArray = [1,2,3,4,5,6,7,8,9,10, true, "true", false, null, "Jonathan"];
  1.  sq.where(myArray, ">", 5);            //Values that are all greater than 5
  2.  sq.where(myArray, ">", 5, true);      //Position (index) of all values greater than 5
  3.  sq.where(myArray, ">", 5, true, 2);   //Position (index) of just 2 values greater than 5
  4.  sq.where(myArray, "!==", "true");     //Values that are all different in value and type from the String "true";
  5.  sq.where(myArray, "===", null, true, 9999);  //Position (index) of no later than 9999 values that are equal to null;
  6.  sq.where(myArray, "===", "Jonathan", true);  //Position (index) of the value that is equal to "Jonathan" (in value and type) 
                   
/*     1.  [6, 7, 8, 9, 10];
       2.  [5, 6, 7, 8, 9];
       3.  [5, 6];
       4.  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false, null, "Jonathan"];
       5.  13;
       6.  14;    */
````
- ### _Difference_ between two arrays (in length or in values):
#### sq.difference(ARRAY_VALUES_1, ARRAY_VALUES_2, [IS_IN_LENGTH]);
```javascript
var myArray = [1, 2, 3, 4, 5, "A", "B", "C"], myArray2 = [1,2, 3, "A", "B", "C", "D"];
sq.difference(myArray, myArray2);
// --> [4, 5, "D"]
var myArray = [1, 2, 3, 4, 5], myArray2 = [1, 2, 3];
sq.difference(myArray, myArray2, true);
// --> 2;
````
 - ### _Is Unique_ value among all others inside array (without repetition):
#### sq.isUnique(VALUE, ARRAY_VALUES);
```javascript
var myArray = [1, 2, 2, 3, 4, 5];
1.  sq.isUnique(2, myArray);
2.  sq.isUnique(3, myArray);
/*     1.   false;
       2.   true;   */
````
 - ### _Is Null_ value:
#### sq.isNull(VALUE);
```javascript
var myArray = [1, 2, null, "null", 5];
1.  sq.isNull(myArray[0]);
2.  sq.isNull(myArray[1]);
3.  sq.isNull(myArray[2]);
4.  sq.isNull(myArray[3]);
/*     1.  false;
       2.  false;
       3.  true;
       4.  false;    */
````      
 - ### _Is Not Null_ value:
#### sq.isNotNull(VALUE);
```javascript
var myArray = [1, 2, null, "null", 5];
1.  sq.isNotNull(myArray[0]);
2.  sq.isNotNull(myArray[1]);
3.  sq.isNotNull(myArray[2]);
4.  sq.isNotNull(myArray[3]);
/*     1.  true;
       2.  true;
       3.  false;
       4.  true;    */
````
 - ### _Is Even_ value:
#### sq.isEven(VALUE);
```javascript
1.  sq.isEven(3);
2.  sq.isEven(10);
/*    1.   false;
      2.   true;    */
````
      
 - ### _Is Odd_ value:
#### sq.isOdd(VALUE);
```javascript
1.  sq.isOdd(3);
2.  sq.isOdd(10);
/*    1.   true;
      2.   false;    */
````
## _DATA CONVERSION FUNCTIONS:_

- ### _Null To_ specific value:
#### sq.nullTo(ARRAY_WITH_NULL_VALUES, CONVERSION_VALUE);
#### ARRAY_INDEX_WITH_NULL_VALUE = sq.nullTo(ARRAY_INDEX_WITH_NULL_VALUE, CONVERSION_VALUE);
```javascript
var myArray = [1, 2, null, null, 4, 5], myArrayTwo = [1, 2, null, null, 5, 6]
1.  sq.nullTo(myArray, 3);
2.  myArrayTwo[2] = sq.nullTo(myArrayTwo[2], 3);
3.  myArrayTwo[3] = sq.nullTo(myArrayTwo[3], 4);
/*     1.  myArray: [1, 2, 3, 3, 4, 5];
       2.  myArrayTwo: [1, 2, 3, null, 5, 6];
       3.  myArrayTwo: [1, 2, 3, 4, 5, 6];    */
````
## _DATA MATHEMATICAL FUNCTIONS:_

 - #### var minValue = sq.min(ARRAY_VALUES);
 - #### var maxValue = sq.max(ARRAY_VALUES);
 - #### var sumValues = sq.sum(ARRAY_VALUES);
 - #### var prdctValues = sq.multiply(ARRAY_VALUES);
 - #### var variancValues = sq.variance(ARRAY_VALUES);
 - #### var deviationValues = sq.devation(ARRAY_VALUES);


- ### _-- REPEAT FUNCTION TO SIMPLIFY THE CODING OF LOOPS --_
#### sq.repeat(FUNCTION, NUMBER_OF_TIMES);
```javascript
var myArray = [];
1.  sq.repeat(function(){sq.insert(myArray, 1, 2, 3);}, 3);
2.  sq.repeat(function(){alert("SQF IS AWESOME!");}, 3);
/* --> [1, 2, 3, 1, 2, 3, 1, 2, 3];
     ** TRY IT YOURSELF AND ENJOY **   
*/
````
/**Gabriel Tessarini**/
