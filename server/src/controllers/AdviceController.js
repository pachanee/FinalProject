const { Advice } = require('../models')
module.exports = {
    // get all user
    async index(req, res) {
        try {
            const advices = await Advice.findAll()
            res.send(advices)
        } catch (err) {
            res.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },
    // create user
    async create(req, res) {
        try {
            const advice = await Advice.create(req.body)
            res.send(advice.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create advice incorrect'
            })
        }
    },
    // edit user, suspend, active
    async put(req, res) {
        try {
            await Advice.update(req.body, {
                where: {
                    id: req.params.adviceId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update advice incorrect'
            })
        }
    },
    // delete user
    async remove(req, res) {
        try {
            const advice = await Advice.findOne({
                where: {
                    id: req.params.adviceId
                }
            })
            if (!advice) {
                return res.status(403).send({
                    error: 'The information was incorrect'
                })
            }
            await advice.destroy()
            res.send(advice)
        } catch (err) {
            res.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },
    // get user by id
    async show(req, res) {
        try {
            const advice = await Advice.findById(req.params.adviceId)
            res.send(advice)
        } catch (err) {
            req.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },
}