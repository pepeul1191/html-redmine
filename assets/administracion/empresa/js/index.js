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

var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 120px;"},
	{titulo:"Distrito",index:"distrito_id",estilos:"width: 280px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:120px;", index:"nombre", edicion:""},
	{tipo:"autocomplete",estilos:"width:280px;", index:"distrito", edicion:"",  url: BASE_URL  + "maestros/distrito/buscar/", llave: "id", valor: "nombre", formato_carga:{llave: "distrito_id", valor: "distrito"}},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-chevron-right",url:"#",alt:"Gestionar Provincias del Departamento",estilos:"padding-left: 20px;", operacion:"MostrarProvincias"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar módulo",estilos:"padding-left: 10px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_modulo = new AjaxPython(); 
ajax_modulo.Constructor("GET", BASE_URL + "administracion/sede/listar/" + $("#idEmpresa").html(), "", false);

var array_extra_data = [
    {tipo: "label", llave: "empresa_id", id : "idEmpresa"}
];
var tablaSedes = new Grid();

tablaSedes.SetTableId("tablaSedes");
tablaSedes.SetTableObj("tablaSedes");
tablaSedes.SetTableHeader(array_json_th);
tablaSedes.SetTableBody(array_json_td, array_json_btn_td, ajax_modulo);
tablaSedes.SetTableFooter(array_json_btn, false);
tablaSedes.SetLabelMensaje("#txtMensajeRpta");
tablaSedes.SetURLGuardar(BASE_URL + "administracion/sede/guardar");
tablaSedes.SetExtraData(array_extra_data);

tablaSedes.MostrarTable();