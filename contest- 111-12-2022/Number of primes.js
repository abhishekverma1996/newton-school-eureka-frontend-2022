// You need to return the count of Primes less than equal to N
// N: input number
function numberOfPrimes(N)
{
      // Your code here
      var count=0;
      for(let i=0;i<=N;i++){
            if(isPrime(i)){
                  count++;
            }
      }
      return count;
 }

 function isPrime(n){
       let answer=true;

       if(n<=1){
             answer=false;
       }
       else{
             for(let i=2;i*i<=n;i++){
                   if(n%i===0){
                  answer=false;
                  break;
                   }
             }
             return answer;
       }
       return answer;
 }
