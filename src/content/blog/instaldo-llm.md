---
title: "Instalando DeepSeek en local con Windows con Ollama y Docker"
description: "Fácil y sencillo sin WSL"
pubDate: "2025-03-24T20:09:49.053Z"
heroImage: "/blogImages/ollama-deepseek.webp"
categories: ['Inteligencia Artificial', 'IA']
tags: ['Ollama', 'LLM', 'DeepSeek', 'Windows', 'Docker']
author: "Oscar Fuentes"
---

## Sin morir en el intento

Como parte del **plan maestro** que ya les había contado, el siguiente paso individual es instalar un **LLM en local**. Ya saben, para mantener todo privado y evitar que datos a nuestro resguardo anden volando por la red.

Y sí, la forma más sencilla es instalar **LM Studio** y desde ahí hacer todo, pero como nos gusta usar la **terminal de comandos** para creernos élites, aquí te dejo una forma que hasta el momento cumple con dos cosas: **no es complicada** y **no tan invasiva** (ahora explico esto).

Si optas por la forma sencilla (**LM Studio**), notarás que si bien tiene una interfaz gráfica ya incluida y expone un **EndPoint** (que es lo que buscamos para nuestro plan maestro), siempre está cargada en RAM. Es decir, aparece su ícono en nuestra área de notificaciones (**System Tray**) como un demonio siempre corriendo. Lo anterior no es malo *per se*, pero si nuestro proyecto no ocupa una interfaz gráfica como la que vemos al entrar a las páginas oficiales de los LLM, o nos gustaría escoger alguna que no es la que LM Studio nos da por *default*, usaremos el método que te voy a explicar a continuación.

---

## Requerimientos previos

- Voy a suponer que usas **Windows**.
- Que ya tienes instalado **Docker** y tienes al menos una noción básica de lo que son los contenedores.
- Tienes suficiente espacio en disco para contener el modelo que escojas. En este ejemplo, vamos a usar la versión destilada **DeepSeek R1 7B** (que pesa **4.7GB**).

---

## Instalación de Ollama en Windows

El primer paso es instalar **Ollama**. Por suerte, ya existe versión para nuestro sistema operativo y no tienes que hacer malabares usando el **subsistema de Windows para Linux (WSL)** para instalarlo. Nos dirigimos a:

🔗 [Descargar Ollama para Windows](https://ollama.com/download/windows)

Y pues ya sabes: **descargas, instalas, siguiente, siguiente y listo.**

Verás un pequeño ícono de una llama en el área de notificaciones. Para asegurarnos de que está instalado correctamente, abrimos una terminal y tecleamos:

```sh
ollama
```

Si todo salió bien, nos tiene que regresar información del programa y no un error.

---

## Descarga del modelo LLM

Ahora tenemos que bajar el modelo LLM que vamos a instalar. Como mencioné antes, puedes elegir qué modelo bajas y qué versión usarás. Ten en cuenta que muchos son los factores a considerar, como el hardware con el que cuentes.

Si eliges mal el modelo, es posible que tengas que cambiar a otro más ligero o más pesado. **Mientras más completo esté el modelo (y más pese), mejores respuestas obtendrás**, pero si no tienes suficiente **RAM y poder de cómputo**, puede que tus consultas sean lentas o fallen.

En este caso, vamos a usar **DeepSeek R1 7B (4.7GB)**. Para instalarlo, ejecutamos el siguiente comando en la terminal:

```sh
ollama run deepseek-r1
```

Esperamos a que descargue los archivos necesarios. Dependiendo de tu conexión a Internet, puede tardar un poco.

Una vez terminado el proceso, **Ollama** nos mostrará un mensaje similar a:

```sh
>>> Send a message (/? for help)
```

Podemos probarlo escribiendo un simple **"hola"**, y veremos cómo el modelo nos responde amablemente que está listo para trabajar. 🎉

---

## Mejorando la interfaz de usuario con Open WebUI

Si bien **Ollama** ya está funcionando, usarlo directamente en la terminal es algo **limitado y poco amigable**. Por eso, vamos a instalar una **interfaz gráfica** que nos permita usarlo de una manera más visual.

Ojo, no hagas lo siguiente, pero si necesitaras salir de Ollama, usa:

```sh
/bye
```

### Instalando Open WebUI con Docker

Ahora vamos a usar **Docker**. Si no sabes qué es Docker, te recomiendo ver algún video explicativo sobre contenedores.

Usaremos **Open WebUI**, una plataforma de IA **autohospedada** que corre completamente **offline** y es compatible con varios ejecutores LLM, entre ellos **Ollama**. Es la opción por *default*, y además, permite usar un motor **RAG** para alimentar el LLM con datos externos.

📖 [Documentación de Open WebUI](https://docs.openwebui.com/)

La instalación se hace con el siguiente comando:

```sh
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

Si bien este comando tiene varios parámetros de *desarrollo* que pueden ser peligrosos, con esto cargamos un contenedor que corre en **Docker**. El comando nos regresará un **hash** que identifica el contenedor creado.

Para acceder a la interfaz, abrimos un navegador y entramos a:

🔗 [http://localhost:3000](http://localhost:3000)

Si tu máquina no es muy potente, la interfaz puede tardar un poco en activarse y podrías recibir un **error 500**. Pero **no te preocupes**, el sitio se levantará en unos instantes.

🔹 **Nota:** Si los puertos **3000** o **8080** ya están ocupados en otros proyectos, puedes cambiarlos en el comando de Docker.

---


Esta interfaz también te permite **escoger entre diferentes modelos** si decides instalar más de uno, facilitando las pruebas y experimentación.

Ahora ya puedes **divertirte localmente y en privado** con tu LLM sin mucho esfuerzo, solo necesitarás esperar un poco si tu Internet no es muy rápido. 🚀

¡**Happy ... ¿prompting?** 🎉

