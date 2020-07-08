const express = require('express');
const geoip = require('geoip-lite')
const dataBase = require('../libs/dataBase');
const utilsUrl = require('../utils/url');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ 'message': 'SERVER RUNNING' });
});

router.post('/short', async (req, res) => {
    let url = req.body.url;
    if (typeof url != "undefined") {
            let isUrl = utilsUrl.checkIfIsUrl(url);
            if (isUrl) {
                let created = await dataBase.createNewShort(url);
                res.json({ message: created });
            } else {
                res.json({ message: 'Not a url.' });
            }
    } else {
        res.json({ message: 'Not url specified.' }).status;
    }
});

router.get('/s/:shortCode', async (req, res) => {
        const shortCode = req.params.shortCode.toLowerCase();

        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        ip = "35.227.62.178"; //FORCE
        let geoLocateIp = geoip.lookup(ip);
        let userAgent = req.useragent;

        let country = geoLocateIp.country;
        let sO = userAgent.os;
        let browser = userAgent.browser;
            let findUrlBehind = await dataBase.someOneClickedOnLink(shortCode, country, sO, browser);
            console.log(findUrlBehind)
            res.redirect(findUrlBehind);


});

router.get('/s/:shortCode/a', async (req, res) => {
    try {
        const shortCode = req.params.shortCode.toLowerCase();
        let data = await dataBase.checkDataFromCode(shortCode);
        res.json(data);
    } catch (error) {

        res.json({ 'error': 'Something went wrong' }).status(504)
    }
});

module.exports = router;






