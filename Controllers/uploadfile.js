const fileupload = (req,res)=>{
    if(!req.file)
    {
        res.status(400).json({message:"Something went wrong"})
    }
    else
    {
        res.status(200).json({message:"uploaded successfully"});
    }
}

module.exports= {fileupload}