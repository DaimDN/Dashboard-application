# JP Morgan Dashboard System 
#### This application is made for JP Morgan 




const date = new Date();
const today = date.toLocaleDateString().split("/").join("");
const path = './files/' + today + ".csv";

  if (fs.existsSync(path)) {
    var filename = path;
    csv()
        .fromFile(filename)
        .then((CsvFileData)=>{
           
            connection.query("SELECT * FROM users", function(error, data, fields) {
                if (error) throw error;
            
                const MYSQLdata = JSON.parse(JSON.stringify(data));
                

                if (MYSQLdata.length == CsvFileData.length){
                    console.log("File is already there");
                    var localFileStream= fs.createReadStream(path);
                    var remoteFileStream = hdfs.createWriteStream(path);
                    
                    localFileStream.pipe(remoteFileStream);
 
                    remoteFileStream.on('error', function onError (err) {
                        console.log("error");
                    });
                    
                    remoteFileStream.on('finish', function onFinish () {
                            console.log("finished");
                    });          
                }
                else{
                    const ws = fs.createWriteStream(path);
                    connection.query("SELECT * FROM users", function(error, data, fields) {
                      if (error) throw error;
                  
                      const jsonData = JSON.parse(JSON.stringify(data));

                      fastcsv
                        .write(jsonData, { headers: true })
                        .on("finish", function() {
                          console.log(path +" path has been written successfully");
                        })
                        .pipe(ws);
                    });
                }
                
        
            });
        
        });
  }
  else{     
    const ws = fs.createWriteStream(path);


        connection.query("SELECT * FROM users", function(error, data, fields) {
          if (error) throw error;
      
          const jsonData = JSON.parse(JSON.stringify(data));
      
          fastcsv
            .write(jsonData, { headers: true })
            .on("finish", function() {
              console.log(path +" path has been written successfully");
            })
            .pipe(ws);
        });

  }
