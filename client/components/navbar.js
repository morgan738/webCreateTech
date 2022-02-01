import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'



const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* <Link to="/"><h1 className = 'center'>Website Creation Tech Specification Form</h1></Link> */}

    

    <Link to="/">
    <a className="link">
    <span className="mask">
    <div className="link-container">
      <span className="link-title1 title">Website Creation Tech Specification Form</span>
      <span className="link-title2 title">To Homepage</span>

    </div>
    </span>
    <div className="link-icon">
    <svg className="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
    </svg>
    <svg className="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
    </svg>
  </div>
    </a>


    </Link>
    



    {/* <nav>
      {isLoggedIn ? (
        <div> */}
          {/* The navbar will show these links after you log in */}
         {/*  <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
         
 
        </div>
        
      ) : (
        <div> */}
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          
        </div>
      )}
      
    </nav> */}
    <hr />


    
  </div>
  
)

/**
 * CONTAINER
 */
const mapState = state => {

  return {
    isLoggedIn: !!state.user.id,

  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
