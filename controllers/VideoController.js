import models from "../models";

export default {
    add: async (req,res,next) =>{
        try{ 
            const reg = await models.Video.create(req.body);
            res.status(200).json(reg);
        }catch (e) {
            res.status(500).send({
                message: "Ocurrio un error"
            });
            next(e);
        }
    },
    list: async (req,res,next) =>{
        try {
            let valor = req.body.valor;
            const reg = await models.Video.find()
            .sort({"createdAt":-1});
            
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: "Ocurrio un error"
            });
            next(e);
        }
    },
    remove: async (req,res,next) =>{
        const getId = req._parsedUrl.query.replace("0=","");
        try {
            const reg = await models.Video.findOne({id_video: getId});
            const reg2 = await models.Video.deleteOne(reg);
            res.status(200).json(reg2);
        } catch (e) {
            res.status(500).send({
                message: "Ocurrio un error"
            });
            next(e);
        }
    }
}