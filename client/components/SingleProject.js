/* eslint-disable no-alert */
import React from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import { getOneProject, removeProject } from '../store'
import EditProject from './EditProject'
import { Link, Redirect } from 'react-router-dom'


export class SingleProject extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            projectName: "",
            author: "",
            authorPhone: "",
            authorEmail: "",
            authorAddress: "",
            description: "",
            wireframe: "",
            createdAt: "",
            updatedAt: "",
            isLoading: true,
            showEdit: false,
            deleted: false,
            firstLoad: true
        }

        this.toggleEdit = this.toggleEdit.bind(this)
        this.delete = this.delete.bind(this)
        this.hideEdit = this.hideEdit.bind(this)
       
    }

    componentDidMount(){
        this.props.getOneProject(this.props.match.params.id)
            setTimeout(() => {
                this.setState({
                    projectName: this.props.project.projectName,
                    author: this.props.project.author,
                    authorPhone: this.props.project.authorPhone,
                    authorEmail: this.props.project.authorEmail,
                    authorAddress: this.props.project.authorAddress,
                    description:this.props.project.description,
                    wireframe: this.props.project.wireframe,
                    createdAt: this.props.project.createdAt,
                    updatedAt: this.props.project.updatedAt,
                    isLoading: false,
                    firstLoad: false
                    })
            }, 700)

    }

    componentDidUpdate(prevProps){
        if(prevProps.project !== this.props.project){
            
            this.setState({
                projectName: this.props.project.projectName,
                author: this.props.project.author,
                authorPhone: this.props.project.authorPhone,
                authorEmail: this.props.project.authorEmail,
                authorAddress: this.props.project.authorAddress,
                description:this.props.project.description,
                wireframe: this.props.project.wireframe,
                createdAt: this.props.project.createdAt,
                updatedAt: this.props.project.updatedAt
            })
        }

    }

    toggleEdit(){
        this.setState(previousState => ({showEdit: !previousState.showEdit}))
        document.getElementById('overlay').style.display='block'
        //document.getElementById('singleBody').style.overflowY='hidden'

    }

    hideEdit(){
       

        this.toggleEdit()
        document.getElementById('overlay').style.display='none'
        
            
        
        
    }



    delete(){
        if(window.confirm("Do you really want to delete this project?")){
            try {
                this.props.removeProject(this.props.project)
                setTimeout(()=> {

                    this.setState({deleted: true})
                },500)
            } catch (error) {
                console.error(error)
            }

            
        }
        

    }




    render(){
        console.log(this.state)
        if(this.state.deleted){
            return <Redirect to='/'/>
        }

        return(
            <div id='singleBody'>
                {this.state.isLoading?
                <Loading/>:
                <div className='fade-in'>
                    <div className='overlay' id='overlay' onClick={this.hideEdit}></div>
                    <div className = 'buttonRow' >
                        <button type='button' className='editButton' onClick={this.toggleEdit}>Edit</button>
                          
                            {this.state.showEdit?
                                <div className='popup slideToRight' id='editPopup'>
                                    
                                    <div className='editHeader'>
                                        <span className = 'close'> 
                                            <button type='button' className='close' onClick={this.hideEdit}>&times;</button>
                                        </span>
                                        <h1> Edit Project</h1>
                                        
                                    </div>
                                    <div className='popup-content'>
                                        {/* <span className = 'close'> 
                                            <button type='button' className='close' onClick={this.hideEdit}>&times;</button>
                                        </span> */}
                                        <EditProject 
                                            project={this.props.project}
                                            toggleEdit = {this.toggleEdit}
                                        />
                                    </div>
                                </div>
                                :null
                            }
                            
                        <button type='button' className='deleteButton' onClick={this.delete}>Delete</button>
                    </div>

                    <div>
                        
                        <div className = 'container'>

                            <h1 className = 'center'> {this.state.projectName} </h1>
                        </div>
                        <hr/>
                        <h1 className='color'>Creator</h1>
                        <div className = 'row'>
                            <div className = 'column'>
                                <table className = 'singleTable'>
                                        <tr>
                                            <th className='singleTable-thHeader'>Author</th>
                                            <td className='singleTable-tdHeader'>{this.state.author}</td>
                                        </tr>
                                        <tr>
                                            <th className='singleTable-thHeader'>Phone Number</th>
                                            <td className='singleTable-tdHeader'>{this.state.authorPhone}</td>
                                        </tr>
                                </table>
                            </div>
                            <div className = 'column'>
                                <table className = 'singleTable'>
                                    <tr>
                                        <th className='singleTable-thHeader'>Email</th>
                                        <td className='singleTable-tdHeader'>{this.state.authorEmail}</td>
                                    </tr>
                                    <tr>
                                        <th className='singleTable-thHeader'>Address</th>
                                        <td className='singleTable-tdHeader'>{this.state.authorAddress}</td>
                                    </tr>
                                </table>
                            </div>

                        </div>
                        <hr/>
                        <h1 className='color'>Project Details</h1>
                        
                        <div>
                            <table className='singleTable singleTable-tr'>
                                <tr>
                                    <th className='singleTable-th'>Date Created</th>
                                    <td className='singleTable-td'>{this.state.createdAt.substring(0,10)}</td>
                                </tr>
                                <tr>
                                    <th className='singleTable-th'>Updated At</th>
                                    <td className='singleTable-td'>{this.state.updatedAt.substring(0,10)} @ {this.state.updatedAt.substring(11, 16)}</td>
                                </tr>
                                <tr>
                                    <th className='singleTable-th'>WireFrame Link</th>
                                    <td className='singleTable-td'><a href={this.state.wireframe} target='_blank' rel="noreferrer noopener" className ='color'>{this.state.wireframe}</a></td>
                                </tr>
                                <tr>
                                    <th className='singleTable-th'>Description</th>
                                    <td className='singleTable-td'>{this.state.description}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
                }
               
               
            </div>
        )
    }
}

const mapState = state => {
    console.log(state)
    return{
        project:state.projects
    }
}

const mapDispatch = dispatch =>({
    getOneProject: (id) => dispatch(getOneProject(id)),
    removeProject: (project) => dispatch(removeProject(project))
})

export default connect(mapState, mapDispatch)(SingleProject)