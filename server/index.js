const PORT = 8000 


const app = require("./app/app.js")
app.listen(PORT, async () => {
    console.log(`server start http://localhost:${PORT}`)
})