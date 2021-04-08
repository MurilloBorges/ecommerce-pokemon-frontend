/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function blockValid(id: string) {
  const block = document.querySelector(`#${id}`);
  if (block) {
    block.classList.remove('invalid');
    block.classList.add('passed');
  }
}

export function blockInvalid(id: string) {
  const block = document.querySelector(`#${id}`);
  if (block) {
    block.classList.remove('passed');
    block.classList.add('invalid');
  }
}
