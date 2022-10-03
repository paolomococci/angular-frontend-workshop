import {
  Rule, 
  SchematicContext, 
  Tree,
  apply,
  applyTemplates,
  chain,
  mergeWith,
  move
} from '@angular-devkit/schematics'

import {
  normalize,
  strings
} from '@angular-devkit/core'

import { Schema } from './schema'


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function blackCherry(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {}
}
