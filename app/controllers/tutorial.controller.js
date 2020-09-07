const db = require('../models');
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if(!req.body.title){
        res.status(400)
            .send({ message: "Content can not be empty!" });
    }
    try {
        const tutorial = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false,
        };

        const data = await Tutorial.create(tutorial);
        res.json(data);

    } catch(error){
        res.status(500)
            .send({ message: "Some error occurred while creating the Tutorial." });
    };
};

exports.findAll = async (req, res) => {
    try {
        const title = req.query.title;
        const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

        const data = await Tutorial.findAll({ where: condition });
        res.json(data);

    } catch(error){
        res.status(500)
            .send({ message: "Some error occurred while retrieving tutorials." });
    };
};

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
    
        const data = await Tutorial.findByPk(id);
        res.json(data);

    } catch(error){
        res.status(500)
            .send({ message: "Error retrieving Tutorial with id=" + id });
    };
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;

        const num = await Tutorial.update(req.body, { where: { id } });
        res.send({
            message: "Tutorial was updated successfully."
        });
    
    } catch(error){
        res.status(500).send({
            message: "Error updating Tutorial with id=" + id
        });
    };
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        
        await Tutorial.destroy({ where: { id }});
        res.send({
            message: "Tutorial was deleted successfully!"
        });

    } catch(error){
        res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
        });
    };
};

exports.deleteAll = async (req, res) => {
    try {
        await Tutorial.destroy({ where: {}});
        res.send({ message: "Tutorials were deleted successfully!" });

    } catch(error){
        res.status(500).send({
            message: "Some error occurred while removing all tutorials."
        });
    };
};

exports.findAllPublished = async (req, res) => {
    try {
        const data = await Tutorial.findAll({ where: { published: true }} );
        res.send(data);

    } catch(error){
        res.status(500).send({
            message: "Some error occurred while retrieving tutorials."
        });
    };
};

