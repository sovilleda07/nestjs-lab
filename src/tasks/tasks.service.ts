import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  // private tasks : any = [];
  private tasks: any[] = [];

  getTasks() {
    // return ['Task 1', 'Tasks 2', 'Tasks 3'];
    // return {
    //   name: 'John Doe',
    //   age: 30,
    // };
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      // return 'No se encontró la tarea';
      // throw new Error('Task not found');
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: CreateTaskDTO) {
    console.log(task);

    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    // return 'Creando tareas';
    return task;
  }

  updateTask(task: UpdateTaskDTO) {
    console.log(task);
    return 'Actualizando tareas';
  }

  deleteTask() {
    return 'Elimando Tarea';
  }

  updateTaskStatus() {
    return 'Actualizando el estado de una tarea';
  }
}
