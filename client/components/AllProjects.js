import React from 'react'
import {connect} from 'react-redux'
import { getAllProjects } from '../store'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'





export class AllProjects extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            allProjects:[],
            isLoading: true
        }
    }

    componentDidMount(){
        
        
        this.props.getAllProjects()
        setTimeout(()=>{
            this.setState({allProjects: [...this.props.projects], isLoading: false})
        },1000)
    }

    componentDidUpdate(prevProps){
        if(prevProps.project !== this.props.project){
            this.setState({allProjects:[...this.props.project]})
        }
    }

    

    render(){
        console.log(this.props)
        return(
            <div>
                <div className = 'container'>
                    

                <h1 className='header'>All Projects</h1>
                <Link to="/createNew"><button type='button' className='newProjectButton'>Create New Project</button></Link>
                </div>
                {this.state.isLoading ?
                    <Loading/>:

                    <div className='fade-in'>
                        <table className='allTable'>
                            <tr>
                                <th className='allTable-th'>Project Name</th>
                                <th className='allTable-th'>Author</th>
                                <th className='allTable-th'>Date Created</th>
                                <th className='allTable-th'>Updated At</th>
                                <th className='allTable-th'>Wireframe Link</th>
                            </tr>

                        
                        
                        {this.state.allProjects.map(projects => {
                            return(
                                <tr key={projects.id} className='allTable-tr'>
                                    
                                    
                        

                                    <td className='allTable-td'><Link to={`/project/${projects.id}`} className='colorLink'> {projects.projectName} </Link></td>
                                    <td className='allTable-td'>{projects.author}</td>
                                    <td className='allTable-td'>{projects.createdAt.substring(0,10)}</td>
                                    <td className='allTable-td'>{projects.updatedAt.substring(0,10)} @ {projects.updatedAt.substring(11, 16)}</td>
                                    <td className='allTable-td'><a href={projects.wireframe} target='_blank' rel="noreferrer noopener" className='colorLink'>{projects.wireframe}</a></td>
                                    
                                    
                                </tr>
                                
                            )
                        })}
                        </table>
                        
                    </div>}
            </div>
        )
    }
}

const mapState = state => {
    console.log(state)

    return{

        projects: state.projects
    }
    
}

const mapDispatch = dispatch => ({
    getAllProjects: () => dispatch(getAllProjects())
})

export default connect(mapState, mapDispatch)(AllProjects)