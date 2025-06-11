const fs =require("fs")

const getRequest =(req,res)=>{    
    
    //urlin nereden başlayacagını berlirtir ve nereden biteceğini
    // lastIndexOf :sondaki elamana kadar alı
 const path =req.url.substring(0,req.url.lastIndexOf("/"))
 
 // id erişmek istiyorsak
 const id=req.url.split("/")[3]
 
 // temel url istek atılırsa tüm filmlere istek atılırsa
 if(req.url==="/api/movies"){

    // 1) json dosyasından filmleri al
  const movies=  fs.readFileSync("./data/movies.json", "utf-8")
    
  //2) clienta cevap gönder
    return res.end(movies)
   
 }
 
 //! yola id eklenirse bir film gönder (tek bir film eklenirse ne olursa)
 if((path==="/api/movies" && id)){

  //1) json dosyasından filmleri al
  const data=JSON.parse( fs.readFileSync("./data/movies.json", "utf-8"))  
   
  //2) belirli id'daki verileri almak için
   const movie=data.find((i)=>i.id===id)
  
   //3) film bulunursa clienta gönder
  if (movie){
  return res.end(JSON.stringify(movie))
 }
 
 //4) film bulunamazsa
 res.writeHead(404)
  return res.end(JSON.stringify({message: "Aranılan film bulunamadı"}))
 }

  
 
 // yol yanlışsa hata gönder
 res.writeHead(404)
    return res.end ("yol bulunamadı")
 

    

}

module.exports =getRequest;