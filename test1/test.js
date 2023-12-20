

// //test if js is running 
// const name =' dji';
// console.log(name);


// the gobal object in node is global
console.log(global);
setTimeout(() => {
    console.log('in the time out');
clearInterval(int);
}, 3000);

const int= setInterval(()=>{
    console.log('in the time out');

},1000);// all 1s  

console.log(__dirname);
