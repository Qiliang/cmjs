var URL = require('url');
var repository = require('../services/repository');

exports.getRepositories = function (req, res) {
    var token = req.query.token;
    var url = URL;
    res.send(repository.getRepositories());
};