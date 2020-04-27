import DOM from './domManipulation';
import { Task, Project } from './appItems'
import { List, TaskList, ProjectList } from './lists';
import {format, compareAsc} from 'date-fns';

//TODO Application Module
const application = (() => {
    let appData = {}

    const _init = () => {
        _setAppData()
    };

    const _setAppData = () => {
        if (0) {
            //if local storage exists, load the data
            //load()
        }
        else {
            appData = _makeDefault()
        }
    };

    const _makeDefault = () => {
        //make the default data for an empty cache
        let projects = ProjectList()
        let project = Project({name: 'Enjoy'})
        projects.add(project)
        project.addTask(Task({ name: 'Drink water'}))
        project.addTask(Task({ name: 'Meditate' }))
        project.addTask(Task({ 
            name: 'Follow the Anointed Yeshua',
            date: new Date(2018, 11, 24, 10, 33, 30, 0),
            description: 'Trust in dying to self',
            isComplete: false,
            isPriority: true
        }))
        
        project.setActive(1)
        project = Project({name: 'Hokey Pokey'})
        project.addTask(Task({ name: 'Insert Right Foot'}))
        project.addTask(Task({ name: 'Remove Right Foot' }))
        project.addTask(Task({ name: 'Replace Right Foot in Previous Position'}))
        project.addTask(Task({ name: 'Shake Right Foot Vigorously' }))
        projects.add(project)

        console.log(format(new Date(2020, 3, 25), 'MM/dd/yyyy'))

        /*
        select second n, try to delete, there's a bug
        for(let i = 0; i < 3; i++) {
            project = Project({name: 'n'})
            projects.add(project)
        }*/
        
        
        
        
        projects.showList()
        DOM.init(projects)

    }



    const run = () => {
        _init()
    };
    
    return {
      run
    };
  })();

  export default application;
