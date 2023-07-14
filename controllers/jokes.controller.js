const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json( {jokes: allJokes})
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne()
        .then((oneJoke) => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {new: true, runValidators: true}
    )
    .then(updateJoke => {
        res.json({joke: updateJoke})
    })
    .catch((err) => {
        res.json(err)
    });
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOneJoke( { _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
