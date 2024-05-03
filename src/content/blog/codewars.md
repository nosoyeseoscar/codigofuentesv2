---
title: 'codewars'
description: 'Review del sitio CodeWars.com'
pubDate: '2024-05-03T12:31:30.844Z'
heroImage: '/blogImages/codewars1.webp'
categories: ['Reseñas', 'Codear']
tags: ['Reseñas', 'Codear']
author: 'Oscar Fuentes'
---

## [Code Wars](https://www.codewars.com/)

Esta semana toca a [Code Wars](https://www.codewars.com/), que por el nombre te puedes imaginar que es medio "belicón" y pues sí, su onda es así como de dojo de artes marciales que te prepara para la guerra que es conseguir trabajo en estos días en el mundo Tech.

El registro es el clásico, es decir escoges tu nombre de usuario, contraseña y recibes un correo donde puedes confirmar tu cuenta. Aunque puedes empezar sin confirmar el correo, aunque supongo que después de un tiempo razonable te obliga a esto.

Puedes elegir en la inscripción recibir mentorías de otros "codewarriors" más avanzados (sí, así se autodenominan los usuarios del sitio). Pero si tu intención es solo practicar, puedes decir que no quieres participar, ya que para ser sujeto de mentoría necesitas convencer a algún otro usuario disponible para tomarte bajo su ala. Esto se realiza con un pequeño cuestionario dónde explicas por qué deberías ser tú el "pequeño saltamontes" elegido.

Como te comenté, la idea es que estás en un dojo donde entrenas. Empiezas con 8 kyūs que son como los puntos de reputación usados en este sitio y la idea es ir haciendo "Katas" que serán los ejercicios que tienes que resolver. Los kyūs vienen del juego "Go" japonés por si tenías la duda.

Por cada kata resuelta vas ganando honor el cual refleja tu experiencia en el sitio, las contribuciones que haces al mismo y otras cosas. Y sí, dije honor y no kyūs, estos más bien reflejan tu "nivel", es decir que entre más nivel tengas, puedes enfrentar "katas" más complicadas y van hacia atrás, es decir, si tengo 7 kyūs soy más avanzado que alguien de 8.

Ya pasando al lío el editor sigue siendo similar a VSCode, lo cual siempre se agradece, aunque puedes escoger otros editores. Te muestra el problema, las instrucciones, una función que tienes que modificar y el código del test que tienes que pasar, como si fuera una prueba unitaria normal.

Tienes la opción de probar tu código con un caso de prueba o contra toda la batería de casos que tu código debe resolver, es decir situaciones específicas que pueden hacer que tu código falle.

Una vez resuelta la kata, obtienes algo de honor y puedes seguir con más problemas o dejarlo para después. Aquí en realidad no se diferencia mucho de los otros sitios revisados anteriormente.

En este sitio sí siento que se centra un poco más en la "comunidad" del sitio, ya que no solo expone tu solución a la comunidad para ser "evaluada" sino que te sugiere participar en el foro interno a modo de discusiones y así.

Por el tema de "Dojo" de artes marciales te puede parecer el más atractivo de todos, y sí, la temática me atrae mucho, ya que comulga con lo que concibo como "entrenamiento", pero como muchas cosas es una buena idea llevada a cabo medianamente bien.

Y por qué digo esto, bueno pasemos a lo que no me está gustando del sitio. El editor no tiene autocompletado y las ayudas son limitadas a la hora de codear. Tal vez es porque estoy muy acostumbrando al VSCode, pero siento que con su editor es más como programar en "Bloc de notas" de Windows. Solo tiene el apoyo visual de colores en tu texto y ya, no he visto otra ayuda a la hora de codear, lo cual te crea una constante duda a la hora de meter código. Ok, sí, sé lo que estás pensando, que debería de conocer los comandos e instrucciones ¿qué clase de programador no la sabe? Sí, entiendo esa premisa, pero seamos sinceros, a la hora de programar "profesionalmente" ninguna empresa te va a obligar a programar sin extensiones o autocompletados en tu editor de texto. Y sí, esta muy bien para practicar sintaxis pero si buscas practicar lógica o mejorar la calidad de tu código.

![Error Sixtansis](/blogImages\codewars2.webp)

Y ahora pasemos al debug. Aquí sí es donde deberían de poner un poco de más empeño, ya que es como lo que te arrojaría el interprete y nada más. Por ejemplo, aquí estoy tratando de asignar un nuevo valor a una constante, algo super básico, que se te puede pasar por lo que ya dije que el editor no te dice nada. Y si bien te indica qué falló y en qué línea de código anda el error, te llena de ese verborreo que si bien, como programadores debemos estar acostumbrados, creo que otros sitios los manejan mejor, filtrando o agregando información de porqué tu código falla. Ojo, estoy hablando de errores de sintaxis, los errores lógicos son otro cantar.

Y sí, al revisar tu lógica es donde todo se pone mal, para debuguear no puedes hacer uso de los clásicos console.log (en JavaScript, claro), sino que tienes que hacer uso de la función de prueba para ver si el valor que regresa tu función es correcto o esperado por ti. Lo cual puede parecer lo ideal, después de todo las pruebas unitarias son el pan de cada día en QA, pero pero pero, ¿por qué tengo que hacer un test para saber si una función me regresa el valor que espero o un "undefined"? Sí, lo que fácilmente se puede saber con un console.log ahora requiere más código, que si bien es la idea de estos sitios, no siempre tenemos el humor de andar tirando líneas.

Fuera de lo anterior, es un buen sitio en el cual puedes practicar tus habilidades e ir aprendido poco a poco a tu ritmo. Puedes volver a revisar tus soluciones y hacer refactoring, el cual siento es más amigable que la mayoría de los otros sitios. Lo cual lo hace ideal para ir mejorando tu código con forme vas aprendiendo las "especificidades" del lenguaje que estés usando.

No lo mencioné pero puedes escoger distintos lenguajes, 58 para ser exactos y puedes realizar algo llamado "Kumite", sí como la peli de Bloodsport o "Contacto Sangriento" por estos lares. En estos Kumités refactorizas el código de otro codewarrior y tiene que responder tu refactorización y así se siguen hasta encontrar el código "optimo". Obviamente al participar te da honor, pero mi intención no es andar de metiche con el código de otros sino más bien practicar, pero sí creo que es una buena opción ya que en la vida real muchas veces te la pasas viendo código de otros y tratando de entenderlo.

Ok, esto de cambiar el código de otros no es una característica única del sitio, sí debo decir que la temática del kumité lo hace mejor (como si pelearas "amistosamente"), al grado que puedes hasta simular "forks" de github de códigos para hacer refactors.

Tus soluciones son mostradas a la comunidad, la cual se somete al escrutinio público, lo cual puede darte honor y reconocimiento extra. Lo cual nos lleva a lo social, ya que de cierta forma el sitio está medio orientado a ser como una especie de "red social" de programadores. Que sí bien no es X/Twitter, sí puedes revisar código de otros y discutirlo si así quieres o abrir una discusión sobre tus propias soluciones/código. Lo cual puede ser interesante para algunos.

Como muchos, tiene su versión de paga que si te gustó el sitio, puedes apoyar y recibir ayudas y mentorías especializadas.

**Pros:**

- La temática te engancha y te motiva a hacer los retos.
- La interfaz es más sencilla que otros sitios, no minimalista, pero limpia.
- El sistema de recompensas es diferente, con lo cual suma puntos.
- Los retos son concisos y no se dividen en pequeñas partes, lo que te hace concentrarte en un único fin.
- El nivel inicial puede parecer básico, pero conforme vas avanzando va aumentando.
- No hay presiones sobre tiempos o "calidad" de tu código. Lo cual se agradece cuando eres novato.
- Lo veo más como una proto red social de "revisión de código".

**Contras:**

- El editor es muy simple, tirando a malo. Muy pocas ayudas.
- El debugging es su punto flaco, en especial el relacionado con la lógica.
- Está en inglés.
- El honor o las recompensas son solo basadas en resoluciones, así que no importa si tu solución es la mejor o más óptima, aunque si quieres reconocimiento por tu bello código tendrías que "promocionarlo" con discusiones o kumités.

**⭐️⭐️⭐️✨ (3.5 estrellas) de 5**

Buena idea, buen ambiente pero ya en la práctica el codeo no es la mejor experiencia, hay otros sitios con mejor editor. Si no te importan las ayudas en el editor, este es tu sitio.
