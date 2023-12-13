const str = '262355677834342';
const convert = (str ) => {
   let res = '';
   for(let i = 0; i < str.length; i++){
      const el = str[i];
      if(el < 5){
         res += 0;
      }else{
         res += 1;
      };
   };
   return res;
};
console.log(convert(str));