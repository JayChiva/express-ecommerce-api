import express from 'express';
import recommended from './routes/recommended.js';

const port = process.env.Port || 8000;
const app = express();

app.get('/', (request, response) => {
  return response.send({ msg: 'Hello world' });
});

app.use('/api', recommended);

app.listen(port, () => console.log(`server is running on port ${port}`));
