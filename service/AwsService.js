const s3 = require("../configuration/AwsConfiguration")
const fs = require("fs");

class AwsService{

 

   uploadFile(filePath, bucketName, keyName){


    const fileContent = fs.readFileSync(filePath);
  
    const params = {
      Bucket: bucketName,  // Nome do seu bucket S3
      Key: keyName,        // Nome do arquivo no S3
      Body: fileContent    // Conteúdo do arquivo
    };
  
    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Erro ao fazer o upload:', err);
      } else {
        console.log('Arquivo carregado com sucesso:', data.Location);
      }

    });
  };
  
  // Exemplo de uso
  
  
  // Função para baixar um arquivo do S3
   downloadFile(keyName, downloadPath){
      const params = {
        Bucket: "bucket",
        Key: keyName  
      };
    
      const file = fs.createWriteStream(downloadPath);
    
      s3.getObject(params).createReadStream().pipe(file);
    
      file.on('close', () => {
        console.log('Arquivo baixado com sucesso:', downloadPath);
      });
    };

    remover(referencia){

    }
    
    // Exemplo de uso

}

// Função para fazer o upload de um arquivo


module.exports = AwsService;

// uploadFile('./caminho/do/seu/arquivo.txt', 'nome-do-seu-bucket', 'arquivo-no-s3.txt');
// downloadFile('nome-do-seu-bucket', 'arquivo-no-s3.txt', './caminho/do/arquivo-baixado.txt');
