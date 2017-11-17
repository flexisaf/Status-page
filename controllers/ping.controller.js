'use strict';

const ping = require('ping');
const async = require('async');
const models = require('../models');




const getHosts = () => {
    return new Promise((resolve, reject) => {
        models.App.findAll().then(apps => {
            const hosts = apps.map(app => {
                return app.url;
            });
            resolve(hosts);
        }).catch(err => {
            reject(err);
        });
    });
};


const getStatus = (host, cb) => {

    ping.sys.probe(host, function (isAlive) {
        console.log(isAlive);
        const msg = isAlive ? 'alive' : 'dead';
        cb(null, { host, status: msg })
    });
};

const pushToDatabase = (results) => {
    const statuses = results.map(result => {
        return {
            url: result.host,
            status: result.status
        };
    });

    models.Status.bulkCreate(statuses).then(() => {
        console.log('statuses saved');
    }).catch(err => {
        console.log(err);
    });
};

const index = (req, res) => {
    getHosts().then(hosts => {
        async.map(hosts, getStatus, (err, results) => {
            if (err) {
                throw new Error();
            }
            pushToDatabase(results);

            return res.status(200).json(results)
        });
    })
};


module.exports = {
	index,
};
