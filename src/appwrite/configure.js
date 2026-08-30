import conf from "../conf/conf";
import {ID,Query,Databases,Client} from "appwrite"

class Configure {
    client=new Client()
    database
    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.database=new Databases(this.client)
    }


}