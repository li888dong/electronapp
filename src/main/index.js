import {app, BrowserWindow, ipcMain,screen} from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow,isLogin=false;
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow() {
    /**
     * Initial window options
     */
    var width = 300,
        height = 442;

    var size = screen.getPrimaryDisplay().workAreaSize;
    if(isLogin){
        width = size.width;
        height = size.height;
    }
    mainWindow = new BrowserWindow({
        height: height,
        useContentSize: false,
        width: width,
        // fullscreen: true,

        frame:false,//取消顶部任务栏
        // autoHideMenuBar:true,//取消顶部菜单栏
        // movable:false,
        resizable:false,//不可改变窗口大小
    })

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

ipcMain.on('login-succeed',()=>{
    isLogin =true;
    var size = screen.getPrimaryDisplay().workAreaSize;
    mainWindow.setBounds({
        x:0,
        y:0,
        width:size.width,
        height:size.height
    });
    mainWindow.reload();
});
ipcMain.on('login-failed',()=>{
    isLogin =false
    var size = screen.getPrimaryDisplay().workAreaSize;
    mainWindow.setBounds({
        x:size.width/2 -140,
        y:size.height/2 -242,
        width:280,
        height:484
    })
});
//退出
ipcMain.on('window-all-closed', () => {
    app.quit();
});
//小化
ipcMain.on('hide-window', () => {
    mainWindow.minimize();
});
//最大化
ipcMain.on('show-window', () => {
    mainWindow.maximize();
});
//还原
ipcMain.on('orignal-window', () => {
    mainWindow.unmaximize();
});

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
