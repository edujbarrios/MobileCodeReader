const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Carga el archivo HTML de la aplicación.
  win.loadFile('index.html')

  // Abre las herramientas de desarrollo.
  win.webContents.openDevTools()
}

// Esta función se llamará cuando Electron haya terminado
// de inicializarse y esté listo para crear ventanas del navegador.
// Algunas APIs solo se pueden usar después de que ocurra este evento.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // En macOS es común volver a crear una ventana en la aplicación cuando
    // el ícono del dock se hace clic y no hay otras ventanas abiertas.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Salir cuando todas las ventanas estén cerradas, excepto en macOS. En macOS, es común
// para las aplicaciones y su barra de menú estar activas hasta que el usuario salga expresamente con Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
