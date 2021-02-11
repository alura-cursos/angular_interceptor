import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private route: ActivatedRoute,
    private animaisService: AnimaisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.route.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
    this.animal$.subscribe(
      () => {},
      (err) => {
        console.log(err);
        this.router.navigate(['not-found']);
      }
    );
  }
}
