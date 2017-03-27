# SQF
Simplified Query Functions to JavaScript

Light JavaScript library with great similarity with clauses and SQL commands that approach and simplify the human understanding turning lots of line of code in simple, literal and pratical words of command.

Functions for more easily dealing with actions related to searching, modifying, creating and manipulating in various ways the big (or even small) Arrays and JSON objects in Javascript.

DATA DEFINITION FUNCTIONS:

**Create** JSON objects: sQ.create("HOW", "MANY", "STRING", "ARGUMENTS", "TO", "DEFINE", "THE", "KEYS", "YOU" "WANT");
--> var users = sQ.create("id", "firstName", "lastName", "email", "country", "state", "city", "faxNumber");
---> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};     

**Alter** the JSON object **Adding** a new key to him: JSON_OBJECT = sQ.alterAdd(JSON_OBJECT, "NEW_KEY");
--> users = sQ.alterAdd(users, "faxNumber");
---> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[], faxNumber:[]};     

**Alter** the JSON object **Dropping** a specific owned key: sQ.alterDrop(JSON_OBJECT, "KEY_TO_BE_DROPPED");
--> sQ.alterDrop(users, "faxNumber");
---> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};     

DATA MANIPULATION FUNCTIONS:

**Insert** data into JSON objects: sQ.insert(JSON_OBJECT, VALUES_IN_ORDER_OF_YOUR_OBJECT_KEYS);
--> sQ.insert(users, 100, "John", "Doe", "e@email.com", "Brazil", "SP", "São Paulo");
----> users => {id: [100], firstName: ["Joh"], lastName: ["Doe"], email: ["e@email.com"], country: ["Brazil"], state: ["SP"], city: ["São Paulo"]};
--> sQ.insert(users, 200, "Joan", "Doe", "e2@email.com", "Brazil", "RDj", "Rio de Janeiro");
----> users => {id: [100,200], firstName: ["John", "Joan"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo","Rio de Janeiro"]};
       AND      into Arrays, inserting how many lots of arguments you define, in order, and the best part: with just ONE line of code
--> var myArray=[], myArray2=[], myArray3=[];
    sQ.insert(myArray, 1,2,3,4,5,6,7,8,9,0,"A","B","C");
    sQ.insert(myArray2, [1,2,3,4,5,6,7,8,9,0,"A","B","C"]);
    sQ.insert(myArray3, [1,2,3,4,5,6,7,8,9,0],["A","B","C"]);
----> myArray => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C"];
      myArray2 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C"];
      myArray3 => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ["A", "B", "C"];
 
**Update** data present in array of values: sQ.update(ARRAY_VALUES, VALUE_TO_BE_UPDATED, CHANGE_TO_BE_DONE);
--> sQ.update(users.lastName, "Joan" "Jannet");
----> users => {id: [100,200], firstName: ["John", "Jannet"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo","Rio de Janeiro"]}; 

**Delete** data present in Array of values: ARRAY_VALUES = sQ.delet(ARRAY_VALUES, VALUE_TO_BE_DELETED);
--> users.city = sQ.delet(users.city, "Rio de Janeiro");
----> users => {id: [100,200], firstName: ["John", "Jannet"], lastName: ["Doe","Doe"], email: ["e@email.com", "e2@email.com"], country: ["Brazil", "Brazil"], state: ["SP","RJ"], city: ["São Paulo"]}; 
--> var myArray = [1,2,3,4,5,6,7,"Ops"];
    myArrat = sQ.delet(myArray, "Ops");
----> var myArray = [1,2,3,4,5,6,7];

**Where** condition is valid in a array of values, the data required or his position into the array is returned in the desired quantity when specified: sQ.where(ARRAY_VALUES, "CONDITION_OPERATOR", CONDITION_VALUE, [IS_THE_RESULT_POSITION], [QUANTITY])
When the condition is not valid inside he values, null is returned.
--> var myArray = [1,2,3,4,5,6,7,8,9,10, true, "true", false, null, "Jonathan"];
    sQ.where(myArray, ">", 5);            //Values that are all greater than 5
    sQ.where(myArray, ">", 5, true);      //Position (index) of all values greater than 5
    sQ.where(myArray, ">", 5, true, 2);   //Position (index) of just 2 values greater than 5
    sQ.where(myArray, "!==", "true");     //Values that are all different in value and type from the String "true";
    sQ.where(myArray, "===", null, true, 9999);  //Position (index) of all values that is equal null;
    sQ.where(myArray, "===", "A", true);  //Position (index) of the value that is equal "Jonathan" (in value and type) 
----> [6, 7, 8, 9, 10];
      [5, 6, 7, 8, 9];
      [5, 6];
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false, null, "Jonathan"];
      13;
      14;
      
**Math Functions** applied to arrays like: min, max, average, sum, multiply, variance, deviation;
**Validation Function** like isNull, isNotNull, isEven, isOdd, nullTo and isUnique (specific value inside an array);
And repeat some function for specific number of times, and get the difference bewteen two arrays (in values or in length);

/*Gabriel Tessarini*/
