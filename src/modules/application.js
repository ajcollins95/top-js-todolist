import DOM from './domManipulation';
import { Task, Project } from './appItems'
import { List, TaskList, ProjectList } from './lists';

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

    const _renderData = () => {

    }

    const _makeDefault = () => {
        //make the default data for an empty cache
        let projects = ProjectList()
        let project = Project({name: 'Accept/Enjoy Life as it Arrives'})
        project.addTask(Task({ name: 'Drink water'}))
        project.addTask(Task({ name: 'Meditate' }))
        projects.add(project)
        project = Project({name: 'Hokey Pokey'})
        project.addTask(Task({ name: 'Insert Right Foot'}))
        project.addTask(Task({ name: 'Remove Right Foot' }))
        project.addTask(Task({ name: 'Replace Right Foot in Previous Position'}))
        project.addTask(Task({ name: 'Shake Right Foot Vigorously' }))
        projects.add(project)
        projects.showList()
        projects.renderProject()

    }



    const run = () => {
        _init()
    };
    
    return {
      run
    };
  })();

  export default application;
