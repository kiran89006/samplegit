var userDAO = require('../dao/userDAO')
async function saveUserService(data) {
    const result = await userDAO.saveUserDAO(data);
    return result;
}

async function getUserService() {
    const result = await userDAO.getUserDAO();
    result.forEach((obj) => {
        delete obj.pwd
    })
    return result;
}


module.exports = {
    saveUserService,
    getUserService
}