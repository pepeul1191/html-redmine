var autocompleteDistritos = new Autocomplete();

autocompleteDistritos.SetUrl(BASE_URL + "maestros/distrito/buscar/");
autocompleteDistritos.SetUlSugerencia("autoDistrito");
autocompleteDistritos.SetDestinoIdSugerencia("idDistrito");
autocompleteDistritos.SetNombreObjeto("autocompleteDistritos");
autocompleteDistritos.SetDestinoValorSugerencia("txtDistrito");
autocompleteDistritos.SetIndices("id", "nombre");
autocompleteDistritos.SetFuncionAdicional("");

$( "#btnGuardarEmpresa" ).click(function(event) {
    var proveedor = new Object();
    proveedor.id = $("#idProveedor").html();
    proveedor.razon_social= $("#txtRazonSocial").val();
    proveedor.ruc= $("#txtRuc").val();
    proveedor.direccion= $("#txtDireccion").val();
    proveedor.distrito_id= $("#idDistrito").html();
    proveedor.imagen_dni_id= $("#imagen_dni_id").html();
    proveedor.imagen_ruc_id= $("#imagen_ruc_id").html();

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

    event.preventDefault();
});

$("#upload_file_dni").on("click", function(event){
    $("#view_file_dni").addClass("oculto");
    $("#input_file_dni").upload(
        BASE_URL + "administracion/proveedor/subir_dni",
        {
            nombre : "Imagen 1 nombre",
            descripcion : "Imagen 1 descripcion"
        }, 
        function(mensaje){
            console.log(mensaje);
            if(mensaje['tipo_mensaje'] == 'success'){
               $("#imagen_dni_id").html(mensaje['mensaje'][1]);  
               $("#txtMensajeRptaImagenes").html(mensaje['mensaje'][0]);
              $("#txtMensajeRptaImagenes").removeClass("color-rojo");
              $("#txtMensajeRptaImagenes").addClass("color-success");
              $("#view_file_dni").removeClass("oculto");
              $("#view_file_dni").attr("href", mensaje['mensaje'][2]);
            }else{ 
              $("#txtMensajeRptaImagenes").removeClass("color-success");
               $("#txtMensajeRptaImagenes").addClass("color-rojo");
              $("#txtMensajeRptaImagenes").html(mensaje['mensaje'][0]);
            }

            event.preventDefault();
        },  
        $("#progbar_dni"),
        $("#upload_file_dni")
    );
    event.preventDefault();
});

$("#upload_file_ruc").on("click", function(event){
    $("#view_file_ruc").addClass("oculto");
    $("#input_file_ruc").upload(
        BASE_URL + "administracion/proveedor/subir_ruc",
        {
            nombre : "Imagen 1 nombre",
            descripcion : "Imagen 1 descripcion"
        }, 
        function(mensaje){
            console.log(mensaje);
            if(mensaje['tipo_mensaje'] == 'success'){ 
               $("#imagen_ruc_id").html(mensaje['mensaje'][1]);  
               $("#txtMensajeRptaImagenes").html(mensaje['mensaje'][0]);
               $("#txtMensajeRptaImagenes").removeClass("color-rojo");
              $("#txtMensajeRptaImagenes").addClass("color-success"); 
              $("#view_file_ruc").removeClass("oculto");
              $("#view_file_ruc").attr("href", mensaje['mensaje'][2]);
            }else{
              $("#txtMensajeRptaImagenes").removeClass("color-success");
               $("#txtMensajeRptaImagenes").addClass("color-rojo");
              $("#txtMensajeRptaImagenes").html(mensaje[0]);
            }

            event.preventDefault();
        },  
        $("#progbar_ruc"),
        $("#upload_file_ruc")
    );
    event.preventDefault();
});