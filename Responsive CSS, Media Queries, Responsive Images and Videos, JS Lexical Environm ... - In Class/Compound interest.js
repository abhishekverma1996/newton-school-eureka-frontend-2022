// You need to return Compound Interest
// P: principal value
// T: rate of interest
// T: time in years 
function calculateCI(P, R, T)
{
       // Your code here
       let A = P *
        (Math.pow((1 + R/ 100),T));
        let CI = A - P;
        return CI.toFixed(2);

}
