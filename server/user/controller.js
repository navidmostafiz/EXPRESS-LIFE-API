//code format: ES5
console.log('express api controller loaded');

var users = [
    { id: 1, userName: 'navidmostafiz', firstName: 'Navid', lastname: 'Mostafiz' },
    { id: 2, userName: 'mohaiminul', firstName: 'Mohaiminul', lastname: 'Islam' }
];

//get user
module.exports.getUser = function (request, response, next) {
    console.log('server.user.controller.getUser');
    return response.status(200).json(users);
}

//add new user
module.exports.addUser = function (request, response, next) {
    console.log('server.user.controller.addUser');
    var newUser = request.body;
    console.log('newUser ', newUser);
    newUser.id = users.length + 1;
    users.push(newUser);
    return response.status(200).json({ message: 'new user created' });
}

//get user by Id
module.exports.getUserById = function (request, response, next) {
    console.log('server.user.controller.getUserById');
    var userId = request.params._id;
    users.forEach(function (user) {
        if (user.id == userId) {
            return response.status(200).json(user);
        };
    });
}

//update user
module.exports.updateUser = function (request, response, next) {
    console.log('server.user.controller.updateUser');
    var userId = request.params._id; //not using it, grabbing is form body
    var userToUpdate = request.body;
    
    //create new user list with replacing the element that has matching id
    var tempUsers = [];
    users.forEach(function (user) {
        if (user.id == userToUpdate.id) {
            console.log('userToUpdate ', userToUpdate);
            tempUsers.push(userToUpdate);
        } else { tempUsers.push(user); }
    });
    users = tempUsers;

    return response.status(200).json({ message: 'user updated' });
}

//delete user
module.exports.deleteUser = function (request, response, next) {
    console.log('server.user.controller.deleteUser');
    var userId = request.params._id;

    //create new user list without the elemnt that has matching id
    var tempUsers = [];
    users.forEach(function (user) {
        if (user.id != userId) {
            tempUsers.push(user);
        };
    });
    users = tempUsers;

    return response.status(200).json({ message: 'user deleted' });
}