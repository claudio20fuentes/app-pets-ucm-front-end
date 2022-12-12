import { Component, OnDestroy, OnInit, ViewChild,ChangeDetectorRef} from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { PublicacionesService } from '../../services/publicaciones.service';
import { InfoAdopcionComponent } from '../info-adopcion/info-adopcion.component';
import { RouterModule } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
})

export class PublicacionesComponent implements OnInit {
  //eople2: any[] = [];
  publications: any[] = [];
  public page!:number;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.publications);


  constructor(private changeDetectorRef: ChangeDetectorRef,private publicacionesServices: PublicacionesService) {}

  ngOnInit(): void {
   //Metodo que se ejecuta al cargar el componente
   //devuelve un json desde la api con publicaciones  
   this.getPublicaciones(); 
   
   this.changeDetectorRef.detectChanges();
   this.dataSource.paginator = this.paginator;
   this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
  
  getPublicaciones(){

    this.publicacionesServices.getPublicaciones()
      .subscribe( (data:any) => {
         console.log("respuesta vacia?: ", data);
         
         console.log(data.data.rows[1].id);

         this.publications = data.data.rows;
         
         //codigo para user
         //console.log(data.data.rows[1].userdata.id);
         //this.people2 = data.data.rows; 
          //this.people2 = JSON.parse(data.data.rows); 
          //console.log(typeof this.people2);
      }, (error: any) => {
        console.log("error: ", error);
       
      })      

  }

  ver(id:number){
    data:{id:id}
  }

  enviarId(id:Number){  
  }

}







