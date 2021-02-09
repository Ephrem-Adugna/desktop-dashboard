const { app, BrowserWindow } = require('electron')
const AutoLaunch = require('auto-launch');
let autoLaunch = new AutoLaunch({
  name: 'Computer dashboard',
  path: app.getPath('exe'),
});
autoLaunch.isEnabled().then((isEnabled) => {
  if (!isEnabled) autoLaunch.enable();
});
function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: true
        },
        fullscreen: true
    });
    win.setMenuBarVisibility(false)
    win.loadFile('index.html');
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
