![alt tag](https://github.com/GTessarini/SQF/blob/master/SQF_LOGO.jpg "SQF")

Simplified Query Functions to JavaScript

Lightweight JavaScript library (ultracompatible with many famous others) with great similarity with clauses and SQL commands that approach and simplify the human understanding turning lots of line of code in simple, literal and pratical words of command.

Functions for more easily dealing with actions related to searching, modifying, creating and manipulating in various ways the big (or even small) Arrays and JSON objects in Javascript.

## _DATA DEFINITION FUNCTIONS:_

### _Create_ JSON objects: 
#### sQ.create("HOW", "MANY", "STRING", "ARGUMENTS", "TO", "DEFINE", "THE", "KEYS", "YOU" "WANT");
--> var users = sQ.create("id", "firstName", "lastName", "email", "country", "state", "city", "faxNumber");
----> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};     

### _Alter_ the JSON object _Adding_ it a new key:
#### JSON_OBJECT = sQ.alterAdd(JSON_OBJECT, "NEW_KEY");
--> users = sQ.alterAdd(users, "faxNumber");
----> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[], faxNumber:[]};     

### _Alter_ the JSON object _Dropping_ a specific owned key:
#### sQ.alterDrop(JSON_OBJECT, "KEY_TO_BE_DROPPED");
--> sQ.alterDrop(users, "faxNumber");
----> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};

### _Truncate_ the JSON object, removing all his data but keeping the structure and definitions:
#### sQ.truncate(JSON_OBJECT);
--> var dogs ={id:[1,2,3,4,5...9999], name:["A","B","C"..."ZZZZ"], blabla:[001,002...999], ...};
    sQ.truncate(dogs)
---->  dogs => {id:[], name:[], blabla:[], ...};

## _DATA MANIPULATION FUNCTIONS:_

### _Insert_ data into JSON _objects/Arrays_: 
#### sQ.insert(JSON_OBJECT/ARRAY_VALUES, VALUES_IN_ORDER_OF_YOUR_OBJECT_KEYS);
--> sQ.insert(users, 100, "John", "Doe", "e@email.com", "Brazil", "SP", "São Paulo");
----> users => {id: [100], firstName: ["Joh"], lastName: ["Doe"], email: ["e@email.com"], country: ["Brazil"], state: ["SP"], city: ["São Paulo"]};

--> sQ.insert(users, 200, "Joan", "Doe", "e2@email.com", "Brazil", "RDj", "Rio de Janeiro");
----> users => {id: [100,200], firstName: ["John", "Joan"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo","Rio de Janeiro"]};
       
--> var myArray=[], myArray2=[], myArray3=[];
    1.  sQ.insert(myArray, 1,2,3,4,5,6,7,8,9,0,"A","B","C");
    2.  sQ.insert(myArray2, [1,2,3,4,5,6,7,8,9,0,"A","B","C"]);
    3.  sQ.insert(myArray3, [1,2,3,4,5,6,7,8,9,0],["A","B","C"]);
---->  1.  myArray => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C"];
       2.  myArray2 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C"];
       3.  myArray3 => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ["A", "B", "C"];
 
### _Update_ data present in array of values:
#### sQ.update(ARRAY_VALUES, VALUE_TO_BE_UPDATED, CHANGE_TO_BE_DONE);
--> sQ.update(users.lastName, "Joan" "Jannet");
----> users => {id: [100,200], firstName: ["John", "Jannet"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo","Rio de Janeiro"]}; 

### _Delete_ data present in Array of values:
#### ARRAY_VALUES = sQ.delet(ARRAY_VALUES, VALUE_TO_BE_DELETED);
--> users.city = sQ.delet(users.city, "Rio de Janeiro");
----> users => {id: [100,200], firstName: ["John", "Jannet"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo"]}; 
--> var myArray = [1,2,3,4,5,6,7,"Ops"];
    myArrat = sQ.delet(myArray, "Ops");
----> var myArray = [1,2,3,4,5,6,7];

## _DATA VALIDATION FUNCTIONS:_

### _Where_ condition is valid in a array of values, the data required or his position into the array is returned in the desired quantity when specified:
#### sQ.where(ARRAY_VALUES, "CONDITION_OPERATOR", CONDITION_VALUE, [IS_THE_RESULT_POSITION], [QUANTITY])
When the condition is not valid inside he values, null is returned.

**Acceptable comparisions: "==","===","!=","!==",">",<",">=","<=","isNull","isNotNull","isEven","isOdd","typeof","instanceof".**
--> var myArray = [1,2,3,4,5,6,7,8,9,10, true, "true", false, null, "Jonathan"];
  1.  sQ.where(myArray, ">", 5);            //Values that are all greater than 5
  2.  sQ.where(myArray, ">", 5, true);      //Position (index) of all values greater than 5
  3.  sQ.where(myArray, ">", 5, true, 2);   //Position (index) of just 2 values greater than 5
  4.  sQ.where(myArray, "!==", "true");     //Values that are all different in value and type from the String "true";
  5.  sQ.where(myArray, "===", null, true, 9999);  //Position (index) of all values that is equal null;
  6.  sQ.where(myArray, "===", "A", true);  //Position (index) of the value that is equal "Jonathan" (in value and type) 
                   
---->  1.  [6, 7, 8, 9, 10];
       2.  [5, 6, 7, 8, 9];
       3.  [5, 6];
       4.  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false, null, "Jonathan"];
       5.  13;
       6.  14;
      
### _Difference_ between two arrays (in length or in values):
#### sQ.difference(ARRAY_VALUES_1, ARRAY_VALUES_2, [IS_IN_LENGTH]);
--> var myArray = [1, 2, 3, 4, 5, "A", "B", "C"], myArray2 = [1,2, 3, "A", "B", "C", "D"];
    sQ.difference(myArray, myArray2);
----> [4, 5, "D"]
--> var myArray = [1, 2, 3, 4, 5], myArray2 = [1, 2, 3];
   sQ.difference(myArray, myArray2, true);
----> 2;

### _Is Unique_ value among all others inside array (without repetition):
#### sQ.isUnique(VALUE, ARRAY_VALUES);
--> var myArray = [1, 2, 2, 3, 4, 5];
   1.  sQ.isUnique(2, myArray);
   2.  sQ.isUnique(3, myArray);
---->  1.   false
       2.   true
 
### _Is Null_ value:
#### sQ.isNull(VALUE);
--> var myArray = [1, 2, null, "null", 5];
    1.  sQ.isNull(myArray[1]);
    2.  sQ.isNull(myArray[2]);
    3.  sQ.isNull(myArray[3]);
---->  1.  false
       2.  true
       3.  false
       
### _Is Not Null_ value:
#### sQ.isNotNull(VALUE);
--> var myArray = [1, 2, null, "null", 5];
    1.  sQ.isNotNull(myArray[1]);
    2.  sQ.isNotNull(myArray[2]);
    3.  sQ.isNotNull(myArray[3]);
---->  1.  true
       2.  false
       3.  true
       
### _Is Even_ value:
#### sQ.isEven(VALUE);
-->  1.  sQ.isEven(3);
     2.  sQ.isEven(10);
----> 1.   false
      2.   true
      
### _Is Odd_ value:
#### sQ.isOdd(VALUE);
-->  1.  sQ.isOdd(3);
     2.  sQ.isOdd(10);
----> 1.   true
      2.   false
      
## _DATA CONVERSION FUNCTIONS:_

### _Null To_ specific value:
#### sQ.nullTo(ARRAY_WITH_NULL_VALUES, CONVERSION_VALUE);
#### ARRAY_INDEX_WITH_NULL_VALUE = sQ.nullTo(ARRAY_INDEX_WITH_NULL_VALUE, CONVERSION_VALUE);
--> var myArray = [1, 2, null, null, 4, 5], myArrayTwo = [1, 2, null, null, 5, 6]
    1.  sQ.nullTo(myArray, 3);
    2.  myArrayTwo[2] = sQ.nullTo(myArrayTwo[2], 3);
    3.  myArrayTwo[3] = sQ.nullTo(myArrayTwo[3], 4);
---->  1.  myArray => [1, 2, 3, 3, 4, 5]
       2.  myArrayTwo => [1, 2, 3, null, 5, 6]
       3.  myArrayTwo => [1, 2, 3, 4, 5, 6]
 
## _DATA MATHEMATICAL FUNCTIONS:_

#### var minValue = sQ.min(ARRAY_VALUES);
#### var maxValue = sQ.max(ARRAY_VALUES);
#### var sumValues = sQ.sum(ARRAY_VALUES);
#### var prdctValues = sQ.multiply(ARRAY_VALUES);
#### var variancValues = sQ.variance(ARRAY_VALUES);
#### var deviationValues = sQ.devation(ARRAY_VALUES);


### _-- REPEAT FUNCTION TO SIMPLIFY THE CODING OF LOOPS --_
#### sQ.repeat(FUNCTION, NUMBER_OF_TIMES);
--> var myArray = [];
    1.  sQ.repeat(function(){sQ.insert(myArray, 1, 2, 3);}, 3);
    2.  sQ.repeat(function(){alert("SQF IS AWESOME!");}, 3);
----> [1, 2, 3, 1, 2, 3, 1, 2, 3];

      ** TRY IT YOURSELF AND ENJOY **

/**Gabriel Tessarini**/
