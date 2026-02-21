import { Router } from "express";
import AuthController from "../controllers/authController";


export default class AuthRoute{
    // path? : string="/registerUser";
    // router:Router=Router();
    public path: string;
    public router=Router();
    private authController=new AuthController()

    constructor() {
        this.path = "/api/auth";
        this.initializeRoutes();
    }


   

    private initializeRoutes(){
        this.router.post(`${this.path}/register`, this.authController.registerUser);
        this.router.post(`${this.path}/register-society`, this.authController.registerSociety);
    }

    
}

export const authRouteInstance = new AuthRoute();