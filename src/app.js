import express from 'express';
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('Acho que deu certo hein!')
})

app.listen(5000, () => console.log('Listen on port 5000'))
