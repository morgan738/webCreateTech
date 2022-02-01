const router = require('express').Router()
const {Project} = require('../db/models')
module.exports = router

//GETs all projects
router.get('/', async(req,res,next)=> {
    try {
        const projects = await Project.findAll()
        res.json(projects)
    } catch (error) {
        next(error)
    }
})

//GETs one project
router.get('/:id', async(req,res,next)=>{
    try {
        const singleProject = await Project.findByPk(req.params.id)

        res.json(singleProject)
    } catch (error) {
        next(error)
    }
})

//EDIT project
router.put('/:id', async(req,res,next) => {
    try {
        const update = await Project.findByPk(req.params.id)
        const {projectName, author, authorPhone, authorEmail, authorAddress, description, wireframe} = req.body

        const updatedProject = await update.update({
            projectName,
            author,
            authorPhone,
            authorEmail,
            authorAddress,
            description,
            wireframe
        })

        res.json(updatedProject)
    } catch (error) {
        console.error(error)
    }
})

//ADD project
router.post('/', async(req,res,next) => {
    try {
        const {projectName, author, authorPhone, authorEmail, authorAddress, description, wireframe} = req.body

        const newProject = await Project.create({
            projectName,
            author,
            authorPhone,
            authorEmail,
            authorAddress,
            description,
            wireframe
        })

        res.json(newProject)
    } catch (error) {
        console.error(error)
    }
})

//DELETE project
router.delete('/:id', async(req,res,next) => {
    try {
        console.log(req)
        res.send(await Project.destroy({
            where: {
                id: req.params.id
            }
        }))
    } catch (error) {
        console.error(error)
    }
})