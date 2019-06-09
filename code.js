var action="";
var ans="";
var values="";
var cp=0;
var cz=0;
var numberZero=0;
var erase=false;
var reg;
var operation= [];

$(document).ready(function(){


$(".buttons").on("click", state);


});


function state(){

    if(erase==true){
        values="";
        erase=false;
        console.log("erase!");
    }


   var action = $(this).attr("value");
    console.log(action);
    

    


    switch(action){
        case "+": case "-": case "/" : case "*" : 
             //   values+=action;
             if(isNaN(operation[operation.length-1])) //if previous number is +/*- then changed it for the last operator
               { console.log("too many operators");
                 operation[operation.length-1]=action;
                 $("#display").val(operation.join(""));
               
              }else{
                //  console.log(operation.length+" value:"+operation[operation.length-1]);
                values+=action;
                operation.push(action);
                $("#display").val(values);
                cp=0;
                console.log("Add operators");
                cz=0;
              }
      
        break;

        case ".":
            cp++;
            if(cp<2)
            {
                values+=action;
                operation.push(action);
                $("#display").val(operation.join(""));
        
               console.log("add only a dot");
            }
            else{
                console.log("error! you write many dots"+cp);
            }

        break;

        case "=":
                
                values=operation.join("");
                ans=eval(values);
                operation=[];
                operation.push(ans);
                $("#display").val(ans);
                console.log("Eval:"+ans);
                cz=0;
        break;


        case "C":
                
                values=0;
                cp=0;
                operation= [];
       $("#display").val(values);
 
        console.log("Clean all!!");
        erase=true;
         break;

    
  
   default:
       //if previous number is zero then changed it for the last zero
            if(operation[operation.length-1]=="0"&&cz<=1) 
            {        
                console.log("its zero");
                operation[operation.length-1]=action;
                $("#display").val(operation.join(""));
            }else{
                    cz++;
                    values+=action;
                    operation.push(action);
                    $("#display").val(operation.join(""));
                    console.log("Add numbers");
            }
            

               

    
        break;
    }
    console.log(operation);
}
