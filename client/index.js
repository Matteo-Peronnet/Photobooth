const electron = require('electron');
const MainWindow = require('./app/mainWindow');
const isDev = require('electron-is-dev');
const { app, ipcMain, Menu } = electron;

let mainWindow;

process.setMaxListeners(Infinity);

app.on('ready', () => {

    // Check if we are on a MAC and not in Dev mode
    if (process.platform === 'darwin' && !isDev) {
        // Create our menu entries so that we can use MAC shortcuts
        Menu.setApplicationMenu(Menu.buildFromTemplate([
            {
                label: 'Edit',
                submenu: [
                    { role: 'undo' },
                    { role: 'redo' },
                    { type: 'separator' },
                    { role: 'cut' },
                    { role: 'copy' },
                    { role: 'paste' },
                    { role: 'pasteandmatchstyle' },
                    { role: 'delete' },
                    { role: 'selectall' }
                ]
            }
        ]));
    }

    if (process.platform === 'darwin') {
        app.dock.hide();
    }

    if(isDev) {
        const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
        [REACT_DEVELOPER_TOOLS].forEach(extension => {
            installExtension(extension)
                .then((name) => console.log(`Added Extension: ${name}`))
                .catch((err) => console.log('An error occurred: ', err));
        });
    }
    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
    mainWindow.maximize()
    mainWindow.setMenu(null);
    mainWindow.show()
    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        mainWindow = null
        app.exit(0)
    })

});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


