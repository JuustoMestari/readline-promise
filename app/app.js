
const sprintf   = require('sprintf-js').sprintf;
const fs=require("fs");
const readline = require('readline-promise').default;
async function main() {
     //Stop connection before exiting
     ['SIGHUP','SIGINT','SIGTERM'].forEach(signal=>{
        process.on(signal, shutDown);
    }); 

    const rlp = readline.createInterface({
        terminal: false,
        input: fs.createReadStream("input/input.example")
      });
      console.log("START");
      await rlp.forEach((line, index) => {
        console.log(line);
      });
      console.log("DONE");
}



main().catch((err) => {
    log.error(sprintf("Main error catch : %1$s",err));
    process.exit()
});

async function shutDown(){
    log.error("Caught interrupt signal, exit");
    process.exit();
}