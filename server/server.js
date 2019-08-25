const express = require('express');

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const routes = require('../routes');

const app = next({ dev });

const handle = routes.getRequestHandler(app);

const PORT = 3000;

const secretData = [
  {
    title: 'Scret data 1',
    description: ' HOw to build a nuclear reactor'
  }
];

app
  .prepare()
  .then(() => {
    const server = express();

    // temp requests here
    server.get('/api/v1/secret', (req, res) => {
      return res.json({ msg: secretData });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`READY ON PORT ${PORT}`);
    });
  })

  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
