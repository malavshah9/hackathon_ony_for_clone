import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";


import { ProfildetailsPage } from "../profildetails/profildetails";

import { UserlogProvider } from "../Provider/userlog/userlog";

import { User_Class } from "../Provider/userlog/user_class";
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  order = "track";
  uid:string='';
uname:string='';
usr:User_Class[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public udata:UserlogProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfilePage");
    this.uid=localStorage.getItem('id');
    this.udata.getUserid(this.uid).subscribe(
      (data:User_Class[])=>{
        this.usr=data;
        this.uname=this.usr[0].user_name;
      },
      function(err){},
      function(){}
    );


  }
  userprofile() {
    this.navCtrl.push(ProfildetailsPage);
  }

}
