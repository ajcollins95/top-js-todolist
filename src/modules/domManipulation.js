import { Task, Project } from './appItems'
import {format, compareAsc} from 'date-fns';
import Edit from '../edit.svg'


//DOM Manipulator module for HTML display
//use "class" data to display objects
const DOM = ((doc) => {
    //let page = doc.getElementById('content')

    /*
    LISTENERS
    */

    const attachProjectListeners = (data) => {
        data.project_name.addEventListener('click', function() {
            switchProject(data)
        } )
        data.del_button.addEventListener('click', function() {
            delProject(data)
        } )
    }

    const attachTaskListeners = (data) => {
        const task_left = data.task_node.children[0]
        const task_right = data.task_node.children[1]

        task_left.children[0].addEventListener('click', function(){
            data.task.toggleComplete()
            render(data.projList)
        })
        task_right.children[1].addEventListener('click', function(){
            handleEdit(data)
            //render(data.projList)
        })
    }
    
    const switchProject = (data) => {
        switchActive(data.projList, data.project)
    }

    const delProject = (data) => {
        let previous = data.project_node.previousElementSibling
        //determine where next active will be
        let active;
        if (previous) {
            active = previous 
        } else {
            active = data.project_node.nextElementSibling

        }
        //get next active proj
        let i = data.projList.getIndexOf('name', active.firstChild.innerText)
        let activeProject = data.projList.getItem('Project', i)

        //do actual deletion
        switchActive(data.projList, activeProject)
        data.projList.del(data.project)
        render(data.projList)
    }

    const addProjectListener = (projList) => {
        let form = doc.getElementById('project-form')
        let text = form.value
        if(text.length == 0) {
            alert('Project needs a name')
        } else {
            projList.addProject(text)
            let i = projList.getIndexOf('name', text)
            let newProj = projList.getItem('Project', i)
            switchActive(projList, newProj)
            form.value = ''
            render(projList)
        }
    }

    const addTaskListener = (projList) => {
        const form = doc.getElementsByClassName('task-form')[0]
        const name = form.children[0].children[0]
        const givenDate = form.children[1].children[0]
        const activeProject = projList.getActive()

        if (name.value) {
            if (givenDate.value) {
                activeProject.addTask(Task(
                    {
                        name: name.value,
                        date: new Date(givenDate.value)
                    }
                ))
            } else {
                activeProject.addTask(Task({name: name.value}))
            }
            render(projList)
        } 
        else {
            alert('Task needs a name')
        }
        
    }

    
    const handleSave = (data) => {
        const form = doc.getElementById('popup-form')
        const props = data.task.getProps()
        const double = doc.getElementsByClassName('double-input')[0]

        let name = form.children[0].children[0].children[0].value
        let date = new Date(double.children[1].children[0].value)
        date.setDate(date.getDate() + 1)
        let isPriority = double.children[0].children[0].checked
        let description = form.children[0].children[2].children[0].value

        const newData = {name, date, isPriority, description}
        data.task.updateTask(newData)
        closeEdit()
        
        
    }

    const closeEdit = () => {
        const form = doc.getElementById('popup-form')
        form.setAttribute('style','display: none;')
    }

    const handleEdit = (data) => {
        const form = doc.getElementById('popup-form')
        const exit = doc.getElementById('close-button')
        const save = doc.getElementById('save-button')
        form.setAttribute('style','display: flex;')
        populateForm(form,data)
        
        exit.addEventListener('click', function(){
            closeEdit()
            render(data.projList)
        })
        
        save.addEventListener('click', function(){
            handleSave(data)
        })

    }

    /*
    DOM HELPER FUNCTIONS
    */

    const populateForm = (form, data) => {
        const props = data.task.getProps()
        const double = doc.getElementsByClassName('double-input')[0]

        form.children[0].children[0].children[0].value = props.name
        double.children[1].children[0].value = format(props.date, 'yyyy-MM-dd')
        double.children[0].children[0].checked = props.isPriority
        form.children[0].children[2].children[0].value = props.description

        
    }

    const switchActive = (projList, project) => {
        //switches active project
        let clicked = project
        let activeIndex = projList.getIndexOf('active', 1)
        let active = projList.getItem('Project', activeIndex)
        
        active.setActive(0)
        clicked.setActive(1)
        render(projList)
    }

    const createElem = (args) => {
        //creates element form an argument list
        let tag = args.tag || 'div'
        let elem = doc.createElement(tag)
        //i could refactor this to be less annoying...

        if (args.class) {
            elem.classList.add(args.class)
        }
        if (args.text) {
            elem.innerText = args.text
        }
        if (args.id) {
          elem.id = args.id
        }
        if (args.type) {
            elem.type = args.type;
        }
        if (args.innerHTML) {
            elem.innerHTML = args.innerHTML
        }

        return elem
    }

    const createCheckbox = (task) => {
        let checkbox = createElem(
            {
                class: 'checkbox'
            }
        )
        let fill = createElem(
            {
                class: 'fill'
            }
        )        
        checkbox.appendChild(fill)

        return checkbox
    }

    const createName = (task) => {
        let taskname = task.getProps().name
        let name = createElem(
            {
                class: 'task-name', 
                innerHTML: '<span>//</span>' + taskname 
            }
        )
        return name
    }


    const createTaskElems = () => {
        let l = 1;
    }

    const remove_children = (node) => {
        while (node.children.length > 0) {
            node.children[0].remove()
        }
    }

    const clear = () => {
        //clears all elements from task and project area
        let project_list = doc.getElementById('project-list')
        let task_list = doc.getElementById('task-list')
        let form_content = doc.getElementsByClassName('popup-form-content')[0]

        form_content.removeChild(doc.getElementsByClassName('buttons')[0])
        remove_children(project_list)
        remove_children(task_list)
    }

    /*
    DOM RENDER FUNCTIONS
    */

    const renderButtons = () => {
        const content = doc.getElementsByClassName('popup-form-content')[0]
        let buttons = createElem({
            class: 'buttons', 
        })
        let wrapper = createElem({
            class: 'button-wrapper', 
        })
        let save = createElem({
            tag: 'button',
            id: 'save-button', 
            text: 'save'
        })
        let exit = createElem({
            tag: 'button',
            id: 'close-button', 
            text: 'exit'
        })
        wrapper.appendChild(save)
        wrapper.appendChild(exit)
        buttons.appendChild(wrapper)
        content.appendChild(buttons)
    }

    const renderProject = (projList, project) => {
        //makes project node
        let props = project.getProps()
        let project_list = doc.getElementById('project-list')
        let project_node = createElem({
            tag: 'div',
            class: 'project', 
        })
        let project_name = createElem({
            tag: 'div',
            class: 'project-name', 
            text: props.name
        })
        let del_button = createElem({
            tag: 'div',
            class: 'del-button', 
            text: '-'
        })
        let proj_data = {
            projList,
            project,
            project_node,
            project_name,
            del_button
        }
        if (props.active) {
            project_name.classList.add("active");
        }
        attachProjectListeners(proj_data)
        project_node.appendChild(project_name)
        project_node.appendChild(del_button)
        project_list.appendChild(project_node)
    }

    const renderTask = (projList, task) => {
        let props = task.getProps()
        let task_list = doc.getElementById('task-list')

        let checkbox = createCheckbox(task)
        let name = createName(task)
    
        let date = createElem({
            class: 'task-date', 
            text: format(props.date, 'MMM. dd')
        })

        let menu = createElem({
            class: 'task-edit', 
            text: 'i'
        })

        let task_left = createElem({
            class: 'task-left', 
        })

        task_left.appendChild(checkbox)
        task_left.appendChild(name)

        let task_right = createElem({
            class: 'task-right', 
        })

        task_right.appendChild(date)
        task_right.appendChild(menu)

        let task_node = createElem({
            class: 'task', 
        })

        task_node.appendChild(task_left)
        task_node.appendChild(task_right)

        //ATTACH LISTENERS!
        let task_data = {
            projList,
            task,
            task_node
        }

        if (props.isComplete) {
            task_node.classList.add('complete')
        } else if (props.isPriority) {
            task_node.classList.add('priority')
        }

        attachTaskListeners(task_data)
        

        task_list.appendChild(task_node)
    }

    const render = (projList) => {
        //clear areas where data gets added
        clear()
        //loop through projects, draw tasks for active project
        for (let i = 0; i < projList.len(); i++) {
            let project = projList.getItem('Project', i)
            renderProject(projList, project)
            //when project active, draw its tasks
            if (project.getProps().active) {
                for (let i = 0; i < project.getProps().list.len(); i++) {
                    let task = project.getProps().list.getItem('Task',i)
                    renderTask(projList, task)
                }
            }
        }
        renderButtons()

        //projList.renderItems()
    }





    const createProjectWindow = () => {
        let projectWindow = createElem({
            tag: 'div', 
            id: 'project-window'})
        let projectTitle = createElem({
            tag: 'div', 
            class: 'title',
            text: 'Projects'})
        let projects = createElem({
            tag: 'div', 
            id: 'project-list',
            text: 'projects here '})

        projectWindow.appendChild(projectTitle)
        projectWindow.appendChild(projects)
        
        return projectWindow
    }

    const init = (projList) => {
        let add_project = doc.getElementById('add-project')
        let add_task = doc.getElementById('task-form-submit')

        add_project.addEventListener('click', function() {
            addProjectListener(projList)
        })
        add_task.addEventListener('click', function() {
            addTaskListener(projList)
        })

        render(projList)
    }
    
    return {
        clear,
        renderProject,
        renderTask,
        render,
        init
    };
})(document);

export default DOM;
 