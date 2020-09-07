module.exports = app => {
    const tutorials = require('../controllers/tutorial.controller.js');
    const router = require('express').Router();

    // create tutorial
    router.post('/', tutorials.create);

    // list all tutorials
    router.get('/', tutorials.findAll);

    // list all published tutorials
    router.get('/published', tutorials.findAllPublished);

    // list one tutorials using id
    router.get('/:id', tutorials.findOne);

    // update one tutorial using id
    router.put('/:id', tutorials.update);

    // delete one tutorial using id
    router.delete('/:id', tutorials.delete);

    // delete all tutorials
    router.delete('/', tutorials.deleteAll);

    app.use('/api/tutorials', router);
}

