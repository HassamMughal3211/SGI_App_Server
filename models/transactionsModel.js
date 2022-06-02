const moongose = require('mongoose');
const bcrypt = require("bcryptjs");

const transactionSchema = new moongose.Schema({
    year: {
        type: String,
        required: true
    },
    month: {
        type: String
    },
    dateTime: {
        type: Date,
        default: new Date()
    },
    custName: {
        type: String
    },
    custContactNumber: {
        type: String
    },
    brand: {
        type: String
    },
    brandService: {
        type: String
    },
    packageName: {
        type: String
    },
    saleType: {
        type: String
    },
    salePerson: {
        type: String
    },

    amount: {
        type: String
    },
    discount: {
        type: String
    },
    additionalCharges: {
        type: String
    },
    total: {
        type: String
    },
    discription: {
        type: String
    },
    detailDiscription: {
        type: String
    },
    invoiceLink: {
        type: String
    },

});



const Transaction = new moongose.model("transactions", transactionSchema);

module.exports = Transaction;