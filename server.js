import express from 'express';

const port = process.env.Port || 8000;
const app = express();


app.listen(port, () => console.log(`server is running on port ${port}`));
