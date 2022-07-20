# Instalación 

## Requisitos Previos

* [Node.js 10+](https://nodejs.org/en/)
* [Yarn Classic](https://classic.yarnpkg.com/en/)(Optional)

## Creación de un proyectos
 
Para usarlo, abra su terminal en el directorio deseado y ejecute el siguiente comando:


``` sh
    yarn create vuepress-site [Nombre_Proyecto]
```


``` sh
    npx create vuepress-site [Nombre_Proyecto]
```

El comando solicitará detalles de forma interactiva para configurar los metadatos de su sitio VuePress, como:
 
Nombre del proyecto
Descripción
Correo electrónico del mantenedor
Nombre del mantenedor
URL del repositorio
Una vez hecho esto, se creará un sitio de documentación con scaffolding en el docs directorio (o nombre de directorio personalizado, si se pasa) bajo el directorio actual.
 
Para verlo en acción, navegue al directorio recién creado, instale las dependencias e inicie el servidor local:



``` sh
    cd docs
    yarn install
    yarn dev
```


``` sh
    cd docs
    npm install
    npm run dev
```


::: tip Recomendación 
Para más información de la instalación puede revisar la documentación de [Vuepress](https://vuepress.vuejs.org/guide/getting-started.html#manual-installation).
:::

