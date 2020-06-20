const shortSchema = require('../models/shorts');
const utilsUrl = require('../utils/url');
const shortCodeGenerator = require('../libs/shortCodeGenerator');


async function createNewShort(url) {
    //ToDo
    //1- Is URL (improve)
    return new Promise(async (resolve, reject) => {
        let isUrl = utilsUrl.checkIfIsUrl(url)
        if (isUrl) {
            let codeGeneratedToShow = shortCodeGenerator.generateShortCode().objectToShow
            let codeGenerated = shortCodeGenerator.generateShortCode().objectStored;
            let checkIfCodeIsInDbAndRegenerateIfNot = await checkShortCodeInDb(codeGenerated)
            let newUrlShot = new shortSchema({ url: url, shortCode: checkIfCodeIsInDbAndRegenerateIfNot, clicks: [] });
            let dataSaved = await newUrlShot.save()
            resolve({urlShort : codeGeneratedToShow})
        } else {
            reject({ error: "notUrl" });
        }
    });
}

async function someOneClickedOnLink(code, country, sO, browser) {
    return new Promise(async (resolve, reject) => {
        let findShortedUrl = await shortSchema.findOne({ shortCode: code })
        console.log(code + " CODIGO")
        let pushNewClickData = await shortSchema.updateOne({ shortCode: code }, {
            $push: {
                clicks: {
                    country: country,
                    sO: sO,
                    browser: browser
                }
            }
        });
        resolve(findShortedUrl.url)
    });
}

async function checkDataFromCode(code) {
    return new Promise(async (resolve, reject) => {
        let findShorted = await shortSchema.findOne({ shortCode: code })
/*
        let allCountries = findShorted.clicks.map((item) => {
            let allValues = Object.values(item.toObject())
            
            return allValues
        })
        console.log(allCountries)
*/
        resolve(findShorted)
    });
}


async function checkShortCodeInDb(shortCode) {
    let valueShort = await shortSchema.findOne({ 'shortCode': shortCode });
    if (valueShort != null) {
        console.log("Llamada recursiva")
        await checkShortCodeInDb(shortCodeGenerator.generateShortCode().objectStored)
    } else {
        console.log("Solucion encontrada")
        return shortCode
    }
}

module.exports = { createNewShort, someOneClickedOnLink, checkDataFromCode }