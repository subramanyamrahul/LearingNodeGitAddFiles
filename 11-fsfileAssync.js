const {readFile , writeFile} = require('fs')
readFile('./content/sub/First.txt' , 'utf-8' , (err , data)=>{
 if(err){
  console.log(err);
  return ;
 }
 const first = data;


 readFile('./content/sub/First.txt' , 'utf-8' , (err , data)=>{
  if(err){
    console.log(err)
    return
  }
  const second = data;

  
  writeFile('./content/sub/Async-result.txt' ,
  `Here is the Result : ${first} , ${second}`,
  (err , data )=>{
    if(err){
      console.log(err)
      return
    }
    console.log('Done with the task ')
  }
  )

 })
})
console.log('starting the next task ')

