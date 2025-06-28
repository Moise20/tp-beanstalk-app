const express = require('express');
const app = express();
const port = process.env.PORT || 8081; // <-- TRÈS IMPORTANT : Elastic Beanstalk définit le port via une variable d'environnement

app.get('/', (req, res) => {
  res.send('Bienvenue sur Elastic Beanstalk de Moiïse PANA ');
});

app.listen(port, () => {
  console.log(`Application en cours d'exécution sur le port ${port}`);
});