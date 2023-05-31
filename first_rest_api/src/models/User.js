class User{
    constructor(name, password, deuda){
        this.name = name;
        this.password = password;
        this.deuda = deuda;
    }
}

let users = new Map();
users.set(1, new User("jose", 1234, 4688));
users.set(2, new User("carlos", 2345, 1354));
users.set(3, new User("alberto", 3456, 345));

module.exports = users;