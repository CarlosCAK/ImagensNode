const AWS = require('aws-sdk');

// Configuração das credenciais AWS

AWS.config.update({
  region: "us-east-1",  // Substitua pela sua região
  accessKeyId: "usuario",
  secretAccessKey:'senha'
});



// Criação da instância do S3
const s3 = new AWS.S3();

module.exports = s3