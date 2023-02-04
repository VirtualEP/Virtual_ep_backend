const express = require('express')
const { model } = require('mongoose')
const models  = require('../models/models')
const router = express.Router()
 
// router.get("/", (req, res) => {
  
//     console.log('Starting the project...')
//     res.send("good prog")

// });

//Getting one
router.get("/:id", getStudents, (req, res) => {
    res.json(res.student)
    // res.send(res.student.email )

  })

  //Getting all
router.get('/', async (req, res) => {
  
    try {
      const student = await models.find()
      res.json(student)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  
  })

  //Updating One
  router.patch('/:id',  getStudents, async (req, res) =>{

    if (req.body.first_name != null) {
      res.student.first_name = req.body.first_name
      
    }
    if (req.body.Last_name != null) {
      res.student.Last_name = req.body.Last_name
      
    }
    if (req.body.country != null) {
      res.student.country = req.body.country
      
    }
    if (req.body.email != null) {
      res.student.email = req.body.email
      
    }
    if (req.body.password != null) {
      res.student.password = req.body.password
      
    }
    try {
      const updatedStudent = await res.student.save()
      res.json(updatedStudent)
      
    } catch (error) {
      res.status(400).json({message: error.message})
    }

  })

 
  //Login Side
  router.post('/:id',  async (req, res) =>{

    try {
      const check1 = await models.find(req.body.email)
      const check2 = await models.find(req.body.password)
      // res.json(check1)

      //  res.json(check2)
      
      if (check1.email === req.body.email  || check2.password === req.body.password  ) { 
        
        // res.render("home")
        res.send("Successfully Connected")
        
      } else {
        res.send("Wrong Email and Password")
        
      }
   

     } catch (error) {
      
        res.status(400).json({message: error.message})
}
 
//  res.render("home")

  })

  //Deleting One
  router.delete('/:id', getStudents, async (req, res) =>{

    try {
      await res.student.remove()
      res.json({message: 'Deleted Successfully'})
    } catch (error) {
      res.status(500).json({message: error.message})
    }

  })
  

//Creating One
router.post('/', async (req, res) => {
    const student = new models({
        first_name: req.body.first_name,
        Last_name: req.body.Last_name,
        country: req.body.country,
        email: req.body.email,
        password: req.body.password
      
    })
    try {
      const newStudent = await student.save()
      res.status(201).json(newStudent)
    } catch (error) {
      res.status(400).json({message: error.message})
      
    }

})

  async function getStudents(req, res, next){
    let student
    try {
        student = await models.findById(req.params.id)
      if (student == null) {
        return res.status(404).json({ message: 'Can not find student '})
      }
  
    } catch (error) {
     return res.status(500).json({message: error.message})
    }
    res.student = student
    next()
  }
  


module.exports = router