var action="";
var ans="";
var values="";
var cp=0;
var erase=false;

$(document).ready(function(){


$(".buttons").on("click", state);


});


function state(){

    if(erase==true){
        values="";
        erase=false;
    }


   var action = $(this).attr("value");
    console.log(action);
    

    


    switch(action){
        case "+": case "-": case "/" : case "*" : 
                values+=action;
                $("#display").val(values);
                cp=0;
        
               console.log("add operators");
        break;

        case ".":
            cp++;
            if(cp<2)
            {
                values+=action;
                $("#display").val(values);
        
               console.log("add only a dot");
            }
            else{
                console.log("error! you write many dots"+cp);
            }

        break;

        case "=":
                ans=eval(values);
              $("#display").val(ans);
   
                console.log("Eval:"+ans);
        break;


        case "C":
                
                values=0;
                cp=0;
               
       $("#display").val(values);
 
        console.log("Clean all!!");
        erase=true;
         break;

  
   default:
        values+=action;
        $("#display").val(values);

        console.log("Add numbers");
        break;
    }
}
