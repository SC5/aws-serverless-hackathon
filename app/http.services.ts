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
   * Fetch stories from REST
   *
   * @returns {Observable<Response>}
   */
  getPosts() {
    var parameters = this.storage.getStorage(),
        url = [ 
            parameters.url,
            parameters.stage,
            "posts"
        ].join(this.separator);
    console.log("save " + url);

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
    var parameters = this.storage.getStorage(),
        url = [ 
            parameters.url,
            parameters.stage,
            "posts"
        ].join(this.separator);
    console.log("save " + url);
    
    if (action==="new") {
      return this.http.post(url, JSON.stringify(storyObject), this.options);
    } else {
      return this.http.put(url + "/" + storyObject.id, JSON.stringify(storyObject), this.options);
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
    var parameters = this.storage.getStorage(),
        url = [ 
            parameters.url,
            parameters.stage,
            "posts"
        ].join(this.separator);
    console.log("save " + url);

    return this.http.delete(url + "/" + storyObject.id, this.options);
  }
}
