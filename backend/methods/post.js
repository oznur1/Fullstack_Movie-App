
const postRequest =(req,res)=>{
     // temel url istek atılırsa tüm filmlere istek atılırsa
if(req.url=== "/api/movies"){

}
else{
    res.writeHead(404)
    res.end("Geçersiz yola istek atıldı")
}
    
}

module.exports =postRequest;