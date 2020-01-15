const path = require('path')
const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
    constructor(url) {
        super({
            frame: false,
            show: false,
            autoHideMenuBar: true,
            webPreferences: {
                nodeIntegration: true
            }
        });

        this.loadURL(url);
    }
}

module.exports = MainWindow;
