import dispatcher from "../dispatcher/dispatcher";
import ActionConstants from '../constants/actions';

export function addProject(project) {
    dispatcher.dispatch({
        type: ActionConstants.Add_Project,
        value: project
    });
}

export function removeProject(id) {
    dispatcher.dispatch({
        type: ActionConstants.Remove_Project,
        value: id
    });
}