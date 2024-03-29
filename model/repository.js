(function () {

    exports.repository = {
        "A1": {
            "principalIdAnyone": "anyone",
            "principalIdAnonymous": "anonymous",
            "repositoryDescription": "CMJS  Repository (Version: 0.1)",
            "vendorName": "XQL",
            "aclCapabilities": {
                "permissionMapping": [
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canGetDescendents.Folder"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canGetChildren.Folder"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canGetParents.Folder"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canGetFolderParent.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canCreateDocument.Folder"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canCreateFolder.Folder"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canCreateRelationship.Source"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canCreateRelationship.Target"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canGetProperties.Object"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canViewContent.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canUpdateProperties.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canMove.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canMove.Target"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canMove.Source"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canDelete.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canDeleteTree.Folder"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canSetContent.Document"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canDeleteContent.Document"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canAddToFolder.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canAddToFolder.Folder"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canRemoveFromFolder.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canRemoveFromFolder.Folder"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canCheckout.Document"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canCancelCheckout.Document"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canCheckin.Document"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canGetAllVersions.VersionSeries"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canGetObjectRelationships.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canAddPolicy.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canAddPolicy.Policy"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canRemovePolicy.Object"
                    },
                    {
                        "permission": [
                            "cmis:write"
                        ],
                        "key": "canRemovePolicy.Policy"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canGetAppliedPolicies.Object"
                    },
                    {
                        "permission": [
                            "cmis:read"
                        ],
                        "key": "canGetACL.Object"
                    },
                    {
                        "permission": [
                            "cmis:all"
                        ],
                        "key": "canApplyACL.Object"
                    }
                ],
                "permissions": [
                    {
                        "description": "Read",
                        "permission": "cmis:read"
                    },
                    {
                        "description": "Write",
                        "permission": "cmis:write"
                    },
                    {
                        "description": "All",
                        "permission": "cmis:all"
                    }
                ],
                "propagation": "objectonly",
                "supportedPermissions": "basic"
            },
            "cmisVersionSupported": "1.1",
            "productVersion": "?",
            "repositoryId": "A1",
            "changesIncomplete": true,
            "thinClientURI": "",
            "rootFolderUrl": "\/browser\/A1\/root",
            "latestChangeLogToken": "0",
            "rootFolderId": "100",
            "capabilities": {
                "capabilityContentStreamUpdatability": "anytime",
                "capabilityPWCSearchable": false,
                "capabilityQuery": "bothcombined",
                "capabilityRenditions": "none",
                "capabilityACL": "manage",
                "capabilityGetFolderTree": true,
                "capabilityGetDescendants": true,
                "capabilityVersionSpecificFiling": false,
                "capabilityUnfiling": true,
                "capabilityJoin": "none",
                "capabilityAllVersionsSearchable": false,
                "capabilityMultifiling": true,
                "capabilityChanges": "properties",
                "capabilityPWCUpdatable": true
            },
            "repositoryName": "CMJS Repository",
            "repositoryUrl": "\/browser\/A1",
            "changesOnType": [

            ],
            "productName": "CMJS Repository"
        }
    }

}).call(this)