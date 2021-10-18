import { Injectable } from "@angular/core";
import Swal from "sweetalert2";



type opcSweet = "success" | "error" | "warning" | "info" | "question";

@Injectable({
  providedIn: 'root'
})
export class SwalServiceService {

  constructor() { }

  mensajeSimple(titulo: string, texto: string, tipo: opcSweet) {
    Swal.fire(titulo.toUpperCase(), texto.toUpperCase(), tipo);
  }
}
