import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

export const app = new express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello world.')
})

app.listen(port, () => {
  console.log('Started listening on port ' + port + '.')
})

// MONGOOSE

mongoose.connect('');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', () => {
  console.log('Connected to database.');
})

export default app;