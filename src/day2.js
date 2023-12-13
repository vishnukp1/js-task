function fakeBin(str) {
    var newstr = "";
    var noresult = "empty input"
    if(str.length <= 0){
      return noresult 
  }else{
    for (var i = 0; i < str.length; i++) {
      if (str[i] < 5) {
        newstr += "0";
      } else {
        newstr += "1";
      }
    }
    
    return newstr;
  }
  }

  console.log(fakeBin("7878711"));
  

  