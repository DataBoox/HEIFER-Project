import { reactLocalStorage } from "reactjs-localstorage";
import { useMemo } from "react";
import { BaseProject } from "./interface";

export const useProject = () => {
    let isLoading: boolean = false;
    let isUpdating: boolean = false;

    let setProject = (project: BaseProject) => {
        try {
            isUpdating = true;
            reactLocalStorage.setObject('selected_heifer_project', project)
            isUpdating = false;
            return project;
        } catch (e) {
            console.log("Error setting project: ", project)
            return false;
        }
    }

    let getProject = () => {
        try {
            isLoading = true;
            const project = reactLocalStorage.getObject('selected_heifer_project')
            isLoading = false;
            return project;
        } catch (e) {
            console.log("Error getting project: ", e)
            return null;
        }
    }


    // console.log("testing changes", projects)
    return useMemo(() => ({
        project: getProject(),
        setProject,
        getProject,
        isLoading,
        isUpdating
    }), [getProject, setProject, isUpdating, isLoading]);
}