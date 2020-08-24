function main() {
  // Put your code here
  const dieRoll = () => {
    dieValue = Math.floor(Math.random() * 6) + 1;

    return dieValue;

  }
  let die1 = {}
  let die2 = {}
  dieFace = (Value) => {
    switch (Value) {
      case 1:
        dieString = "\u2680";
        break;
      case 2:
        dieString = "\u2681";
        break;
      case 3:
        dieString = "\u2682";
        break;
      case 4:
        dieString = "\u2683";
        break;
      case 5:
        dieString = "\u2684";
        break;
      case 6:
        dieString = "\u2685";
        break;
    }

    return dieString;
  }

  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");
  for (let i = 0; i < 10; i++) {
    die1.Value = dieRoll();
    die2.Value = dieRoll();
    die1.icon = dieFace(die1.Value)
    die2.icon = dieFace(die2.Value)
    let message = (`${die1.icon} + ${die2.icon} == ${die1.Value + die2.Value}`)

    if (die1.Value === die2.Value) {
      console.log(`${message} "DOUBLES!"`)
    } else {
      console.log(message);
    }

  }

}

main();