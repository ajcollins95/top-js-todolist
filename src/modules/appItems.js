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

    const getProps = () => {
        return _data
    }

    const setName = (newName) => {
        _data.name = newName
    }

    const setList = (list) => {
        _data['list'] = list
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
        setName,
        setList,
        getProps,
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
        getProps,
        setName,
        _init
    } = AppItem()

    //class variables


    const initTask = (args) => {
        setType('Task')
        _init(args)
        
    }
    const showItem = (args) => {
        console.log(`Task: ${getProps().name}`)
    }

    const render = () => {
        console.log(getProps().name)
    }

    initTask(arg)

    return {
        getProps,
        showItem,
        render
    }
}


//Project Factory function
//Project is a 'class'
const Project = (arg) => {
    //inheritance
    const {
        setType,
        setName,
        addTask,
        setList,
        getProps,
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
        console.log(`Project: ${getProps().name}`)
        getProps().list.showList()
    }

    const render = () => {
        console.log(getProps().name)
        getProps().list.renderItems()
    }
       


    initProject(arg)

    return {
        showItem,
        getProps,
        addTask,
        render
    }
}

export { Task, Project }