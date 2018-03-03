import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chapter } from './model/chapter';
import { MafatihService } from './services/mafatih.service';
import { Article } from './model/article';
import { Section } from './model/section';

import { FormControl } from '@angular/forms';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'app';
    chapters : Chapter[]
    currentChapter: Chapter
    currentSection: Section
    currentArticle: Article

    @ViewChild('searchQueryInput')
    searchQueryInput : ElementRef;

    constructor(private mafatihService: MafatihService) { }


    ngOnInit() {
      this.getChapters();
      Observable.fromEvent(
        this.searchQueryInput.nativeElement, 'keydown')
        .debounceTime(500)
        .subscribe(newValue => {
            let query = this.searchQueryInput.nativeElement.value
            console.log('query = ' + query);
            if(newValue == "") {
              this.getChapters();
            } else {
              this.mafatihService.searchFor(query).subscribe(searchedChapters => {
                this.chapters = searchedChapters
              })
            }
        });
    }

    getChapters(): void {
        this.mafatihService.getChapterContext()
          .subscribe(chapters => { 
              console.log('got chapters')
              this.chapters = chapters
              this.currentChapter = this.chapters[0]
              this.currentSection = this.currentChapter.sections[0]
              this.currentArticle = this.currentSection.articles[0]
          });
    }

    onSelect(chapter, section, article) {
      console.log('select article')
      this.currentChapter = chapter
      this.currentSection = section
      this.mafatihService.getArticle(this.chapters.indexOf(chapter), chapter.sections.indexOf(section), section.articles.indexOf(article)).subscribe(article => {
        this.currentArticle = article
      })
    }
}
