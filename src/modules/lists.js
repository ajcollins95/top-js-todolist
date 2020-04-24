import DOM from './domManipulation';

//List Factory function
//List is a 'parent class' to tasklist and projectlist

const List = () => {
    let _data = []

    const len = () => {
        return _data.length
    }

    const addToList = (item, type) => {
        if (item.getType() == type) {
            _data.push(item)
        }
        else {
            throw `Item cannot be added to a ${type} list`
        }
    }

    const show = () => {
        for (let i = 0; i < len(); i++) {
            _data[i].showItem()
        }
    }

    const renderItems = () => {
        for (let i = 0; i < len(); i++) {
            _data[i].showItem()
        }
    }

    return {
        addToList,
        show,
        len, 
        renderItems

    }
}

//TaskList Factory function
//TaskList is a 'class'
const TaskList = () => {
    //inheritance
    const {
        addToList, 
        show,
        len
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
        len
    }
}

//ProjectList Factory function
//ProjectList is a 'class'
const ProjectList = () => {
    //inheritance
    const {
        addToList, 
        show,
        renderItems
    } = List()

    //class variables
    const _type = 'Project'

    //public methods
    const add = (item) => {
        addToList(item, _type)
    }

    const showList = () => {
        //displays a project list in the console
        show()
    }

    const renderProject = () => {
        //renders all project data to the DOM

        //clears all current proj/task data
        DOM.clear()
        //render each project


    }

    return {
        add,
        showList,
        renderProject
    }
}

export { List, TaskList, ProjectList }