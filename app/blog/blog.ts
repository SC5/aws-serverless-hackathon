import { Component, OnInit } from "angular2/core";
import { HttpServices } from "../http.services";
import { StorageServices } from "../storage.services";
declare var _: any;

@Component({
  selector: "my-app",
  templateUrl: "app/blog/blog.html",
  providers: [
    HttpServices,
    StorageServices
  ]
})

export class Blog implements OnInit {
  constructor (private httpServices: HttpServices, private storage: StorageServices) {}

  public newStoryFormVisible = false;
  public alert = {
    type:     "success",
    message:  "New story is successfully added!",
    visible:  false
  };
  public editableItem;
  public posts = [];
  public setSettingsFormVisible = false;
  public awsSettings = this.storage.getStorage();

  /**
   * Run it on initialization
   */
  ngOnInit() {
    if(this.storage.isStorageEmpty()){
      this.setSettingsFormVisible = true;
    }

    this.getPosts();
  }

  /**
   * Fetch posts from REST API
   */
  getPosts() {
    this.httpServices.getPosts().subscribe(Response => {
      this.posts =
        _.sortBy(Response.json().Items, 'date').reverse();
    });
  }


  closeAlert() {
    this.alert.visible = false;
  }

  addNewStoryClicked() {
    this.editableItem = {};
    this.newStoryFormVisible = true;
  }

  cancelSavingStory() {
    this.newStoryFormVisible = false;
    this.editableItem = {};
  }

  /**
   * Save or edit story
   */
  saveStory() {
    var message = "",
        action = "new";

    this.newStoryFormVisible = false;

    if(_.isEmpty(this.editableItem.id)) {
      message = "New story is successfully added!";
      this.editableItem.id = new String(this.posts.length + 1);
      this.editableItem.date = new Date().getTime();
    }else{
      action = "edit";
      message = "Story is successfully modified!"
    }

    this.httpServices.savePost(action, this.editableItem).subscribe(() => {
      this.getPosts();
      if(!_.isEmpty(message)) {
        this.alert = {
          type: "success",
          message: message,
          visible: true
        };
      }
    });


    this.editableItem = {};
  }

  /**
   * Saving aws settings
   */
  saveAWSSettingsClicked() {
    if(!_.isEmpty(this.awsSettings.url)) {
      this.storage.setStorage(this.awsSettings);
      this.setSettingsFormVisible = false;
    }
  }

  editButtonPressed(item) {
    this.newStoryFormVisible = true;
    this.editableItem = item;
  }

  /**
   * Delete story
   *
   * @param item {Object}
   */
  deleteButtonPressed(item) {
    this.httpServices.deletePost(item).subscribe(() => {
      this.getPosts();
      this.alert = {
        visible: true,
        type: "danger",
        message: "Story is successfully deleded!"
      };
    });
  }
}
