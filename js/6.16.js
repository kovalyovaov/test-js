class Car {
    // Change code below this line
    static MAX_PRISE = 50000;
    #price;
  
    constructor({ price }) {
      this.#price = price;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
        if (this.#price <= Car.MAX_PRISE) 
        { this.#price = newPrice;}
        else {return this.#price;}
    
     
    }
    // Change code above this line
  }
  
  const audi = new Car({ price: 35000 });
  console.log(audi.price); // 35000
  
  audi.price = 49000;
  console.log(audi.price); // 49000
  
  audi.price = 51000;
  console.log(audi.price); // 49000
  