var autocompleteDistritos = new Autocomplete();

autocompleteDistritos.SetUrl(BASE_URL + "maestros/distrito/buscar/");
autocompleteDistritos.SetUlSugerencia("autoDistrito");
autocompleteDistritos.SetDestinoIdSugerencia("idDistrito");
autocompleteDistritos.SetNombreObjeto("autocompleteDistritos");
autocompleteDistritos.SetDestinoValorSugerencia("txtDistrito");
autocompleteDistritos.SetIndices("id", "nombre");
autocompleteDistritos.SetFuncionAdicional("");

$( "#btnGuardarEmpresa" ).click(function() {
    var proveedor = new Object();
    proveedor.id = $("#idProveedor").html();
    proveedor.razon_social= $("#txtRazonSocial").val();
    proveedor.ruc= $("#txtRuc").val();
    proveedor.direccion= $("#txtDireccion").val();
    proveedor.distrito_id= $("#idDistrito").html();

    var ajax_empresa = new AjaxRuby();
    ajax_empresa.Constructor ("POST", BASE_URL + "administracion/proveedor/guardar", JSON.stringify(proveedor), false);
    var rpta = JSON.parse(ajax_empresa.GetRespuesta());

    if (rpta['tipo_mensaje'] == 'success'){
       $("#txtMensajeRptaProveedor").html(rpta['mensaje'][0]);
       $("#txtMensajeRptaProveedor").removeClass("color-rojo");
       $("#txtMensajeRptaProveedor").removeClass("oculto");
       $("#txtMensajeRptaProveedor").addClass("color-success"); 
       if (typeof rpta['mensaje'][1] !== "undefined"){
          $("#idProveedor").html(rpta['mensaje'][1]);
       } 
    }else{
       $("#txtMensajeRptaProveedor").html(rpta['mensaje'][0]);
       $("#txtMensajeRptaProveedor").removeClass("color-success");
       $("#txtMensajeRptaProveedor").removeClass("oculto");
       $("#txtMensajeRptaProveedor").addClass("color-rojo");
    }
});
