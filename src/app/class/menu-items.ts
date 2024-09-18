
import { subMenu } from "./subMenu-items";



export class menu{


    static menuList:Array<any>=[
        {nombre:'INICIO',menus:[],icono:'home',url:'',permiso:'CAJERO',permiso1:'VENDEDOR',permiso2:'ADMIN'},
        {nombre:'ACCIONES', menus:subMenu.menuListAcciones,permiso:'CAJERO',permiso1:'VENDEDOR',permiso2:'ADMIN'},
        {nombre:'ADMINISTRACION',menus:subMenu.menuListAdministracion, permiso:'ADMIN'},
        
    ]


}