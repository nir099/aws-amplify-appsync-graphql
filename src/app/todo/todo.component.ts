import { APIService } from './../API.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  allTodos: any = [];

  constructor(private api: APIService) { }

  async ngOnInit() {
    const  result = await this.api.ListTodos();
    this.allTodos = result.items;
  }

  async createTodo() {
    const newTodo = {
      name: 'Todo' + Math.floor(Math.random() + 100),
      description: 'this is a todo',
      completed: false
    };

    const result = await this.api.CreateTodo(newTodo);
    this.allTodos.push(result);
  }

  async listTodos() {
    const  result = await this.api.ListTodos();
    this.allTodos = result.items;
  }
}
