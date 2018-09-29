import { Injectable } from '@angular/core';
import {Article} from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Array<Article> {
    return [
      new Article(
        'The long and winding road',
        'https://images.unsplash.com/photo-1537224232456-2815948a502e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d440476b69d3efaecaf5334ed28afeb3&auto=format&fit=crop&w=2251&q=80',
        [
          'The long and winding road That leads to your door Will never disappear Ive seen that road before It always leads me here Lead me to you door',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend nunc nisi, sed placerat augue semper vitae. Etiam id lectus sem. In commodo ac ex sed blandit. Aliquam scelerisque facilisis ante vel facilisis. Nullam finibus, ligula ut sollicitudin rutrum, purus ipsum suscipit dolor, eu vestibulum nibh leo in felis. In aliquam aliquet diam quis iaculis. Aliquam tortor leo, porttitor condimentum eleifend vitae, tempus ac felis. Aenean varius sit amet quam at venenatis. Nullam vel ligula nec risus cursus imperdiet. Proin quam nibh, venenatis vel metus eu, maximus hendrerit sapien. Donec placerat lorem vitae leo lobortis tristique. Duis rutrum magna et nibh dictum accumsan non non augue. Praesent hendrerit nunc nec facilisis ultrices. Donec fringilla porta semper. Morbi rhoncus est dolor, sed semper est aliquam et. Suspendisse pharetra massa sit amet ligula condimentum, sed vestibulum mauris eleifend.',
          'Mauris vel maximus neque, venenatis accumsan eros. Vestibulum at tellus id orci cursus ultrices sit amet vitae erat. Vivamus sed tortor rhoncus, consequat sapien eget, suscipit enim. Curabitur sit amet odio ac est aliquam laoreet non at mi. Nulla ullamcorper sem eu est consequat consequat in in ligula. Donec volutpat et odio eget efficitur. Phasellus euismod sed nunc et iaculis. Nullam ultrices, metus in sodales vulputate, libero nisi auctor purus, quis rutrum nisi dui ut mi. Etiam hendrerit quis magna ut rutrum. Nam vel leo ut sapien tristique elementum.',
          'Pellentesque ligula purus, auctor sed tortor ut, convallis egestas mauris. Fusce malesuada eget dui vel vulputate. Integer sit amet diam magna. Suspendisse rutrum eros gravida viverra fermentum. Proin interdum justo in leo pellentesque, eu mattis mauris mattis. Donec a massa quis lorem tincidunt hendrerit quis vitae nunc. Pellentesque ullamcorper congue nunc vel mattis. Ut et malesuada velit. Aliquam eget dictum ipsum. Praesent sit amet consequat nulla.',
          'Duis metus dolor, ultrices quis ex sit amet, fermentum facilisis leo. Nulla dictum quis velit a venenatis. Aenean accumsan lectus ac enim tempus, at luctus nisi mollis. Nulla facilisi. Suspendisse ultricies feugiat sapien vel tristique. Quisque metus tortor, porttitor eu tortor sed, faucibus accumsan ligula. Vivamus vitae nisl non dui auctor sagittis vel in eros. Vestibulum mattis purus non erat ultrices bibendum. Nulla at volutpat nunc. Donec commodo ullamcorper lacus placerat placerat. Integer nec ligula tellus.',
          'Nulla mollis elit id dignissim maximus. Sed nec dolor quis mi elementum venenatis vitae id sem. Cras lobortis, mauris et luctus posuere, lacus turpis congue velit, quis ultrices turpis enim a nulla. Nunc vel ante lacinia, pharetra mi non, varius nunc. Ut tempor sed odio non vulputate. Mauris ornare mattis magna, et efficitur tellus ultricies in. Nunc non mauris eget ligula condimentum vestibulum in dignissim arcu. In nec varius nisl, sit amet luctus eros. Suspendisse vitae consectetur nibh, non sollicitudin eros. Nunc finibus felis nisi, quis malesuada nibh egestas at. Fusce finibus semper placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis a dapibus tellus.'
        ]
      ),
      new Article(
        'If I fell',
        'https://www199.lunapic.com/do-not-link-here-use-hosting-instead/15382435658914013?6794573977',
        [
          'If I fell in love with you Would your promise to be true And help me understand Cause Ive been in love before and I found that love was more than just holding hands If I gave my heart to you I must be sure',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend nunc nisi, sed placerat augue semper vitae. Etiam id lectus sem. In commodo ac ex sed blandit. Aliquam scelerisque facilisis ante vel facilisis. Nullam finibus, ligula ut sollicitudin rutrum, purus ipsum suscipit dolor, eu vestibulum nibh leo in felis. In aliquam aliquet diam quis iaculis. Aliquam tortor leo, porttitor condimentum eleifend vitae, tempus ac felis. Aenean varius sit amet quam at venenatis. Nullam vel ligula nec risus cursus imperdiet. Proin quam nibh, venenatis vel metus eu, maximus hendrerit sapien. Donec placerat lorem vitae leo lobortis tristique. Duis rutrum magna et nibh dictum accumsan non non augue. Praesent hendrerit nunc nec facilisis ultrices. Donec fringilla porta semper. Morbi rhoncus est dolor, sed semper est aliquam et. Suspendisse pharetra massa sit amet ligula condimentum, sed vestibulum mauris eleifend.',
          'Mauris vel maximus neque, venenatis accumsan eros. Vestibulum at tellus id orci cursus ultrices sit amet vitae erat. Vivamus sed tortor rhoncus, consequat sapien eget, suscipit enim. Curabitur sit amet odio ac est aliquam laoreet non at mi. Nulla ullamcorper sem eu est consequat consequat in in ligula. Donec volutpat et odio eget efficitur. Phasellus euismod sed nunc et iaculis. Nullam ultrices, metus in sodales vulputate, libero nisi auctor purus, quis rutrum nisi dui ut mi. Etiam hendrerit quis magna ut rutrum. Nam vel leo ut sapien tristique elementum.',
          'Pellentesque ligula purus, auctor sed tortor ut, convallis egestas mauris. Fusce malesuada eget dui vel vulputate. Integer sit amet diam magna. Suspendisse rutrum eros gravida viverra fermentum. Proin interdum justo in leo pellentesque, eu mattis mauris mattis. Donec a massa quis lorem tincidunt hendrerit quis vitae nunc. Pellentesque ullamcorper congue nunc vel mattis. Ut et malesuada velit. Aliquam eget dictum ipsum. Praesent sit amet consequat nulla.',
          'Duis metus dolor, ultrices quis ex sit amet, fermentum facilisis leo. Nulla dictum quis velit a venenatis. Aenean accumsan lectus ac enim tempus, at luctus nisi mollis. Nulla facilisi. Suspendisse ultricies feugiat sapien vel tristique. Quisque metus tortor, porttitor eu tortor sed, faucibus accumsan ligula. Vivamus vitae nisl non dui auctor sagittis vel in eros. Vestibulum mattis purus non erat ultrices bibendum. Nulla at volutpat nunc. Donec commodo ullamcorper lacus placerat placerat. Integer nec ligula tellus.',
          'Nulla mollis elit id dignissim maximus. Sed nec dolor quis mi elementum venenatis vitae id sem. Cras lobortis, mauris et luctus posuere, lacus turpis congue velit, quis ultrices turpis enim a nulla. Nunc vel ante lacinia, pharetra mi non, varius nunc. Ut tempor sed odio non vulputate. Mauris ornare mattis magna, et efficitur tellus ultricies in. Nunc non mauris eget ligula condimentum vestibulum in dignissim arcu. In nec varius nisl, sit amet luctus eros. Suspendisse vitae consectetur nibh, non sollicitudin eros. Nunc finibus felis nisi, quis malesuada nibh egestas at. Fusce finibus semper placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis a dapibus tellus.'
        ],
        true
      )
    ];
  }

  getFeatured(): Article {
    return this.getArticles().find(r => r.featured === true);
  }
}
