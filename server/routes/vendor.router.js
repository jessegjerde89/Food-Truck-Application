const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get route for menu items 
router.get('/', (req, res) => {
    console.log('in get', req.body)
    const queryText = `SELECT * FROM "menu" `
    pool.query(queryText)
    .then( response => {
        console.log('response from get', response.rows)
        res.send(response.rows)
    }).catch(error => {
        console.log('error in get', error)
        res.sendStatus(500)
    })

});

// post route for inserting new menu items
router.post('/', (req, res) => {
    console.log('line 23', req.user.id, req.body)
    const queryText = `INSERT INTO "menu" ( "item", "price", "description", "vendor_name", "user_id")
                        VALUES ($1, $2, $3, $4, $5)`
    pool.query(queryText, [req.body.item, req.body.price, req.body.description, req.body.vendor_name, req.user.id])
    .then( response => {
        console.log('response from post', response)
        res.sendStatus(201)
    }).catch( error => {
        console.log("error in post", error)
        res.sendStatus(500)
    })
});

// delete route for deleting menu items
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

// put route for editing existing menu items
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