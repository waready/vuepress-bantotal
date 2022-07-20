# Primeros pasos

Sin ninguna configuración, la página es bastante mínima y el usuario no tiene forma de navegar por el sitio. Para personalizar su sitio, primero creemos un .vuepressdirectorio dentro de su directorio de documentos. Aquí es donde se colocarán todos los archivos específicos de VuePress. La estructura de su proyecto es probablemente así:

```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json

``` 
El archivo esencial para configurar un sitio VuePress es `.vuepress/config.js`, que debería exportar un objeto JavaScript:

``` js

    module.exports = {
    title: 'vuepress para Bantotal',
    description: 'Documentacion de Vuepress para Bantotal'
    }

```

## Inicio de presentación
Un tema de VuePress posee todos los detalles de diseño e interactividad de su sitio. VuePress viene con un tema predeterminado (lo está viendo ahora mismo), diseñado para documentación técnica. Expone muchas opciones que le permiten personalizar la barra de navegación, la barra lateral y la página de inicio, etc. Para obtener más información, consulte la página [Configuración de tema predeterminada](https://vuepress.vuejs.org/theme/default-theme-config.html) .

Para desarrollar un tema personalizado, consulte [Escribir un tema](https://vuepress.vuejs.org/theme/writing-a-theme.html).

Vamos a configurar la pagina principal puesto que esta se encuentra de esta forma pre-determinada

<img :src="$withBase('/img/01.png')" class="center">

ingresamos a la siguiente direccion del proyecto `index.md`

```
.
├─ docs
│    └─src   
│       └─ .vuepress
│         └─ index.md
└─ package.json

```
En este archibo encontraremos la configuracion de la paguina principal 

<img :src="$withBase('/img/02.png')" class="center">

la cual modificaremos al un entorno personalizado para `Bantotal`

<img :src="$withBase('/img/03.png')" class="center">

``` md
---
home: true
heroImage: https://images.squarespace-cdn.com/content/v1/5349c113e4b01879301fb39a/1445376126348-0DQK15H60MW4XR110AU7/image-asset.png?format=300w
tagline: 
actionText: Comenzar →
actionLink: /guide/

features:

footer: Made by Bantotal 🏦
---
<img :src="$withBase('/img/100.png')" class="center">

```

Realizando esta configuracion tendriamos la pagina Principal ya Personalizada

<img :src="$withBase('/img/04.png')" class="center">

## Menú de superior

Ahora nos enfocaremos en la parte superior donde encotramos un menu o link de acceso rapido por defecto lo encontraremos asi 


<img :src="$withBase('/img/05.png')" class="center">

El archivo esencial para configurar los menus  `.vuepress/config.js`, en la Funcion ThemeConfig.nav:

``` js
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
  },
```
::: tip TIP 
Text: "El texto o nombre de la direccion".

Link: "El nombre de la carpeta"

    .
    ├─ docs
    │    └─src   
    │       └─ Nombre Carpeta
    └─ package.json

:::

## Menú de contenidos 

Para el menu de contenidos que se encuentra al lado izquierdo

<img :src="$withBase('/img/06.png')" class="center">

De la misma forma el archivo esencial para configurar los menus de contenidos  `.vuepress/config.js`, en la Funcion ThemeConfig.sidebar


``` js
  themeConfig: {
    sidebar: {
        '/guide/': [
            {
            title: 'Guide',
            collapsable: false,
            children: [
                '',
                'proyect1',
                'proyect2',
                'proyect3',
                'proyect4',
                'proyect5',
            ]
            }
        ],
        }
  },
```

::: tip TIP 
En el array encontramos el nombre de la carpeta dentro de '/ /'

children: "el array de los archivos"

    .
    ├─ docs
    │    └─src   
    │       └─ Nombre Carpeta
    |           └─Array de archivos
    └─ package.json

:::
