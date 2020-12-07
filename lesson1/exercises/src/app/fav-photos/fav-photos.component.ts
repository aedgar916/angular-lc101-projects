import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Images';
  image1 = 'https://i.guim.co.uk/img/media/b26621268d472eebb28ac7fca8a1ca4186f45473/0_122_2672_1603/master/2672.jpg?width=700&quality=85&auto=format&fit=max&s=e10f2976241364cef69b1efaa7f58275';
  image2 = 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150929101049-black-coffee-stock.jpg';
  image3 = 'https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg';

  constructor() { }

  ngOnInit() {
  }

}