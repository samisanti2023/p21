import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = []; 
  selectedSerie!: Serie;
  selected = false;


  onSelected(book: Serie): void {
    this.selected = true;
    this.selectedSerie = book;
  }
  
  constructor(private bookService: SeriesService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.series = books;
    });
  }


}
