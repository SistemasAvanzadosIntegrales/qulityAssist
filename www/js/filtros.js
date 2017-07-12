function filtrar()
{
    if(estadoSeleccionado == null || estadoSeleccionado == '')
        navigator.notification.alert("Debe de seleccionar un estado a filtrar", function(){}, 'Quality Assist', 'Ok');
    else
        refrescarListaPromociones(categoriaSeleccionada, 0);
}