var autocompleteDistritos = new Autocomplete();

autocompleteDistritos.SetUrl(BASE_URL + "maestros/distrito/buscar/");
autocompleteDistritos.SetUlSugerencia("autoDistrito");
autocompleteDistritos.SetDestinoIdSugerencia("idDistrito");
autocompleteDistritos.SetNombreObjeto("autocompleteDistritos");
autocompleteDistritos.SetDestinoValorSugerencia("txtDistrito");
autocompleteDistritos.SetIndices("id", "nombre");
autocompleteDistritos.SetFuncionAdicional("");

$( "#btnGuardarEmpresa" ).click(function() {
	var empresa = new Object();
    empresa.id = $("#idEmpresa").html();
    empresa.razon_social= $("#txtRazonSocial").val();
    empresa.ruc= $("#txtRuc").val();
    empresa.direccion= $("#txtDireccion").val();
    empresa.distrito_id= $("#idDistrito").html();

    var ajax_empresa = new AjaxRuby();
    ajax_empresa.Constructor ("POST", BASE_URL + "administracion/empresa/guardar", JSON.stringify(empresa), false);
    var rpta = JSON.parse(ajax_empresa.GetRespuesta());
    console.log(rpta);
    if (rpta['tipo_mensaje'] == 'success'){
       $("#txtMensajeRptaEmpresa").html(rpta['mensaje'][0]);
       $("#txtMensajeRptaEmpresa").removeClass("color-rojo");
       $("#txtMensajeRptaEmpresa").removeClass("oculto");
       $("#txtMensajeRptaEmpresa").addClass("color-success");
       if (typeof rpta['mensaje'][1] !== "undefined"){
          $("#lblId").html(rpta['mensaje'][1]);
       } 
    }else{
       $("#txtMensajeRptaEmpresa").html(rpta['mensaje'][0]);
       $("#txtMensajeRptaEmpresa").removeClass("color-success");
       $("#txtMensajeRptaEmpresa").removeClass("oculto");
       $("#txtMensajeRptaEmpresa").addClass("color-rojo");
    }
});
