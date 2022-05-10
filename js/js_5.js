function changeEven(numbers, value) {
    // Change code below this line
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] % 2 === 0) {
    //     numbers[i] = numbers[i] + value;
    //   }
    // }
  const newArray = [];
  numbers.forEach(i=>{
    if (i%2 === 0) {
      newArray.push(i+=value)
    }
    console.log(newArray);
  })
  
  
    // Change code above this line
  }
  
  changeEven([1, 2, 3, 4, 5], 10);
