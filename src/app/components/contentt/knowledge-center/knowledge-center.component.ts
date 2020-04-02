import { ArticleService } from './../../../services/article.service';
import { Data } from './../../../interfaces/data';
import { Component, OnInit } from '@angular/core';
// import {Observable} from 'r&js';

@Component({
  selector: 'app-knowledge-center',
  templateUrl: './knowledge-center.component.html',
  styleUrls: ['./knowledge-center.component.scss']
})
export class KnowledgeCenterComponent implements OnInit {
 data : any;
  constructor(private articleService: ArticleService ) {
    this.articleService.get_articles().subscribe((res:Data[])=>{
      this.data=res;
    });
   }

  ngOnInit(): void {
  
  }

}
