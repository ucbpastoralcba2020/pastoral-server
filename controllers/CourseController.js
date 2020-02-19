import models from "../models";

export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.Course.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msg: "Ocurrio un error"
            });
            next(e);
        }
    },

    list: async (req, res, next) => {
        try {
            const reg = await models.Course.find()
                .sort({ createdAt: -1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msg: "Ocurrio un error"
            });
            next(e);
        }
    },

    offers: async (req, res, next) => {
        try {
            const reg = await models.Course.find()
                .sort({ "createdAt": -1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msg: "Ocurrio un error"
            });
            next(e);
        }
    },
    update: async (req, res, next) => {
        try {
            const reg = await models.Course.updateOne({ id_course: req.body.id_course }, {
                name: req.body.name,
                parallel: req.body.parallel,
                quota: req.body.quota,
                place: req.body.place,
                duration: req.body.duration,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                teacher: req.body.teacher,
                description: req.body.description,
                headline: req.body.headline,
                price: req.body.price,
                inOffer: req.body.inOffer,
                image: req.body.image,
                nameImg: req.body.nameImg
            });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msg: "Ocurrio un error"
            });
            next(e);
        }
    },
    addStudent: async (req, res, next) => {
        try {
            const reg = await models.Course.updateOne({ _id: req.body.id_course }, { $push: { enrolled_students: req.body.student } });
            const reg2 = await models.Course.findOne({ _id: req.body.id_course });
            res.status(200).json(reg2);
        } catch (e) {
            res.status(500).send({
                msg: "Ocurrio un error"
            });
            next(e);
        }
    },
    removeStudent: async (req, res, next) => {
        try {
            const reg = await models.Course.updateOne({ _id: req.body.id }, { $pull: { enrolled_students: { _id: req.body.idStudent } } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msg: "Ocurrio un error"
            });
            next(e);
        }
    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Course.updateOne({ id_course: req.body.id_course }, { removed: true });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msg: "Ocurrio un error"
            });
            next(e);
        }
    }   
}