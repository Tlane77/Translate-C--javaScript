import React, { useState } from "react";
import { Route } from "react-router-dom";


function main() {
  // Put your code here
  const names = ["Nashville", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]
}

//Print some output
console.log("All Place Names");

//Iterate over each
for (let name of names) {
  console.log(name);

}

//When you don't pass an argument to console.log.
console.log();

//Filter Array to create a new list
//place names that start with the word "The"

const theNames = names.filter((n) => n.StartsWith("The")).ToList();

console.log(" 'The' Place Names");
for (let theName of theNames) {
  console.log(name);
}

main();