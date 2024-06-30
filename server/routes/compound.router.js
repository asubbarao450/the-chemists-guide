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

  //creates an object with the properties 
  //from req.body.name which is recived from request made from client/store
  
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
 * UPDATE compound in database
 * 
 * The way 
 */
router.put('/:id', (req, res) => {

  //verify what having this statemnt will do
  //return values that are stored in the server
  const updateCompounds = req.body;


  const newCompoundQuery = `
  UPDATE "compounds"  
    SET    
    "name" = $1,
    "description" = $2,  
    "date" = $3, 
    "user_id" = $4, 
    "image" = $5, 
    "quantity" = $6

    WHERE 
    id = $8 ;
     
  `;

  //update this statement so that the previous 
  //values that were stored in the server 
  //will be kept
  const newCompoundValues = [
    updateCompounds.name,
    updateCompounds.description,
    updateCompounds.date,
    updateCompounds.user_id,
    updateCompounds.image,
    updateCompounds.quantity

  ]

  pool.query(newCompoundQuery, newCompoundValues)
    .then((result) => { res.sendStatus(200); })
    .catch((err) => {
      console.log("put route not working")
      res.sendStatus(500);
    })

});


router.delete('/:id', (req, res) => {

  //req params id returns the id of the element we want deleted
  let deleteloc = req.params.id
  const queryText = `
  DELETE FROM "compounds"
   WHERE id=$1
  `;

  pool.query(queryText, [deleteloc])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {

      console.log('Error in Delete Route');

      res.sendStatus(500);
    })


})
module.exports = router;
