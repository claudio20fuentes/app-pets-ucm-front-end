import { PublicacionesService } from './../../services/publicaciones.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TOOLTIP_PANEL_CLASS } from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-new-publicacion',
  templateUrl: './form-new-publicacion.component.html',
  styleUrls: ['./form-new-publicacion.component.css']
})
export class FormNewPublicacionComponent implements OnInit {

  private fileTmp:any;

  public publicacionForm: FormGroup;

  estadoFormulario: String  = "";
  
  selectedFile: any;
  nameImg: string ="";

comunaObj = [
  {nombre:"Talca"},
  {nombre:"San javier"},
  {nombre:"Maule"},
  {nombre:"Parral"},
  {nombre:"Longavi"},
];

tipoPubObj = [
  {categoria:"En Adpoción"},
  {categoria:"Busco mi Mascota"},
  {categoria:"Busco DUeño"}
];

TipoAnimalObj = [
  {tipo:"Perros"},
  {tipo:"Gatos"},
  {tipo:"Hamsters"},
  {tipo:"Conejos"}
];


razaObj = [

{tipo:"Desconocido"},
{tipo:"Pitbull"},
{tipo:"Siamés"},
{tipo:"Pastor Alemán"},
{tipo:"Poodle"}
];

sexoObj = [

  {tipo:"Indefinido"},
  {tipo:"Masculino"},
  {tipo:"Femenino"}
];

  constructor(private publicacionesServices: PublicacionesService,private fb: FormBuilder,
    private snackBar: MatSnackBar){
      //CONSTRUCTOR
      this.estadoFormulario = "Agregar",
      this.publicacionForm = this.fb.group({

        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        nombreMascota: ['', Validators.required],
        comuna: ['', Validators.required],
        tipoPub: ['', Validators.required],
        tipoAnimal: ['', Validators.required],
        raza:['', Validators.required],
        sexo:['', Validators.required],
        picture: ['', Validators.required]
      });

      }

  ngOnInit(): void {


  }

  onSave(){
    let data = {
      titulo: this.publicacionForm.get('titulo')?.value,
      descripcion: this.publicacionForm.get('descripcion')?.value,
      animal: this.publicacionForm.get('nombreMascota')?.value,
      comuna: this.publicacionForm.get('comuna')?.value,
      categPubli: this.publicacionForm.get('tipoPub')?.value,
      categAnimal:this.publicacionForm.get('tipoAnimal')?.value,
      raza:this.publicacionForm.get('raza')?.value,
      sexo:this.publicacionForm.get('sexo')?.value,
      file: this.publicacionForm.get('picture')?.value
    }

    console.log(data);
    //FALTA METODO DE LA IMAGEN
    this.publicacionesServices.savePublicaciones(data)
    .subscribe( (data : any) => {
      console.log("se guardo");
      console.log(data);
    }, (error:any) => {
      console.log("no se guardo nada");
    })
  }

  onFileChanged(event:any){

    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.nameImg = event.target.files[0].name;
  };

  getFile($event: any): void{
    console.log($event);
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
  }
/*
  openSnackBar(message: string, action: string : MatSnackBarRef<SimpleSnackBar>){
    return this.snackBar.open(message, action, {
      duration: 2000
    })

  }
*/
}
