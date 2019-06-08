var action="";
var ans="";
var values="";
var cp=0;
var cz=0;
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
                operation.push(action);
                $("#display").val(values);
                cp=0;
                console.log("add operators");
        break;

        case ".":
            cp++;
            if(cp<2)
            {
          //      values+=action;
                operation.push(action);
                $("#display").val(values);
        
               console.log("add only a dot");
            }
            else{
                console.log("error! you write many dots"+cp);
            }

        break;

        case "=":
                
              //  int i=0;
              //  while(i<operation.lentg)
                values=operation.join("");
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
        
                
     //   values+=action;
        operation.push(action);
       /* reg=/0{2,10}/;
        var res=values.match(reg).length;
        console.log("Length:"+res);
        if(res!=null||action==0){
            cz++;
            values= values.slice(0,cz);
            console.log("display:"+values);
        }else{

            res=null;
            cz=0;
        }
*/


   //     console.log("res:"+res);
 
        $("#display").val(values);

        console.log("Add numbers");
        break;
    }
    console.log(operation);
}
