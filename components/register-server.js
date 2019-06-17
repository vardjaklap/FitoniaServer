
const fs = require('fs');

const reg = (info) => {
    const users = loadUsers();
    const duplicateUser = users.find((user)=> user.email === info.email);

    if(!duplicateUser){
        users.push({
            name: info.name,
            lastname: info.lastname,
            email: info.email,
            pass: info.pass
        })
        saveUsers(users);
        console.log('User added!')
    }else{
        console.log('Error! Possibly user exists!')
    }

};
const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users)
    fs.writeFileSync('users.json', dataJSON)
}
const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('Users.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = reg;