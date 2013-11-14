var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var when = require('when');
var _ = require('underscore');
(function () {

    //var connectionString = 'mongodb://localhost:27017/invoicing';

    var mongodb = function (connectionString) {
        this.connectionString = connectionString || 'mongodb://localhost:27017/db';
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = mongodb;
        }
        exports.mongodb = mongodb;
    }

    mongodb.prototype.connect = function () {
        var deferred = when.defer();
        MongoClient.connect(this.connectionString, function (err, db) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(db);
            }

        });

        return deferred.promise;
    };

    mongodb.prototype.command = function (cmd) {
        var deferred = when.defer();
        this.connect().then(
            function success(db) {
                db.command(function (err, result) {
                    db.close();
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(result);
                    }
                });
            },
            this.__error_handler__
        );
        return deferred.promise;
    };

    mongodb.prototype.collectionNames = function (name) {
        var deferred = when.defer();
        this.connect().then(
            function success(db) {
                db.collectionNames(function (err, names) {
                    db.close();
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(names);
                    }
                });
            },
            this.__error_handler__
        );
        return deferred.promise;
    };

    mongodb.prototype.collection = function (name) {
        return{
            read: function (option) {
                return mongodb.read(name, option);
            },
            create: function (option) {
                return mongodb.create(name, option);
            },
            update: function (option) {
                return mongodb.update(name, option);
            },
            destroy: function (option) {
                return mongodb.destroy(name, option);
            }

        }
    };

    mongodb.prototype.read = function (name, option) {
        var deferred = when.defer();
        option = _._defaults(option, {selector: {}, sort: {}, start: 0, limit: Number.MAX_VALUE});
        this.connect().then(
            function success(db) {
                var collection = db.collection(name);
                collection.find(option.selector).sort(option.sort).skip(option.start).limit(option.limit).toArray(function (err, items) {
                    db.close();
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(items);
                    }
                });
            },
            this.__error_handler__
        );
        return deferred.promise;
    };

    mongodb.prototype.create = function (name, obj) {
        var deferred = when.defer();
        obj = _._defaults(obj, {});
        delete obj._id;
        this.connect().then(
            function success(db) {
                var collection = db.collection(name);
                collection.insert(obj, {w: 1}, function (err, result) {
                    db.close();
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(result);
                    }
                });
            },
            this.__error_handler__
        );
        return deferred.promise;
    };

    mongodb.prototype.update = function (name, obj) {
        var deferred = when.defer();
        obj = _._defaults(obj, {});
        var _id = new ObjectID(obj._id);
        delete obj._id;
        this.connect().then(
            function success(db) {
                var collection = db.collection(name);
                collection.update({_id: _id}, obj, {w: 1}, function (err, result) {
                    db.close();
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(result);
                    }
                });
            },
            this.__error_handler__
        );
        return deferred.promise;
    };

    mongodb.prototype.destroy = function (name, id) {
        var deferred = when.defer();
        this.connect().then(
            function success(db) {
                var collection = db.collection(name);
                collection.remove({_id: new ObjectID(id)}, {w: 1}, function (err, result) {
                    db.close();
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(result);
                    }
                });
            },
            this.__error_handler__
        );
        return deferred.promise;
    };

    mongodb.prototype.__error_handler__ = function (err) {
        console.error(err);
    };


}).call(this)
