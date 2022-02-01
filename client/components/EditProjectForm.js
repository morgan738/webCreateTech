import React from 'react'

const EditProjectForm = props => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>

                <h2>
                    <label htmlFor='projectName'> Project Name </label>
                </h2>
                <input
                    name = 'projectName'
                    type = 'text'
                    onChange = {props.handleChange}
                    value = {props.projectName}
                    
                />

                <h3>
                    <label htmlFor='author'>Author </label>
                </h3>
                <input
                    name = 'author'
                    type = 'text'
                    onChange = {props.handleChange}
                    value = {props.author} 
                />
                <h3>
                    <label htmlFor='authorPhone'>Phone Number</label>
                </h3>
                    <input
                        id='authorPhone'
                        name='authorPhone'
                        type = 'text'
                        onChange = {props.handleChange}
                        value = {props.authorPhone}
                    />
                <h3>
                    <label htmlFor='authorEmail'>Email</label>
                </h3>
                    <input
                        id='authorEmail'
                        name='authorEmail'
                        type='text'
                        onChange={props.handleChange}
                        value={props.authorEmail}
                    />
                <h3>
                    <label htmlFor='authorAdress'>Address</label>
                </h3>
                    <input
                        id='authorAddress'
                        name='authorAddress'
                        type='text'
                        onChange={props.handleChange}
                        value={props.authorAddress}
                    />


                <div className = 'container'>
                    <div className = 'labelBreak'>
                        <h3>
                            <label htmlFor='wireframe'>Wireframe Link </label>
                        </h3>
                    </div>
                <input
                    name='wireframe'
                    type='url'
                    pattern = "https://.*"
                    onChange={props.handleChange}
                    value={props.wireframe}
                    className = 'wireframeInput'
                />
                    
                </div>

                <div className = 'container'>
                    <div className = "labelBreak">
                        <h3>
                            <label htmlFor='description'>Description </label>
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


                {/* <div className='betweenButtons'></div> */}
                <div className='editFooter'>

                    <button className="submitButton-pushable" type='submit'>
                        <span className="submitButton-shadow"></span>
                        <span className="submitButton-edge"></span>
                        <span className="submitButton-front text">
                            Submit Changes
                        </span>
                    </button>
                </div>

            </form>

        </div>
    )
}

export default EditProjectForm