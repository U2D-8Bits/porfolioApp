import { Component } from '@angular/core';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  pdfUrl!: string;
  pdfTitle!: string;

  constructor() {

  }

  descargarPDF(){
    this.pdfUrl =  '../../../../assets/files/Pablo Bolanos - Resume.pdf';
    this.pdfTitle = 'Pablo Bolanos - Resume';

    fetch(this.pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = this.pdfTitle;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })

      .catch(error => console.error('Error al descargar el PDF', error));
  }

}
