// You need to return the count of Primes less than equal to N
// N: input number
function numberOfPrimes(N)
{
      // Your code here
       let count = 0;
  const isPrime = Array(N).fill(true);
  for (let i = 2; i < N; i++) {
    if (isPrime[i]) {
      count++;
      for (let j = i; j < N; j += i) 
      isPrime[j] = false; // sieve out multiples
    }
  }
  return count++;
 }
