const Transaction = require("../models/transactionsModel");

exports.addNew = async (req, res) => {
    try {
        var data = await Transaction.create(req.body);
        data.invoiceLink = `/invoice/record/${data._id}`;
        data.dateTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi'})
        var update = await Transaction.findOneAndUpdate({
            _id: data._id
        }, data, {
            new: true, //return new updated data
            runValidators: true //validate fields before updating
        })
        res.status(200).json({
            status: "success",
            data:update,
        })
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}

exports.getAll = async (req, res) => {
    try {
        var data = await Transaction.find();
        res.status(200).json({
            status: "success",
            data,
        })
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}

exports.getSpecific = async (req, res) => {
    try {
        var { _id } = req.body;
        var data = await Transaction.find(_id);
        res.status(200).json({
            status: "success",
            token,
            data,
        })
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}