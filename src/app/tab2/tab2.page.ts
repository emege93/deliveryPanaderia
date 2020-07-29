import { Component } from '@angular/core';
import { ServerService } from "../service/server.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  direcciones: any = [];

  constructor(private ServerService: ServerService) {}

  ngOnInit(): void {
    this.getDirecciones();
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
}
