



export class subMenu{

    static subMenuProducto:Array<any>=[
        {nombre:'LIBROS',menus:[],icono:'', url:''},
        {nombre:'MATERIA',menus:[],icono:'',url:''},
        {nombre:'CICLO',menus:[],icono:'',url:''},
        {nombre:'CATEGORIA',menus:[],icono:'',url:''},
        {nombre:'EDITORIAL',menus:[],icono:'',url:''},
    ]

    static menuListAcciones:Array<any>=[
       
        {nombre:'COMPRAS',menus:[],icono:'shopping_cart', url:'',permiso:'CAJERO',permiso2:'ADMIN'},
        {nombre:'VENTAS',menus:[],icono:'point_of_sale',url:'',permiso:'CAJERO',permiso1:'VENDEDOR',permiso2:'ADMIN'},
        {nombre:'CAJA',menus:[],icono:'monetization_on',url:'',permiso:'CAJERO',permiso2:'ADMIN'},
        {nombre:'INVENTARIO',menus:[],icono:'assignment',url:'',permiso:'CAJERO',permiso1:'VENDEDOR',permiso2:'ADMIN'},
        {nombre:'LIBROS',menus:[],icono:'library_books',url:'',permiso:'CAJERO',permiso1:'VENDEDOR',permiso2:'ADMIN'},
        {nombre:'REPORTES',menus:[],icono:'picture_as_pdf',url:'',permiso:'CAJERO',permiso2:'ADMIN',permiso1:'VENDEDOR'},
        {nombre:'ESTADISTICAS',menus:[],icono:'bar_chart',url:'',permiso:'CAJERO',permiso2:'ADMIN',permiso1:'VENDEDOR'},
    ]

    static menuListAdministracion:Array<any>=[
        {nombre:'CLIENTES',menus:[],icono:'groups',url:'',permiso:'ADMIN'},
        {nombre:'PROVEEDORES',menus:[],icono:'local_shipping',url:'',permiso:'ADMIN'},
        {nombre:'FUNCIONARIOS',menus:[],icono:'contacts',url:'',permiso:'ADMIN'},
        {nombre:'LOCALIDADES',menus:[],icono:'location_on', url:'',permiso:'ADMIN'},
        {nombre:'AUTOR',menus:[],icono:'contacts', url:'',permiso:'ADMIN'},
        {nombre:'USUARIO',menus:[],icono:'supervised_user_circle', url:'',permiso:'ADMIN'},
        {nombre:'CONCEPTO',menus:[],icono:'receipt', url:'',permiso:'ADMIN'},
    ]




   


}