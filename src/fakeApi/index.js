import { createServer, Model } from "miragejs";

export const setupServer = () => {
  let server = createServer({
    models: {
        todos: Model,
    },
  routes() {
    this.get("/api/todos", (schema) => {
      return schema.todos.all();
    });

    this.post("/api/todos", (schema, request) => {
      let payload = JSON.parse(request.requestBody);
      return schema.todos.create(payload);
    });

    this.post('/api/updateTodos', (schema, request) => {
        let id = JSON.parse(request.requestBody);
        let currentTodo = schema.todos.find(id);
        // return currentTodo.update(schema.todos.completed = !schema.todos.completed);
        return currentTodo.update({completed: !currentTodo.completed});

    });

    this.delete('/api/deleteTodos', (schema, request) => {
        let id = JSON.parse(request.requestBody);
        let currentTodo = schema.todos.find(id);
        // return currentTodo.update(schema.todos.completed = !schema.todos.completed);

        return currentTodo.destroy();
        // return currentTodo.destroy();

    });
  }
})};