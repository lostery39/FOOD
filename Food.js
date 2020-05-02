
var FoodArray=new Array();
function btnAdd(){
    var foodName=document.getElementById("foodName").value;
    var foodCalories=document.getElementById("foodCalories").value;
    var foodQTY=document.getElementById("foodQTY").value;

    if(foodName=='' || foodCalories==''  ||foodQTY=='')//check null
    {
       document.getElementById("FinalShow").innerHTML="Sorry, invalid input data ";
       return ;
    }
    //check number
   if(myIsNaN(foodCalories) || myIsNaN(foodQTY))
   {
    document.getElementById("FinalShow").innerHTML="foodCalories or foodQTY  must be number ";
    return ;
   }

    let newfoodItem=new FoodItem(foodName,foodCalories,foodQTY);
    FoodArray.push(newfoodItem);
    AddLi(foodName+","+foodCalories+","+foodQTY);
    var totalcalories=0;
    FoodArray.forEach(function(item)
    {
        totalcalories+=item.calories*item.quantity;
    });
    document.getElementById("FinalShow").innerHTML="you have consumed "+totalcalories.toString()+" calories ";
}

//true number ,false not number
function myIsNaN(value) {
    return typeof value === 'number' && !isNaN(value);
  }
 

function btnCLear(){
    FoodArray=new Array();
    document.getElementById("resultDiv").innerHTML="";
    document.getElementById("FinalShow").innerHTML="";
}

function FoodItem(name,calories,quantity)
{
    this.name=name;
    this.calories=calories;
    this.quantity=quantity;
}
function AddLi(contact)
{
var ele=document.createElement("li");
ele.innerHTML=contact;
document.getElementById("resultDiv").appendChild(ele);
}