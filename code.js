var action="";
var ans="";
var values="";

$(document).ready(function(){


$(".buttons").on("click", state);


});


function state(){

   var action = $(this).attr("value");
    console.log(action);
    
    switch(action){
        case "+": case "-": case "/" : case "*" : case ".":
                values+=action;
                $("display").val(values);
        
               console.log("add operators");
        break;

        case "=":
                ans=eval(values);
              $("display").val(values);
   
                console.log("Eval:"+ans);
        break;


        case "C":
                
                values="";
               
       $("display").val(values);
 
        console.log("Clean all!!");
         break;

  
   default:
        values+=action;
        $("display").val(values);

        console.log("Add numbers");
        break;
    }
}
