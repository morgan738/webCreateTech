/* eslint-disable no-alert */
import React from 'react'
import {connect} from 'react-redux'
import { addOneProject } from '../store'
import NewProjectForm from './NewProjectForm'
import { Redirect } from 'react-router-dom'

export class NewProject extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            projectName: "",
            author: "",
            authorPhone: "",
            authorEmail: "",
            authorAddress: "",
            description: "",
            wireframe: "",
            createdAt: "",
            submitSuccess: false

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
            
            if(!document.getElementById('projectName').value || !document.getElementById('author').value){
                window.confirm("Not valid")
                return
            }
            //this.props.addOneProject({...this.props.project, ...this.state})
            this.props.addOneProject({...this.state})
            console.log(this.props)
            console.log(this.state)
            this.setState({submitSuccess: true})
        } catch (error) {
            console.error(error)
        }
    }

    

 

    render(){
        if(this.state.submitSuccess){
            return <Redirect to='/'/>
        }
        console.log(this.state)
        return(
            <div>
                <div>
                    <div className = 'container'>

                        <h1 className = 'center'>New Project</h1>
                    </div>
                    <hr/>
                    <div className='fade-in'>
                        <NewProjectForm 
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
            </div>
        )
    }
}

const mapDispatch = dispatch => ({
    addOneProject: project => dispatch(addOneProject(project))

})

export default connect(null, mapDispatch)(NewProject)
