---
title: "OCR de PDFs en Python"
description: "Cómo hacer OCR en Python con un archivo PDF que proviene de una imagen"
pubDate: "2025-03-20T16:17:29.244Z"
heroImage: "/blogImages/ocr-pdf.webp"
categories: ['Python', 'OCR', 'Programación']
tags: ['Python', 'OCR', 'Programación']
author: 'Oscar Fuentes'
---

# OCR de PDFs en Python

## Fácil y sencillo.

Esta es la primera parte de un proyecto más grande, que poco a poco iré poniendo en el blog, por lo tanto, tengan algo de paciencia.  

Además, voy a tratar de *partir* mi proyecto en mini tutos individuales que por sí solos puedan resolver alguna problemática pequeña. **Este es el primero.**

### Introducción

Si bien, hay *TikToks* que te explican cómo hacerlo con muy pocas líneas, estas soluciones sirven para PDFs que provienen de procesadores de texto. Sin embargo, algunas veces vamos a encontrarnos con archivos que provienen de escaneos de imagen. Por lo tanto, hay que realizar un tratamiento OCR para poder interpretar la imagen y convertirla en texto que podamos manipular.

En este tutorial asumiré muchas cosas, entre ellas que tienes **Python** y **pip** instalados; usas **Windows** y **VSCode**. Ok, empecemos con el código.

### Crear un entorno virtual

Lo primero que me gusta hacer es crear un *entorno virtual* para evitar instalar librerías globales, así que tecleamos:

```bash
python -m venv env
```

Aquí creamos el típico entorno de nombre `env`, el cual es una especie de convención. Ahora hay que activarlo con el siguiente comando:

```bash
env\Scripts\activate
```

Si todo sale bien, **VSCode** te indicará que se está usando el nuevo ambiente. ¿Se puede desactivar? Claro, ejecuta el comando:

```bash
deactivate
```

y listo. En Windows hay un archivo `.bat` en la misma carpeta `Scripts` llamado `deactivate.bat`.

### Instalar Tesseract OCR

Necesitamos instalar **Tesseract OCR**, el cual es un motor de OCR gratuito. Puedes descargarlo desde:

🔗 [Tesseract OCR](https://github.com/UB-Mannheim/tesseract/wiki)

Lo instalas desde el enlace y te recomiendo agregar en los idiomas el español. Una vez que lo tengas instalado, es necesario que recuerdes en dónde lo instalaste o que lo agregues al **PATH** de tu sistema en caso de Windows.

### Instalación de dependencias en Python

```bash
pip install pytesseract pdf2image opencv-python Pillow
```

#### Explicación de las librerías:
- **PDF2Image**: Nos ayuda a convertir las páginas de PDF en imágenes, ya que Tesseract solo entiende imágenes, no páginas PDF.
- **OpenCV**: Si bien se puede omitir, nos va a ayudar a que el motor OCR procese mejor las imágenes.
- **PyTesseract**: Librería que permite la interacción entre Python y Tesseract. *Ojo*: **No es el motor OCR**, ese tienes que instalarlo como ya te indiqué.

### Código en Python

Las importaciones iniciales en el archivo principal de Python quedarían:

```python
import cv2 as cv
import pytesseract as ocr
from pdf2image import convert_from_path
```

Después configuramos el Tesseract. Este paso es opcional si instalaste en el **PATH** la herramienta, pero a mí me gusta ser redundante, así que lo pongo sí o sí.

```python
ocr.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
```

Ahora cargamos el PDF para convertirlo en imágenes:

```python
# Ruta del archivo PDF.
pdf = "ejemplo.pdf"

# Convertir el PDF a imágenes.
paginas = convert_from_path(pdf)
```

### Mejora de imagen para OCR

Vamos a crear una función que mejore la imagen para hacerla más fácil de procesar por el motor OCR.

1. **Convertimos la imagen a escala de grises**, eliminando información de color innecesaria y reduciendo el tamaño de la imagen para un procesamiento más sencillo.
2. **Aplicamos "umbral adaptativo"**: Esto mejora la legibilidad de los caracteres suponiendo que la imagen tenga iluminación irregular. El umbral se aplica localmente en diferentes zonas para mejorar el contraste entre el negro de la letra y el blanco de la hoja.
3. **Regresamos la imagen binarizada (blanco y negro)**, eliminando el ruido de fondo como rayones, firmas y otras líneas no pertenecientes al texto.

```python
def mejorar_imagen(imagen):
    # Convertir a escala de grises
    gris = cv.cvtColor(imagen, cv.COLOR_BGR2GRAY)
    # Aplicar umbral adaptativo
    umbral = cv.adaptiveThreshold(gris, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 11, 2)
    return umbral
```

### Procesar el PDF con OCR

Con esta función optimizadora, recorremos todas las hojas del PDF, convirtiendo cada hoja a **JPEG**, optimizándola, procesándola con el motor **OCR** y agregando el texto a una variable.

```python
texto_completo = ""
for i, pagina in enumerate(paginas):
    pagina.save(f"pagina_{i}.jpg", "JPEG")
    imagen = cv.imread(f"pagina_{i}.jpg")
    imagen = mejorar_imagen(imagen)
    texto = ocr.image_to_string(imagen)
    texto_completo += texto
```

### Guardar el texto extraído

Por último, grabamos la información en un archivo de texto:

```python
with open("texto_extraido.txt", "w", encoding="utf-8") as f:
    f.write(texto_completo)
```

¡Listo! Ahora puedes extraer texto de cualquier PDF escaneado sin necesidad de teclearlo manualmente. 🚀

---

Obviamente, el **OCR tiene sus limitaciones**, pero en muchos casos es suficiente para evitar escribir texto manualmente. Además, puedes modificarlo para adaptarlo a tus necesidades.

📌 Puedes encontrar el código en mi **GitHub**:

🔗 [Repositorio en GitHub](https://github.com/nosoyeseoscar/lectura_ocr_pdf)

En el repositorio encontrarás un PDF para probar el algoritmo y un archivo `requirements.txt` con todas las librerías necesarias.

**¡Saludos y happy coding!** 😊