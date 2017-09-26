import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

class ProjectStore extends EventEmitter {

    constructor() {
        super();

        this.projects = [{
            title: 'Bain Capital',
            description: 'O365 Intranet solution',
            owner: 'Antonio Briones'
        },
        {
            title: 'Unily',
            description: 'Product that provides a custom intranet in quite few steps',
            owner: 'Will Saville'
        }];
    }

    getProjects(){
        return this.projects;
    }

    addProject(project) {
        this.projects.push(project);
        this.emit("change");
    }

    handleActions = (action) => {
        switch (action.type) {
            case "ADD_PROJECT": {
                this.addProject(action.value);
            }
        }
    }
}

const projectStore = new ProjectStore();
dispatcher.register(projectStore.handleActions);

export default projectStore;