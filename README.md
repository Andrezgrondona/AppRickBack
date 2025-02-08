# Back end App Rick y Morty

Este proyecto te permite buscar y obtener datos sobre los personajes del universo de Rick y Morty.

## Tecnologías Utilizadas

- **Node.js**: Entorno de tiempo de ejecución de JavaScript.
-   **Express**: Framework web para Node.js.
-   **GraphQL**: Lenguaje de consulta para tu API.
-   **Sequelize**: ORM para interactuar con MySQL.
-   **MySQL**: Base de datos relacional 
- **Nodemon**: Reinicia automáticamente el servidor al detectar cambios en los archivos

## Requisitos
- [Node.js](https://nodejs.org/es/) (se recomienda la versión 16 o superior)
-   [npm](https://www.npmjs.com/) (Administrador de paquetes de Node)
## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

## Instrucciones de Configuración

1.  **Clona el Repositorio**:

    ```
    git clone https://github.com/Andrezgrondona/AppRickBack.git
   
    ```

2.  **Instala las Dependencias**:

    ```
    npm install
    ```
3.  **Iniciar el servidor**:

    ```
    npm run dev
    ```

## Uso 

Accede al endpoint de la API GraphQL en `http://localhost:4000/graphql`. Puedes usar herramientas como GraphiQL, Postman o Thunder Client para enviar consultas.

### Realizar Peticiones con Thunder Client

1.  **Crear una Nueva Petición**:
    *   Abre Thunder Client o postman.
    *   Haz clic en "New Request" (Nueva Petición).
2.  **Configurar la Petición**:
    *   **Método**: Selecciona "POST". Todas las peticiones GraphQL utilizan el método HTTP POST.
    *   **URL**: Ingresa `http://localhost:4000/graphql`.
    *   **Cuerpo (Body)**: Cambia el tipo de cuerpo a "GraphQL".
3.  **Escribe tu Consulta GraphQL**:
    *   En el editor de consultas GraphQL, ingresa tu consulta. Por ejemplo:

        ```
        query {
          characters {
            id
            name
            status
            species
          }
        }
        ```




Para interactuar con AppRickFront (front-end) se debe clonar el siguiente repositorio:
Git:
- https://github.com/Andrezgrondona/AppRickFront
Repositorio:
- https://github.com/Andrezgrondona/AppRickFront.git

