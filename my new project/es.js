// learn destrucring basically to get array items it is another method
/*function getarray(){
    return [1,2];
}
const [x,y,z]=getarray();
console.log(x);
console.log(y);
console.log(z);*/



//now we lern maps in this first we modified array then we access modified array(maps)
/*var myarray=[1,2,3];
const newarray=myarray.map((e) => (e+1));
console.log(myarray);
console.log(newarray); */



//filter do the same thing as of array
/*var myarray=[10,20,50];
//const newarray=myarray.map((e)=> (e<50));
const newarray=myarray.filter((e)=> (e<50));
console.log(myarray);
console.log(newarray);*/



//now we learn about Es6 version
/*function hello(name="world"){//here "world" is default parameters if name not passed through function
        console.log("hello "+name);
}
hello("shubham");*/

//this ios templete literal
/*console.log("apple\nbananna\ngrapes\nmango");
console.log(`
apple
bananna
grapes
mango
`);*/


//scooping it is basically range of function
/*function outer(){
    var name1="xyz";
    let name2="pqr"

    function inner(){
        var name1="xxyyzz";
        console.log(name1);  
    }
    inner();
    console.log(name1)
}
outer();*/

//synchronous js     and     asynchronous njs
// in synchronouus firstly it fetch out all data at same time then go for other
// in asynchronous it send to another queue it promise it fetch data in future 
/*console.log(fetch("https://jsonplaceholder.typicode.com/users")
.then((result)=> result.json())  //jason convert any data into key value pairs
.then((data) => console.log(data))
); */

console.log("----------------------------");



//asynchronous await is same thing just fetch data in readable form
const getData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
}
getData();