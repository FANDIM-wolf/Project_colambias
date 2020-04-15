const cluster = require (id: 'cluster');
const os =require (id 'os');
const pid = process.pid;

// worker is our server

if (cluster.isMaster){
  const cpusCount = os.cpus().length;
  console.log('CPUs: ${cpusCount}');
  console.log('Master started. Pid: ${pid}');
  for (let i = 0 ; i <cpusCount-1; i++){
     const worker = console.fork();
     // take more cores but  we put last one
     worker.on(event: 'exit' , listener:() => {
         console.log ('Worker is died ${worker.process.pid}');
         cluster.fork();

     }); 

     worker.send( message: 'Server has started  to work');
     worker.on(event:'message', listener:(msg) =>{
     	console.log('Message from worker ${worker.process.pid} : ${JSON.stringify(msg)}');
     } );
  }
  
}
if (cluster.isWorker)
{
  require(id: './worker.js'); 
  process.on(event:'message' , listener(msg) => {
  	console.log('message from Master: ${msg}');
  });
  process.send (message:{text: 'Hello', pid});
}