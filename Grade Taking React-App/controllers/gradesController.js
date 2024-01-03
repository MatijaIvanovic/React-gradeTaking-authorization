const Grade = require('../models/grade');

const fetchGrades = async (req,res)=>{
   try{//Find the notes
        const grades = await Grade.find({user: req.user._id});
    //Respond with them
    res.json({grades});
    }catch(err){
        console.log(err);
        res.sendStatus(400)
    }
}

const fetchGrade = async (req,res)=>{
    try{
    //Get id off the url
    const gradeId = req.params.id;
    //Find the grade using that id
    const grade = await Grade.findOne({_id: gradeId, user: req.user._id});
    //Respond with that grade
    res.json({grade});
    }catch(err){
        console.log(err);
        res.sendStatus(400)
    }
}

const createGrade =async (req,res)=>{
    try{
    //Get the sent in data off requees body
    const {title, mark} = req.body;
    //Create a note with it
    const grade = await Grade.create({
        title,
        mark,
        user: req.user._id,
    });

    //Respond with the new note
    res.json({grade});}
    catch(err){
        console.log(err);
        res.sendStatus(400)
    }

}

const updateGrade = async (req,res) =>{
    try{
    //Get the id of the url
    const gradeId = req.params.id;
    //Get the data of the req body
    const {title, mark} = req.body;
    //FInd and update the record
    await Grade.findOneAndUpdate({_id: gradeId, user: req.user._id}, {
        title,
        mark,
    })

    //Find updated note
    const grade = await Grade.findById(gradeId);
    //Respond with it
    res.json({grade})
    }
    catch(err){
        console.log(err);
        res.sendStatus(400)
    }
}

const deleteGrade = async (req,res) =>{
    try{
    //get id of url
        const gradeId = req.params.id;

    //delete the record
        await Grade.findOneAndDelete({_id: gradeId, user: req.user._id});
        console.log(`deleted ${gradeId}`)
    //respond
        res.json({ success: "Record deleted" });
    }catch(err){
        console.log(err);
        res.sendStatus(400)
    }
}

module.exports = {
    fetchGrades,
    fetchGrade,
    createGrade,
    updateGrade,
    deleteGrade,
    
};