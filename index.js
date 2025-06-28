const express = require('express');
const app = express();
const port = process.env.PORT || 8081; // <-- TRÈS IMPORTANT : Elastic Beanstalk définit le port via une variable d'environnement

app.get('/', (req, res) => {
res.send('AUTRE test: Automated pipeline deployment successful Moïse PANA !');
});

app.listen(port, () => {
  console.log(`Application en cours d'exécution sur le port ${port}`);
});