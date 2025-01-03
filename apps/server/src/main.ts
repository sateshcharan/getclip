/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
// import prisma from './prisma.service';
// import { supabase } from './supabase';

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', async (req, res) => {
  //local
  // const users = await prisma.user.findMany();
  // res.send({ message: users[0] });

  // supabase
  // const { data, error } = await supabase.from('User').select('*');
  // if (error) {
  //   return res.status(400).json({ error: error.message });
  // }
  // res.send({ message: data[0] });

  //test
  res.send({ message: 'Hello API' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
