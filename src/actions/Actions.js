import dispatcher from "../dispatcher/dispatcher";
import ActionConstants from '../constants/actions';


export const ProjectActions = {
    addProject: (project) => {
        dispatcher.dispatch({
            type: ActionConstants.Add_Project,
            value: project
        });
    },
    removeProject: (id) => {
        dispatcher.dispatch({
            type: ActionConstants.Remove_Project,
            value: id
        });
    }
}

export const NotificationActions = {
    projectAdded: (message) => {
        dispatcher.dispatch({
            type: ActionConstants.Project_Added_Message,
            value: message
        });
    }
}