const http = require("http");
const getRequest =require("./methods/get")
const postRequest =require("./methods/post")
const deleteRequest =require("./methods/delete")
const defaultRequest = require("./methods/default")

//1) Server Oluştur
const server = http.createServer((req, res) => {
 // bütün cevaplara eklenicek ortak veri tipi hedaer'a ekle
 res.setHeader("Content-Type", "application/json")   

// gelen isteiğin method türüne göre cleint'a faklı cevaplar göndericez
   
switch(req.method){
    case "GET":
     // DOSYA OKU
     //İŞLİCEZ
     //KOŞULLARA BAKICAZ
     //CEVAP GÖNDER   
    return getRequest(req,res)

    case "POST":
        //GELEN CEVABI İNCELE
        //EKSİK VARSA HATA GÖNDER
        //VERİ DOĞRUYSA DİZİYE EKLE
        // JSON DOSYASINI GÜNCELLE
        //CEVAP GÖNDER
    return postRequest(req,res)

    case "DELETE":
         //GELEN CEVABI İNCELE
        //EKSİK VARSA HATA GÖNDER
        //VERİ DOĞRUYSA DİZİYE EKLE
        // JSON DOSYASINI GÜNCELLE
        //CEVAP GÖNDER
    return deleteRequest(req,res)

   default:
     //GELEN CEVABI İNCELE
        //EKSİK VARSA HATA GÖNDER
        //VERİ DOĞRUYSA DİZİYE EKLE
        // JSON DOSYASINI GÜNCELLE
        //CEVAP GÖNDER
    return defaultRequest(req,res)

}
});


//2) Listen
const port = 4090;
server.listen(port, () => {
   console.log(`Server ${port} gelen istekleri dinlemeye başladı`);
});
