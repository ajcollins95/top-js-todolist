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

    const _makeDefault = () => {
        //make the default data for an empty cache
        let projects = ProjectList()
        let project = Project({name: 'Accept/Enjoy Life as it Arrives'})
        project.addTask(Task({ name: 'Drink water'}))
        project.addTask(Task({ name: 'Meditate' }))
        projects.add(project)
        projects.showList()

    }



    const run = () => {
        _init()
    };
    
    return {
      run
    };
  })();

  export default application;
