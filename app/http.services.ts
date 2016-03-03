import { Injectable } from "angular2/core";
import { Http, Headers } from "angular2/http";
import { StorageServices } from "./storage.services";

@Injectable()
export class HttpServices {
  constructor (private http: Http, private storage: StorageServices) {}

  public options = {
    headers: new Headers({
        "Accept": "*/*",
        "Content-Type": "application/json"
    })
  };
  public separator = "/" ;

  /**
   * Prepare url
   * 
   * @returns {String}
   */
  getUrl() {
    let parameters = this.storage.getStorage();

    return parameters.url;
  }

  /**
   * Fetch stories from REST
   *
   * @returns {Observable<Response>}
   */
  getPosts() {
    let url = this.getUrl();

    return this.http.get(url, this.options);
  }

  /**
   * Save new or edited story to the REST
   *
   * @param url {string}
   * @param storyObject {Object)
   * @returns {Observable<Response>}
   */
  savePost(action, storyObject) {
    let url = this.getUrl();

    if (action === "new") {
      return this.http.post(url, JSON.stringify(storyObject), this.options);
    } else {
      return this.http.put(url + this.separator + storyObject.id, JSON.stringify(storyObject), this.options);
    }
  }

  /**
   * Delete story
   *
   * @param url {string}
   * @param storyObject {Object}
   * @returns {Observable<Response>}
   */
  deletePost(storyObject) {
    let url = this.getUrl() + this.separator + storyObject.id;

    return this.http.delete(url, this.options);
  }
}
