const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

    // get the new location of the food truck 
router.get('/', (req, res) => {
    const queryText = 'SELECT "latitude", "longitude", "vendor_name", "id" FROM "user"'; 
    pool.query(queryText)
    .then(response => {
        console.log('response location get', response.rows)
        res.send(response.rows)
    }).catch( error =>{ 
        console.log('error response location', error)
        res.sendStatus(500)
    })
})

    // post the new location of the food truck 
router.post('/', (req, res) => {
    console.log("thisone", req.body, req.user.id)
    const queryText = `UPDATE "user" SET "latitude" = ($1), "longitude" = ($2) 
                        WHERE "user".id = ($3); `
    pool.query(queryText, [ req.body.latitude, req.body.longitude, req.user.id])
    .then(response => {
        console.log('response location post', response)
        res.sendStatus(201)
    }).catch(error => {
        console.log('error post location')
        res.sendStatus(500)
    })
})

// router.get('/all', (req, res) => {
//     const queryText = `SELECT lat
//     pool.query(queryText, [req.body.latitude, req.body.longitude]) 

// })

module.exports = router;