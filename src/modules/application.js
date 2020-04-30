import DOM from './domManipulation';
import { Task, Project } from './appItems'
import { List, TaskList, ProjectList } from './lists';
import {parseISO, format, compareAsc} from 'date-fns';

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
        data = JSON.parse(data)
        console.log(data,'from load')
        for (let i = 0; i < data.length; i++) {
            const project_data = data[i]
            let project = Project(
                {
                    name: project_data.name,
                    active: project_data.active
                }
            )
            const task_list = project_data.list
            //console.log(project)
            for (let j = 0; j < task_list.length; j++) {
                task_list[j].date = parseISO(task_list[j].date)
                console.log(task_list[j])
                project.addTask(Task(task_list[j]))
            }
            projects.add(project)
        }
        //projects.showList()
        //projects.clearSave()

        return projects
    }

    const _makeDefault = () => {
        //make the default data for an empty cache
        let projects = ProjectList()
        let project = Project({name: 'Tutorial'})
        projects.add(project)
        project.addTask(Task(
            { 
                name: 'This task is finished',
                isComplete: true
            }
        ))
        project.addTask(Task({ 
            name: 'This task is due on Christmas!',
            date: new Date(2020, 11, 25, 10, 33, 30, 0),
            isComplete: false,
        }))
        project.addTask(Task({ 
            name: 'Breathe (this task is prioritized)',
            isPriority: true
        }))
        project.addTask(Task({ 
            name: 'This task has a secret message in its description',
            description: 'Cheers to being productive!',
        }))
        
        project.setActive(1)
        project = Project({name: 'Hokey Pokey'})
        project.addTask(Task({ name: 'Insert Right Foot'}))
        project.addTask(Task({ name: 'Remove Right Foot' }))
        project.addTask(Task({ name: 'Replace Right Foot in Previous Position'}))
        project.addTask(Task({ name: 'Shake Right Foot Vigorously' }))
        projects.add(project)

        projects.save()
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
