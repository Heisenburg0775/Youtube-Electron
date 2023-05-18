const {BrowserWindow,app,shell} = require("electron")
async function CreateWindow(){
    var win = new BrowserWindow({
        width:1000,
        height:600,
        autoHideMenuBar:true,
        resizable:true
        
    })
    
    win.loadFile("./Interface/index.html")
    win.webContents.on("will-navigate", (event,url) => {
        event.preventDefault();
        shell.openExternal(url);
    })
    
}
app.whenReady().then(() => {
    CreateWindow()
})