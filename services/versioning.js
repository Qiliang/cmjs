/**
 * Create a private working copy (PWC) of the document. See section \ref{dm:checkout}~\nameref{dm:checkout}.
 **/
exports.checkOut = function (repositoryId, objectId) {
    //todo   
};

/**
 * Reverses the effect of a check-out . Removes the Private Working Copy of the checked-out document, allowing other documents in the version series to be checked out again. If the private working copy has been created by \cmisservicelink{createDocument}, \cmisservicelink{cancelCheckOut} MUST delete the created document. See section \ref{dm:discardingcheckout}~\nameref{dm:discardingcheckout}.
 **/
exports.cancelCheckOut = function (repositoryId, objectId) {
    //todo   
};

/**
 * Checks-in the Private Working Copy document.
 **/
exports.checkIn = function (repositoryId, objectId, major, properties, contentStream, checkinComment, policies, addACEs, removeACEs) {
    //todo   
};

/**
 * Get the latest document object in the version series.
 **/
exports.getObjectOfLatestVersion = function (repositoryId, versionSeriesId, major, filter, includeRelationships, includePolicyIds, renditionFilter, includeACL, includeAllowableActions) {
    //todo   
};

/**
 * Get a subset of the properties for the latest document object in the version series.
 **/
exports.getPropertiesOfLatestVersion = function (repositoryId, versionSeriesId, major, filter) {
    //todo   
};

/**
 * Returns the list of all document objects in the specified version series, sorted by cmis:creationDate descending.
 **/
exports.getAllVersions = function (repositoryId, versionSeriesId, filter, includeAllowableActions) {
    //todo   
};