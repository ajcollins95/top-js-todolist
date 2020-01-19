import Elem from './element';

//DOM Manipulator module for HTML display
//use "class" data to display objects
const DOM = ((doc) => {
    let page = doc.getElementById('content')

    const createElem = (args) => {
        //creates element form an argument list
        let tag = args.tag || div
        let elem = document.createElement(args.tag)

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

    const createProjectWindow = () => {
        let projectWindow = createElem({
            tag: 'div', 
            id: 'project-window'})
        let projectTitle = createElem({
            tag: 'div', 
            class: 'title',
            text: 'projects'})
        let projects = createElem({
            tag: 'div', 
            id: 'project-list',
            text: 'projects here '})

        projectWindow.appendChild(projectTitle)
        projectWindow.appendChild(projects)
        
        return projectWindow
    }

    const createTaskWindow = () => {
      let taskWindow = createElem({
          tag: 'div', 
          id: 'task-window'})
      let taskTitle = createElem({
          tag: 'div', 
          class: 'title',
          text: 'tasks'})
      let tasks = createElem({
          tag: 'div', 
          id: 'task-list',
          text: 'tasks here '})

      taskWindow.appendChild(taskTitle)
      taskWindow.appendChild(tasks)
      
      return taskWindow
  }


    const createHeader = () => {
        let titleText = 'to.Do'
        let subtitleText = '"must do it"'

        let header = createElem({tag: 'header'})
        let title = createElem({
            tag: 'p', 
            id: 'title',
            text: titleText})
        let subtitle = createElem({
            tag: 'p', 
            id: 'subtitle',
            text: subtitleText})

        header.appendChild(title)
        //header.appendChild(subtitle)
        
        return header
    }

    const createAppWindow = () => {
      let appWindow = createElem({
          tag: 'div', 
          id: 'app-window'})

      let taskWindow = createTaskWindow()  
      let projectWindow = createProjectWindow()
      
      appWindow.appendChild(projectWindow)
      appWindow.appendChild(taskWindow)
      
                                                                                          
      return appWindow
  }

    const loadFrame = () => {
        let header = createHeader()
        let appWindow = createAppWindow()

        page.appendChild(header)
        page.appendChild(appWindow)
    };

    const init = () => {
        loadFrame()
  };

    init()
    
    return {
        init
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