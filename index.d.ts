type Color = (text: string | number) => string

export interface Colors {
  isColorSupported: boolean
  reset: Color
  bold: Color
  dim: Color
  italic: Color
  underline: Color
  inverse: Color
  hidden: Color
  strikethrough: Color
  black: Color
  red: Color
  green: Color
  yellow: Color
  blue: Color
  magenta: Color
  cyan: Color
  white: Color
  gray: Color
  bgBlack: Color
  bgRed: Color
  bgGreen: Color
  bgYellow: Color
  bgBlue: Color
  bgMagenta: Color
  bgCyan: Color
  bgWhite: Color
}

/**
 * Does environment support color output.
 *
 * ```js
 * import { isColorSupported } from 'nanocolors'
 *
 * if (isColorSupported) {
 *   console.log('With colors')
 * }
 * ```
 */
export const isColorSupported: boolean

/**
 * A way to overwrite color support autodetection.
 *
 * ```js
 * import { createColors } from 'nanocolors'
 *
 * const { red } = createColors(options.enableColors)
 * ```
 *
 * @param enabled Do we need to enable colors. On `undefined` we will try
 *                to detect color support.
 */
export function createColors(enabled: boolean | undefined): Colors

// Modifiers
export const reset: Color
export const bold: Color
export const dim: Color
export const italic: Color
export const underline: Color
export const inverse: Color
export const hidden: Color
export const strikethrough: Color

// Colors
export const black: Color
export const red: Color
export const green: Color
export const yellow: Color
export const blue: Color
export const magenta: Color
export const cyan: Color
export const white: Color
export const gray: Color

// Background
export const bgBlack: Color
export const bgRed: Color
export const bgGreen: Color
export const bgYellow: Color
export const bgBlue: Color
export const bgMagenta: Color
export const bgCyan: Color
export const bgWhite: Color
