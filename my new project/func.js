const items ={
    food: 1000,
    drinks: 200,
};
var cart=0;//we can declare after function also as js has hostimg property it take declaration to top not define
/*function addToCart(){ //addToCart is camel casing used in naming of codes,   here parameters are used
    cart+=items.food;
}
addToCart();// here arguments are used
console.log( "cart: ", cart);*/



/*function addToCart(parameters)
{
  cart+=parameters;
}
addToCart(items.food);
addToCart(items.drinks);
console.log(cart)*/



//cahnging into arrow function
/*var addToCart=(item)=>{
    return cart+=item;
};
var addCartValue=(item)=>{
    cart=addToCart(item);
};
addCartValue(items.food);
console.log(cart);*/
  


//now how to push array
/*var myarray=[1,2,3,4,5,6];
console.log(myarray);
myarray.push(7);
console.log(myarray);
myarray.pop();
console.log(myarray);
myarray.unshift(0);//for pushing from beggining
console.log(myarray);
myarray.shift();
console.log(myarray);*/





//now recursion
var num=1;
function printnum(){
    console.log(num);
    num++;

    if(num<=10){
        printnum();
    }
    else{
        return;
    }
}
printnum();