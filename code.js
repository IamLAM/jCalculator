var values="";
var action="";
var ans="";

$(document).ready(function(){


$(".buttons").on("click", state);


});


function state(){
    action= event.currentTarget.innerHTML;
   
    console.log(action);
    
    switch(action){
        case "+": case "-": case "/" : case "*" : case ".":
                values+=action;
               // $("display").val(values);
                document.getElementById("display").innerHTML=values;
                console.log("entro al case de operadores");
        break;

        case "=":
                ans=eval(values);
             // $("display").val(values);
             document.getElementById("display").innerHTML=ans;
                console.log("evaluo");
        break;


        case "C":
                
                values=0;
                action="";
      // $("display").val(values);
        document.getElementById("display").innerHTML=values;
        console.log("borro");
         break;

  
   default:
        values+=action;
       // $("display").val(values);
       document.getElementById("display").innerHTML=values;
        console.log("añado numeros");
        break;
    }
}
