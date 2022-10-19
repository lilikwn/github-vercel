const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const test = "test"
// hehehe

app.use(express.json());

app.get('/', (req, res)=> {
  res.status(200).json({
    status: true,
    message: 'test build docker image'
  })
})

app.listen(PORT, ()=>{
  console.log(`server berhasil berjalan pada port ${PORT}`)
})