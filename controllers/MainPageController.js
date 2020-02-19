import models from "../models";

export default {
    add: async (req,res,next) =>{
        try{ 
            const reg = await models.Main.create(req.body);
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
            const reg = await models.Main.find();            
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: "Ocurrio un error"
            });
            next(e);
        }
    },
    update: async (req, res, next) => {

        try {
            const reg = await models.Main.updateOne({ id_main: req.body.id_main }, {

                slider1: req.body.slider1,
                image1: req.body.image1,
                nameImg1: req.body.nameImg1,

                slider2: req.body.slider2,
                image2: req.body.image2,
                nameImg2: req.body.nameImg2,

                slider3: req.body.slider3,
                image3: req.body.image3,
                nameImg3: req.body.nameImg3,

                title1: req.body.title1,
                paragraaf1: req.body.paragraaf1,

                title2: req.body.title2,
                paragraaf2: req.body.paragraaf2,

                title3: req.body.title3,
                paragraaf3: req.body.paragraaf3,

                aboutUs: req.body.aboutUs,
                image4: req.body.image4,
                nameImg4: req.body.nameImg4,

                paragraafCourses: req.body.paragraafCourses,

                paragraafGallery: req.body.paragraafGallery
            })
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: "Ocurrio un error"
            });
            next(e);
        }
    }
}