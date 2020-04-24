import DOM from './domManipulation';

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

    const show = () => {
        //console logs 
        for (let i = 0; i < len(); i++) {
            _data[i].showItem()
        }
    }

    const renderItems = () => {
        //DOM render
        for (let i = 0; i < len(); i++) {
            _data[i].render()
        }
    }

    const getItems = (type, i) => {
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
            if (_data[i].getProps[prop] == val) {
                return i
            }
        }
        return -1
    }

    return {
        addToList,
        show,
        len, 
        renderItems,
        getItems,
        getIndexOf

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
        renderItems
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
        renderItems
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
        getIndexOf
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

    const renderProjectList = () => {
        //renders all project data to the DOM

        //clears all current proj/task data on DOM
        DOM.clear()

        renderItems()


    }

    return {
        add,
        showList,
        renderProjectList
    }
}

export { List, TaskList, ProjectList }