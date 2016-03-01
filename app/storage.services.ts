import { Injectable } from "angular2/core";
declare var _: any;

@Injectable()
export class StorageServices {
  constructor() {}

  getStorage() {
    if(this.isStorageEmpty()) {
      return {
        url: "",
        stage: "",
        deletePost: "",
        newPost: "",
        editPost: "",
        getPosts: ""
      }
    }else{
      return JSON.parse(window.localStorage.getItem("aws_settings"));
    }
  }

  setStorage(settings) {
    window.localStorage.setItem("aws_settings", JSON.stringify(settings));
  }

  isStorageEmpty() {
    _.isEmpty(window.localStorage.getItem("aws_settings"));
  }
}