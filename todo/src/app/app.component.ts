import { Component } from '@angular/core';
import { Tarefa } from 'src/models/tarefa';
import { TarefasLista } from 'src/models/tarefalistas';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title='todo';
  private list = new TarefasLista("Senac", [
    new Tarefa("Estudar HTML","AAAA","AAAA"),
    new Tarefa("Estudar CSS","AAAA","AAAA"),
    new Tarefa("Estudar JAVASCRIPT","AAAA","AAAA"),
    new Tarefa("Estudar JAVASCRIPT","AAAA","AAAA"),
  ]);
  get username(): string {
    return this.list.usuario;
  }
  get itemCount(): number {
    return this.list.tarefas.filter(item => !item.completo).length;
  }

  get items(): readonly Tarefa[] {
    return this.list.tarefas.filter(item =>!item.completo|| !item.completo);
  }


  addTarefa(newItem: string,newItem2: string,newItem3: string) {
    if (newItem != "") {
      this.list.addTarefa(newItem,newItem3,newItem2);
    }
    else if (newItem2 != " ") {
      this.list.addTarefa(newItem, newItem3, newItem2);
    }
    else if (newItem3 != " ") {
      this.list.addTarefa(newItem, newItem3, newItem2);
    }
  }
  showComplete: boolean = false;

}

