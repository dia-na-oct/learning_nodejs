//reading files 
 const fs=require('fs');

// fs.readFile('./blog.txt',(err,data)=>{

// console.log(data.toString());
// });


//writing file
// fs.writeFile('./blog.txt','hello',()=>{
//     console.log("written");
// })



//dir
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets',(err)=>{
//     console.log('done');
// });}else{
//     fs.rmdir('./assets',(err)=>{
//         console.log('done delete');
//     });
// }


const readstream= fs.createReadStream('./blog.txt');
const writestream= fs.createReadStream('./blog2.txt');

console.log(readstream);
readstream.on('data',(chunk)=>{
    console.log('__________________________________');
    console.log(chunk.toString());
    writestream.write('\n');
    writestream.write(chunk);
})

// or we do 1.pipe(2);

