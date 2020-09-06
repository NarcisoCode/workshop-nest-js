<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<h2 align="center">Mi experiencia en este taller sobre NestJS</h2>

## Cosas que aprendí

En mi experiencia desarrollando este proyecto pude ver como trabajar con TypeORM uno de los patrones del mapeador de datos mas usado en javascript, en mi caso lo conecte con postgresql aun que no use migraciones las entidades fue mas que suficiente para estudio.

Uno de los patrones que me pareció interesante es DTO (Objeto de transferencia de datos) que nos permite limitar tanto la recepción como el envió de los datos y es increíble cuando lo mezclas con class-validator una gran librería que te permite olvidarte de tareas repetitivas de validación y con la opción de poder modificar los mensajes de error de una forma muy elegante mediante los decoradores.

El flujo para poder desarrollar un modulo es muy interesante ya que tienes que empezar con el empaquetador del modulo luego trabajas tu controlador con el DTO y de allí crear luego tu entidad para crear las diferentes interacciones con la entidad mediante el servicio y con eso ya puedes hacer uso del servicio en el controlador se que en el proyecto puedo haberlo hecho la distinción de servicio con el repositorio, pero no me vi cómodo creando mas archivos.

## Instalación

```bash
$ npm install
```

## Ejecutando la aplicación

```bash
# desarrollo
$ npm run start

# producción
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
