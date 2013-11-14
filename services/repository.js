(function () {

    var repository = require('../model/repository');
    var types = require('../model/types');
    /**
     * Returns a list of CMIS repositories available from this CMIS service endpoint.
     **/
    exports.getRepositories = function () {
        return repository;
    };

    /**
     * Returns information about the CMIS repository, the optional capabilities it supports and its access control information if applicable.
     **/
    exports.getRepositoryInfo = function (repositoryId) {
        return repository;
    };

    /**
     * Returns the list of object-types defined for the repository that are children of the specified type.
     **/
    exports.getTypeChildren = function (repositoryId, typeId, includePropertyDefinitions, maxItems, skipCount) {
        if (!typeId) {
            return {'types': types.base, "hasMoreItems": false, "numItems": types.base.length}
        }

    };


    /**
     * Returns the set of the descendant object-types defined for the Repository under the specified type.
     **/
    exports.getTypeDescendants = function (repositoryId, typeId, depth, includePropertyDefinitions) {
        //todo
    };

    /**
     * Gets the definition of the specified object-type.
     **/
    exports.getTypeDefinition = function (repositoryId, typeId) {
        //todo
    };

    /**
     * Creates a new type definition that is a subtype of an existing specified parent type.
     **/
    exports.createType = function (repositoryId, type) {
        return types.save(type);
    };

    function _create_document_type(type) {
        var _default = {"fulltextIndexed": false,
            "localName": "DocumentLevel1",
            "fileable": true,
            "contentStreamAllowed": "allowed",
            "includedInSupertypeQuery": true,
            "queryName": "DocumentLevel1",
            "controllablePolicy": false,
            "creatable": true,
            "id": "DocumentLevel1"}
    }

    function _create_relationship_type(type) {

    }


    /**
     * Updates a type definition.
     **/
    exports.updateType = function (repositoryId, type) {
        //todo
    };

    /**
     * Deletes a type definition.
     **/
    exports.deleteType = function (repositoryId, typeId) {
        //todo
    };

})();