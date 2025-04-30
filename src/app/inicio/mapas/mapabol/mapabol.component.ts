import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mapabol',
  templateUrl: './mapabol.component.html',
  styleUrls: ['./mapabol.component.scss']
})
export class MapabolComponent implements OnInit {
  private map: L.Map | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    /*   this.map = L.map('map', {
        minZoom: 5,
        maxZoom: 12
      }).setView([-16.2902, -63.5887], 6);;
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      }).addTo(this.map); */
    const southWest = L.latLng(-22.9, -69.7); // Esquina suroeste de Bolivia
    const northEast = L.latLng(-9.7, -57.5);  // Esquina noreste de Bolivia
    const bounds = L.latLngBounds(southWest, northEast);

    // Centro aproximado de Bolivia
    const boliviaCentro = L.latLng(-16.5, -64.0);

    // Inicializa el mapa con el centro en Bolivia
    this.map = L.map('map', {
      center: boliviaCentro,
      zoom: 6,
      minZoom: 5,
      maxZoom: 12,
      maxBounds: bounds,         // Restringe el paneo a los límites de Bolivia
      maxBoundsViscosity: 1.0    // Fuerza con la que el mapa "rebota" al intentar salir de los límites
    });

    // Añade el mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      bounds: bounds  // También restringe las tiles que se cargan a los límites de Bolivia
    }).addTo(this.map);

    // Opcional: Añadir un polígono que resalte los límites de Bolivia
    // Estos son puntos aproximados del contorno de Bolivia
    const boliviaOutline: L.LatLngTuple[] = [
      [-9.7, -69.2] as L.LatLngTuple, // Noroeste
      [-11.0, -66.0] as L.LatLngTuple,
      [-10.8, -62.0] as L.LatLngTuple,
      [-12.0, -58.0] as L.LatLngTuple,
      [-11.0, -57.5] as L.LatLngTuple, // Noreste
      [-16.0, -57.8] as L.LatLngTuple,
      [-20.5, -58.2] as L.LatLngTuple,
      [-22.9, -62.0] as L.LatLngTuple, // Sureste
      [-22.5, -66.0] as L.LatLngTuple,
      [-22.2, -67.8] as L.LatLngTuple,
      [-22.0, -69.5] as L.LatLngTuple, // Suroeste
      [-17.5, -69.7] as L.LatLngTuple,
      [-14.0, -69.5] as L.LatLngTuple,
      [-12.0, -69.0] as L.LatLngTuple,
      [-9.7, -69.2] as L.LatLngTuple  // Cierra el polígono
    ];

    L.polygon(boliviaOutline, {
      color: 'red',
      weight: 2,
      fillOpacity: 0.1
    }).addTo(this.map);

    // Asegúrate de que el mapa se ajuste a las dimensiones del contenedor
    /* setTimeout(() => {
      this.map.invalidateSize();
    }, 0); */
  }

}
