const mongoDB = require('mongodb')
const getDBConn = require('../common/dbConn')
async function saveUserDAO(data) {
    try {
        const db = await getDBConn();
        const collection = db.collection("users")
        const result = await collection.insertOne(data)
        return result;
    } catch (e) {
        console.error("saveUserDAO", e);
    }
}

async function getUserDAO() {
    const db = await getDBConn();
    const collection = db.collection('users')
    const result = await collection.find({}).toArray();
    return result;
}

async function authDAO(data) {
    const db = await getDBConn();
    const collection = db.collection("users");
    const result = await collection.find(data).toArray();
    return result;
}


module.exports = {
    saveUserDAO,
    getUserDAO,
    authDAO
}