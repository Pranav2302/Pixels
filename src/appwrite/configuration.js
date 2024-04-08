import conf from "../conf/conf.js"
import { Client, ID,Databases,Query,Storage } from "appwrite"; 

export class Services {
  client = new Client();
  databases; // 
  bucket;  //for file(photos) upload

  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl) // Your API Endpoint
      .setProject(conf.appwriteprojectid); // Your project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //to create a post we created document
  async createPost({ title, slug ,content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  //to update the post

  async updatePost(slug, { title, content, featuredImage, status}) {
    try {
        return await this.databases.updateDocument(conf.appwritedatabaseid,conf.appwritecollectionid,slug,{title,content,featuredImage,status})
    } catch (error) {
        console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  //to delete the post
  async deletePost(slug){  //slug is for unique id 
    try {
        await this.databases.deleteDocument(conf.appwritedatabaseid,conf.appwritecollectionid,slug)

        return true
    } catch (error) {
        console.log("Appwrite service :: deletePost :: error", error);
        return false;
    }
  }

  //to get single post
  async getPost(slug){
    try {
       return await this.databases.getDocument(
         conf.appwritedatabaseid,
         conf.appwritecollectionid,
         slug
       ); 
    } catch (error) {
        console.log("Appwrite service :: getPost :: error", error);
        return false 
    }
  }

  //list the allpost
  async getAllPost(queries=[Query.equal('status','active')]){
    try {
       return await this.databases.listDocuments(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        queries
        ) 
    } catch (error) {
        console.log("Appwrite service :: getAllPost :: error", error);
        return false 
    }
  }

//file upload service 
    async uploadFile(file){
    try {
       return await this.bucket.createFile(conf.appwritebucketid,ID.unique(),file)
    } catch (error) {
        console.log("Appwrite service :: uploadFile :: error", error);
        return false 
    }
  }

  //delete file
   async deleteFile(fileId){
    try {
       await this.bucket.deleteFile(
        conf.appwritebucketid,
        fileId)
        return true
    } catch (error) {
        console.log("Appwrite service :: deleteFile :: error", error);
        return false 
    }
  }

  //file preview
    getFilePreview(fileId){
    
     return this.bucket.getFilePreview(conf.appwritebucketid, fileId);
        
    }
  

}  
const service=new Services()

export default service;

