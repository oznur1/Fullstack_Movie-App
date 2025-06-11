const defaultRequest =(req,res)=>{
    //cevabın durum kodunu belirle
    res.statusCode=404

    //cevaba gönderilecek içeriğin tipini header olarak ekle
    res.setHeader("Content-Type", "application/json")

    //cevabın iceriğini belirle
  res.write(JSON.stringify({message:"istek adresi tanımsız"}))

    //cevabı clienta gönder
    return res.end( )
}

module.exports =defaultRequest;