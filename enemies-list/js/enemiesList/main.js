import React, { useState } from "react";
import { Route } from "react-router-dom";


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
        console.log(`$"{myEnemy.FirstName} {myEnemy.LastName} (Really, really dislike!"`)
      }
      else
      {
        console.log(`$"{myEnemy.FirstName} {myEnemy.LastName}"`);
      }
    }


  }

  const Enemy = GetEnemies()

  // Make a list of Enemy objects
  //  How would you create a collection of enemy objects in JavaScript

  const enemies = Enemy.find((p) => p.Enemy == "Joshua Flowers")
}

main();