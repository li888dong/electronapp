import {app, BrowserWindow, ipcMain,screen,dialog} from 'electron';
 import { autoUpdater } from "electron-updater";
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
        width: width,
        height: height,
        useContentSize: false,
        // 开发环境的跨域请求
        webPreferences: {webSecurity: false},
        // fullscreen: true,

        frame:false,//取消顶部任务栏
        // autoHideMenuBar:true,//取消顶部菜单栏
        // movable:false,
        resizable:false,//不可改变窗口大小
    })
    //console.log(app.getVersion());
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
    // mainWindow.reload();
});
ipcMain.on('login-failed',()=>{
    isLogin =false
    var size = screen.getPrimaryDisplay().workAreaSize;
    mainWindow.setBounds({
        x:size.width/2 -150,
        y:size.height/2 -221,
        width:300,
        height:442
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
ipcMain.on('width-change',(event,arg)=>{
    var size = screen.getPrimaryDisplay().workAreaSize;
     event.returnValue = size.width;

})
app.on('ready', function()  {
  //autoUpdater.checkForUpdatesAndNotify();
  autoUpdater.checkForUpdatesAndNotify();
  createWindow();
});

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

// app.on('ready', function()  {
//     autoUpdater.checkForUpdates();
// });
//正在检查更新
autoUpdater.on('update-available', (info) => {
  dialog.showMessageBox({
    type: 'info',
    title: '更新版本',
    message: '发现有新的版本, 您需要现在更新吗?',
    buttons: ['是', '否']
  }, (buttonIndex) => {
    if (buttonIndex === 0) {
      autoUpdater.downloadUpdate()
    }else {
      updater.enabled = true
      updater = null
    }
  })
});
autoUpdater.on('update-not-available', (info) => {
    updater.enabled = true
    updater = null
});
autoUpdater.on('error', (err) => {
    dialog.showErrorBox('Error: ', error == null ? "未知错误" : (error.stack || error).toString())
});
autoUpdater.on('download-progress', (progressObj) => {
    mainWindow.setProgressBar(progressObj.percent/100,"mode");
});
autoUpdater.on('update-downloaded', (info) => {
    autoUpdater.quitAndInstall(); 
    dialog.showMessageBox({
        title: '安装更新',
        message: '更新下载完成, 将要退出应用执行安装...'
    }, () => {
        setImmediate(() => autoUpdater.quitAndInstall())
    }) 
})
