const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    console.log('fav get', req.body)
    const queryText = `SELECT * FROM WHERE "menu"."id" = $1 and "user"."id" = $2 `
    pool.query(queryText, [req.body.id, req.user.id])
    .then(response => {
        console.log("res fav get", repsonse)
        res.send(response.rows)
    }).catch(error => {
        console.log('error in get', error)
        res.sendStatus(500)
    })
});


module.exports = router;