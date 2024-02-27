const express=require ('express')
const router=express.Router();
const voiture = require('../models/Voiture.js');
const Voiture = require('../models/Voiture.js');



router.get('/all', async (req, res) => {
    try {
        const v = await voiture.find(); 
        console.log(v);
        res.status(200).json(v); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue lors de la récupération des données" });
    }
});

router.get('/:id', async (req, res) => {
    const  id  = parseInt( req.params); 

    try {
        const voitureTrouvee = await voiture.findById(id);

        if (!voitureTrouvee) {
            return res.status(404).json({ message: "Voiture non trouvée" });
        }

        res.status(200).json(voitureTrouvee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération de la voiture", erreur: error.message });
    }
});


router.post("/addvoiture", async (req,res)=>{
    const newv=new Voiture({
        id: parseInt(req.body.id),
        name: req.body.name
    })

    try{
    const addv= await newv.save()
    res.status(201).send(addv)
    }
    catch(error)
    {
        res.status(400).json({ message: "Erreur lors de l'ajout de la voiture", erreur: error.message });

    }



})

router.delete('/delete/:id', async (req, res) => {
    try {
        const idv =parseInt(req.params.id )
        const result = await voiture.findOneAndDelete({ id:idv });
        if (result) {
            res.status(200).json({ message: "Voiture supprimée avec succès" });
        } else {
            res.status(404).json({ message: "Voiture non trouvée" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de la voiture", erreur: error.message });
    }
});


module.exports=router;




