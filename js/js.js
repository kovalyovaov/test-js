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

const bookShelf = {
  books: ["Последнее королевство", "Страж снов"],
  // Это метод объекта
  getBooks() {
    console.log("Этот метод будет возвращать все книги - свойство books");
  },
  // Это метод объекта
  addBook(bookName) {
    console.log("Этот метод будет добавлять новую книгу в свойство books");
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook("Новая книга");


















 
