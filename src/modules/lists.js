import { Task, Project } from './appItems'

//List Factory function
//List is a 'parent class' to tasklist and projectlist

const List = () => {
    let _data = []

    const len = () => {
        return _data.length
    }

    const addToList = (item, type) => {
        if (item.getProps().type == type) {
            _data.push(item)
        }
        else {
            throw `Item cannot be added to a ${type} list`
        }
    }

    const remove = (i) => {
        _data.splice(i,1)
    }

    const show = () => {
        //console logs 
        for (let i = 0; i < len(); i++) {
            _data[i].showItem()
        }
    }

    const getItem = (type, i) => {
        let item = _data[i]
        /*
        console.log(`given type ${type}`)
        console.log(`found type ${item.getProps().type}`)*/

        if (item.getProps().type == type) {
            return item
        }
        else {
            alert('ITEM FOUNDW ITH WRONF TYPE')
        }
    }
    

    const getIndexOf = (prop, val, start = 0) => {
        //finds index of first occurence where value is found for prop
        for (let i = start; i < len(); i++) {
            //console.log(`active = ${_data[i].getProps()[prop]}`)
            if (_data[i].getProps()[prop] == val) {
                return i
            }
        }
        return -1
    }

    return {
        addToList,
        show,
        len, 
        getItem,
        getIndexOf,
        remove

    }
}

//TaskList Factory function
//TaskList is a 'class'
const TaskList = () => {
    //inheritance
    const {
        addToList, 
        show,
        len,
        getItem
    } = List()

    //class variables
    const _type = 'Task'


    //public methods
    const add = (item) => {
        addToList(item, _type)
    }


    const showList = () => {
        //display task list in console
        show()
    }



    return {
        add,
        showList,
        len,
        getItem
    }
}

//ProjectList Factory function
//ProjectList is a 'class'
const ProjectList = () => {
    //inheritance
    const {
        addToList, 
        show,
        renderItems,
        getIndexOf,
        len,
        getItem,
        remove
    } = List()

    //class variables
    const _type = 'Project'

    //public methods
    const add = (item) => {
        addToList(item, _type)
    }

    const addProject = (name) => {
        let project = Project({name: name})
        add(project)    
    }

    const showList = () => {
        //displays a project list in the console
        show()
    }

    const del = (project) => {
        //displays a project list in the console
        let i = getIndexOf('name',project.getProps().name)
        remove(i)
    }

    const getActive = () => {
        let i_active = getIndexOf('active',1)
        return getItem('Project',i_active)
    }

    return {
        add,
        addProject,
        showList,
        len,
        getItem,
        getIndexOf,
        del,
        getActive
    }
}

export { List, TaskList, ProjectList }