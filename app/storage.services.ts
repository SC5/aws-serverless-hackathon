import { Injectable } from "angular2/core";
// declare let _: any;
import * as _ from 'lodash';

@Injectable()
export class StorageServices {
  getStorage() {
    if (this.isStorageEmpty()) {
      return {
        url: ""
      };
    } else {
      return JSON.parse(window.localStorage.getItem("aws_settings"));
    }
  }

  setStorage(settings) {
    window.localStorage.setItem("aws_settings", JSON.stringify(settings));
  }

  isStorageEmpty() {
    return _.isEmpty(window.localStorage.getItem("aws_settings"));
  }
}
