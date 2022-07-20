(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{277:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"primeros-pasos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primeros-pasos"}},[t._v("#")]),t._v(" Primeros pasos")]),t._v(" "),a("p",[t._v("Sin ninguna configuración, la página es bastante mínima y el usuario no tiene forma de navegar por el sitio. Para personalizar su sitio, primero creemos un .vuepressdirectorio dentro de su directorio de documentos. Aquí es donde se colocarán todos los archivos específicos de VuePress. La estructura de su proyecto es probablemente así:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n\n")])])]),a("p",[t._v("El archivo esencial para configurar un sitio VuePress es "),a("code",[t._v(".vuepress/config.js")]),t._v(", que debería exportar un objeto JavaScript:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress para Bantotal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Documentacion de Vuepress para Bantotal'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"inicio-de-presentacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inicio-de-presentacion"}},[t._v("#")]),t._v(" Inicio de presentación")]),t._v(" "),a("p",[t._v("Un tema de VuePress posee todos los detalles de diseño e interactividad de su sitio. VuePress viene con un tema predeterminado (lo está viendo ahora mismo), diseñado para documentación técnica. Expone muchas opciones que le permiten personalizar la barra de navegación, la barra lateral y la página de inicio, etc. Para obtener más información, consulte la página "),a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuración de tema predeterminada"),a("OutboundLink")],1),t._v(" .")]),t._v(" "),a("p",[t._v("Para desarrollar un tema personalizado, consulte "),a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/writing-a-theme.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Escribir un tema"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Vamos a configurar la pagina principal puesto que esta se encuentra de esta forma pre-determinada")]),t._v(" "),a("img",{staticClass:"center",attrs:{src:t.$withBase("/img/01.png")}}),t._v(" "),a("p",[t._v("ingresamos a la siguiente direccion del proyecto "),a("code",[t._v("index.md")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├─ docs\n│    └─src   \n│       └─ .vuepress\n│         └─ index.md\n└─ package.json\n\n")])])]),a("p",[t._v("En este archibo encontraremos la configuracion de la paguina principal")]),t._v(" "),a("img",{staticClass:"center",attrs:{src:t.$withBase("/img/02.png")}}),t._v(" "),a("p",[t._v("la cual modificaremos al un entorno personalizado para "),a("code",[t._v("Bantotal")])]),t._v(" "),a("img",{staticClass:"center",attrs:{src:t.$withBase("/img/03.png")}}),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("home: true\nheroImage: https://images.squarespace-cdn.com/content/v1/5349c113e4b01879301fb39a/1445376126348-0DQK15H60MW4XR110AU7/image-asset.png?format=300w\ntagline: \nactionText: Comenzar →\nactionLink: /guide/\n\nfeatures:\n\nfooter: Made by Bantotal 🏦")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$withBase("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/img/100.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),a("p",[t._v("Realizando esta configuracion tendriamos la pagina Principal ya Personalizada")]),t._v(" "),a("img",{staticClass:"center",attrs:{src:t.$withBase("/img/04.png")}}),t._v(" "),a("h2",{attrs:{id:"menu-de-superior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#menu-de-superior"}},[t._v("#")]),t._v(" Menú de superior")]),t._v(" "),a("p",[t._v("Ahora nos enfocaremos en la parte superior donde encotramos un menu o link de acceso rapido por defecto lo encontraremos asi")]),t._v(" "),a("img",{staticClass:"center",attrs:{src:t.$withBase("/img/05.png")}}),t._v(" "),a("p",[t._v("El archivo esencial para configurar los menus  "),a("code",[t._v(".vuepress/config.js")]),t._v(", en la Funcion ThemeConfig.nav:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nav")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Guide'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/guide/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/config/'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VuePress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://v1.vuepress.vuejs.org'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v('Text: "El texto o nombre de la direccion".')]),t._v(" "),a("p",[t._v('Link: "El nombre de la carpeta"')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(".\n├─ docs\n│    └─src   \n│       └─ Nombre Carpeta\n└─ package.json\n")])])])]),t._v(" "),a("h2",{attrs:{id:"menu-de-contenidos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#menu-de-contenidos"}},[t._v("#")]),t._v(" Menú de contenidos")]),t._v(" "),a("p",[t._v("Para el menu de contenidos que se encuentra al lado izquierdo")]),t._v(" "),a("img",{staticClass:"center",attrs:{src:t.$withBase("/img/06.png")}}),t._v(" "),a("p",[t._v("De la misma forma el archivo esencial para configurar los menus de contenidos  "),a("code",[t._v(".vuepress/config.js")]),t._v(", en la Funcion ThemeConfig.sidebar")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sidebar")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/guide/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Guide'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("collapsable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'proyect1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'proyect2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'proyect3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'proyect4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'proyect5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("En el array encontramos el nombre de la carpeta dentro de '/ /'")]),t._v(" "),a("p",[t._v('children: "el array de los archivos"')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(".\n├─ docs\n│    └─src   \n│       └─ Nombre Carpeta\n|           └─Array de archivos\n└─ package.json\n")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);