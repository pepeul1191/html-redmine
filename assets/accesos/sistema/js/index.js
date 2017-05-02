var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 250px;"},
    {titulo:"Versión",index:"version",estilos:"width: 100px;"},
    {titulo:"Repositorio",index:"repositorio",estilos:"width: 250px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:250px;", index:"nombre", edicion:""},
    {tipo:"text",estilos:"width:100px;", index:"version", edicion:""},
    {tipo:"text",estilos:"width:250px;", index:"repositorio", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-times",url:"#",alt:"Eliminar capa",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_tipo_activos = new AjaxPython(); 
ajax_dao_tipo_activos.Constructor("GET", BASE_URL + "accesos/sistema/listar", "", false);

var tablaSistemas = new Grid();

tablaSistemas.SetTableId("tablaSistemas");
tablaSistemas.SetTableObj("tablaSistemas");
tablaSistemas.SetTableHeader(array_json_th);
tablaSistemas.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_tipo_activos);
tablaSistemas.SetTableFooter(array_json_btn, false);
tablaSistemas.SetLabelMensaje("#txtMensajeRpta");
tablaSistemas.SetURLGuardar(BASE_URL + "accesos/sistema/guardar");

tablaSistemas.MostrarTable();