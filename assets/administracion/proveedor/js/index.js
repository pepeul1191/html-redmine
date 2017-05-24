var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Razón Social",index:"razon_social",estilos:"width: 250px;"},
	{titulo:"RUC",index:"ruc",estilos:"width: 120px;"},
	{titulo:"Distrito",index:"distrito",estilos:"width: 280px;"},
    {titulo:"Dirección",index:"direccion",estilos:"width: 280px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"label",estilos:"width:250px;", index:"razon_social", edicion:""},
	{tipo:"label",estilos:"width:120px;", index:"ruc", edicion:""},
	{tipo:"label",estilos:"width:280px;", index:"distrito", edicion:""},
	{tipo:"label",estilos:"width:280px;", index:"direccion", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-pencil",url:"#",alt:"Editar proveedor",estilos:"padding-left: 20px;", operacion:"LinkFila", link: BASE_URL + "administracion/proveedor/editar/", href: true}, 
	{clase:"fa fa-search",url:"#",alt:"Ver proveedor",estilos:"padding-left: 25px;", operacion:"LinkFila", link: BASE_URL + "administracion/proveedor/ver/", href: true}
]; 

var array_json_btn = [
	{tipo: "agrega_fila_link", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools", link: BASE_URL + "administracion/proveedor/nuevo"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_modulo = new AjaxPython(); 
ajax_modulo.Constructor("GET", BASE_URL + "administracion/proveedor/listar", "", false);

var array_extra_data = [
    {tipo: "label", llave: "empresa_id", id : "idEmpresa"}
];
var tablaProveedores = new Grid();

tablaProveedores.SetTableId("tablaProveedores");
tablaProveedores.SetTableObj("tablaProveedores");
tablaProveedores.SetTableHeader(array_json_th);
tablaProveedores.SetTableBody(array_json_td, array_json_btn_td, ajax_modulo);
tablaProveedores.SetTableFooter(array_json_btn, false);
tablaProveedores.SetLabelMensaje("#txtMensajeRpta");
tablaProveedores.SetURLGuardar(BASE_URL + "administracion/proveedor/guardar");
tablaProveedores.SetExtraData(array_extra_data);

tablaProveedores.MostrarTable();