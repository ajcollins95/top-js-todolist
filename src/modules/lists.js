import { Task, Project } from './appItems'
import { compareAsc } from 'date-fns'

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
        getItem,
        getIndexOf,
        remove
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

    const del = (task) => {
        //could combine name and description search in the future
        let i = getIndexOf('name',task.getProps().name)
        remove(i)
    }



    return {
        add,
        showList,
        len,
        getItem,
        del
    }
}

//ProjectList Factory function
//ProjectList is a 'class'
const ProjectList = () => {
    //inheritance
    const {
        addToList, 
        show,
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
        let i = getIndexOf('name',project.getProps().name)
        remove(i)
    }

    const getActive = () => {
        let i_active = getIndexOf('active',1)
        return getItem('Project',i_active)
    }

    const objectify = () => {
        let data = []
        for (let i = 0; i < len(); i++) {
            let project = getItem('Project',i)
            let project_props = project.getProps()
            let task_list = project_props.list
            let list_of_tasks = []

            for (let i = 0; i < task_list.len(); i++) {
                let task = task_list.getItem('Task',i)
                let task_props = task.getProps() 
                list_of_tasks.push(task_props)
            }
            
            data.push(
                {
                    active: project_props.active,
                    list: list_of_tasks,
                    name: project_props.name,
                    type: project_props.type
                }
            )
        }

        return (data)

    }

    const save = () => {
        let projects = objectify()
        localStorage.setItem('saveData', JSON.stringify(projects))
    }

    const clearSave = () => {
        localStorage.clear()
    }

    return {
        add,
        addProject,
        showList,
        len,
        getItem,
        getIndexOf,
        del,
        getActive,
        save,
        clearSave
    }
}

export { List, TaskList, ProjectList }