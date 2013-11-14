(function () {
    var _ = require('underscore');
    var propertyDefinitions = require('../model/propertyDefinitions');
    var types = function () {

    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = types;
        }
        exports.types = types;
    }

    types.base =
        [
            {"id": "cmis:relationship", "localName": "cmis:relationship", "localNamespace": null, "displayName": "CMIS Relation", "queryName": "cmis:relationship", "description": "Description of CMIS Relation Type", "baseId": "cmis:relationship", "creatable": true, "fileable": false, "queryable": false, "fulltextIndexed": false, "includedInSupertypeQuery": true, "controllablePolicy": false, "controllableACL": false, "typeMutability": {"create": true, "update": false, "delete": false}, "allowedSourceTypes": [], "allowedTargetTypes": []},
            {"id": "cmis:item", "localName": "cmis:item", "localNamespace": null, "displayName": "CMIS Item", "queryName": "cmis:item", "description": "Description of CMIS Item Type", "baseId": "cmis:item", "creatable": true, "fileable": true, "queryable": true, "fulltextIndexed": false, "includedInSupertypeQuery": true, "controllablePolicy": false, "controllableACL": true, "typeMutability": {"create": true, "update": false, "delete": false}},
            {"id": "cmis:document", "localName": "cmis:document", "localNamespace": null, "displayName": "CMIS Document", "queryName": "cmis:document", "description": "Description of CMIS Document Type", "baseId": "cmis:document", "creatable": true, "fileable": true, "queryable": true, "fulltextIndexed": false, "includedInSupertypeQuery": true, "controllablePolicy": false, "controllableACL": true, "typeMutability": {"create": true, "update": false, "delete": false}, "versionable": false, "contentStreamAllowed": "allowed"},
            {"id": "cmis:policy", "localName": "cmis:policy", "localNamespace": null, "displayName": "CMIS Policy", "queryName": "cmis:policy", "description": "Description of CMIS Policy Type", "baseId": "cmis:policy", "creatable": true, "fileable": false, "queryable": false, "fulltextIndexed": false, "includedInSupertypeQuery": true, "controllablePolicy": false, "controllableACL": false, "typeMutability": {"create": true, "update": false, "delete": false}},
            {"id": "cmis:folder", "localName": "cmis:folder", "localNamespace": null, "displayName": "CMIS Folder", "queryName": "cmis:folder", "description": "Description of CMIS Folder Type", "baseId": "cmis:folder", "creatable": true, "fileable": true, "queryable": true, "fulltextIndexed": false, "includedInSupertypeQuery": true, "controllablePolicy": false, "controllableACL": true, "typeMutability": {"create": true, "update": false, "delete": false}},
            {"id": "cmis:secondary", "localName": "cmis:secondary", "localNamespace": null, "displayName": "Secondary Type", "queryName": "cmis:secondary", "description": "Description of Secondary Type Type", "baseId": "cmis:secondary", "creatable": false, "fileable": false, "queryable": false, "fulltextIndexed": false, "includedInSupertypeQuery": true, "controllablePolicy": false, "controllableACL": true, "typeMutability": {"create": true, "update": false, "delete": false}}
        ];

    var inheritance = ['localNamespace', 'baseId', 'creatable', 'fileable', 'queryable', 'controllablePolicy', 'controllableACL', 'fulltextIndexed', 'includedInSupertypeQuery', 'typeMutability'];
//    var defaults = { "localNamespace": null, "queryName": null, "description": null, "creatable": true, "fileable": false, "queryable": false, "fulltextIndexed": false, "includedInSupertypeQuery": true, "controllablePolicy": false, "controllableACL": true, "typeMutability": {"create": true, "update": true, "delete": true}, propertyDefinitions: null};
//    types._defaults = {
//        relationship: _._defaults({ "baseId": "cmis:relationship", "allowedSourceTypes": [], "allowedTargetTypes": []}, defaults),
//        item: _._defaults({ "baseId": "cmis:item", "fileable": true, "queryable": true, "controllableACL": true}, defaults),
//        document: _._defaults({ "baseId": "cmis:document", "fileable": true, "queryable": true, "controllableACL": true, "versionable": false, "contentStreamAllowed": "allowed"}, defaults),
//        policy: _._defaults({"baseId": "cmis:policy"}, defaults),
//        folder: _._defaults({ "baseId": "cmis:folder", "fileable": true, "queryable": true, "controllableACL": true}, defaults),
//        secondary: _._defaults({"baseId": "cmis:secondary", "creatable": false, "controllableACL": true}, defaults)
//    };
    var collection = [];
    _(types.base).each(function (type) {
        collection.push(type);
    });
    var set = function (type) {
        collection.push(type);
    };

    var get = function (typeId) {
        return _(collection).find(function (type) {
            return type.id === typeId;
        });
    };

    types.get = function (typeId) {
        return get(typeId)
    };

    types.save = function (definition) {
        types._validate(definition);
        var parentType = types.get(definition.parentId);
        var type = _.defaults(definition, _.pick(parentType, inheritance));
        _(type.propertyDefinitions).each(function (propertyDefinition) {
            propertyDefinition = propertyDefinitions.create(propertyDefinition);
        });

        set(type);
        return type;
    };

    types._validate = function (type) {
        if (!_.isObject(type))
            throw 'invalidArgument';
        if (!type.id)
            throw 'invalidArgument id';
        if (!type.localName)
            throw 'invalidArgument localName';
        if (!type.baseId)
            throw 'invalidArgument baseId';
        if (!type.parentId)
            throw 'invalidArgument parentId';

    };


}).call(this)