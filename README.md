# LaboLab-ecommerce | Venta de Insumos para laboratorio


Link al sitio web: 

## Detalle
El presente Ecommerce se elaboro en React y se conecto a una DB en Firebase/Firestore. 
LaboLab-ecommerce es una tienda de venta de insumos para Laboratorio Clinico. En la página principal se puede ver un listado de los mismos, entrar a su detalle, filtrar por categoría y agregar al carrito (con control de no sobrepasar el stock). 

![foto1](https://github.com/Hjvdt/ProyectoFinal-VanderTuin/assets/21012687/8cc5a185-7f95-4c3b-91ec-d0d4af682498)

![foto2](https://github.com/Hjvdt/ProyectoFinal-VanderTuin/assets/21012687/b5ca2e54-1922-4328-a872-23cbeed955d3)

![foto3](https://github.com/Hjvdt/ProyectoFinal-VanderTuin/assets/21012687/1855d3d8-8262-4092-9f25-a7685119c4d8)

![foto4](https://github.com/Hjvdt/ProyectoFinal-VanderTuin/assets/21012687/320ca8dc-59f7-4edd-a047-5831b2fdfeb6)

En el carrito se puede modificar la cantidad de productos, eliminarlos y finalizar la compra (Al finalizar se despliega un modal con un formulario para completar los datos del usuario), se genera una orden con un ID único. Se controla en Firebase que se haya generado dicha orden.

![foto5](https://github.com/Hjvdt/ProyectoFinal-VanderTuin/assets/21012687/0315ec4f-d9e5-4d8d-89dc-55618b135cd3)

## Demostración del funcionamiento:

### Se muestra la pantalla principal con items y se filtra por categoría, con demostración de web responsive.  A continuación se puede ver el acceso al detalle del producto, allí se valida la selección de stock y se agrega el producto al carrito, posteriormente se comprueba la lógica para actualizar la cantidad, dado que el producto se cargo previamente, y se agrega un condicional para nunca superar el stock. Se prueba la posibilidad de eliminar productos; para luego, finalizar la compra, que cuenta con el despliege modal con un formulario que al enviarse muestra al usuario su número de orden; esto último, se controla en el Firebase a fin de comprobar que se haya generado la orden:

https://github.com/Hjvdt/ProyectoFinal-VanderTuin/blob/main/ProyectoFinalReact-VdT.mp4

---
## Tecnologías utilizadas
- Material UI
- React Bootstrap
- React Router Dom
- Sweetalert2
- Firebase/Firestore para la DB
