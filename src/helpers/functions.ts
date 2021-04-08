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
