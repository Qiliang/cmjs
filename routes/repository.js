var _ = require('underscore');
var repository = require('../services/repository');

exports.router = function (req, res) {
    if (!req.query.cmisselector && !req.query.cmisaction)
        exports.getRepositoryInfo(req, res);
    else if (req.query.cmisselector) {
        var method = ('get' + req.query.cmisselector).toLowerCase();
        _.chain(exports).functions().each(function (name) {
            if (method === name.toLowerCase())
                exports[name](req, res);
        });
    } else if (req.query.cmisaction) {
        var method = req.query.cmisaction.toLowerCase();
        _.chain(exports).functions().each(function (name) {
            if (method === name.toLowerCase())
                exports[name](req, res);
        });
    }
};

exports.getRepositoryInfo = function (req, res) {
    var repositoryId = req.params.repositoryId;
    var token = req.query.token;
    res.send(repository.getRepositoryInfo(repositoryId));
};


exports.getTypeChildren = function (req, res) {
    var repositoryId = req.params.repositoryId;
    var typeId = req.query.typeId;
    var includePropertyDefinitions = req.query.includePropertyDefinitions;
    var maxItems = req.query.maxItems;
    var skipCount = req.query.skipCount;
    var token = req.query.token;

    res.send(repository.getTypeChildren(repositoryId, typeId, includePropertyDefinitions, maxItems, skipCount));
};


exports.getTypeDescendants = function (req, res) {
    var repositoryId = req.params.repositoryId;
    var typeId = req.query.typeId;
    var depth = req.query.depth;
    var includePropertyDefinitions = req.query.includePropertyDefinitions;
    var token = req.query.token;
};


exports.getTypeDefinition = function (req, res) {
    var repositoryId = req.params.repositoryId;
    var typeId = req.query.typeId;
    var token = req.query.token;
};


exports.getCheckedOutDocs = function (req, res) {
    var repositoryId = req.params.repositoryId;
    var filter = req.query.filter;
    var maxItems = req.query.maxItems;
    var skipCount = req.query.skipCount;
    var orderBy = req.query.orderBy;
    var renditionFilter = req.query.renditionFilter;
    var includeAllowableActions = req.query.includeAllowableActions;
    var includeRelationships = req.query.includeRelationships;
    var succinct = req.query.succinct;
    var token = req.query.token;
};


exports.createDocument = function (req, res) {
    //POST

};


exports.createDocumentFromSource = function (req, res) {
    //POST

};


exports.createRelationship = function (req, res) {
    //POST

};


exports.createPolicy = function (req, res) {
    //POST

};


exports.createItem = function (req, res) {
    //POST

};


exports.bulkUpdateProperties = function (req, res) {
    //POST

};


exports.query = function (req, res) {
    //GET
    //var q (maps to the parameter \texttt{statement}) = req.query.q (maps to the parameter \texttt{statement});
    var searchAllVersions = req.query.searchAllVersions;
    var maxItems = req.query.maxItems;
    var skipCount = req.query.skipCount;
    var includeAllowableActions = req.query.includeAllowableActions;
    var includeRelationships = req.query.includeRelationships;
    var renditionFilter = req.query.renditionFilter;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.query = function (req, res) {
    //POST

};


exports.getContentChanges = function (req, res) {
    //GET
    var changeLogToken = req.query.changeLogToken;
    var includeProperties = req.query.includeProperties;
    var includePolicyIds = req.query.includePolicyIds;
    var includeACL = req.query.includeACL;
    var maxItems = req.query.maxItems;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.createType = function (req, res) {
    var repositoryId = req.params.repositoryId;
    var token = req.body.token;
    var jsonString = req.body.type;
    var type = repository.createType(repositoryId, JSON.parse(jsonString));
    res.send(201, type);
};


exports.updateType = function (req, res) {
    //POST

};


var a = { "id": "my:documentType", "baseId": "cmis:document", "parentId": "cmis:document", "displayName": "My Document Type", "description": "My new type", "localNamespace": "local", "localName": "my:documentType", "queryName": "my:documentType", "fileable": true, "includedInSupertypeQuery": true, "creatable": true, "fulltextIndexed": false, "queryable": false, "controllableACL": true, "controllablePolicy": false, "propertyDefinitions": { "my:stringProperty": { "id": "my:stringProperty", "localNamespace": "local", "localName": "my:stringProperty", "queryName": "my:stringProperty", "displayName": "My String Property", "description": "This is a String.", "propertyType": "string", "updatability": "readwrite", "inherited": false, "openChoice": false, "required": false, "cardinality": "single", "queryable": true, "orderable": true } } }
exports.deleteType = function (req, res) {
    //POST

};


exports.lastResult = function (req, res) {
    //GET
    var token = req.query.token;

};