import express from "express";
import mongoose from "mongoose";


interface App_interface{
    startServer():void;
    connectDatabase():void;
    initializeRoutes():void;
}

export default class App implements App_interface{
    public PORT:number;
    public app: express.Application;

    constructor(){
        this.PORT=3000;
        this.app=express()
        this.app.use(express.json())
        this.startServer();
        this.connectDatabase();
        this.initializeRoutes();
    }

    public startServer(): void {
        this.app.listen(this.PORT, () => {
            console.log("server started.");
        });
    }

    public async connectDatabase(): Promise<void> {
        try {
            const uri: string = process.env.MONGODB_URI || (()=>{ throw new Error("MONGODB_URI is not defined"); })();
            await mongoose.connect(uri);
            console.log('server has been connected to the database.');
        } catch (err) {
            console.log(err);
        }
    }

    public initializeRoutes(): void{
        console.log('routes has been initialized.')
    }
}