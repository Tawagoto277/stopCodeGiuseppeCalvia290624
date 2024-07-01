import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Photos } from '../../models/photos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css'
})
export class CardsListComponent implements OnInit{

  photos: Photos = [];

  constructor(private gs : GalleryService, private route : ActivatedRoute){  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('albumId')!;

    // se id richiedesse un numero si puo' aggiungere un + per convertirla in numero (+id)
    this.gs.getAlbumById(id).subscribe(p => {
      this.photos = p;
    })
  }
}
