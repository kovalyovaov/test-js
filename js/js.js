// let base = prompt ("что-то делай");
// console.log (Number(base));

// let power = prompt ("Давай степень");
// console.log (Number(power));

// const result = base ** power;
// console.log (result);


// const max = 50;
// const min = 55;

// let sumRez = Math.random() * (max - min) + min;
//  console.log (sumRez);

// console.log (Math.round(sumRez));


// let brand = 'LGfdfdf';
// const newBrend = brand.toLowerCase();
// console.log (newBrend);
// console.log (brand.slice(2));

// console.log (brand[0].toUpperCase() + brand[1].toUpperCase()+ brand.slice(2).toLowerCase());


// const nsme1 = 20;
// const nsme2 = 30;
// const number = 22;

// const rezalt = number >nsme1 && number < nsme2;
// console.log (rezalt);
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      console.log(potion);
      if (newPotion.name === potion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

    removePotion(potionName) {
      for (let i=0; i< this.potions.length; i+=1) {
        if (potionName === this.potions[i].name){
          return this.potions.splice(i,1);
        }
        return `Potion ${potionName} is not in inventory!`;  
      }},
      

  updatePotionName(oldName, newName) {
    let potionIndex=-1;
    for (let potion of this.potions) {
      console.log("ddddd", potion.name)
      if (potion.name === oldName){
        
         potion.name = newName;
         potionIndex+=1;
         
      }
      if (potionIndex===-1){
      return `Potion ${oldName} is not in inventory!`;}
      //  (this.potions)

    }
    // const potionIndex = this.potions.indexOf(oldName);

    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1, newName);
  },
 
};
// console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.updatePotionName("Speed potion", "ffffff"));
console.table(atTheOldToad.getPotions());
  





















 
