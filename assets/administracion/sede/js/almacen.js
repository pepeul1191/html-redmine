var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 120px;"},
	{titulo:"Distrito",index:"distrito_id",estilos:"width: 280px;"},
    {titulo:"Dirección",index:"direccion",estilos:"width: 480px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:120px;", index:"nombre", edicion:""},
	{tipo:"autocomplete",estilos:"width:280px;", index:"distrito", edicion:"",  url: BASE_URL  + "maestros/distrito/buscar/", llave: "id", valor: "nombre", formato_carga:{llave: "distrito_id", valor: "distrito"}},
        {tipo:"text",estilos:"width:480px;", index:"direccion", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-building",url:"#",alt:"Gestionar Almacenes de Sede",estilos:"padding-left: 20px;", operacion:"MostrarAlmacenesSede"},
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
var tablaAlmacenes = new Grid();

tablaAlmacenes.SetTableId("tablaAlmacenes");
tablaAlmacenes.SetTableObj("tablaAlmacenes");
tablaAlmacenes.SetTableHeader(array_json_th);
tablaAlmacenes.SetTableBody(array_json_td, array_json_btn_td, ajax_modulo);
tablaAlmacenes.SetTableFooter(array_json_btn, false);
tablaAlmacenes.SetLabelMensaje("#txtMensajeRpta");
tablaAlmacenes.SetURLGuardar(BASE_URL + "administracion/sede/guardar");
tablaAlmacenes.SetExtraData(array_extra_data);

tablaAlmacenes.MostrarTable();