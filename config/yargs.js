const description = {
    demand: true,
    alias: 'd', 
    desc: 'Description of to-do task'
}

const completed = {
    default: true, 
    alias: 'c', 
    desc: 'Mark a task as completed or pending'
}

const argv = require('yargs')
    .command('create', 'Create a to-do element', {
        description
    })
    .command('update', 'Update the completed status of a task', {
        description, 
        completed
    })
    .command('delete', 'Delete a task', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}