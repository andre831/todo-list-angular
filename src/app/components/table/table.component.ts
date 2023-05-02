import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/service/TodoService';
import { Document } from 'src/app/types/Document';
@Component({
  selector: 'Table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data!: Document[];

  constructor(private _todoService: TodoService) {}

  delete(id: number): void {
    this._todoService.delete(id);
  }
}
