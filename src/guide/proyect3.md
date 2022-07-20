# Markdown


::: tip Recomendación 
Para más información de la MarkDown puede revisar la documentación de [Vuepress markdown](https://vuepress.vuejs.org/guide/markdown.html#github-style-tables)

O en la docuemntacion de [markdown](https://markdown.es/)
:::

Los enlaces internos se convierten en ` <router-link>`  navegación SPA. Además, cada README.mdo index.mdcontenido en cada subdirectorio se convertirá automáticamente a index.html, con la URL correspondiente /.

Por ejemplo, dada la siguiente estructura de directorios:


``` md
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md

``` 



## Contenedores personalizados


``` md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
``` 

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

## Resaltado de sintaxis en bloques de código

VuePress usa prisma (abre en ventana nueva)para resaltar la sintaxis del idioma en los bloques de código de Markdown, usando texto en color. Prism admite una amplia variedad de lenguajes de programación. Todo lo que necesita hacer es agregar un alias de idioma válido a los acentos graves iniciales del bloque de código:

``` md
``` js
export default {
name: 'MyComponent',
// ...
}```
```

``` js
export default {
name: 'MyComponent',
// ...
}
```

Una [lista de idiomas válidos](https://prismjs.com/#languages-list) está disponible en el sitio de Prism

## Resaltado de líneas en bloques de código

Aporte
``` md
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}

```

```js{4}

export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Línea de números

Puede habilitar los números de línea para cada bloque de código a través de la configuración:

```js

module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

## Tablas estilo GitHub

Aporte

```md

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

```
Producción

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji 🎉

Aporte

```md
:tada: :100:
```
Producción

:tada: :100:


## Imagenes


Aporte

```md
<img :src="$withBase('/img/03.png')" class="center">
```
Producción

<img :src="$withBase('/img/03.png')" class="center">

Directorio

```md
.
├─ docs
│    └─src   
│       └─ .vuepress
│         └─ public
|            └─img
|               └─03.png    
└─ package.json
```