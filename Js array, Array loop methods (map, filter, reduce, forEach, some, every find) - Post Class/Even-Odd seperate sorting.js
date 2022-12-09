// You need to return sorted array, not string
// arr: input array
// arrSize: size of array
function sortEvenOdd(arr, arrSize)
  {
    let odd=[];
    let even=[];
     for(let i = 0; i < arrSize; i++){
        if(arr[i] % 2 == 0)
          even.push(arr[i]);
        else odd.push(arr[i]);
      }
      odd.sort(function(a,b){return b - a});
      even.sort(function(a,b){return a - b});
      return odd.concat(even);       
  }
