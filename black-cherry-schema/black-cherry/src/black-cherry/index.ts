import {
  Rule, 
  SchematicContext, 
  Tree
} from '@angular-devkit/schematics'

import { Schema } from './schema'


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function blackCherry(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {}
}
