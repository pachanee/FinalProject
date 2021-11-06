const { Window } = require('../models')
module.exports = {
    // get all user
    async index(req, res) {
        try {
            const windows = await Window.findAll()
            res.send(windows)
        } catch (err) {
            res.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },
    // create user
    async create(req, res) {
        try {
            const window = await Window.create(req.body)
            res.send(window.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create window incorrect'
            })
        }
    },
    // edit user, suspend, active
    async put(req, res) {
        try {
            await Window.update(req.body, {
                where: {
                    id: req.params.windowId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update window incorrect'
            })
        }
    },
    // delete user
    async remove(req, res) {
        try {
            const window = await Window.findOne({
                where: {
                    id: req.params.windowId
                }
            })
            if (!window) {
                return res.status(403).send({
                    error: 'The information was incorrect'
                })
            }
            await window.destroy()
            res.send(window)
        } catch (err) {
            res.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },
    // get user by id
    async show(req, res) {
        try {
            const window = await Window.findById(req.params.windowId)
            res.send(window)
        } catch (err) {
            req.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },
}