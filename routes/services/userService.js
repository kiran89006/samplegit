var userDAO = require('../dao/userDAO')
function saveUserService() {
    console.log('saveUserService')
    userDAO.saveUserDAO();
}

function getUserService() {

}


module.exports = {
    saveUserService,
    getUserService
}