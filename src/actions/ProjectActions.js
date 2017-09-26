import dispatcher from "../dispatcher/dispatcher";

export function addProject(project) {
    dispatcher.dispatch({
        type: 'ADD_PROJECT',
        value: project
    });
}