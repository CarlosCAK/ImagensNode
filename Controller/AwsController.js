const AwsService = require("../service/AwsService")

class AwsController{

    constructor(){
        this.service = new AwsService()
    }

   
    async baixarArquivoPorReferencia(req,res){

        try {
            
            const referencia = req.params.referencia;

            await this.service.downloadFile(referencia, `C:\\Users\\carlos_kviatkowsky\\Documents\\Github\\ImagensNode\\Assets\\${referencia}`)

            res.status(200).json()

        } catch (error) {
            res.status(500).json({error})
        }
    }
    
   

}
module.exports = AwsController