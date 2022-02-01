const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
    projectName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "New Project"
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    authorPhone:{
        type: Sequelize.STRING
    },
    authorEmail:{
        type: Sequelize.STRING
    },
    authorAddress:{
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    wireframe: {
        type: Sequelize.STRING
    },


    


})



module.exports = Project