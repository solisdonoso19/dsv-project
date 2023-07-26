import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  public gameName: boolean = false;
  public leviatan: boolean = false;
  public cards: any[] = [
    {
      link: '',
      title: 'Lab #1 - Textos en GIMP',
      info: 'Generación de texto utilizando la herramienta GIMP',
      img: 'https://i.blogs.es/739079/gimp/1366_2000.jpg',
      gallery: [
        '../../../assets/1/Erosion.png',
        '../../../assets/1/Infantil.png',
        // '../../../assets/1/TextGimp2.png',
        '../../../assets/1/textGimp.png',
      ],
      disable: false,
    },
    {
      link: '',
      title: 'Lab #2 - Imagenes GIMP',
      info: 'Generación de imagenes con GIMP',
      img: 'https://i.blogs.es/739079/gimp/1366_2000.jpg',
      gallery: ['../../../assets/2/Gimp03.jpg', '../../../assets/2/gimp05.gif'],
      disable: false,
    },
    {
      link: '',
      title: 'Lab #3 - Imagenes Photoshop',
      info: 'Generación de imagenes con Photoshop',
      img: 'https://logodownload.org/wp-content/uploads/2019/10/adobe-photoshop-logo.png',
      disable: true,
    },
    {
      link: '',
      title: 'Lab #4 - Imagenes con Photoshop Parte II',
      info: 'Generación de imagenes con Photoshop',
      img: 'https://logodownload.org/wp-content/uploads/2019/10/adobe-photoshop-logo.png',
      disable: true,
    },
    {
      link: '',
      title: 'Lab #5 - Audio ',
      info: 'Escenarios en audio y mejoras en la calidad del audio',
      img: 'https://forum.audacityteam.org/uploads/default/original/3X/c/d/cdc84f2638f108e795670f7b03eed88fd67032d8.jpeg',
      audio: true,
      disable: false,
    },
    {
      link: '',
      title: 'Lab #6 - Video & Sonido en Adobe Premiere',
      info: 'Generación de video y sonido con Adobe Premiere',
      img: 'https://images.surferseo.art/fac141b9-9185-4d54-b6e7-17d4e30ce09b.jpeg',
      iframe: true,
      disable: false,
    },
    {
      link: '',
      title: 'Lab #7 - Animación digital con Adobe After Effects',
      info: 'Creación de animaciones',
      img: 'https://1000marcas.net/wp-content/uploads/2021/02/After-Effects-Logo.png',
      disable: true,
    },
    {
      link: '',
      title: 'Lab #8 - Animación digital con Adobe After Effects Parte II',
      info: 'Creación de animaciones',
      img: 'https://1000marcas.net/wp-content/uploads/2021/02/After-Effects-Logo.png',
      disable: true,
    },
    {
      link: '',
      title: 'Lab #9 - Introducción a HTML',
      info: 'Primeros pasos en desarrollo web con HTML',
      img: 'https://cdn.dribbble.com/users/66221/screenshots/1655593/html5.png',
      gallery: ['../../../assets/9/1.png', '../../../assets/9/2.png'],
      disable: false,
    },
    {
      link: '',
      title: 'Lab #10 - Canvas(2D), Drag and drop & SVG',
      info: 'Introducción al modelado 2D en html, utilización de drag and drop nativo de HTML y SVG',
      img: 'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png',
      gallery: ['../../../assets/10/1.png', '../../../assets/10/2.png'],
      disable: false,
    },
    {
      link: '',
      title: 'Lab #11 - Canvas(3D)',
      info: 'Introducción al modelado 3D en HTML y JS',
      img: 'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png',
      gallery: ['../../../assets/11/1.png'],
      disable: false,
    },
    {
      link: '',
      title: 'Lab #12 - Animaciones CSS',
      info: 'Introducción a CSS para front-end en desarrollo web',
      img: 'https://blog.logrocket.com/wp-content/uploads/2021/02/CSS-new-features-2021.png',
      gallery: ['../../../assets/12/1.png', '../../../assets/12/2.png'],
      disable: false,
    },
    {
      link: '',
      title: 'Lab #13 - CSS Parte II',
      info: 'Introducción a CSS para front-end en desarrollo web',
      img: 'https://blog.logrocket.com/wp-content/uploads/2021/02/CSS-new-features-2021.png',
      gallery: ['../../../assets/13/1.png', '../../../assets/13/2.png'],
      disable: false,
    },
    {
      link: '',
      title: 'Lab #14 - Base 64 y multimedia',
      info: 'Introducción a generacion de datos en base64 y su uso en la multimedia',
      img: 'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png',
      gallery: ['../../../assets/14/1.png', '../../../assets/14/2.png'],
      disable: false,
    },
    {
      link: '',
      title: 'Lab #15 - Cifrado HASH & SHA256',
      info: 'Introducción al cifrado web y sus usos',
      img: 'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png',
      gallery: ['../../../assets/15/1.png', '../../../assets/15/2.png'],
      disable: false,
    },
  ];

  public info: any = null;
  public iframe: boolean = false;
  public audio: boolean = false;
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.gameName = true;
      console.log('Game name OK');
      this.canvas();
    }, 10000);
  }

  public canvas = () => {
    setTimeout(() => {
      var canvas = document.getElementById('canv');
      //@ts-ignore
      if (canvas.getContext) {
        //@ts-ignore
        let context = canvas.getContext('2d');
        //@ts-ignore
        context.textAlign = 'center';
        context.fillStyle = 'black';
        context.font = '50px GOD';

        let string = 'Θεός του πολέμου';

        let angle = Math.PI * 0.9; // in radians
        let radius = 250;

        context.translate(300, 300);
        context.rotate((-1 * angle) / 2);

        for (let i = 0; i < string.length; i++) {
          context.rotate(angle / string.length);
          context.save();
          context.translate(0, -1 * radius);
          context.fillText(string[i], 0, 0);
          context.restore();
        }
      }
      this.leviatan = true;
    }, 10000);
  };

  public setInfo = (data: any) => {
    if (data.audio) {
      this.audio = true;
      this.info = null;
      this.iframe = false;
    } else if (data.iframe) {
      this.iframe = true;
      this.info = null;
      this.audio = false;
    } else if (data.gallery) {
      this.info = data.gallery;
      this.iframe = false;
      this.audio = false;
    } else {
      console.log('Nothing');
      this.info = null;
      this.iframe = false;
      this.audio = false;
    }
  };
}
