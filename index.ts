import path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '../client/public/')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Web Server is running at ${PORT}.`);
});
