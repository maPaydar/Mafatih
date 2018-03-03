import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Chapter } from '../model/chapter';




@Injectable()
export class SearchService {

    private messageSource = new BehaviorSubject<string>("");
    query = this.messageSource.asObservable();


    constructor() { 
    }

    changeQuery(query: string) {
        this.messageSource.next(query)
    }
}