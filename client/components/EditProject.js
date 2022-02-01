import React from 'react'
import {connect} from 'react-redux'
import { updateProject } from '../store'
import EditProjectForm from './EditProjectForm'

export class EditProject extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            projectName: this.props.project.projectName,
            author: this.props.project.author,
            authorPhone: this.props.project.authorPhone,
            authorEmail: this.props.project.authorEmail,
            authorAddress: this.props.project.authorAddress,
            description: this.props.project.description,
            wireframe: this.props.project.wireframe,
            createdAt: this.props.project.createdAt,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        try {
            this.props.updateProject({...this.props.project, ...this.state})
            this.props.toggleEdit()
        } catch (error) {
            console.error(error)
        }
    }

 

    render(){
        console.log(this.props)
        return(
            <div>
                <div>
                    <EditProjectForm 
                        handleChange = {this.handleChange}
                        handleSubmit = {this.handleSubmit}
                        projectName = {this.state.projectName}
                        author = {this.state.author}
                        authorPhone = {this.state.authorPhone}
                        authorEmail = {this.state.authorEmail}
                        authorAddress = {this.state.authorAddress}
                        description = {this.state.description}
                        wireframe = {this.state.wireframe}
                        createdAt = {this.state.createdAt}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatch = dispatch => ({
    updateProject: project => dispatch(updateProject(project))

})

export default connect(null, mapDispatch)(EditProject)
