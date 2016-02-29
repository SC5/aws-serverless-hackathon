import { Component, OnInit } from "angular2/core";
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

@Component({
  selector: "my-app",
  templateUrl: "app/blog/blog.html",
  providers: [HTTP_PROVIDERS]
})

export class Blog implements OnInit {
  constructor (private http: Http) {}

  public newStoryFormVisible = false;
  public alert = {
    type:     "success",
    message:  "New story is successfully added!",
    visible:  false
  };
  public editableItem;
  public posts = [];
  public setSettingsFormVisible = false;
  public awsSettings = {};
  public options = {
    headers: new Headers({"Accept": "*/*"})
  };

  /**
   * Getting settings from storage
   * @returns {Object}
   */
  getSettings() {
    var settings = window.localStorage.getItem("aws_settings");
    if(!_.isEmpty(settings)){
      settings = JSON.parse(settings);
    }
    return settings;
  };

  /**
   * Setting settings to storage
   */
  setSettings() {
    window.localStorage.setItem("aws_settings", JSON.stringify(this.awsSettings));
  };

  /**
   * Fetch posts from REST API
   */
  getPosts() {
    var url = this.awsSettings.url+"/"+this.awsSettings.stage+"/"+this.awsSettings.getPosts;

    this.http.get(url, this.options).subscribe((Response) => {
      var resp = Response.json();
      this.posts = _.sortBy(resp.Items, 'date').reverse();
    });
  }

  ngOnInit() {
    this.awsSettings = this.getSettings();
    if(_.isEmpty(this.awsSettings)){
      this.setSettingsFormVisible = true;
      this.awsSettings = {
        url: "",
        stage: "",
        deletePost: "",
        newPost: "",
        editPost: "",
        getPosts: ""
      }
    }

    this.getPosts();
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

  saveStory() {
    var message = '';
    var url = this.awsSettings.url+"/"+this.awsSettings.stage+"/";

    this.newStoryFormVisible = false;

    if(_.isEmpty(this.editableItem.id)) {
      message = "New story is successfully added!";
      this.editableItem.id = new String(this.posts.length + 1);
      this.editableItem.date = new Date().getTime();
      url += this.awsSettings.newPost;
    }else{
      url += this.awsSettings.editPost;
      message = "Story is successfully modified!"
    }

    this.http.post(url, JSON.stringify(this.editableItem), this.options).subscribe((Response) => {
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

  saveAWSSettingsClicked() {
    if(!_.isEmpty(this.awsSettings.url)) {
      this.setSettings();
      this.setSettingsFormVisible = false;
    }
  }

  editButtonPressed(item) {
    this.newStoryFormVisible = true;
    this.editableItem = item;
  }

  deleteButtonPressed(item) {
    var url = this.awsSettings.url+"/"+this.awsSettings.stage+"/"+this.awsSettings.deletePost;

    this.http.post(url, JSON.stringify({ id: item.id }), this.options).subscribe((Response) => {
      this.getPosts();
      this.alert = {
        visible: true,
        type: "danger",
        message: "Story is successfully deleded!"
      };
    });
  }
}
