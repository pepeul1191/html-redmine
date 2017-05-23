var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 300px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:300px;", index:"nombre", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-times",url:"#",alt:"Eliminar módulo",estilos:"padding-left: 25px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_modulo = new AjaxPython(); 
ajax_modulo.Constructor("GET", BASE_URL + "maestros/tipos_almacen/listar", "", false);

var tablaTiposAlmacen = new Grid();

tablaTiposAlmacen.SetTableId("tablaTiposAlmacen");
tablaTiposAlmacen.SetTableObj("tablaTiposAlmacen");
tablaTiposAlmacen.SetTableHeader(array_json_th);
tablaTiposAlmacen.SetTableBody(array_json_td, array_json_btn_td, ajax_modulo);
tablaTiposAlmacen.SetTableFooter(array_json_btn, false);
tablaTiposAlmacen.SetLabelMensaje("#txtMensajeRpta");
tablaTiposAlmacen.SetURLGuardar(BASE_URL + "maestros/tipos_almacen/guardar");

tablaTiposAlmacen.MostrarTable();