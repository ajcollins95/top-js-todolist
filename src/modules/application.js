import DOM from './domManipulation';
import Project from './Project';
import Task from './Task';

//TODO Application Module
const application = (() => {

    const init = (marker,index) => {
        alert('App')
        DOM.init()
        let project = Project()
        let task = Task()
        
        project.say()
        task.say()
    };

    const run = (marker,index) => {
        init()
    };

    
    return {
      run
    };
  })();

  export default application;
