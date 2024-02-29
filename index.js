function actualizarInventario() {
    const inventarioActual= ["Laptop","Telefono","Tableta"]
    const nuevasAdiciones= ["Laptop","Monitor"]
    const allproducts= inventarioActual.concat(nuevasAdiciones)
    return allproducts
}
console.log(actualizarInventario());

function eliminarDuplicados() {
    const array= [1,2,3,2,4,5,4,6,7]
    const arraynew=array.filter((n, index) => array.indexOf(n) === index);
    return arraynew;
}
console.log(eliminarDuplicados());



