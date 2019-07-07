ServerClass=function(){};
ServerClass.prototype.startServer = function (){
let http = require("http");
let express = require("express");
let app = express();
let cors = require('cors');
let ClassConf = require("./config/config"),objConf=new ClassConf();
const CONFI = objConf.getConfig("dev");
const bodyParser = require('body-parser');
let whitelist = [CONFI.path, CONFI.clientpath];
let corsOptions = {
  origin: function (origin, callback) {
     if(origin)
     {
        if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
        } else {
        callback(new Error('Not allowed by CORS'))
        }
    }
    else
    callback(null, true)
  }
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let server =  http.createServer(app);
let os = require("os");
server.listen(CONFI.port,  function(){
    console.log(" Express server listening on port " +CONFI.port);
    console.log( server.address());

    console.log( os.hostname());
  });

let routerNew = express.Router();


routerNew.get('/getdata/:id' ,  (req,res)=> {

    res.status(200).send([{price:10,name:"name",i:"res",d:"details of the report"}]);
  
});

routerNew.post('/post/:id' ,  (req,res)=> {
  console.log("request Body " +req.body.em+" "+req.body.pass);
  res.status(200).send([{price:10,name:"name",i:"res",d:"details of the report"}]);

});

app.use(routerNew);
}

var serverObj = new ServerClass();
serverObj.startServer();