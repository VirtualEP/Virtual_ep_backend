const express   = require('express')
const subscriber = require('../models/subscriber')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//Getting all
router.get('/', async (req, res) => {
  
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (error) {
    res.status(500).json({message: error.message})
  }

})

//Getting one
router.get("/:id",getSubscriber,  (req, res) => {
  res.json(res.subscriber)
})

//Creating One
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
      name: req.body.name,
      subcribeToChannel: req.body.subcribeToChannel
    })
    try {
      const newSubsciber = await subscriber.save()
      res.status(201).json(newSubsciber)
    } catch (error) {
      res.status(400).json({message: error.message})
      
    }

})
//Updating one
router.patch("/:id", getSubscriber, async (req, res) => {
  if ( req.body.name != null) {
    res.subscriber.name  = req.body.name
  }
  if ( req.body.subcribeToChannel != null) {
    res.subscriber.subcribeToChannel  = req.body.subcribeToChannel
  }
try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
} catch (error) {
  res.status(400).json({ message: error.message})
  
}

})
router.post("/:id", getSubscriber, (req, res) => {
  
})

//Deleting one
router.delete("/:id", getSubscriber, async (req, res) => {
 try {
    await res.subscriber.remove()
    res.json({message: 'Deleted Subscriber'})
 } catch (error) {
    res.status(500).json({message: error.message})

 }
})

async function getSubscriber(req, res, next){
  let subscriber
  try {
    subscriber = await Subscriber.findById(req.params.id)
    if (subscriber == null) {
      return res.status(404).json({ message: 'Can not find subscriber '})
    }

  } catch (error) {
   return res.status(500).json({message: error.message})
  }
  res.subscriber = subscriber
  next()
}



module.exports = router