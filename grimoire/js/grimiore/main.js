function main() {
  // Put your code here
  console.log("Do you believe in magic?");
  console.log("------------------------");




  const MakeEvilSpellBook = (allSpells) => {
    const evilBook = {
      Title: "Evil Book",
      Spells: GetAllSpells().filter((spell) => spell.IsEvil === true),
    };
    return evilBook;
  };

  const MakeGoodSpellBook = (allSpells) => {
    const goodBook = {
      Title: "Good Book",
      Spells: GetAllSpells().filter((spell) => spell.IsEvil === false),
    };
    return goodBook;
  };

  const GetAllSpells = () => {
    const allSpells = [
      {
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyRequired: 5.1,
      },
      {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyReqired: 2.99,
      },
      {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyReqired: 12.2,
      },
      {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyReqired: 100.0,
      },
      {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyReqired: 2921.5,
      },
    ];
    return allSpells;
  };

  console.log("I believe in miracles!!");
  console.log("------------------------");

  const allSpells = GetAllSpells();
  const goodBook = MakeGoodSpellBook(allSpells);
  const evilBook = MakeEvilSpellBook(allSpells);
  const DisplaySpellBook = (book) => {
    console.log(book.Title);
    for (const mySpell of book.Spells) {
      console.log(mySpell.Name);
    }
  };


  DisplaySpellBook(goodBook);
  console.log("\n");
  DisplaySpellBook(evilBook);
}

main();

