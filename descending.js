function descendingOrder(num) {

   

    let numStr = num.toString()

    let sortedStr = numStr.split(" ").sort((a,b)=> b - a).join("")

    let result= parseInt(sortedStr)
    
    return result;
  }


  console.log(descendingOrder(42145));  // Output: 54421
  console.log(descendingOrder(145263));  // Output: 654321
  