function calculateFrequency(numbers) {
    const frequencyMap = {};
  
 for (const number of numbers){
  if(frequencyMap[number]){
    frequencyMap[number]++;
  }else{
    frequencyMap[number] = 1;
  }
 }
    
    return frequencyMap;
  }
  
  const inputNumbers = [1, 2, 3, 2, 4, 1, 5, 3, 3];
  const frequencyResult = calculateFrequency(inputNumbers);
  
  console.log("Frequency of Entered Numbers:");
  for (const number in frequencyResult) {
    console.log(`${number}: ${frequencyResult[number]}`);
  }
  