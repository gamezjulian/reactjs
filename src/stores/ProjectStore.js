import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import ActionConstants from '../constants/actions';

const data = {
    projects: [{
        id: Date.now(),
        title: "Bain Capital",
        description: "O365",
        owner: "Antonio Briones"
    },
    {
        id: Date.now() + 1,
        title: "Whole Food Market",
        description: "Unily",
        owner: "Julian Gamez"
    }
    ]
}

class ProjectStore extends EventEmitter {

    constructor() {
        super();

        this.projects = data.projects;
    }

    getProjects() {
        return this.projects;
    }

    getProject(id) {
        return this.projects.find(x => x.id == id);
    }

    addProject(project) {
        this.projects.push(project);
        this.emit("project_added");
    }

    removeProject(id) {
        let index = this.projects.map(item => item.id).indexOf(id);
        this.projects.splice(index, 1);
        this.emit('change');
    }

    handleActions = (action) => {
        switch (action.type) {
            case ActionConstants.Add_Project: {
                this.addProject(action.value);
                break;
            }
            case ActionConstants.Remove_Project: {
                this.removeProject(action.value);
                break;
            }
            default: break;
        }
    }
}

const projectStore = new ProjectStore();
window.projectStore = projectStore;
dispatcher.register(projectStore.handleActions);

export default projectStore;