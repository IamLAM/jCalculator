$(document).ready(function(){

console.log("jquery vinculado");

$(".buttons").on("click", state);

console.log(action);

function state(){
    var action= event.currentTarget.innerHTML;
    console.log(action);

}

});