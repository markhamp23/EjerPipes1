import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesesTexto'
})
export class MesesTextoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == "Castellano" || args==null) {
      switch (value) {
        case 1: return "Enero";
        case 2: return "Febrero";
        case 3: return "Marzo";
        case 4: return "Abril";
        case 5: return "Mayo";
        case 6: return "Junio";
        case 7: return "Julio";
        case 8: return "Agosto";
        case 9: return "Setiembre";
        case 10: return "Octubre";
        case 11: return "Noviembre";
        case 12: return "Diciembre";
      }
    }
    else if (args == "Catalan") {
      switch (value) {
        case 1: return "Gener";
        case 2: return "Febrer";
        case 3: return "Març";
        case 4: return "Abril";
        case 5: return "Maig";
        case 6: return "Juni";
        case 7: return "Juliol";
        case 8: return "Agost";
        case 9: return "Setembre";
        case 10: return "Octubre";
        case 11: return "Novembre";
        case 12: return "Decembre";
      }
      }
      else
      {
        return "Error en el idioma";
      }
  }
}
