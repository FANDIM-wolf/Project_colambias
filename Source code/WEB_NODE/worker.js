const http = require(id:'http');
const pid = process.pid;


http
   
   .createServer (requestListener: (req, res ) =>{
        for (let i = 0; i<1e7; i++) {}
        res.end(chunk:'Hello Server from Node,js');	

   })
   .listen(port:8800, listeningListener () => 

   {

   	console.log('Server started. Pid: ${pid}');
     


   });