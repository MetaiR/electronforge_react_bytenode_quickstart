import {app, BrowserWindow, Menu} from 'electron'
declare const REACT_APP_WEBPACK_ENTRY: string;
declare const REACT_APP_PRELOAD_WEBPACK_ENTRY: string;

const onlineEntry = 'https://google.com';

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // nodeIntegration must be enabled for Bytenode to work
      nodeIntegration: true,
      contextIsolation: false,
      // Electron Forge entry point ⤵
      preload: REACT_APP_PRELOAD_WEBPACK_ENTRY
    }
  })

  // Electron Forge entry point ⤵
  mainWindow.loadURL(REACT_APP_WEBPACK_ENTRY);

  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: 'local react app',
      click: () => mainWindow.loadURL(REACT_APP_WEBPACK_ENTRY)
    },
    {
      label: 'online app',
      click: () => {
        mainWindow.webContents.executeJavaScript(`document.getElementById("root").remove()`);
        mainWindow.loadURL(onlineEntry)
      }
    }
  ]));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})