const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


const router = express.Router();

/**
 * GETS All the compounds from the database with all parameters
 */
router.get('/', (req, res) => {


  const queryText = `
  SELECT * FROM "compounds"; 
    
  `

  pool.query(queryText)
    .then(result => {
      res.send(result.rows);

    })

    .catch(err => {

      console.log("error with the get all compounds route")

      res.sendStatus(500)
    })
});



/**
 * GETS specific compounds from the database with all parameters
 */
router.get('/:id', (req, res) => {

  
  let newid = req.params.id

  const queryText = `
  SELECT * FROM "compounds" 
  WHERE "compounds"."id" = $1;
  `

  pool.query(queryText, [newid])
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
  // ("name", "description", "date", "user_id", "image", "quantity")
  const insertCompoundQuery = `
  INSERT INTO "compounds"  
  
      ("name", "description", "date", "quantity", "state")
      VALUES
    ($1, $2, 'NOW()', $3, $4);
  `

  
  //creates an object with the properties 
  //from req.body.name which is recived from request made from client/store

  const insertCompoundDetails = [
    
    req.body.name,
    req.body.description,
    //req.body.user_id,
    //req.body.image,
    req.body.quantity,
    req.body.state

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
 * Takes in a id and updates compounds based on what is 
 * contained in req.body
 */
router.put('/:id', (req, res) => {

  let newid  = req.params.id
  


  //this line of code is sent to postgres which is 
  //designed to update a compound with a given id
  //the $ syntax is used to prevent malicious code
  //be very careful with commas
  const queryText = `
  UPDATE "compounds"  
    SET    
    "name" = $1,
    "description" = $2,  
    
    "quantity" = $3,

    "state" = $4

    WHERE 
    id = $5 ;
     
  `

  //this statement creates an Array 
  //with parameters from req.body and newid
  //which will be sent in a pool request
  const newCompoundValues = [
    String(req.body.name),
    String(req.body.description),
    //updateCompounds.date,
    //updateCompounds.user_id,
    //updateCompounds.image,
    Number(req.body.quantity),
    String(req.body.state),
    newid

  ]

  //console.log(newCompoundValues)

  //sends over the new compound values
  pool.query(queryText, newCompoundValues)
    .then((result) => { res.sendStatus(200); })
    .catch((err) => {
      console.log("put route not working")
      res.sendStatus(500);
    })

});

//delete route to delete a specific compound by id
router.delete('/:id', (req, res) => {

  //req params id returns the id of the element we want deleted
  let deleteloc = req.params.id


  const queryText = `
  DELETE FROM "compounds"
   WHERE id=$1;
  `

  pool.query(queryText, [deleteloc])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {

      console.log('Error in Delete Route');

      res.sendStatus(500);
    })


})
module.exports = router;
