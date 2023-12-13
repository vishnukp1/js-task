function highAndLow(numbers) {
   
    const numArray = numbers.split(' ').map(Number);
    
  
    const maxNum = Math.max(...numArray);
    const minNum = Math.min(...numArray);
    

    return `${maxNum} ${minNum}`;
  }
  

  console.log(highAndLow("1 2 3 4 5"));     
  console.log(highAndLow("1 2 -3 4 5"));     
  console.log(highAndLow("1 9 3 4 -5"));    
  