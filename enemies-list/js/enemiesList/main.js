// import React, { useState } from "react";
// import { Route } from "react-router-dom";


function main() {
  // Put your code here

  const EnemiesList
  {
    console.log("My Enemies List!");
    console.log("----------------");
    const enemies = GetEnemies();

    for (let myEnemy of enemies);
    {
      if (myEnemy.IsReallyHated);
      {
        console.log(`$"{myEnemy.FirstName} {myEnemy.LastName} (Really, really dislike!"`);
      }else {
        console.log(`$"{myEnemy.FirstName} {myEnemy.LastName}"`);
      }
    }


  }

  const Enemy = GetEnemies()

  // Make a list of Enemy objects
  //  How would you create a collection of enemy objects in JavaScript

  const enemies = [
    {
      FirstName: "Joshua",
      LastName: "Flowers",
      Offenses: new List < string > [
        "Being a jerk to me in elementary school",
        "Not being nice to me in elementary school"
      ],
      IsReallyHated = true
    },
    {
      FirstName: "Darth",
      LastName: "Vader",
      Offenses: new List < string > [
        "Cut off Luke's hand",
        "Murdered all those kids",
        "Unkind management practices"
      ],
      IsReallyHated = false
    },
    {
      FirstName: "Betty",
      LastName: "Rudelady",
      Offenses: new List < string > [
        "Phone calls in the theater",
        "Phone calls on the bus",
        "Phone calls in line at the grocery store",
        "Poor conversationalist"
      ],
      IsReallyHated = true
    },
    {
      FirstName: "Leon",
      LastName: "Peck",
      Offenses: new List < string > [
        "Keeps giving me a hotplate"
      ],
      IsReallyHated = false
    }
  ]
}
for (enemy of enemies) {
  if (enemy.IsReallyHated === true) {
    console.log(`${enemy.FirstName} ${enemy.LastName} (Really Really Dislike)`)

  } else {
    console.log(`${enemy.FirstName} ${enemy.LastName}`)
  }
}


main();