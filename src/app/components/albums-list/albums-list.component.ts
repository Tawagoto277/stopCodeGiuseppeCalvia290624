import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Albums } from '../../models/albums';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.css'
})
export class AlbumsListComponent implements OnInit {
  
  albums:Albums = []

  constructor(private gs : GalleryService){  }
  
  ngOnInit(): void {
    this.gs.getAlbumsList().subscribe(a => {
      this.albums = a;
    })
  }
}
