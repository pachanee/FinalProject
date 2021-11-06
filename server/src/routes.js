const UserController = require('./controllers/UserController')
const AdviceController = require('./controllers/AdviceController')
const WindowController = require('./controllers/WindowController')
const UserAuthenController = require('./controllers/UserAuthenController')


const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    /* RESFUL Api for users management */
    // create user
    app.post('/user',
        UserController.create
    )
    // edit user, suspend, active
    app.put('/user/:userId',
        UserController.put
    )
    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )
    // get user by id
    app.get('/user/:userId',
        UserController.show
    )
    // get all user
    app.get('/users',
        isAuthenController,
        UserController.index
    )
    app.post('/login',
        UserAuthenController.login
    )

    // create advice
    app.post('/advice',
        AdviceController.create
    )
    // edit advice
    app.put('/advice/:adviceId',
        AdviceController.put
    )
    // delete advice
    app.delete('/advice/:adviceId',
        AdviceController.remove
    )
    // get advice by id
    app.get('/advice/:adviceId',
        AdviceController.show
    )
    // get all advice
    app.get('/advices',
        AdviceController.index
    )

    // create window
    app.post('/window',
        WindowController.create
    )
    // edit window
    app.put('/window/:windowId',
        WindowController.put
    )
    // delete window
    app.delete('/window/:windowId',
        WindowController.remove
    )
    // get window by id
    app.get('/window/:windowId',
        WindowController.show
    )
    // get all window
    app.get('/windows',
        WindowController.index
    )
}