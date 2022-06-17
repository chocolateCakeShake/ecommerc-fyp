const router = require("express").Router();
const Stripe = require("stripe");
const KEY = process.env;
// console.log(KEY);
// const stripe = require("stripe")(KEY.STRIPE_KEY);
const stripe = Stripe(
  "sk_test_51LB2nFKfGRuGZz6D6nxcVdF9uhWsDPZO4iIhzZ4LTI60Fwa5SML5sRwDNObeNnG5Sga2VQk6MlY257z4IhMltKVq009WHk5mep"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
