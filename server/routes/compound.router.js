const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GETS All the compounds from the database with all parameters
 */
router.get('/', (req, res) => {
  

  const queryText = `
  SELECT * FROM "compounds"; 
    
  `

  pool.query(query)
    .then(result => {
      res.send(result.rows); 

    })

    .catch(err => {

      console.log("error with the get compound route")

      res.sendStatus(500)
    })
});



/**
 * GETS specific compounds from the database with all parameters
 */
router.get('/:id', (req, res) => {
  
  //req.body returns the 
  let newid = req.params.id

  const queryText = `
  SELECT * FROM "compounds" 
  WHERE "compounds"."id" = $1;
    
  `

  pool.query(query, [newid])
    .then(result => {
      res.send(result.rows); 

    })

    .catch(err => {

      console.log("error with the get single compound route")

      res.sendStatus(500)
    })
});

/**
 * Creates a compound entry with 5 catagories and a date timestamp
 */
router.post('/', (req, res) => {

  const insertCompoundQuery = `
  INSERT INTO "compounds"  
      ("name", "description", "date", "user_id", "image", "quantity")
      VALUES
    ($1, $2, 'NOW()', $3, $4, $5)
  `

  const insertCompoundDetails = [
    req.body.name,
    req.body.description, 
    req.body.user_id,
    req.body.image, 
    req.body.quantity

  ]


  pool.query(insertCompoundQuery, insertCompoundDetails)
  .then((result) => { res.sendStatus(201); })

  .catch((err) => {
    console.log('Error in POST', err);
    res.sendStatus(500);
  });
});


/**
 * Creates a compound entry with 5 catagories and a date timestamp
 */
router.put('/', (req, res) => {

  const insertCompoundQuery = `
  INSERT INTO "compounds"  
      ("name", "description", "date", "user_id", "image", "quantity")
      VALUES
    ($1, $2, 'NOW()', $3, $4, $5)
  `

  const insertCompoundDetails = [
    req.body.name,
    req.body.description, 
    req.body.user_id,
    req.body.image, 
    req.body.quantity

  ]

});

module.exports = router;
