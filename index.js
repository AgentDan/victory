const express = require("express")
require('dotenv').config()
const cors = require("cors")
const path = require("path");

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json({extended: true}))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'client', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
