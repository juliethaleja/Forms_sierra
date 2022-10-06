import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mascota-registro',
  templateUrl: './mascota-registro.component.html',
  styleUrls: ['./mascota-registro.component.css'],
})
export class MascotaRegistroComponent implements OnInit {
  formularioMascota: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formularioMascota = fb.group({
      nombre: new FormControl('', [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])")]),
      edad: new FormControl('', [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])")]),
      raza: new FormControl('', [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])")]),
      contacto: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(8), Validators.maxLength(8)]),
      dueño: new FormControl('', [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])")]),
    });
  }

  ngOnInit(): void {}
  agregarMascota() {
    console.log('Agregar datos');
  }
}
