import { campos, headers, Propiedades } from "../Models/Propiedades";



  export const titulos: headers[] = [
    {
      id: 0 ,
      nombre      : "Acciones",
      
    },
        {
         id:            1,
         nombre      : "id",
         
      },
      {
        id: 2 ,
        nombre      : "Nombre",
        
      },
      {
        id: 3 ,
        nombre      : "Descripcion",
        
      },
      ];


  export const Datos : Propiedades [] = [
    {
      id:            1,
      nombre      : "Unimed",
      descripcion : " Servicios Médicos"  
      
   },
   {
     id: 2 ,
     nombre      : "EEH",
     descripcion : " Servicios Energéticos"  
     
   },
   {
    id: 3 ,
    nombre      : "Tigo",
    descripcion : " Servicios Móviles"  
    
  },
  {
    id: 4,
    nombre      : "Claro",
    descripcion : " Servicios Móviles"  
    
  }
  ]


  export const Campos : campos[] = [
    {
      id     : 1,
      nombre : "nombre",
      tipo   :  "text"
    },
    {
      id     : 2,
      nombre : "descripcion",
      tipo   : "text"
    }
  ];
