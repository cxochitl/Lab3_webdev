/*//Parte 1
let post = document.getElementById("BotonPost");
let clear = document.getElementById("BotonClear");
let mark = document.getElementById("BotonMark");
let del = document.getElementById("BotonDelete");

//Parte 2
post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(e){
e.preventDefault();

//valor de la caja
var todo = document.getElementById("TodoText").value;

var list = document.getElementById("TodoList");

let currentListHTML = list.innerHTML;

list.innerHTML = currentListHTML + '<input type = "checkbox" name="todo" /> ' + todo + '<br>';
}

function TodoClear(e){
  var todos = document.getElementsByName("todo");

  for (var i = 0; i < todos.length; i++){
    todos[i].checked = false;
  }
}

function TodoMark(e){
  e.preventDefault();
  var todos = document.getElementsByName("todo");

  for (var i = 0; i < todos.length; i++){
    todos[i].checked = true;
  }

}

function TodoDel(e){
  e.preventDefault();

  //referencia

var list = document.getElementById("TodoList");

list.innerHTML = "";
}
*/


$("#BotonPost").on("click", TodoPost);
$("#BotonClear").on("click", TodoClear);
$("#BotonMark").on("click", TodoMark);
$("#BotonDelete").on("click", TodoDel);

function TodoPost(e){
e.preventDefault();
var todo = $("#TodoText").val();
todo = '<input type = "checkbox" class="todo" /> ' + todo + '<br>';
$("#TodoList").append( todo);
}

function TodoMark(e){
  e.preventDefault();

  jQuery.each( $(".todo"), function() {
    this.checked = true;
});

}

function TodoClear(e){
  e.preventDefault();

  jQuery.each( $(".todo"), function() {
    this.checked = false;
});
}

function TodoDel(e){
  e.preventDefault();

  //referencia
  $("#TodoList").text(" ");

}