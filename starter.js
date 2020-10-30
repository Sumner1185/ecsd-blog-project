const app = require('./index.js')
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
