import { Component } from '@angular/core';
import { ServerService } from '../service/server.service';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any;
  height = 0;

  direcciones: any = [];
  dirActual: string = ""; 


  constructor(private ServerService: ServerService, public platform: Platform, private rutaActiva: ActivatedRoute) {
    console.log(platform.height());
    this.height = platform.height() - 56;
  }

  ngOnInit(): void {
    this.getDirecciones();
    this.data=this.rutaActiva.snapshot.paramMap.get('id');
    console.log(this.data);
    
  }

  getDirecciones() {
    this.ServerService.getDirecciones().subscribe(
      res => {
        this.direcciones = res;
        console.log(res);
        
      },
      err => console.error(err)
    )
  }

  onChange($event){
    this.dirActual = $event.target.value;
    console.log(this.dirActual);
  }

}
