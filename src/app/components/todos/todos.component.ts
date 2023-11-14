import { Component, OnInit } from '@angular/core';
import {Todos} from './../../models/Todos'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // console = console
  todos:Todos[] = [];

  inputTodo:string = ""

  hover:boolean[] = []

  constructor(){}

  ngOnInit(): void {
    this.todos = [
      {
        content:'First',
        completed:false
      },
      {
        content:'Second',
        completed:true
      },
    ],
    this.hover = [false, false]

  }

  toggleDone(id:number){
    this.todos.map((item, i)=>{
      if(i == id) item.completed = !item.completed
      
      return item;
    })
    // console.log(id)
  }

  deleteTodo(id:number){
    console.log(
      this.todos = this.todos.filter((item, i)=>i!==id)

    )
  }
  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    })
  }

  handleHover(id:number){
      console.log(id)
  }
  handleUnhover(id:number){
    console.log(id)

  }
}
