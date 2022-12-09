function sum_array(arr) {
// write code here
// use console.log for displaying the output
let sum = 0;
    for(let i=0; i<arr.length; i++){
        let newarray = arr[i];

        for(let j=0; j<newarray.length; j++){
            sum+= newarray[j];
        }
    }
    console.log(sum);
}
