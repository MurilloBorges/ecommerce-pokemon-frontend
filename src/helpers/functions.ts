/**
 * Verifica se a variável está vazia
 *
 * @export
 * @param {any} value
 * @returns boolean
 */
export function isEmpty(value: string | null | undefined): boolean {
  if (value === '' || value === undefined || value === null) {
    return true;
  }

  return false;
}

/**
 * Verifica se a variável NÃO está vazia
 *
 * @export
 * @param {any} value
 * @returns boolean
 */
export function isNotEmpty(value: string | null | undefined): boolean {
  if (value !== '' && value !== undefined && value !== null) {
    return true;
  }

  return false;
}

export function validaEmail(value: string): boolean {
  if (value !== '') {
    const usuario = value.substring(0, value.indexOf('@'));
    const dominio = value.substring(value.indexOf('@') + 1, value.length);

    if (usuario.length >= 1 && dominio.length >= 3 && usuario.search('@') === -1
      && dominio.search('@') === -1 && usuario.search(' ') === -1
      && dominio.search(' ') === -1 && dominio.search('.') !== -1
      && dominio.indexOf('.') >= 1 && dominio.lastIndexOf('.') < dominio.length - 1
    ) {
      return true;
    }

    return false;
  }

  return true;
}

export function formataCpfCnpj(cpfCnpj: string): string {
  let v = cpfCnpj.replace(/\D/g, '');

  if (v.length <= 11) {
    // Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    // Coloca um ponto entre o terceiro e o quarto dígitos
    // de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    // Coloca um hífen entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else {
    // Coloca ponto entre o segundo e o terceiro dígitos
    v = v.replace(/^(\d{2})(\d)/, '$1.$2');
    // Coloca ponto entre o quinto e o sexto dígitos
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    // Coloca uma barra entre o oitavo e o nono dígitos
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
    // Coloca um hífen depois do bloco de quatro dígitos
    v = v.replace(/(\d{4})(\d)/, '$1-$2');
  }

  return v;
}
