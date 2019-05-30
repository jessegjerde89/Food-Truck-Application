const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('in get', req.body)
    const queryText = `SELECT "item", "description", "price" FROM "menu" `
                        // WHERE "menu"."number" = 1`
    pool.query(queryText)
    .then( response => {
        console.log('response from get', response.rows)
        res.send(response.rows)
    }).catch(error => {
        console.log('error in get', error)
        res.sendStatus(500)
    })

});


router.post('/', (req, res) => {
    console.log('line 23', req.params)
    const queryText = `INSERT INTO "menu" ("item", "item_number", "price", "description")
                        VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [req.body.item, req.body.itemNumber, req.body.price, req.body.description])
    .then( response => {
        console.log('response from post', response)
        res.sendStatus(201)
    }).catch( error => {
        console.log("error in post", error)
        res.sendStatus(500)
    })
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id, req.user.id); 
    let queryText = `DELETE FROM "menu" WHERE ("menu"."id"=$1 AND "menu"."user.id"=$2)`; 
    pool.query(queryText, [req.params.id, req.user.id])
    .then(response => {
        console.log(response)
        res.sendStatus(201)
    }).catch(error => {
        console.log('error in delete', error)
        res.sendStatus(500)
    }); 
}); 

module.exports = router;