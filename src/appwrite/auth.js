import conf from "../conf/conf.js";
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
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getcurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getcurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout  :: error", error);
    }
  }

  // New method to create session from OAuth key and secret
  async createOAuthSession(key, secret) {
    try {
      const session = await this.account.updateSession(key, secret);
      return session;
    } catch (error) {
      console.error("Appwrite service :: createOAuthSession :: error", error);
      throw error;
    }
  }
}

const authService = new Authservice();
export default authService;
