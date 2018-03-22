//code format: ES5
console.log('* express api userController loaded');

var users = [
    { _id: "1", firstName: "Navid", lastName: "Mostafiz", emailAddress: "nm@gmail.com", status: "Active", role: "Subscriber" },
    { _id: "2", firstName: "Mohaiminul", lastName: "Islam", emailAddress: "mi@gmail.com", status: "Active", role: "Subscriber" },
    { _id: "3", firstName: "Nafees", lastName: "Mahbub", emailAddress: "nam@gmail.com", status: "Active", role: "Subscriber" }
];

//get user
module.exports.getAllUser = function (request, response, next) {
    console.log('server.user.controller.getUser');
    return response.status(200).json({
        success: true,
        message: 'Get all user',
        data: users,
    });
}

//add new user
module.exports.addUser = function (request, response, next) {
    console.log('server.user.controller.addUser');
    var newUser = request.body;
    console.log('newUser ', newUser);
    newUser.id = users.length + 1;
    users.push(newUser);
    return response.status(201).json({
        success: true,
        message: 'New User Created!',
        data: newUser,
    });
}

//get user by Id
module.exports.getUserById = function (request, response, next) {
    console.log('server.user.controller.getUserById');
    var userId = request.params._id;
    users.forEach(function (user) {
        if (user.id == userId) {
            return response.status(200).json({
                success: true,
                message: 'Get user by Id',
                data: user,
            });
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

    return response.status(201).json({
        success: true,
        message: 'User Updated!',
        data: userToUpdate
    });
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

    return response.status(201).json({
        success: true,
        message: 'User Deleted!',
        data: userToUpdate
    });
}