exports.getChildren = function (req, res) {
    //GET
    var maxItems = req.query.maxItems;
    var skipCount = req.query.skipCount;
    var filter = req.query.filter;
    var includeAllowableActions = req.query.includeAllowableActions;
    var includeRelationships = req.query.includeRelationships;
    var renditionFilter = req.query.renditionFilter;
    var orderBy = req.query.orderBy;
    var includePathSegment = req.query.includePathSegment;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getDescendants = function (req, res) {
    //GET
    var filter = req.query.filter;
    var depth = req.query.depth;
    var includeAllowableActions = req.query.includeAllowableActions;
    var includeRelationships = req.query.includeRelationships;
    var renditionFilter = req.query.renditionFilter;
    var includePathSegment = req.query.includePathSegment;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getFolderTree = function (req, res) {
    //GET
    var filter = req.query.filter;
    var depth = req.query.depth;
    var includeAllowableActions = req.query.includeAllowableActions;
    var includeRelationships = req.query.includeRelationships;
    var renditionFilter = req.query.renditionFilter;
    var includePathSegment = req.query.includePathSegment;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getFolderParent = function (req, res) {
    //GET
    var filter = req.query.filter;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getObjectParents = function (req, res) {
    //GET
    var filter = req.query.filter;
    var includeRelationships = req.query.includeRelationships;
    var renditionFilter = req.query.renditionFilter;
    var includeAllowableActions = req.query.includeAllowableActions;
    var includeRelativePathSegment = req.query.includeRelativePathSegment;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getCheckedOutDocs = function (req, res) {
    //GET
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


exports.createFolder = function (req, res) {
    //POST

};


exports.createPolicy = function (req, res) {
    //POST

};


exports.createItem = function (req, res) {
    //POST

};


exports.getAllowableActions = function (req, res) {
    //GET
    var token = req.query.token;

};


exports.getObject = function (req, res) {
    //GET
    var filter = req.query.filter;
    var includeRelationships = req.query.includeRelationships;
    var includePolicyIds = req.query.includePolicyIds;
    var renditionFilter = req.query.renditionFilter;
    var includeACL = req.query.includeACL;
    var includeAllowableActions = req.query.includeAllowableActions;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getProperties = function (req, res) {
    //GET
    var filter = req.query.filter;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getObjectByPath = function (req, res) {
    //GET
    var filter = req.query.filter;
    var includeRelationships = req.query.includeRelationships;
    var includePolicyIds = req.query.includePolicyIds;
    var renditionFilter = req.query.renditionFilter;
    var includeACL = req.query.includeACL;
    var includeAllowableActions = req.query.includeAllowableActions;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getContentStream = function (req, res) {
    //GET
    var streamId = req.query.streamId;
    var download = req.query.download;
    var token = req.query.token;

};


exports.getRenditions = function (req, res) {
    //GET
    var renditionFilter = req.query.renditionFilter;
    var maxItems = req.query.maxItems;
    var skipCount = req.query.skipCount;
    var token = req.query.token;

};


exports.updateProperties = function (req, res) {
    //POST

};


exports.moveObject = function (req, res) {
    //POST

};


exports.deleteObject = function (req, res) {
    //POST

};


exports.deleteTree = function (req, res) {
    //POST

};


exports.setContentStream = function (req, res) {
    //POST

};


exports.appendContentStream = function (req, res) {
    //POST

};


exports.deleteContentStream = function (req, res) {
    //POST

};


exports.addObjectToFolder = function (req, res) {
    //POST

};


exports.removeObjectFromFolder = function (req, res) {
    //POST

};


exports.checkOut = function (req, res) {
    //POST

};


exports.cancelCheckOut = function (req, res) {
    //POST

};


exports.checkIn = function (req, res) {
    //POST

};


exports.getObjectOfLatestVersion = function (req, res) {
    //GET
//    var If no value is present or the value is 'this', \cmisservicelink{getObject} MUST be called.  = req.query.If no value is present or the value is 'this', \cmisservicelink{getObject} MUST be called. ;
//    var If the value is 'latest' \cmisservicelink{getObjectOfLatestVersion} MUST be called with the parameter \texttt{major} set to FALSE. = req.query.If the value is 'latest' \cmisservicelink{getObjectOfLatestVersion} MUST be called with the parameter \texttt{major} set to FALSE.;
//    var If the value is 'latestmajor' \cmisservicelink{getObjectOfLatestVersion} MUST be called with the parameter \texttt{major} set to TRUE. = req.query.If the value is 'latestmajor' \cmisservicelink{getObjectOfLatestVersion} MUST be called with the parameter \texttt{major} set to TRUE.;

};


exports.getObjectOfLatestVersion = function (req, res) {
    //GET
//    var If no value is present or the value is 'this', \cmisservicelink{getObject} MUST be called.  = req.query.If no value is present or the value is 'this', \cmisservicelink{getObject} MUST be called. ;
//    var If the value is 'latest' \cmisservicelink{getObjectOfLatestVersion} MUST be called with the parameter \texttt{major} set to FALSE. = req.query.If the value is 'latest' \cmisservicelink{getObjectOfLatestVersion} MUST be called with the parameter \texttt{major} set to FALSE.;
//    var If the value is 'latestmajor' \cmisservicelink{getObjectOfLatestVersion} MUST be called with the parameter \texttt{major} set to TRUE. = req.query.If the value is 'latestmajor' \cmisservicelink{getObjectOfLatestVersion} MUST be called with the parameter \texttt{major} set to TRUE.;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getPropertiesOfLatestVersion = function (req, res) {
    //GET
//    var If no value is present or the value is 'this', \cmisservicelink{getProperties} MUST be called.  = req.query.If no value is present or the value is 'this', \cmisservicelink{getProperties} MUST be called. ;
//    var If the value is 'latest' \cmisservicelink{getPropertiesOfLatestVersion} MUST be called with the parameter \texttt{major} set to FALSE. = req.query.If the value is 'latest' \cmisservicelink{getPropertiesOfLatestVersion} MUST be called with the parameter \texttt{major} set to FALSE.;
//    var If the value is 'latestmajor' \cmisservicelink{getPropertiesOfLatestVersion} MUST be called with the parameter \texttt{major} set to TRUE. = req.query.If the value is 'latestmajor' \cmisservicelink{getPropertiesOfLatestVersion} MUST be called with the parameter \texttt{major} set to TRUE.;

};


exports.getPropertiesOfLatestVersion = function (req, res) {
    //GET
//    var If no value is present or the value is 'this', \cmisservicelink{getProperties} MUST be called.  = req.query.If no value is present or the value is 'this', \cmisservicelink{getProperties} MUST be called. ;
//    var If the value is 'latest' \cmisservicelink{getPropertiesOfLatestVersion} MUST be called with the parameter \texttt{major} set to FALSE. = req.query.If the value is 'latest' \cmisservicelink{getPropertiesOfLatestVersion} MUST be called with the parameter \texttt{major} set to FALSE.;
//    var If the value is 'latestmajor' \cmisservicelink{getPropertiesOfLatestVersion} MUST be called with the parameter \texttt{major} set to TRUE. = req.query.If the value is 'latestmajor' \cmisservicelink{getPropertiesOfLatestVersion} MUST be called with the parameter \texttt{major} set to TRUE.;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getAllVersions = function (req, res) {
    //GET
    var filter = req.query.filter;
    var includeAllowableActions = req.query.includeAllowableActions;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getObjectRelationships = function (req, res) {
    //GET
    var includeSubRelationshipTypes = req.query.includeSubRelationshipTypes;
    var relationshipDirectiontypeId = req.query.relationshipDirectiontypeId;
    var maxItems = req.query.maxItems;
    var skipCount = req.query.skipCount;
    var filter = req.query.filter;
    var includeAllowableActions = req.query.includeAllowableActions;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.getAppliedPolicies = function (req, res) {
    //GET
    var filter = req.query.filter;
    var succinct = req.query.succinct;
    var token = req.query.token;

};


exports.applyPolicy = function (req, res) {
    //POST

};


exports.removePolicy = function (req, res) {
    //POST

};


exports.applyACL = function (req, res) {
    //POST

};


exports.getACL = function (req, res) {
    //GET
    var onlyBasicPermissions = req.query.onlyBasicPermissions;
    var token = req.query.token;

};