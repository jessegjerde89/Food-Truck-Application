const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('in get', req.body)
    const queryText = `SELECT * FROM "menu" `
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
    console.log('line 23', req.body.itemNumber)
    const queryText = `INSERT INTO "menu" ( "item", "price", "description")
                        VALUES ($1, $2, $3)`
    pool.query(queryText, [req.body.item, req.body.price, req.body.description])
    .then( response => {
        console.log('response from post', response)
        res.sendStatus(201)
    }).catch( error => {
        console.log("error in post", error)
        res.sendStatus(500)
    })
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id, req.user.id, req.body);
    // let queryText = `DELETE FROM "menu" WHERE ("menu"."id"=$1 AND "menu"."user.id"=$2)`; 
    let queryText = `DELETE FROM "menu" WHERE "menu"."id"=$1`; 
    // pool.query(queryText, [req.params.id, req.user.id])
    pool.query(queryText, [req.params.id])
    .then(response => {
        console.log(response)
        res.sendStatus(201)
    }).catch(error => {
        console.log('error in delete', error)
        res.sendStatus(500)
    }); 
}); 

router.put('/:id', (req, res) => {
    console.log(req.body)
    let queryText = `UPDATE from "menus" WHERE ("menu"."id"=$1)`; 
    pool.query(queryText, [req.params.id])
    .then(response => {
        console.log(response)
        res.sendStatus(201)
    }).catch(error => {
        console.log('error in put', error)
        res.sendStatus(500)
    }); 
})

module.exports = router;