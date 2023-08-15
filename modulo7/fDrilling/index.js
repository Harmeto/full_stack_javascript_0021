const express = require("express")
const morgan = require("morgan")
const userRouter = require("./routes/user.routes")
const bootcampRouter = require("./routes/bootcamp.routes")
// const sequelize = require("./config/database")
const db = require("./models")
const dotenv = require("dotenv").config()

const PORT = process.env.APP_URI || 4000

const app = express()

// request middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

//json middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use('/api/user', userRouter);
app.use('/api/bootcamp', bootcampRouter);

(async function(){
  try {
    await db.sequelize.sync({force: false}).then(console.log('conected to db'))
    app.listen(PORT, ()=>{console.log('server running at ', PORT);})
  } catch (error) {
    console.log(error);
  }
})()