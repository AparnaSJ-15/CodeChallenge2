import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {

  imgSrc = '../../assets/img/imageedit_2_7385483415.jpg'
  imgAlt ='Image'

  constructor() { }

  ngOnInit(): void {
  }

}
