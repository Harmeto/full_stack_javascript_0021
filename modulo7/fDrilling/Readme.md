# Instalar dependencias

- npm install

# Conectar a base de datos

- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all

# Iniciar el proyecto

- npm run dev

# Probar rutas por postman

## Users

Route: {{base_url}}/user/ - Method Post (create user)

```
{
 body: {
 "first_name": "first_name",
"last_name": "last_name",
"email":"email"
}
}
```

Route: {{base_url}}/user/ - Method Get (return all users)

Route: {{base_url}}/user/:id - Method Get (return a user)

Route: {{base_url}}/user/:id - Method Put (modify a user)

```
{
 body: {
 "first_name": "first_name",
"last_name": "last_name",
"email":"email"
}
}
```

Route: {{base_url}}/user/:id - Method Delete (remove a user)

## Bootcamp

Route: {{base_url}}/bootcamp/ - Method Post (create bootcamp)

```
{
 body: {
    "title": "title",
    "cue": 20,
    "description": "description"
}
}
```

Route: {{base_url}}/bootcamp/ - Method Get (return all bootcamp)

Route: {{base_url}}/bootcamp/users/:id - Method Get (return users in a bootcamp)

Route: {{base_url}}/bootcamp/ - Method Post (add user to a bootcamp)

```
{
 body:{
    "userId": "userId",
    "bootcampId": "bootcampId"
}
}
```
