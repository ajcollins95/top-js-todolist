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
            _data[i].show()
        }
    }

    return {
        addToList,
        show

    }
}

//TaskList Factory function
//TaskList is a 'class'
const TaskList = () => {
    const {say, msg} = List()
    msg = 'taskList'
    return {
        say
    }
}

//ProjectList Factory function
//ProjectList is a 'class'
const ProjectList = () => {
    //inheritance
    const {
        addToList, 
        show 
    } = List()

    //class variables
    const _type = 'Project'


    //public methods
    const add = (item) => {
        addToList(item, _type)
    }

    return {
        add,
        show
    }
}

export { List, TaskList, ProjectList }