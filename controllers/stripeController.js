const stripe = require("stripe")('sk_test_51L6vf2AA98Nftlb4aN32gIY2yprnAp9HTQcNmIb0gsTUEmaLRvvg6kcpgRrW6IVWZI4H6NvJzWcyZvhRT7KekX3r00KXQMjRLy');


const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

exports.paymentIntent = async (req, res) => {
    const { items , userName } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
        metadata:{
            userName
        }
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}

// app.post("/create-payment-intent", async (req, res) => {
//     const { items } = req.body;

//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(items),
//         currency: "eur",
//         automatic_payment_methods: {
//             enabled: true,
//         },
//     });

//     res.send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });