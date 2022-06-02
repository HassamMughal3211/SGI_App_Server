const Transaction = require("../models/transactionsModel");

exports.addNew = async (req, res) => {
    try {
        var data = await Transaction.create(req.body);
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
        var {_id} = req.body;
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