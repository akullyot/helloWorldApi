const express   = require('express');
const languages = express.Router();
const Language  = require('../models/language.js');


languages.get('/', (request, response) => 
{
    Language.find()
        .then(foundLanguages => {
            response.json(foundLanguages)
        })

});
languages.get('/seed', (req, res) => 
{
    const languageBulkDataArray = require('../seed/languagesArray.js');
    Language.insertMany(languageBulkDataArray)
        .then(createdLanguages => {
            res.json({
                message: "Seed successful!"
            })
        })
})

languages.get('/random', (request, response) => 
{
    Language.find()
    .then(foundLanguages => 
    {
        let index = Math.round(Math.random()*6);
        console.log(index);
        response.json(foundLanguages[index]);
    });

})

languages.get('/:name', (request,response) => 
{
    Language.findOne({name : request.params.name.toLowerCase()})
        .then(foundLanguage => 
        {
            response.json(foundLanguage)
        })
});

module.exports = languages
