# Vue

::: tip Recomendación 
Para más información sobre vue en vuepress puede revisar la documentación de [Vuepress vue](https://vuepress.vuejs.org/guide/using-vue.html).
:::


Si está utilizando o haciendo una demostración de componentes que no son compatibles con SSR (por ejemplo, contienen directivas personalizadas), puede incluirlos dentro del `<ClientOnly>` componente integrado:

``` md
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```
Tenga en cuenta que esto no corrige los componentes o las bibliotecas que acceden a las API del navegador en la importación . Para usar código que asume un entorno de navegador en la importación, debe importarlos dinámicamente en enlaces de ciclo de vida adecuados:

``` vue
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    })
  }
}
</script>
```

Si su módulo export defaultes un componente Vue, puede registrarlo dinámicamente:

``` vue
<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
```

Ver también:

* [Vue.js > Componentes dinámicos](https://vuejs.org/guide/essentials/component-basics.html)

# Plantillas
## Interpolación

Cada archivo de Markdown se compila primero en HTML y luego se pasa como un componente de Vue a vue-loader. Esto significa que puede usar la interpolación de estilo Vue en el texto:

Aporte

``` md
{{ 1 + 1 }}
```
Producción

``` 
2
```
## Directivas
Las directivas también funcionan:

Aporte

``` md
<span v-for="i in 3">{{ i }} </span>
```
Producción

``` 
1 2 3 
```
# Uso de componentes

Cualquier *.vuearchivo encontrado en `.vuepress/components` se registra automáticamente como global (abre en ventana nueva), asíncrono (abre en ventana nueva)componentes Por ejemplo:



``` 
.
└─ .vuepress
   └─ components
      ├─ demo-component.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```
Dentro de cualquier archivo Markdown, puede usar directamente los componentes (los nombres se deducen de los nombres de archivo):


``` md
<demo-component/>
<OtherComponent/>
<Foo-Bar/>

```
<demo-component/>
<OtherComponent/>
<Foo-Bar/>

:::warning IMPORTANTE

Asegúrese de que el nombre de un componente personalizado contenga un guión o esté en PascalCase. De lo contrario, se tratará como un elemento en línea y se envolverá dentro de una `<p>` etiqueta, lo que provocará una falta de coincidencia de hidratación porque `<p>` no permite que se coloquen elementos de bloque dentro de él.
:::