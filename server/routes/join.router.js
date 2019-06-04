// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();


// router.get('/', (req, res) => {
//     console.log('in get join', req.body)
//     const queryText = `SELECT "menu"."item","menu".id, "user"."id" FROM "user"
//     JOIN "menu" ON "user".id = "menu".user_id; `
//     pool.query(queryText)
//     .then(response => {
//         res.send(response.rows)
//     }).catch(errror => {
//         console.log('error in join', error)
//     })
// });


// router.post('/', (req, res) => {

// });

// module.exports = router;