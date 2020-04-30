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
        const save = localStorage.getItem('saveData')
        if (save) {
            appData = _load(save)
        }
        else {
            appData = _makeDefault()
        }
        DOM.init(appData)
    };

    const _load = (data) => {
        let projects = ProjectList()
        console.log('I run')
        projects.clearSave()
    }

    const _makeDefault = () => {
        //make the default data for an empty cache
        let projects = ProjectList()
        let project = Project({name: 'Enjoy'})
        projects.add(project)
        project.addTask(Task(
            { 
                name: 'Drink water',
                isComplete: true
            }
        ))
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

        return projects
    }



    const run = () => {
        _init()
    };
    
    return {
      run
    };
  })();

  export default application;
