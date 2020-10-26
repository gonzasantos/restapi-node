const { Router } = require('express')
const router = Router()
const countries = require('../countries.json')
const _ = require('underscore')
const { route } = require('.')


router.get('/', (req, res) => {
    res.json(countries)
})

router.post*('/', (req, res) => {
    const { sortname, name, phoneCode } = req.body
    if (name){
        const id = countries.length + 1
        const newCountry = {...req.body, id}
        countries.push(newCountry)
        res.json('saved')
    } else{
       res.status(500).json({error: 'There was an error'})
    }
})

route.put('/:id', (req, res) => {
    const { id } = req.params
    const { sortname, name, phoneCode } = req.body
    if (name) {
        _.each(countries, (country, i) => {
            if (country.id == id) {
                country.name == name
                country.sortname == sortname
            }
        })
        res.send('modifyed')
    } else {
        res.status(500).json({error: 'There was an error'})
    }
})

router.delete('/:id',  (req, res) => {
    const { id } = req.params
    _.each(countries, (country, i) => {
        if (country.id == id) {
            country.splice(i, 1)
        }
    })
    res.send('deleted')
})

module.exports = router