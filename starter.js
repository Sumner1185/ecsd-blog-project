const app = require('./index.js')
const PORT = 3000; 



app.listen(PORT,() =>  {
    console.log(`API is running on port ${PORT}`)
})