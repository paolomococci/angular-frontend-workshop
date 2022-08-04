import {
  app,
  BrowserWindow
} from "electron"

import * as fs from 'fs'
import * as path from 'path'

const contentFile = path.join(
  app.getPath('userData'), 'content.html'
)

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(
  () => {
    createWindow()
  }
)
