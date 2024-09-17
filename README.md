# Gestor de Tareas con React, Redux y MySQL

Este es un gestor de tareas que permite a cada usuario gestionar sus propias tareas.

## Características
- **Autenticación de usuarios**: Cada usuario tiene sus propias tareas.
- **CRUD de tareas**: Los usuarios pueden crear, ver, actualizar y eliminar sus tareas.
- **Gestión de estado con Redux**: Se utiliza Redux para gestionar el estado global de las tareas.
- **Persistencia de datos con MySQL**: Los datos de las tareas se guardan en una base de datos MySQL.
- **Conexión a backend**: La API del backend maneja las operaciones y la conexión con la base de datos.

## Tecnologías utilizadas
- **React**: Librería de JavaScript para construir la interfaz de usuario.
- **Redux**: Librería para la gestión del estado global.
- **React-Redux**: Enlace entre React y Redux.
- **Redux Toolkit**: Herramientas para simplificar el manejo de Redux.
- **React Router**: Navegación entre diferentes rutas de la aplicación.
- **Axios**: Para realizar peticiones HTTP a la API.
- **Node.js y Express**: Backend para manejar la lógica de la aplicación y conectarse a la base de datos.
- **MySQL**: Base de datos relacional para almacenar las tareas.
- **Sequelize**: ORM para manejar las interacciones con MySQL.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/gestor-tareas.git
   cd gestor-tareas
   ```


## Instala las dependencias del frontend:
```bash
cd frontend
npm install
```
## Instala las dependencias del backend:
```bash
cd backend
npm install
```

## Configura la base de datos MySQL:

Crea una base de datos llamda react_redux.
Configura las credenciales de la base de datos en el archivo .env en la carpeta backend:

* Dentro de la tarpeta `./server/sql` se encuentra un archivo llamado `react_redux.sql`, importalo usando phpmyadmin o via comandos

* DB_HOST=localhost
* DB_USER=tu_usuario
* DB_PASSWORD=tu_password
* DB_DATABASE=react_redux

## Inicia el servidor backend:
```bash
npm start
```

## Inicia la aplicación frontend:
```bash
cd ../
npm start
```
