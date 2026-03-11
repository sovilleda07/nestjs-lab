import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { CreateTaskDTO } from './dto/create-task.dto';
import type { UpdateTaskDTO } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
  service: TasksService;

  constructor(tasksService: TasksService) {
    this.service = tasksService;
  }

  @Get()
  getAllTasks(@Query() query: any) {
    // Ejecutar lógica coo :
    // - Buscar en BD
    // - Petición a otra API
    console.log(query);
    return this.service.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.service.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDTO) {
    return this.service.createTask(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDTO) {
    return this.service.updateTask(task);
  }

  @Delete()
  deleteTask() {
    return this.service.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.service.updateTaskStatus();
  }

  // @Get('/')
  // index() {
  //   return 'Página inicial';
  // }
}
