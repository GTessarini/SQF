# SQF
Simplified Query Functions to JavaScript

Light JavaScript library with great similarity with clauses and SQL commands that approach and simplify the human understanding turning lots of line of code in simple, literal and pratical words of command.

Functions for more easily dealing with actions related to searching, modifying, creating and manipulating in various ways the big (or even small) Arrays and JSON objects in Javascript.

/*DATA DEFINITION FUNCTIONS:*/
**Create** JSON objects: sQ.create("HOW", "MANY", "STRING", "ARGUMENTS", "TO", "DEFINE", "THE", "KEYS", "YOU" "WANT");
--> var users = sQ.create("id", "firstName", "lastName", "email", "country", "state", "city", "faxNumber");
---> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};     

**Alter** the JSON object **Adding** a new key to him: JSON_OBJECT = sQ.alterAdd(JSON_OBJECT, "NEW_KEY");
--> users = sQ.alterAdd(users, "faxNumber");
---> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[], faxNumber:[]};     

**Alter** the JSON object **Dropping** a specific owned key: sQ.alterDrop(JSON_OBJECT, "KEY_TO_BE_DROPPED");
--> sQ.alterDrop(users, "faxNumber");
---> users => {id:[], firstName:[], lastName:[], email:[], country:[], state:[], city:[]};     

/*DATA MANIPULATION FUNCTIONS*/
**Insert** data into JSON objects: sQ.insert(JSON_OBJECT, VALUES_IN_ORDER_OF_YOUR_OBJECT_KEYS);
--> sQ.insert(users, 100, "John", "Doe", "e@email.com", "Brazil", "SP", "São Paulo");
----> users => {id: [100], firstName: ["Joh"], lastName: ["Doe"], email: ["e@email.com"], country: ["Brazil"], state: ["SP"], city: ["São Paulo"]};
--> sQ.insert(users, 200, "Joan", "Doe", "e@email.com", "Brazil", "SP", "São Paulo");
----> users => {id: [200], firstName: ["Joan"], lastName: ["Doe"], email: ["e2@email.com"], country: ["Brazil"], state: ["SP"], city: ["São Paulo"]};
       AND      into Arrays, inserting how many lots of arguments you define, in order, and the best part: with just ONE line of code
--> var myArray=[], myArray2=[], myArray3=[];
    sQ.insert(myArray, 1,2,3,4,5,6,7,8,9,0,"A","B","C");
    sQ.insert(myArray2, [1,2,3,4,5,6,7,8,9,0,"A","B","C"]);
    sQ.insert(myArray3, [1,2,3,4,5,6,7,8,9,0],["A","B","C"]);
----> myArray => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C"];
      myArray2 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C"];
      myArray3 => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ["A", "B", "C"];
 
**Update** data present into array of values: sQ.update()




/*Gabriel Tessarini*/
