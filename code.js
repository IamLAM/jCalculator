var values="";
var action="";

$(document).ready(function(){

console.log("jquery vinculado");

$(".buttons").on("click", state);

console.log(action);

function state(){
    action= event.currentTarget.innerHTML;
    values+=action;
    console.log(action);
    console.log(values);

    if(action=="AC")
        {values=0;
        document.getElementById("display").innerHTML=values;
        }else{

            document.getElementById("display").innerHTML=values;
        }
}

});