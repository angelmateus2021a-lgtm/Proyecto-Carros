import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class contacto {

  contactForm: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
      mensaje: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  enviar() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const data = {
      nombre: this.f['nombre'].value.trim(),
      email: this.f['email'].value.trim(),
      telefono: this.f['telefono'].value.trim(),
      mensaje: this.f['mensaje'].value.trim(),
    };

    // Crear contenido del archivo
    const contenido = `
===========================================
       DATOS DE CONTACTO
===========================================

Nombre: ${data.nombre}
Email: ${data.email}
Teléfono: ${data.telefono}
Mensaje: ${data.mensaje}

Fecha: ${new Date().toLocaleString('es-ES')}
===========================================
    `;

    // Crear y descargar el archivo
    const blob = new Blob([contenido], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contacto_${data.nombre}_${Date.now()}.txt`;
    link.click();
    window.URL.revokeObjectURL(url);

    // Opcional: mostrar mensaje de éxito
    alert('¡Mensaje enviado y archivo descargado correctamente!');

    // Limpiar formulario
    this.contactForm.reset();
  }

  cancelar() {
    this.contactForm.reset();
  }
}