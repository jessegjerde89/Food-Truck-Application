const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    console.log('fav get', req.body)
    const queryText = `SELECT * FROM "user_favorite" WHERE "user_favorites"."user_id" = $1 `
    pool.query(queryText, [req.params.id])
    .then(response => {
        console.log("res fav get", repsonse)
        res.send(response.rows)
    }).catch(error => {
        console.log('error in get', error)
        res.sendStatus(500)
    })
});


router.post('/', (req, res) => {
    console.log(req.body)
    const queryText =  `INSERT INTO "user_favorite" ("user_id", "vendor_id")
                        VALUES ($1, $2)`
    pool.queryText, [req.user.id, req.body.vendor_id]
    .then(response => {
        console.log('response from post', response)
        res.sendStatus(201)
    }).catch(error => {
        console.log('error in post fav', error)
        res.sendStatus(500)
    })
});

module.exports = router;