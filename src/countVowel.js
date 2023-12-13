function getCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        count ++;
      }
    }
    return count;
  }
  
  console.log(getCount("hdjkfhdehfopea")); 
  