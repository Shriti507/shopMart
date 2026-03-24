import Express  from "express";
import { Request,Response } from "express";
import { AuthService } from "../services/authService.js";
import jwt from 'jsonwebtoken';



export default class AuthController{
    private authService: AuthService;

    constructor(){
        this.authService=new AuthService()
    }

    private generateToken(id:string):string{
        return jwt.sign({id},process.env.JWT_SECRET as string,{expiresIn:"30d"})
    }

    public registerUser=async (req:Request,res:Response):Promise<void>=>{
        try{
            const userData=req.body;
            const newUser=await this.authService.createUser(userData)
            const token=this.generateToken(newUser._id.toString())

            res.status(201).json({
                message:"Registration successful",
                user:{
                    _id:newUser._id ,
                    name:newUser.name,
                    email:newUser.email 
                },
                token:token
            })

        }
        catch(err:any){
            res.status(400).json({message:err.message})
        }
    }

    public registerSociety=async (req:Request,res:Response):Promise<void>=>{
        try{
            const societyData=req.body;
            const newSociety=await this.authService.createSociety(societyData)
            

            res.status(201).json({
                message:"Society created successfully",
                society:newSociety
            })

        }
        catch(err:any){
            res.status(400).json({message:err.message})
        }
    }
    

    
}