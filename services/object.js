/**
 * Creates a document object of the specified type in the (optionally) specified location.
 **/
exports.createDocument = function (repositoryId, properties, folderId, contentStream, versioningState, policies, addACEs, removeACEs) {
    //todo
};

/**
 * Creates a document object as a copy of the given source document in the (optionally) specified location.
 **/
exports.createDocumentFromSource = function (repositoryId, sourceId, properties, folderId, versioningState, policies, addACEs, removeACEs) {
    //todo
};

/**
 * Creates a folder object of the specified type in the specified location.
 **/
exports.createFolder = function (repositoryId, properties, folderId, policies, addACEs, removeACEs) {
    //todo
};

/**
 * Creates a relationship object of the specified type.
 **/
exports.createRelationship = function (repositoryId, properties, policies, addACEs, removeACEs) {
    //todo
};

/**
 * Creates a policy object of the specified type.
 **/
exports.createPolicy = function (repositoryId, properties, folderId, policies, addACEs, removeACEs) {
    //todo
};

/**
 * Creates an item object of the specified type.
 **/
exports.createItem = function (repositoryId, properties, folderId, policies, addACEs, removeACEs) {
    //todo
};

/**
 * Gets the list of allowable actions for an object
 **/
exports.getAllowableActions = function (repositoryId, objectId) {
    //todo
};

/**
 * Gets the specified information for the object.
 **/
exports.getObject = function (repositoryId, objectId, filter, includeRelationships, includePolicyIds, renditionFilter, includeACL, includeAllowableActions) {
    //todo
};

/**
 * Gets the list of properties for the object.
 **/
exports.getProperties = function (repositoryId, objectId, filter) {
    //todo
};

/**
 * Gets the specified information for the object.
 **/
exports.getObjectByPath = function (repositoryId, path, filter, includeRelationships, includePolicyIds, renditionFilter, includeACL, includeAllowableActions) {
    //todo
};

/**
 * Gets the content stream for the specified document object, or gets a rendition stream for a specified rendition of a document or folder object.
 **/
exports.getContentStream = function (repositoryId, objectId, streamId) {
    //todo
};

/**
 * Gets the list of associated renditions for the specified object. Only rendition attributes are returned, not rendition stream.
 **/
exports.getRenditions = function (repositoryId, objectId, renditionFilter, maxItems, skipCount) {
    //todo
};

/**
 * Updates properties and secondary types of the specified object.
 **/
exports.updateProperties = function (repositoryId, objectId, properties, changeToken) {
    //todo
};

/**
 * Updates properties and secondary types of one or more objects.
 **/
exports.bulkUpdateProperties = function (repositoryId, objectIdAndChangeToken, properties, addSecondaryTypeIds, removeSecondaryTypeIds) {
    //todo
};

/**
 * Moves the specified file-able object from one folder to another.
 **/
exports.moveObject = function (repositoryId, objectId, targetFolderId, sourceFolderId) {
    //todo
};

/**
 * Deletes the specified object.
 **/
exports.deleteObject = function (repositoryId, objectId, allVersions) {
    //todo
};

/**
 * Deletes the specified folder object and all of its child- and descendant-objects.
 **/
exports.deleteTree = function (repositoryId, folderId, allVersions, unfileObjects, continueOnFailure) {
    //todo
};

/**
 * Sets the content stream for the specified document object.
 **/
exports.setContentStream = function (repositoryId, objectId, contentStream, overwriteFlag, changeToken) {
    //todo
};

/**
 * Appends to the content stream for the specified document object.
 **/
exports.appendContentStream = function (repositoryId, objectId, contentStream, isLastChunk, changeToken) {
    //todo
};

/**
 * Deletes the content stream for the specified document object.
 **/
exports.deleteContentStream = function (repositoryId, objectId, changeToken) {
    //todo
};