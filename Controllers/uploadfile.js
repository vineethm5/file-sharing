const filedata = require("../model/uploadModel");
const path = require("path");
const fs = require("fs");

const fileupload = async(req,res)=>{
    try
    {
        if(req.file)
        {
            console.log(req.file.originalname);
            const filename = req.file.originalname;
            const upl = await filedata.create({
                filename:filename
            });
            res.status(200).json({message:"uploaded successfully",det:{upl}});
        }
    }
    catch(e)
    {
        res.status(400).json({message:"Something went wrong",error:e})
        
    }
    
}

const download = async(req,res)=>{
    try{
        const filedetails = await filedata.findById(req.params.id);
        console.log(filedetails+"filee");
        if(!filedetails)
        {
            res.status(400).json({message:"file not found"})
        }
        else{
            
        // This means:

        // __dirname = D:\file-sharing\Controllers

        // ".." = goes up one directory → D:\file-sharing

        // "uploads" = goes into the uploads folder → D:\file-sharing\uploads
            // console.log(path.join(__dirname,"..","uploads",filedetails.filename));
           const fullpath = path.join(__dirname,"..","uploads",filedetails.filename);
           res.status(200).download(fullpath,filedetails.filename);
        }
    }
    catch(e)
    {
        console.log(e)
    }
}


 const delefile = async(req,res)=>{
    try{
        const isfind = await filedata.findById(req.params.id)
        if(!isfind)
        {
            res.status(400).json({message:"No such file exits"});
        }   
        else
        {

            const filepath = path.join(__dirname,"..","uploads",isfind.filename);
            console.log("this file path",filepath);
            const dirdel=fs.unlink(filepath,async(err)=>{
                if(err)
                {
                    res.status(500).json({message:"Error while deletng file from dir"});
                }
            });
 
                const dee = await filedata.deleteOne({_id:req.params.id});
                if(dee)
                {
                    res.status(200).json({message:"Deleted Successfully"})
                }
            
        }
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({ message: "Server error", error: e.message });

    }
 }

 const getall = async(req,res)=>{
    try{
        const allfiles = await filedata.find();
        if(allfiles)
        {
            res.status(200).json({allfiles});
        }
        else
        {
            res.status(400).json({message:"something went wrong"});
        }
    }
    catch(e)
    {
        res.status(400).json({error:e})
    }
    
 }
module.exports= {fileupload,download,delefile,getall}