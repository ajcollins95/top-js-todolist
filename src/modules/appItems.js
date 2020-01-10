import { TaskList } from './lists';

//Contains Tasks, Projects, and their parent, AppItem

//AppItem Factory function
//AppItem is a 'parent class'
const AppItem = () => {
    let _data = {
        type: "default",
        name: "untitled"
    }

    const validTypes = ['Project','Task']

    //getters and setters
    const setType = (newType) => {
        if (validTypes.includes(newType)){
            _data.type = newType
        }
        else {
            throws `${newType} is invalid type`
        } 
    }

    const getType = () => {
        return _data.type
    }

    const setName = (newName) => {
        _data.name = newName
    }
    
    const getName = () => {
        return _data.name 
    }

    const setList = (list) => {
        _data['list'] = list
    }

    const getList = (list) => {
        return _data.list
    }

    //log display data
    const show = () => {
        console.log(_data)
    }
    
    //duck initialization function
    const _init = (args) => {
        setName(args['name'])
    }

    const addTask = (task) => {
        //adds a task to the Project List of this Item
        if (_data.list) {
            _data.list.add(task)
        }
        else {
            throw 'This Project has no list property'
        }
        
    }

    return {
        setType,
        getType,
        getName,
        setName,
        setList,
        getList,
        _init,
        addTask
    }
}


//Task Factory function
//Task is a 'class'
const Task = (arg) => {
    //inheritance
    const {
        setType,
        getType,
        getName,
        setName,
        _init
    } = AppItem()

    //class variables


    const initTask = (args) => {
        setType('Task')
        _init(args)
        
    }
    const showItem = (args) => {
        console.log(`Task: ${getName()}`)
    }

    initTask(arg)

    return {
        getType,
        showItem
    }
}


//Project Factory function
//Project is a 'class'
const Project = (arg) => {
    //inheritance
    const {
        setType,
        getType,
        setName,
        getName,
        addTask,
        setList,
        getList,
        _init
    } = AppItem()

    //class variables


    const initProject = (args) => {
        setType('Project')
        _init(args)
        setList(TaskList())
    }

    const showItem = (args) => {
        //displays a project to console
        console.log(`Project: ${getName()}`)
        getList().showList()
    }
       


    initProject(arg)

    return {
        showItem,
        getType,
        addTask
    }
}

export { Task, Project }