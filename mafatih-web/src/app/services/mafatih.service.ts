import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
 
import { Chapter } from '../model/chapter';




@Injectable()
export class MafatihService {

  baseUrl = "https://nameless-lake-31885.herokuapp.com"

  constructor(private http: HttpClient) { 
     
  }
 
  getChapterContext(): any {
    return this.http.get(this.baseUrl+"/api/context")
  }

  getArticle(chId, secId, artId): any {
    return this.http.get(this.baseUrl+"/api/article/" + chId + "/" + secId + "/" + artId)
  }

  searchFor(query: string): any {
    return this.http.get(this.baseUrl+"/api/search/" + query)
  }
}