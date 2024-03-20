const express = require("express");

const router = express.Router();
const { Subject } = require("../db")

router.post("/signal",async (req,res)=>
{
  const colors = req.body;
  const succes = await Subject.findOne({
    subjectName:"signal",
  });
  if(!succes){
    const sub = await Subject.create({
      subjectName:"signal",
      colors:req.body.colors,
      red:req.body.red,
      green:req.body.green
    })
  }
  else
  {
    const log = await Subject.updateOne({
      "subjectName":"signal",
    },
    {
      $set:{
        "colors":req.body.colors,
        "red":req.body.red,
        "green":req.body.green,
      }
    })
  }
  // console.log(sub);
  res.json({
    key:"log created",
  })
})
router.get("/signal",async(req,res)=>
{
  const sub = await Subject.findOne({
    subjectName:"signal",
  });
  if(sub)
  {
    res.json({
      sub,
    })
  }
  else res.json({
    log:"no subject found"
  })
})


router.post("/discrete",async (req,res)=>
{
  const colors = req.body;
  const succes = await Subject.findOne({
    subjectName:"discrete",
  });
  if(!succes){
    const sub = await Subject.create({
      subjectName:"discrete",
      colors:req.body.colors,
      red:req.body.red,
      green:req.body.green
    })
  }
  else
  {
    const log = await Subject.updateOne({
      "subjectName":"discrete",
    },
    {
      $set:{
        "colors":req.body.colors,
        "red":req.body.red,
        "green":req.body.green,
      }
    })
  }
  // console.log(sub);
  res.json({
    key:"log created",
  })
})
router.get("/discrete",async(req,res)=>
{
  const sub = await Subject.findOne({
    subjectName:"discrete",
  });
  if(sub)
  {
    res.json({
      sub,
    })
  }
  else res.json({
    log:"no subject found"
  })
})


router.post("/numerical",async (req,res)=>
{
  const colors = req.body;
  const succes = await Subject.findOne({
    subjectName:"numerical",
  });
  if(!succes){
    const sub = await Subject.create({
      subjectName:"numerical",
      colors:req.body.colors,
      red:req.body.red,
      green:req.body.green
    })
  }
  else
  {
    const log = await Subject.updateOne({
      "subjectName":"numerical",
    },
    {
      $set:{
        "colors":req.body.colors,
        "red":req.body.red,
        "green":req.body.green,
      }
    })
  }
  // console.log(sub);
  res.json({
    key:"log created",
  })
})
router.get("/numerical",async(req,res)=>
{
  const sub = await Subject.findOne({
    subjectName:"numerical",
  });
  if(sub)
  {
    res.json({
      sub,
    })
  }
  else res.json({
    log:"no subject found"
  })
})


router.post("/soft",async (req,res)=>
{
  const colors = req.body;
  const succes = await Subject.findOne({
    subjectName:"soft",
  });
  if(!succes){
    const sub = await Subject.create({
      subjectName:"soft",
      colors:req.body.colors,
      red:req.body.red,
      green:req.body.green
    })
  }
  else
  {
    const log = await Subject.updateOne({
      "subjectName":"soft",
    },
    {
      $set:{
        "colors":req.body.colors,
        "red":req.body.red,
        "green":req.body.green,
      }
    })
  }
  // console.log(sub);
  res.json({
    key:"log created",
  })
})
router.get("/soft",async(req,res)=>
{
  const sub = await Subject.findOne({
    subjectName:"soft",
  });
  if(sub)
  {
    res.json({
      sub,
    })
  }
  else res.json({
    log:"no subject found"
  })
})


router.post("/daa",async (req,res)=>
{
  const colors = req.body;
  const succes = await Subject.findOne({
    subjectName:"daa",
  });
  if(!succes){
    const sub = await Subject.create({
      subjectName:"daa",
      colors:req.body.colors,
      red:req.body.red,
      green:req.body.green
    })
  }
  else
  {
    const log = await Subject.updateOne({
      "subjectName":"daa",
    },
    {
      $set:{
        "colors":req.body.colors,
        "red":req.body.red,
        "green":req.body.green,
      }
    })
  }
  // console.log(sub);
  res.json({
    key:"log created",
  })
})
router.get("/daa",async(req,res)=>
{
  const sub = await Subject.findOne({
    subjectName:"daa",
  });
  if(sub)
  {
    res.json({
      sub,
    })
  }
  else res.json({
    log:"no subject found"
  })
})


router.post("/arch",async (req,res)=>
{
  const colors = req.body;
  const succes = await Subject.findOne({
    subjectName:"arch",
  });
  if(!succes){
    const sub = await Subject.create({
      subjectName:"arch",
      colors:req.body.colors,
      red:req.body.red,
      green:req.body.green
    })
  }
  else
  {
    const log = await Subject.updateOne({
      "subjectName":"arch",
    },
    {
      $set:{
        "colors":req.body.colors,
        "red":req.body.red,
        "green":req.body.green,
      }
    })
  }
  // console.log(sub);
  res.json({
    key:"log created",
  })
})
router.get("/arch",async(req,res)=>
{
  const sub = await Subject.findOne({
    subjectName:"arch",
  });
  if(sub)
  {
    res.json({
      sub,
    })
  }
  else res.json({
    log:"no subject found"
  })
})
module.exports = router;