import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comentarios } from './comentarios';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;
  comentarioForm!: FormGroup;
  comentarios$!: Observable<Comentarios>;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscaComentarios(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService
      .incluiComentario(this.id, comentario)
      .pipe(switchMap(() => this.comentariosService.buscaComentarios(this.id)))
      .pipe(
        tap(() => {
          this.comentarioForm.reset();
          alert('Salvo comentario');
        })
      );
  }
}
