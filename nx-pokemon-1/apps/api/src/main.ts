import express from 'express';

import { pokemon } from './pokemon';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API Arghun' });
});

app.get('/pokemon', (_, res) => {
  res.send(pokemon);
});

app.get('/search', (req, res) => {
  const search = ((req.query.q as string) ?? '').toLowerCase();

  res.send(
    pokemon.filter(({ name: { english } }) =>
      english.toLowerCase().includes(search)
    )
  );
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
