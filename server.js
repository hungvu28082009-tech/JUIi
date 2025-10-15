const express = require('express');
const app = express();
app.use(express.json());

const VERIFY_TOKEN = "abc123"; // đổi thành mã bạn muốn

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', (req, res) => {
  console.log(req.body);
  res.status(200).send('EVENT_RECEIVED');
});

app.listen(10000, () => console.log('Webhook đang chạy...'));
