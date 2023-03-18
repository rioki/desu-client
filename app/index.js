
let path = require('path')
let electron = require('electron');
let settings = require('electron-settings');

async function windowState(name) {
  let id = `window.${name}`;

  function saveState(window) {
    let state = {};
    if (!state.isMaximized) {
      state = window.getBounds();
    }
    state.isMaximized = window.isMaximized();
    settings.set(id, state);
  }

  function track(window) {
    let events = ['resize', 'move', 'close'];
    events.forEach(event => {
      window.on(event, () => saveState(window)); 
    });
  }

  let state = {
    x: undefined,
    y: undefined,
    width: 1000,
    height: 800
  };

  if (settings.has(id)) {
    state = await settings.get(id);
  }

  state.track = track;
  return state;
}

async function createWindow() {
  let state = await windowState('main');
  let window = new electron.BrowserWindow({
    x: state.x,
    y: state.y,
    width: state.width,
    height: state.height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  if (state.isMaximized) {
    window.maximize();
  }
  state.track(window);

  window.loadFile(path.join(__dirname, '../ui/index.html'))

  if (process.env.NODE_ENV === 'development') {
    window.webContents.openDevTools();
  }
  else {
    window.removeMenu();
  }
}

electron.app.whenReady().then(() => {
  createWindow()

  // Mac: open a window when "activating" the app without windows
  electron.app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

// Win & Linux: close app when the last window was closed.
electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron.app.quit();
  }
})
