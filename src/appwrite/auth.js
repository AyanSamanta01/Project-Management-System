import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account=new Account(this.client);  
  }

  async createAccount({name,email,password}){
    try {
        const userCreate=await this.account.create(ID.unique(),name,email,password)
        if(userCreate){
          return this.loginAccount(email,password)
        }else{
          return userCreate
        }
    } catch (error) {
        throw error
    }
  }

  async loginAccount({email,password}){
    try {
        return await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
        throw error
    }
  }

  async logoutAccount(){
    try {
        return await this.account.deleteSession("current")
    } catch (error) {
        throw error;
    }
  }

  async authenticationState(){
    try {
        return await this.account.get()
    } catch (error) {
        throw error
    }
    return null
  }
}

const authService=new AuthService();
export default authService;
