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

Route: {{base_url}}/user/singin - Method Post (login user)

```
{
 body: {
 "email": "email",
 "password": "password"
}
}
```

Route: {{base_url}}/user/logout - Method Get (logout user)

Route: {{base_url}}/user/ - Method Get (return all users) - Auth required

Route: {{base_url}}/user/:id - Method Get (return a user) - Auth required

Route: {{base_url}}/user/:id - Method Put (modify a user) - Auth required

```
{
 body: {
 "first_name": "first_name",
"last_name": "last_name",
"email":"email"
}
}
```

Route: {{base_url}}/user/:id - Method Delete (remove a user) - Auth required

## Bootcamp

Route: {{base_url}}/bootcamp/ - Method Post (create bootcamp) - Auth required

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

Route: {{base_url}}/bootcamp/users/:id - Method Get (return users in a bootcamp) - Auth required

Route: {{base_url}}/bootcamp/ - Method Post (add user to a bootcamp) - Auth required

```
{
 body:{
    "userId": "userId",
    "bootcampId": "bootcampId"
}
}
```
