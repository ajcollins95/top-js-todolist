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
        let projects = ProjectList()
        let project = Project({name: 'Get Life Back Together'})
        projects.add(project)
        project = Project({name: 'Accept and Enjoy Life as it Arrives'})
        projects.add(project)
        projects.show()
        alert('Completed')
    }



    const run = () => {
        _init()
    };
    
    return {
      run
    };
  })();

  export default application;
