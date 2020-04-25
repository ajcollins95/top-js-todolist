import { TaskList } from './lists';
import DOM from './domManipulation';

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

    const setActive = (val) => {
        //should be 0 or 1
        if (1 >= val && val >= 0) {
            _data['active'] = val
        }
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
        setActive,
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

    initTask(arg)

    return {
        getProps,
        showItem,
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
        setActive,
        getProps,
        _init
    } = AppItem()

    //class variables


    const initProject = (args) => {
        setType('Project')
        _init(args)
        setList(TaskList())
        setActive(0)
    }

    const showItem = (args) => {
        //displays a project to console
        console.log(`Project: ${getProps().name}`)
        getProps().list.showList()
    }

       


    initProject(arg)

    return {
        showItem,
        getProps,
        addTask,
        setActive
    }
}

export { Task, Project }