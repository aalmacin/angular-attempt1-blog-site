import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {
  private article: Article;
  title = '';
  body = '';
  image = '';

  constructor(articleService: ArticleService) {
    this.article = articleService.getFeatured();
  }

  ngOnInit() {
    if (this.article) {
      this.title = this.article.title;
      this.image = this.article.imageUrl;
      if (this.article.sections) {
        this.body = this.article.sections[0].slice(0, 150) + '...';
      }
    }
  }

}
