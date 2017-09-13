import { defineSupportCode } from 'cucumber'

export const step = (pattern, fn) =>
  defineSupportCode(({defineStep}) =>
    defineStep(pattern, fn));

export const given = step;
export const when = step;
export const then = step;
