<!--- HTML PART --->
<button id="increment" onclick="increment()"">Like</button>
<h3 id="counter"></h3>
<button id="decrement" onclick="decrement()">Dislike</button>


<!--- JS PART --->
var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counter").innerText = data;
  
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counter").innerText = data;
}
//creation of decrement function
function decrement() {
    if(data <= 0){
    data=0;
    }else
    data = data - 1;
    document.getElementById("counter").innerText = data;
}
