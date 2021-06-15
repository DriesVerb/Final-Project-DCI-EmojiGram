


const signUp = require('./routes/signUpRouter')
app.use('/auth/signUp', signUpRouter)

const logIn = require('./routes/logInRouter')
app.use('/auth/logIn', logInRouter)