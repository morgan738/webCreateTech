import axios from 'axios'


//ACTION TYPES
const GET_ALL_PROJECTS = "GET_ALL_PROJECTS"
const GET_SINGLE_PROJECT = "GET_SINGLE_PROJECT"
const EDIT_PROJECT = "EDIT_PROJECT"
const ADD_PROJECT = "ADD_PROJECT"
const DELETE_PROJECT = "DELETE_PROJECT"


//ACTION CREATORS
const getProjects = projects => ({
    type: GET_ALL_PROJECTS,
    projects
})

const getSingleProject = project => ({
    type:GET_SINGLE_PROJECT,
    project
})

const editProject = project => ({
    type: EDIT_PROJECT,
    project
})

const addProject = project => ({
    type: ADD_PROJECT,
    project
})

const deleteProject = project => ({
    typpe: DELETE_PROJECT,
    project
})

//THUNK
export const getAllProjects = () => async dispatch => {
    try {
        const {data} = await axios.get('/api/project')
        console.log(data)
        dispatch(getProjects(data))
    } catch (error) {
        console.error(error.response)
    }
}

export const getOneProject = (id) => async dispatch => {
    try {
        const {data} = await axios.get(`/api/project/${id}`)
        dispatch(getSingleProject(data))
    } catch (error) {
        console.error(error)
    }
}

export const updateProject = (project) => async dispatch => {
    try {
        const {data} = await axios.put(`/api/project/${project.id}`,project)
        dispatch(editProject(data))
    } catch (error) {
        console.error(error)
    }
}

export const addOneProject = project => async dispatch => {
    try {
        const {data} = await axios.post('/api/project', project)
        console.log("DATA", data)
        dispatch(addProject(data))
    } catch (error) {
        console.error(error)
    }
}

export const removeProject = project => async dispatch => {
    try {
        await axios.delete(`/api/project/${project.id}`)
        dispatch(deleteProject(project))
    } catch (error) {
        console.error(error)
    }
}

const initialState = []

//REDUCER
export default function (state = initialState, action){
    console.log(state)
    switch(action.type){
        case GET_ALL_PROJECTS:
            return action.projects
        case GET_SINGLE_PROJECT:
            return action.project
        case EDIT_PROJECT:
            return action.project
        case ADD_PROJECT:
            return action.project
        case DELETE_PROJECT:
            return action.project
        default:
            return state
    }
}