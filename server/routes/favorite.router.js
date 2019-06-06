const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:user_name', (req, res) => {
    console.log('fav get', req.body)
    const queryText = `SELECT * FROM "user_favorite" WHERE "user_favorite"."user_name" = $1 `
    pool.query(queryText, [req.params.id])
    .then(response => {
        console.log("res fav get", repsonse)
        res.send(response.rows)
    }).catch(error => {
        console.log('error in get', error)
        res.sendStatus(500)
    })
});

router.delete('/:user_name', (req, res) => {
    console.log('fav delete ', req.body)
    const queryText = `DELETE FROM "user_favorite" WHERE "user_favorite"."id" = $1; `
    pool.query(queryText, [req.params.id])
    .then(response => {
        console.log("delete response", response)
        res.sendStatus(201)
    }).catch(error => {
        console.log('error in delete')
        res.sendStatus(500)
    })
})


router.post('/', (req, res) => {
    console.log(req.body)
    const queryText =  `INSERT INTO "user_favorite" ("user_name", "vendor_id")
                        VALUES ($1, $2)`
    pool.queryText, [req.body.user_name, req.body.vendor_id]
    .then(response => {
        console.log('response from post', response)
        res.sendStatus(201)
    }).catch(error => {
        console.log('error in post fav', error)
        res.sendStatus(500)
    })
});

module.exports = router;