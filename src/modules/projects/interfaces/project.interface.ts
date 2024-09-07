export interface Project {
  id: String;
  name: String;
  tasks: Task[];
}

export interface Task {
  id: String;
  name: String;
  completedAt?: Date;
}
