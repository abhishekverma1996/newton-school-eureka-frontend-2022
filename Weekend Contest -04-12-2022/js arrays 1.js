<!--- HTML PART --->
<h1>JS Arrays 1</h1>
<div class="row">
  <div class="col md-6">
    <h3>Array :</h3>
    <h3>[<span id="array"></span>]</h3>
  </div>
  <div class="col md-6" id="actions">
    <h3>Actions</h3>
    <button type="button" id="sort" class="btn btn-primary">Sort</button>
    <button type="button" id="revsort" class="btn btn-primary">Reverse Sort</button>
    <button type="button" id="first5" class="btn btn-primary">First 5</button>
    <button type="button" id="last5" class="btn btn-primary">Last 5</button>
    <button type="button" id="avg" class="btn btn-primary">Average</button>
  </div>
</div>

<!--- CSS PART --->
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');

h1 {
  text-align: center;
  margin: 10px;
}
h3 {
  text-align: center;
}
#actions {
  margin: auto;
}
.btn{
  margin-bottom: 2px;
}

<!--- JS PART --->
window.onload = function () {
  init();
};
var arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
function init(params) {
  var ele = document.getElementById('array');
  console.log(arr);
  ele.innerText = arr;
}
