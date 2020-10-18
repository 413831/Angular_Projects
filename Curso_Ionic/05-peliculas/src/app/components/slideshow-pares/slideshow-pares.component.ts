import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  @Output() eventoCargar: EventEmitter<any> = new EventEmitter<any>();
  slidesOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10,
  };


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cargarMas()
  {
    console.log("Cargar más");
    this.eventoCargar.emit();
  }

  async verDetalle(id: string)
  {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
