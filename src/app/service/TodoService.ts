import { Injectable } from '@angular/core';

import { Document } from '../types/Document';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private documents: Document[];

  constructor() {
    const store = localStorage.getItem('documents') as string;

    this.documents = JSON.parse(store) || [];
  }

  readAll(): Document[] {
    return this.documents;
  }

  read(id: number): Document | [] {
    return this.documents.find((doc) => doc.id === id) || [];
  }

  create(doc: Document): Document {
    doc.id = this.genId();

    this.documents.push(doc);

    localStorage.setItem('documents', JSON.stringify(this.documents));

    return doc;
  }

  delete(id: number): void {
    const i = this.documents.findIndex((doc) => doc.id === id);

    if (i != 0) {
      this.documents.splice(i, 1);

      localStorage.setItem('documents', JSON.stringify(this.documents));
    }
  }

  private genId(): number {
    return Math.max(...this.documents.map((doc) => doc.id as number), 0) + 1;
  }
}
