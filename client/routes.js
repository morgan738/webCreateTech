import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login, 
  Signup, 
  UserHome
} from './components'
import { NotFound } from './components/NotFound'
import  AllProjects from './components/AllProjects'
import  SingleProject  from './components/SingleProject'
import NewProject from './components/NewProject'
import EditProject from './components/EditProject'

import {
  me,
  guest
} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    
  }

  render() {
    const {isLoggedIn} = this.props

    

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path = '/' component={AllProjects}/>
        <Route exact path="/project/:id" component={SingleProject}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path ="/createNew" component={NewProject}/>
        <Route path = '/404' component={NotFound}/>
        
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays error page component as a fallback */}
        <Route component = {NotFound}/>

      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    guest: () => dispatch(guest())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
