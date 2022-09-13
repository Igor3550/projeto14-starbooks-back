import express from 'express';
import cors from 'cors'

const app = express()
app.use(cors())

const PORT = (process.env.PORT || 5000)

app.get('/', (req, res) => {
  res.send('Acho que deu certo hein!')
})

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
