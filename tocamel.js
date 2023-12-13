function toCamelCase(str) {
    // return str.replace(/[-_]\w/g, (match) => {
    //   return match.charAt(1).toUpperCase();
    // });
    return str.replace(/[_]\w/g,(match) =>{
      return match.charAt(1).toUpperCase();
    })
  }

  const input = "hello_world_example";
const camelCase = toCamelCase(input);
console.log(camelCase); // Output: "helloWorldExample"
