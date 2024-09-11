import conf from "../conf/conf.js"

import { Client, Account, ID } from "appwrite"; 

export class Authservice {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl) // Your API Endpoint
      .setProject(conf.appwriteprojectid); // Your project ID

    this.account = new Account(this.client);
  }

  async accountRecreation({ email, password, name }) {
    //destructuring
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another function to direct login
         return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //to login service
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(
        email,
        password
      );
      
    } catch (error) {
      throw error;
    }
  }

  //to check user in still login or not
  async getcurrentUser() {
    try {
      return await this.account.get();
        
    } catch (error) {
      console.log("Appwrite service :: getcurrentUser :: error", error);
    }
    return null;
  }

  async logout(){
    try {
       return await this.account.deleteSessions(); 
    } catch (error) {
        console.log("Appwrite service :: logout  :: error", error);
    }
  }
}
const authService = new Authservice()  // object is make and is exported and it will called constructor

export default authService;