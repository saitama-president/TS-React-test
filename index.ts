import * as Express from "express"

const app:Express.Express=Express();
const router:Express.Router = Express.Router();

const listen_port=9900;

app.listen(
  listen_port
  ,()=>{
    console.log(`SERVER PROCESS START ${listen_port}`);
    app.use(Express.static(__dirname +"/public" ));
    
  }
);


process.on("exit",()=>{  
  
});

process.on("SIGINT",()=>{
  console.log("SIGINT");
  process.exit();
});

