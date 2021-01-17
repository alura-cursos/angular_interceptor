import { Component, Input, OnInit } from '@angular/core';

const CLOUD = 'http://localhost:3000';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  private urlOriginal = '';

  @Input() descricao = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = CLOUD + url;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  ngOnInit(): void {}
}
