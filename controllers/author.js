const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../models')

const getAllAuthors = (req, res) => {
    models.Author.findAll()
    .then(authors => {
        console.log(authors)
        return res.status(200).json({authors})
    })
    .catch(error => {
        return res.status(500).send(error.message)
    })
}

const getAuthorById = (req, res) => {
    models.Author.findByPk(req.params.id)
    .then(author => {
        models.Article.findAll({
            where: {
                author_id: req.params.id
            }
        })
        .then(articles => {
            return res.status(200).json({author, articles})

        })
    })
    .catch(error => {
        return res.status(500).send({ error })
    })
}

module.exports = {
    getAllAuthors,
    getAuthorById
}