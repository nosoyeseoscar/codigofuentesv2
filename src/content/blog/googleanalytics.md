---
title: 'Google Analytics'
description: 'Pasos para agregar Snippet de Google Analytics a Netlify'
pubDate: '2024-08-30T18:44:42.373Z'
heroImage: '/blogImages/GAHero.webp'
categories: ['Programacion', 'Dev Web', 'Netlify', 'Desarrollo Web']
tags: ['Codear', 'Programación', 'Tips', 'Netlify']
author: 'Oscar Fuentes'
---

## Añadir Google Analytics a tu sitio en Netlify (y cualquier Snippet).

Hola de nuevo, después de mucho tiempo, vuelvo a escribir en el blog. Sí lo sé, fue una espera larga y la verdad he estado un poco ocupado con temas “extra-escritorio” que me han tenido entretenido fuera de la experiencia de escribir.

Viendo un video de [Fazt Code](https://www.youtube.com/@FaztCode/videos) en YouTube, me di cuenta que quedó pendiente en éste blog la medición de analiticas. En el video en cuestión usan un servicio diferente a Google Analytics; sin embargo, decidí usar el servicio de Google ya que es el más usado.

Éste blog, de momento está hospedado en Netlify, puede que en un futuro eso cambie. Aún así te muestro como agregar GA fácil y rápido.

Asumiré muchas cosas como que ya tienes cuenta Google y en Analytics, así que no explicaré eso.

Lo primero es crear una "cuenta" (cuenta dentro de Google Analytics), esto obviamente no es forzoso, pero si tienes curiosidad acerca de esto, sigue leyendo. Nos dirigimos a la parte inferior izquierda de, en el engrane, “Administrar”, crear “Cuenta”.

![Cuenta](/blogImages\analytics02.webp)

Nos pide varios datos como nombre de la cuenta, opciones de compartir datos con la gran G. Después nos pide los datos de la propiedad, que en mi caso es el blog. Llenas más datos “empresariales”.

![Cuenta](/blogImages\analytics03.webp)

El siguiente paso es algo importante, ya que solo nos permite seleccionar una opción, que en nuestro caso es conocer el tráfico de nuestro sitio.

![Cuenta](/blogImages\analytics04.webp)

Después damos aceptar a las condiciones de Google, y posteriormente nos dice que tipo de aplicación tenemos, en nuestro caso es Web, pero podría ser hasta un app móvil. Posteriormente nos pide datos de nuestro sitio, entre ellos su url sin el https y demás cosas conocidas. Así que ten a la mano dichos datos.

![Cuenta](/blogImages\analytics05.webp)

Posteriormente creado el seguimiento, al hacer click en él, te arroja el código HTML que se necesita para que el sitio envíe los datos a rastrear. Copiamos y lo tenemos listo para pasar a Netlify.

También supondré que ya estás dentro de Netlify, en “Sites”, escogemos el que queremos rastrear, posteriormente del lado izquierdo nos metemos a “Deploys” y dentro nos metemos a “Deploy Settings”.

Aquí viene lo interesante, ya que si usas alguna biblioteca o framework como React, Next o algo similar insertar el HTML que te dió GA es algo contraintuitivo. Por suerte, Netlify y otros servicios similares, te permiten insertar snippets después de procesar tu sitio.

En “Deploy Settings”, nos vamos a “Post processing” y ahí es donde está el truco, hay una sección donde podemos insertar el snippet sin mucho problema. En el caso de éste elegimos ponerlo antes del cierre de la etiqueta “head”, aunque puede que otros snippets requieran estar en otra parte, la cual también puedes escoger. Hacemos click “Add Snippet”, decimos en dónde será insertado y el código que copiamos de GA. Y listo. Ya quedó…

![Cuenta](/blogImages\analytics06.webp)

![Cuenta](/blogImages\analytics07.webp)

¿No me crees? Ok, recarga tu sitio e inspecciona el código con tu navegador de confianza y voila!, verás insertado el snippet, el cual se comunicará con GA y podrás revisar las estadísticas en un par de horas o en un día o dos. Ya que el servicio tarda.

Como ves es muy fácil implementarlo y en general cualquier otro snippet que requieras sin tener que modificar tu código. Espero que te haya ayudado éste pequeño tutorial. Hasta el otro post.
