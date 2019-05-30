const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


    // get the new location of the food truck 

router.get('/', (req, res) => {
    const queryText = 'SELECT "latitude", "longitude" FROM "location"'; 
    pool.query(queryText)
    .then(response => {
        console.log('response location get', response)
        res.send(response.data)
    }).catch( error =>{ 
        console.log('error response location', error)
        res.sendStatus(500)
    })
})

    // post the new location of the food truck 
router.post('/', (req, res) => {
    // const queryText = `INSERT INTO "location" ("vendor_id", latitude", "longitude") 
    // VALUES ($1, $2, $3)`
    
    const queryText = `INSERT INTO "location" ("latitude", "longitude") 
                        VALUES ($1, $2)`
    pool.query(queryText, [req.body.latitude, req.body.longitude])
    .then(response => {
        console.log('response location post', response)
        res.sendStatus(201)
    }).catch(error => {
        console.log('error post location')
        res.sendStatus(500)
    })
})


module.exports = router;