//requires node v18

async function populate() {
    
    const response = await fetch('https://dummyjson.com/users?limit=100&skip=0&select=id,firstName,lastName,email,phone');
    const usersText = await response.json();

    function countObjectKeys(obj) { 
        return Object.keys(obj).length; 
    }
    
    let users = JSON.stringify(usersText);
    let users1 = users.slice(1, -34);
    let users2 = "{\"total\":["+countObjectKeys(usersText.users)+"],\"count\":["+countObjectKeys(usersText.users)+"]," + users1 + "}";
    const users4 = JSON.parse(users2);

    console.log(users4);
}
populate()