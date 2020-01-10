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

    const setList = (list) => {
        _data['list'] = list
        _data.list.say()
    }

    //log display data
    const show = () => {
        console.log(_data)
    }
    
    //duck initialization function
    const _init = (args) => {
        setName(args['name'])
    }

    return {
        setType,
        getType,
        setName,
        setList,
        show,
        _init
    }
}


//Task Factory function
//Task is a 'class'
const Task = (args) => {
    //inheritance
    const {
        setType,
        getType,
        setName,
        show,
        _init
    } = AppItem()

    //class variables


    const initTask = (args) => {
        setType('Task')
        _init(args)
    }

    initTask()

    return {
        show,
        getType
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
        
        setList,
        show,
        _init
    } = AppItem()

    //class variables


    const initProject = (args) => {
        setType('Project')
        _init(args)
        setList(TaskList())
    }

    initProject(arg)

    return {
        show,
        getType
    }
}

export { Task, Project }