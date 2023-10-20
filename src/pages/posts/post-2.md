---
layout: ../../layouts/MarkdownPostLayout.astro
title: Complementos de Tailwindcss
author: 'Birdie'
description: "Optimizando el Uso de Tailwind CSS en Proyectos Next.js"
pubDate: 2023-10-08
tags: ["Prettier", "Tailwindcss", "Herramientas", "Plugins"]
---

<img src='/public/post2.png' class='img' alt="Ejemplo de Imagen" width="500" height="250">

El día de hoy les presentamos una breve demostración de como funcionan dos herramientas muy útiles al momento de utilizar Tailwindcss para nuestros proyectos.

Estas son prettier-plugin-tailwind y tailwindcss-animated, las cuales nos permiten optimizar y animar nuestros estilos de manera efectiva.



A continuación iremos haciendo el paso a paso de las instalaciones.


Este es un proyecto creado con Next js 13 para mostrar la funcionalidad de prettier-plugin-tailwindcss y tailwindcss-animated


## Inicializar el proyecto en Nextjs

```
npx create-next-app@latest
```


## Hacemos la instalación de prettier

```
npm install -D prettier
```

Vamos a crear un archivo .JSON

``.prettierrc.json``

Para corroborar que prettier esta funcionando escribimos

```
npx prettier . --write
```

y luego

```
npx prettier . --checked
```

## Para añadir el plugin de tailwindcss 

```
npm install -D prettier prettier-plugin-tailwindcss
```

Creamos un archivo llamado

``prettier.config.js``

y dentro del mismo escribimos la siguiente línea.

``module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}``

Esto nos reorganizará todas las clases de tailwindcss que le otorgamos a nuestras etiquetas de la siguiente manera

Primero se ordenan las clases en la capa de base
- `@tailwind base;`

Luego se ordenan las clases en la capa de componentes

- `@tailwind components;`

Y por último se ordenan las clases en la capa de utilidades

- `@tailwind utilities;`

Este orden podemos encontrarlo en el archivo de 

`` globals.css
``

Aquí un breve ejemplo

Antes

<img src='/public/antes.png' class='img' alt="Ejemplo de Imagen" width="500" height="250">

Después

<img src='/public/despues.png' class='img' alt="Ejemplo de Imagen" width="500" height="250">

## Instalación de tailwindcss-animated

En este caso, al haber inicializado el proyecto con Next js, ya tenemos instalado tailwindcss de manera que ya podemos instalar el plugin directamente.

```
npm install -D tailwindcss-animated
```

 Si se utilizara otro framework para el proyecto y tendría que instalarse tailwindcss manualmente, los pasos serían los siguientes

```
npm install -D tailwindcss
```
```
npx tailwindcss init
```
```
npm install -D tailwindcss-animated
```

Por último en el archivo
` tailwind.config.js
`

incluimos esta línea

``
module.exports = {
  plugins: [
    require('tailwindcss-animated')
  ],
}
``
Aquí un breve ejemplo

<video
src="/videoPost2.mp4"
controls
autoplay
loop
height="300"
width="300">

</video>

Para ver la funcionalidad y todas las animaciones disponibles, puede ingresar al siguiente sitio.


https://www.tailwindcss-animated.com/

