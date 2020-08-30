# To-Do List - Node Console App

## Description

This is a console application in Node that creates, gets, updates and removes items from a to-do list

## How to use?

First, download or clone the repository and run in console the following command to download the associated dependencies:

```
npm install
```

* To create a new task, run the following command:

```
node app create --description [description of the new to-do item]
```

For example:

```
node app create --description "First to-do item"
```

* To get the list of items, run the following command:

```
node app list
```

* To update the status of an item in the to-do list, run the following command:

```
node app update --description [description of the new to-do item] --completed [item status: true or false]
```

For example:

```
node app update --description "First to-do item" --completed true
```

* To delete an item from the to-do list, run the following command:

```
node app delete --description [description of the new to-do item]
```

For example:

```
node app delete --description "First to-do item"
```