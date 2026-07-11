# e-plantShopping - Paradise Nursery

Repositorio: e-plantShopping

## Descripcion

Paradise Nursery es una aplicacion web de comercio electronico especializada en la venta de plantas ornamentales, aromaticas y medicinales. Desarrollada con React y Redux Toolkit, ofrece una experiencia de compra fluida donde los usuarios pueden explorar diferentes categorias de plantas, agregar productos a un carrito de compras, modificar cantidades y visualizar el total en tiempo real.

Este proyecto fue creado como parte de un ejercicio practico para demostrar la integracion de Redux en una aplicacion React, implementando un carrito de compras completamente funcional con estado global.

## Caracteristicas principales

- Catalogo de plantas organizado por categorias (purificadoras de aire, aromaticas, repelentes de insectos, medicinales, de bajo mantenimiento).
- Agregar al carrito con desactivacion del boton y cambio de texto a "Added to Cart".
- Carrito de compras con:
  - Incremento/decremento de cantidad por producto.
  - Eliminacion de articulos.
  - Calculo automatico de subtotal por articulo y total general.
- Contador de items visible en el icono del carrito en la barra de navegacion.
- Persistencia del estado mediante Redux, asegurando que todos los componentes se sincronicen en tiempo real.
- Diseño responsivo para dispositivos moviles y de escritorio.

## Tecnologias utilizadas

- React 18 – Biblioteca para construir interfaces de usuario.
- Redux Toolkit – Manejo del estado global.
- React-Redux – Conexion entre React y Redux.
- CSS3 – Estilizado y diseño responsive.
- Vite – Herramienta de construccion y servidor de desarrollo.

## Instalacion y ejecucion

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona el repositorio
   git clone https://github.com/tu-usuario/e-plantShopping.git
   cd e-plantShopping

2. Instala las dependencias
   npm install

3. Inicia el servidor de desarrollo
   npm run dev

4. Abre tu navegador en http://localhost:5173 (o el puerto que indique Vite).

## Estructura del proyecto

e-plantShopping/
├── src/
│   ├── CartItem.jsx          # Componente del carrito de compras
│   ├── CartSlice.jsx         # Slice de Redux para el carrito
│   ├── ProductList.jsx       # Lista de productos con integracion Redux
│   ├── store.js              # Configuracion del store de Redux
│   ├── main.jsx              # Punto de entrada con Provider
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globales
│   └── ProductList.css       # Estilos especificos de ProductList
├── public/                   # Archivos estaticos
├── package.json              # Dependencias y scripts
├── README.md                 # Este archivo
└── ...

## Flujo de estado con Redux

1. Acciones definidas en CartSlice:
   - addItem(product) – Agrega un producto o incrementa su cantidad.
   - removeItem(productName) – Elimina completamente un producto.
   - updateQuantity({ name, quantity }) – Actualiza la cantidad de un producto.

2. Estado global:
   {
     cart: {
       items: [
         { name: "Snake Plant", image: "...", cost: "$15", quantity: 2 },
         ...
       ]
     }
   }

3. Selectores – El componente ProductList usa useSelector para obtener cart.items y calcular el total de articulos (totalItems). CartItem tambien accede al mismo estado para renderizar los productos.

## Funcionalidades implementadas

### ProductList.jsx:
- Visualizacion de plantas por categorias.
- Boton "Add to Cart" con estado de "Added to Cart" y desactivacion.
- Contador de items en el icono del carrito.
- Navegacion entre Plants y Cart.

### CartItem.jsx:
- Visualizacion de items del carrito.
- Incrementar/decrementar cantidad.
- Eliminar items del carrito.
- Calculo de subtotal por item.
- Calculo del total del carrito.
- Boton "Continue Shopping" para volver a la lista.

### Redux (store.js, CartSlice.jsx):
- Estado global del carrito.
- Acciones: addItem, removeItem, updateQuantity.
- Provider configurado en main.jsx.

## Pruebas de funcionalidad

1. Agregar items al carrito:
   - Haz clic en "Add to Cart" en cualquier planta.
   - El boton cambia a "Added to Cart" y se desactiva.
   - El contador del carrito se incrementa.

2. Ver el carrito:
   - Haz clic en el icono del carrito.
   - Se muestran todos los items agregados.
   - Cada item muestra su nombre, precio, cantidad y subtotal.

3. Modificar cantidades:
   - Usa los botones "+" y "-" para cambiar cantidades.
   - El subtotal y el total se actualizan automaticamente.

4. Eliminar items:
   - Haz clic en "Delete" para eliminar un item.
   - El item se elimina del carrito.
   - El contador y los totales se actualizan.

5. Continuar comprando:
   - Haz clic en "Continue Shopping" para volver a la lista de plantas.

## Contribucion

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -m "Anadir nueva funcionalidad").
4. Sube tus cambios (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.

## Licencia

Copyright 2024 e-plantShopping

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme a traves de tu-email@example.com o abrir un issue en el repositorio.

---

Disfruta comprando plantas en Paradise Nursery!