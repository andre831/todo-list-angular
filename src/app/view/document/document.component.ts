import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/TodoService';
import { Document } from 'src/app/types/Document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent {
  documents!: Document[];

  doc: Document = {
    title: 'TESTE',
    status: 'done',
    description: 'descriptionnnnn',
    date: this.timer(),
  };

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    console.log(this.documents);
    this.documents = this._todoService.readAll();
  }

  create(doc: Document) {
    console.log(doc);

    this._todoService.create(doc);
  }

  timer() {
    const now = new Date();
    const options = { timeZone: 'America/Sao_Paulo' };
    const formattedDate = now.toLocaleString('pt-BR', options);

    return formattedDate;
  }
}
