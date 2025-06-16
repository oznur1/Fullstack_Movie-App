const bodyParse =(req)=>{
return new Promise ((resolve,reject)=>{
    try{
     let body="";
     
     //frontendden body'nin her parçası geldiğinde onu al ve yukarıdaki değişkene ekle
    req.on("data",(chunk)=>{body+=chunk;

    });
    //yüklenme bittiğinde json verisini js verisine cevir
    req.on("end",()=>{
    resolve(JSON.parse(body))
    })

    }catch(err){
        //hata oluşursa hatayı döndür
        reject(err)
    }
})
}

module.exports=bodyParse;