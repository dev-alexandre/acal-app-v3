import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'document',
})
export class DocumentPipe implements PipeTransform {

  transform(document: String): String {
    let valorFormatado = document + '';

    if ( document.length === 11) {

      valorFormatado = valorFormatado
          .padStart(11, '0')
          .substring(0, 11)
          .replace(/[^0-9]/, '')
          .replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            '$1.$2.$3-$4',
        );

      return valorFormatado;

    } else if (document.length === 14) {

      valorFormatado = valorFormatado
          .padStart(14, '0')
          .substring(0, 14)
          .replace(/[^0-9]/, '')
          .replace(
            /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
            '$1.$2.$3/$4-$5',
          );

      return valorFormatado;
    }

    return document;
  }

}
