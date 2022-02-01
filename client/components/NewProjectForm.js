import React from 'react'

const NewProjectForm = props => {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>

                    <h2 className='color'>
                        <label htmlFor='projectName'> Project Name </label>
                    </h2>
                    
                        
                    <input
                        id = 'projectName'
                        name = 'projectName'
                        type = 'text'
                        onChange = {props.handleChange}
                        value = {props.projectName}
                    />
                
                </div>

                <div>

                    <h3 className='color'>
                        <label htmlFor='author'>Author </label>
                    </h3>
                    <input
                        id = 'author'
                        name = 'author'
                        type = 'text'
                        onChange = {props.handleChange}
                        value = {props.author} 
                    />
                </div>
                
                <div>
                    <h3 className='color'>
                        <label htmlFor='authorPhone'>Phone Number</label>
                    </h3>
                    <input
                        id='authorPhone'
                        name='authorPhone'
                        type = 'text'
                        onChange = {props.handleChange}
                        value = {props.authorPhone}
                    />
                </div>

                <div>
                    <h3 className='color'>
                        <label htmlFor='authorEmail'>Email</label>
                    </h3>
                    <input
                        id='authorEmail'
                        name='authorEmail'
                        type='text'
                        onChange={props.handleChange}
                        value={props.authorEmail}
                    />
                </div>

                <div>
                    <h3 className='color'>
                        <label htmlFor='authorAddress'>Address</label>
                    </h3>
                    <input
                        id='authorAddress'
                        name='authorAddress'
                        type='text'
                        onChange={props.handleChange}
                        value={props.authorAddress}
                    />
                </div>

                <div className = 'container'>
                    <div className = 'labelBreak'>
                        <h3 className='color'>
                            <label htmlFor='wireframe'>Wireframe Link </label>
                        </h3>
                    </div>
                <input
                    name='wireframe'
                    type='url'
                    pattern = "https://.*"
                    placeholder = "https://wireframe.cc"
                    onChange={props.handleChange}
                    value={props.wireframe}
                    className = 'wireframeInput'
                />
                    
                </div>

                <div className = 'container'>
                
                    <div className = 'labelBreak'>
                        <h3 className='color'>
                            <label htmlFor='description' >Description </label>
                        </h3>
                    </div>
                
                    <textarea
                        name='description'
                        type='text'
                        onChange = {props.handleChange}
                        value = {props.description}
                        className = 'descriptionInput'
                    ></textarea>
                </div>
                
                
                <div className='betweenButtons'></div>

                <button className="submitButton-pushable" type='submit' >
                    <span className="submitButton-shadow"></span>
                    <span className="submitButton-edge"></span>
                    <span className="submitButton-front text">
                        Submit Changes
                    </span>
                </button>
                

            </form>

        </div>
    )
}

export default NewProjectForm