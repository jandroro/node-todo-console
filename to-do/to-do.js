const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('Data could not be saved due to the following error: ', err);
        }
    });
};

const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
};

const createTask = (description) => {
    loadDB();

    let todo = {
        description, 
        completed: false
    };

    listToDo.push(todo);
    saveDB();

    return todo;
};

const getTasks = () => {
    loadDB();
    return listToDo;
};

const updateTask = (description, completed = true) => {
    loadDB();

    let index = listToDo.findIndex(todo => todo.description === description);

    if (index >= 0) {
        listToDo[index].completed = completed;
        saveDB();

        return true;
    } else {
        return false;
    }
};

const deleteTask = (description) => {
    loadDB();

    let newListToDo = listToDo.filter(todo => todo.description !== description);

    if (listToDo.length === newListToDo.length) {
        return false;
    } else {
        listToDo = newListToDo;
        saveDB();

        return true;
    }
};

module.exports = {
    createTask, 
    getTasks, 
    updateTask, 
    deleteTask
}