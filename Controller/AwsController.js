const AwsService = require("../service/AwsService")

class AwsController{

    constructor(){
        this.service = new AwsService()
    }

   
    async baixarArquivoPorReferencia(req,res){

        try {
            
            const referencia = req.params.referencia;

            await this.service.downloadFile(referencia, `C:\\Users\\carlos_kviatkowsky\\Documents\\Github\\ImagensNode\\Assets\\${referencia}.jpeg`)

            res.status(200).json()

        } catch (error) {
            res.status(500).json({error})
        }
    }
    
    remover(req,res){
        try {
            const referencia = +req.params.referencia

            this.service.remover(referencia)

            res.status(200).json({
                "Message" : "Deletado"
            })

        } catch (error) {
            res.status(500).json({
                "message":"error"
            })
        }
    }

}
module.exports = AwsController