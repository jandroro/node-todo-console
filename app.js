const { argv } = require('./config/yargs');
const toDo = require('./to-do/to-do');
const colors = require('colors/safe');

let commandEnt = argv._[0];

switch(commandEnt) {
    case 'create':
        let toDoTask = toDo.createTask(argv.description);
        console.log(toDoTask);
        break;

    case 'list':
        let toDoTasks = toDo.getTasks();

        for (let todo of toDoTasks) {
            console.log(colors.green('=========== To-Do ==========='));
            console.log('Description: ', todo.description);
            console.log('Status: ', todo.completed);
            console.log(colors.green('=============================\n'));
        }

        break;
    
    case 'update':
        let updatedTask = toDo.updateTask(argv.description, argv.completed);
        console.log(updatedTask);
        break;

    case 'delete':
        let deletedTask = toDo.deleteTask(argv.description);
        console.log(deletedTask);
        break;

    default:
        console.log('Command not recognized');
        break;
}