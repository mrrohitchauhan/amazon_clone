const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "your stripe secret key"
);

//your find your secret key under developer > api section in left menu 


const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Well its working..");
});

app.post("/api/payment/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(total),
    currency: "INR",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));
