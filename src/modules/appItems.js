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

    const show = () => {
        console.log(_data)
    }
    
    return {
        setType,
        getType,
        setName,
        show
    }
}


//Task Factory function
//Task is a 'class'
const Task = (args) => {
 
    const say = () => {
        alert('Task')
    }
    
    return {
        say
    }
}


//Project Factory function
//Project is a 'class'
const Project = (args) => {
    //inheritance
    const {
        setType,
        getType,
        setName,
        show
    } = AppItem()

    //class variables

    

    const init = () => {
        setType('Project')
        setName(args['name'])
    }

    init()

    return {
        show,
        getType
    }
}

export { Task, Project }