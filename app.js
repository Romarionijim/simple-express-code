const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Successfully Deployed to EC2 using Terraform!');
});

app.get('/about', (req, res) => {
    res.send("Successfully Routed!!!")
})

app.get('/edit', (req, res) => {
    res.send("GET edit route!! >>>><<<<<")
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
