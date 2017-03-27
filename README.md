# SQF
Simplified Query Functions to JavaScript

Light library of functions with great similarity with clauses and SQL commands that approach and simplify the human understanding turning lots of line of code in simple, literal and pratical words of command.

Functions for more easily dealing with actions related to searching, modifying, creating and manipulating in various ways the Arrays and JSON objects in Javascript.

/*

var usersObject = sQ.create("id", "firstName", "lastName", "email", "country", "state", "city", "address",);
---> usersObject {id: Array[0], firstName: Array[0], lastName: Array[0], email: Array[0], country: Array[0], state: Array[0], city: Array[0], address: Array[0]};                   

sQ.insert(usersObject, 1, "John", "Doe", "email@email.com", "Country", "State", "City", "His Address");
---> usersObject (Just inserted and populated ) {id: [1], firstName: ["Joh"], lastName: ["Doe"], email: ["email@email.com"], country: ["Country"], state: ["State"], city: ["City"], address: ["His Address"]};

sQ.insert(usersObject, 2, "Jonathan", "Doe", "email2@email.com", "Country", "State", "City", "His Address");
---> usersObject (Just inserted and populated ) {id: [1, 2], firstName: ["Joh", "Jonathan"], lastName: ["Doe", "Doe"], email: ["email@email.com", "email2@email.com"], country: ["Country", "Country"], state: ["State", "State"], city: ["City", "City"], address: ["His Address", "His Address"]};

*/


/*Gabriel Tessarini*/
