# SQF
Simplified Query Functions to JavaScript

Light JavaScript library with great similarity with clauses and SQL commands that approach and simplify the human understanding turning lots of line of code in simple, literal and pratical words of command.

Functions for more easily dealing with actions related to searching, modifying, creating and manipulating in various ways the big (or even small) Arrays and JSON objects in Javascript.

DATA DEFINITION FUNCTIONS:

**Create** JSON objects: 
sQ.create("HOW", "MANY", "STRING", "ARGUMENTS", "TO", "DEFINE", "THE", "KEYS", "YOU" "WANT");
--> var users = sQ.create("id", "firstName", "lastName", "email", "country", "state", "city", "faxNumber");
---> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};     

**Alter** the JSON object **Adding** a new key to him:
JSON_OBJECT = sQ.alterAdd(JSON_OBJECT, "NEW_KEY");
--> users = sQ.alterAdd(users, "faxNumber");
---> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[], faxNumber:[]};     

**Alter** the JSON object **Dropping** a specific owned key:
sQ.alterDrop(JSON_OBJECT, "KEY_TO_BE_DROPPED");
--> sQ.alterDrop(users, "faxNumber");
---> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};     

DATA MANIPULATION FUNCTIONS:

**Insert** data into JSON objects/Arrays: 
sQ.insert(JSON_OBJECT/ARRAY_VALUES, VALUES_IN_ORDER_OF_YOUR_OBJECT_KEYS);
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
 
**Update** data present in array of values:
sQ.update(ARRAY_VALUES, VALUE_TO_BE_UPDATED, CHANGE_TO_BE_DONE);
--> sQ.update(users.lastName, "Joan" "Jannet");
----> users => {id: [100,200], firstName: ["John", "Jannet"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo","Rio de Janeiro"]}; 

**Delete** data present in Array of values:
ARRAY_VALUES = sQ.delet(ARRAY_VALUES, VALUE_TO_BE_DELETED);
--> users.city = sQ.delet(users.city, "Rio de Janeiro");
----> users => {id: [100,200], firstName: ["John", "Jannet"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo"]}; 
--> var myArray = [1,2,3,4,5,6,7,"Ops"];
    myArrat = sQ.delet(myArray, "Ops");
----> var myArray = [1,2,3,4,5,6,7];


DATA VALIDATION FUNCTIONS:

**Where** condition is valid in a array of values, the data required or his position into the array is returned in the desired quantity when specified:
sQ.where(ARRAY_VALUES, "CONDITION_OPERATOR", CONDITION_VALUE, [IS_THE_RESULT_POSITION], [QUANTITY])
When the condition is not valid inside he values, null is returned.
--> var myArray = [1,2,3,4,5,6,7,8,9,10, true, "true", false, null, "Jonathan"];
  1.  sQ.where(myArray, ">", 5);            //Values that are all greater than 5
  2.  sQ.where(myArray, ">", 5, true);      //Position (index) of all values greater than 5
  3.  sQ.where(myArray, ">", 5, true, 2);   //Position (index) of just 2 values greater than 5
  4.  sQ.where(myArray, "!==", "true");     //Values that are all different in value and type from the String "true";
  5.  sQ.where(myArray, "===", null, true, 9999);  //Position (index) of all values that is equal null;
  6.  sQ.where(myArray, "===", "A", true);  //Position (index) of the value that is equal "Jonathan" (in value and type) 
----> 1.   [6, 7, 8, 9, 10];
      2.   [5, 6, 7, 8, 9];
      3.   [5, 6];
      4.   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false, null, "Jonathan"];
      5.   13;
      6.   14;
      
**Difference** between two arrays (in length or in values):
sQ.difference(ARRAY_VALUES_1, ARRAY_VALUES_2, [IS_IN_LENGTH]);
--> var myArray = [1, 2, 3, 4, 5, "A", "B", "C"], myArray2 = [1,2, 3, "A", "B", "C", "D"];
    sQ.difference(myArray, myArray2);
----> [4, 5, "D"]
--> var myArray = [1, 2, 3, 4, 5], myArray2 = [1, 2, 3];
   sQ.difference(myArray, myArray2, true);
----> 2;

**Is Unique** value among all others inside array (without repetition):
sQ.isUnique(VALUE, ARRAY_VALUES);
--> var myArray = [1, 2, 2, 3, 4, 5];

   1.  sQ.isUnique(2, myArray);
   2.  sQ.isUnique(3, myArray);
---->  1.   false
       2.   true
 
**Is Null** value:
sQ.isNull(VALUE);
--> var myArray = [1, 2, null, "null", 5];
    1.  sQ.isNull(myArray[1]);
    2.  sQ.isNull(myArray[2]);
    3.  sQ.isNull(myArray[3]);
---->  1.  false
       2.  true
       3.  false
**Is Not Null** value:
sQ.isNotNull(VALUE);
--> var myArray = [1, 2, null, "null", 5];
    1.  sQ.isNotNull(myArray[1]);
    2.  sQ.isNotNull(myArray[2]);
    3.  sQ.isNotNull(myArray[3]);
---->  1.  true
       2.  false
       3.  true
**Is Even** value:
sQ.isEven(VALUE);
-->  1.  sQ.isEven(3);
     2.  sQ.isEven(10);
----> 1.   false
      2.   true
      
**Is Odd** value:
sQ.isOdd(VALUE);
-->  1.  sQ.isOdd(3);
     2.  sQ.isOdd(10);
----> 1.   true
      2.   false
      
DATA CONVERSION FUNCTIONS:

**Null To** specific value:
sQ.nullTo(ARRAY_WITH_NULL_VALUES, CONVERSION_VALUE);
ARRAY_WITH_NULL_VALUES = sQ.nullTo(SPECIFIC_NULL_VALUE, CONVERSION_VALUE);
--> var myArray = [1, 2, null, null, 4, 5], myArray2 = [1, 2, null, null, 4, 5]
    1.  sQ.nullTo(myArray, 3);
    2.  myArray2[2] = sQ.nullTo(myArray[2], 3);
    3.  myArray2[3] = sQ.nullTo(myArray[3], 4);
---->  1.  [1, 2, 3, 3, 4, 5]
       2.  [1, 2, 3, null, 4, 5]
       3.  [1, 2, 3, 4, 4, 5]
 
DATA MATHEMATICAL FUNCTIONS:

sQ.min(ARRAY_VALUES);
sQ.max(ARRAY_VALUES);
sQ.sum(ARRAY_VALUES);
sQ.muliply(ARRAY_VALUES);
sQ.variance(ARRAY_VALUES);
sQ.devation(ARRAY_VALUES);

-- REPEAT FUNCTION TO SIMPLIFY THE CODIND OF LOOPS--
sQ.repeat(FUNCTION, NUMBER_OF_TIMES);
--> var myArray = [];
    1.  sQ.repeat(function(){sQ.insert(myArray, 1, 2, 3);}, 3);
    2.  sQ.repeat(function(){alert("SQF IS AWESOME!");}, 3);
    
----> [1, 2, 3, 1, 2, 3, 1, 2, 3]

      TRY IT YOURSELF AND ENJOY

/*Gabriel Tessarini*/
