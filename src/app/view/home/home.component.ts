import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/TodoService';
import { Document } from '../../types/Document';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  documents!: Document[];

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this.documents = this._todoService.readAll();
  }
}
