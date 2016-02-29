import { Injectable } from "angular2/core";
import { Http, Headers } from "angular2/http";
import { StorageServices } from "./storage.services";

@Injectable()
export class HttpServices {
  constructor (private http: Http, private storage: StorageServices) {}

  public options = {
    headers: new Headers({"Accept": "*/*"})
  };
  public separator = "/" ;

  /**
   * Fetch stories from REST
   *
   * @returns {Observable<Response>}
   */
  getPosts() {
    var parameters = this.storage.getStorage(),
        url = parameters.url +
              this.separator +
              parameters.stage +
              this.separator +
              parameters.getPosts;

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
        lastParam = action === "new" ? parameters.newPost : parameters.editPost,
        url = parameters.url +
              this.separator +
              parameters.stage +
              this.separator +
              lastParam;

    return this.http.post(url, JSON.stringify(storyObject), this.options);
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
        url = parameters.url +
              this.separator +
              parameters.stage +
              this.separator +
              parameters.deletePost;

    return this.http.post(url, JSON.stringify({ id: storyObject.id }), this.options);
  }
}
