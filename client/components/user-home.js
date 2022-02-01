import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'




/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  console.log(props)

  

  return (
    
    <div>
      <Redirect to='/'/>

      
      
    </div>

    
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}



export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
