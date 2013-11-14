var _ = require('underscore');
(function () {
    var propertyDefinitions = function () {

    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = propertyDefinitions;
        }
        exports.propertyDefinitions = propertyDefinitions;
    }

    var defaults = {id: null, "localNamespace": null, "queryName": null, displayName: null, "description": null, 'inherited': false, "propertyType": null, "cardinality": 'single', "updatability": 'readwrite', "inherited": false, "required": false, "queryable": true, "orderable": false, "choices": null, 'openChoice': null, defaultValue: null};

    propertyDefinitions._defaults = {
        string: _.defaults({ "propertyType": "string"}, defaults),
        boolean: _.defaults({ "propertyType": "boolean"}, defaults),
        decimal: _.defaults({ "propertyType": "decimal", 'precision': '64', "minValue": Number.MIN_VALUE, "maxValue": Number.MAX_VALUE}, defaults),
        integer: _.defaults({ "propertyType": "integer", "minValue": Number.MIN_VALUE, "maxValue": Number.MAX_VALUE}, defaults),
        datetime: _.defaults({ "propertyType": "datetime", 'resolution': 'time'}, defaults),
        uri: _.defaults({ "propertyType": "uri"}, defaults),
        id: _.defaults({ "propertyType": "id"}, defaults),
        html: _.defaults({ "propertyType": "html"}, defaults)
    };

    propertyDefinitions.create = function (definition) {
        this._validate(definition)
        return _.defaults(definition, this._defaults[definition.propertyType]);
    };

    propertyDefinitions._validate = function (propertyDefinition) {
        if (!_.isObject(propertyDefinition))
            throw 'invalidArgument';
        if (!propertyDefinition.id)
            throw 'invalidArgument id';
        if (!propertyDefinition.localName)
            throw 'invalidArgument localName';
        if (!propertyDefinition.propertyType)
            throw 'invalidArgument propertyType';

    };


}).call(this)