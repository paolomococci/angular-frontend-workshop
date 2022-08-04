import {
  InjectionToken
} from '@angular/core'

export const WINDOW = new InjectionToken<Window>(
  'global window object',
  {
    factory: () => window
  }
)

export interface ElectronWindow extends Window {
  require(module: string): any
}
