import { v4 as uuidv4 } from 'uuid';

// create an array of object whit the params
let users = []


export const getUsers = (req, res) => {
    res.send(users); // the response of get method send´s an array object
}

export const createUser = (req, res) => {
    const user = req.body; // user variable it´s define like a request body

    users.push({ ...user, id: uuidv4() }); // here we push data to the array object with unique id using the uuidv4 package

    res.send(`User with the username ${user.firstName} added to the database!`) // here we response with a message to postman or insomia
}
export const getUser =  (req, res) => {
    const { id } = req.params; // destructuring id and use this variable to call request and params

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id); // use the users object array to filter by id

    res.send(`User with the id ${id} deleted from database.`);

}
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body; // we define a request body as the parameters that we have (firstName, lastName and age)

    const user = users.find((user) => user.id === id); // user  variable allow to find an user by unique id whith find method

    //this conditionals set the new value in the parameter selected
    if(firstName) user.firstName = firstName;
    if(lastName)user.lastName = lastName;
    if(age) user.age = age;
    res.send(`User with the id ${id} has been updated`)
}

