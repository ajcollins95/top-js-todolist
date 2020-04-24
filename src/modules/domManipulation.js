import Elem from './element';

//DOM Manipulator module for HTML display
//use "class" data to display objects
const DOM = ((doc) => {
    //let page = doc.getElementById('content')
    
    const activeProjectListener = (projList, project) => {
        //switches active project
        let clicked = project
        let activeIndex = projList.getIndexOf('active', 1)
        //console.log(activeIndex)
        let active = projList.getItem('Project', activeIndex)
        clicked.setActive(1)
        active.setActive(0)
        //console.log('i get here')
        render(projList)
    }

    const createElem = (args) => {
        //creates element form an argument list
        let tag = args.tag || div
        let elem = doc.createElement(args.tag)

        if (args.class) {
            elem.classList.add(args.class)
        }
        if (args.text) {
            elem.innerText = args.text
        }
        if (args.id) {
          elem.id = args.id
        }

        return elem
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

        remove_children(project_list)
        remove_children(task_list)
    }



    const renderProject = (projList, project) => {
        //makes project node
        let props = project.getProps()
        let project_list = doc.getElementById('project-list')
        let project_node = createElem({
            tag: 'div',
            class: 'project', 
            text: props.name
        })
        //selects active project
        if (props.active) {
            project_node.classList.add("active");
        }
        //attach listeners
        project_node.addEventListener('click', function() {
            activeProjectListener(projList,project)
        } )
        
        


        project_list.appendChild(project_node)
    }

    const renderTask = (task) => {
        let props = task.getProps()
        let task_list = doc.getElementById('task-list')
        let task_node = createElem({
            tag: 'div',
            class: 'task', 
            text: props.name
        })

        task_list.appendChild(task_node)
    }

    const render = (projList) => {
        //clear areas where data gets added
        clear()
        //loop through projects, draw tasks for active project
        for (let i = 0; i < projList.len(); i++) {
            let project = projList.getItem('Project', i)
            //console.log(project.getProps().name)
            renderProject(projList, project)
            //when project active, draw its tasks
            if (project.getProps().active) {
                for (let i = 0; i < project.getProps().list.len(); i++) {
                    let task = project.getProps().list.getItem('Task',i)
                    renderTask(task)
                }
            }
        }

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


    
    return {
        clear,
        renderProject,
        renderTask,
        render
    };
})(document);

export default DOM;
  /*

  function loadPage() {
    //returns an element that contains a skeleton of the page
    //ie Nav Bar, content frame, and footer

    let title = createTitle()
    let nav = createNav()
    let frame = createContentWindow()
    let footer = createFooter()
    let spacer = createSpacer()
    let page = document.createElement('div')

    page.appendChild(nav)
    page.appendChild(title)
    page.appendChild(frame)
    page.appendChild(spacer)
    page.appendChild(footer)

    return page
}

//Title Creator
function createTitle() {
    //Show restaurant name
    let h2 = document.createElement('h2')
    let restaurantName = 'The Rusty Spatula(r)'

    h2.id = 'title'
    h2.innerText = restaurantName

    return h2
}


//Navbar function and helpers
function createNav() {
    //creates a navbar with three buttons
    let nav = document.createElement('nav')
    let tabs = ['Home','Menu','Contact']

    nav.classList.add('flex-container')
    tabs.forEach( (tab) => {
        let btn = createButton(tab)
        nav.appendChild(btn)
    })

    return nav
}

function createButton(name) {
    //makes a button named name and has a lowercase name as the id
    let id = name.toLowerCase()
    let btn = document.createElement('button')

    btn.id = id
    btn.innerText = name

    return btn
}

//ContentWindow function
function createContentWindow() {
    let content = document.createElement('div')

    content.id = 'content-frame'

    return content
}

//Create footer 
function createFooter() {
    //creates footer content and positions it.
    let footer = document.createElement('footer')
    let p = document.createElement('p')

    p.innerText = '*tetanus shots not included'
    p.style['text-align'] = 'center'
    p.style.margin = 'auto'

    footer.appendChild(p)

    return footer
}

LOL
LOL
LOL
LOL
 I HATE THE NEW LOOK
 LOL



























//Create spacer 
function createSpacer() {
    //creates spacer element
    let spacer = document.createElement('div')
    spacer.classList.add('spacer')
    return spacer
}

export default loadPage;
*/