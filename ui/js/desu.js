/*document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
});*/

let html = htm.bind(preact.h);

function ServerList(props) {
  const [servers, setServers] = preactHooks.useState([
    {
      name: 'A Sexy Server',
      channels: [
        {name: 'Sexy Chicks', encrypted: true},
        {name: 'More Sexy Chicks', encrypted: true},
        {name: 'Nudes You Should Not Share', encrypted: true}
      ]
    },
    {
      name: 'Serious Server',
      channels: [
        {name: 'Growing Beareds', encrypted: false},
        {name: 'The right tools for your workshop.', encrypted: false},
        {name: 'Pinups', encrypted: true}
      ] 
    }
  ]);

  return html`
    <div id="server-list">
      ${servers.map(server => html`
        <div class="server-name">${server.name}</div>
        ${server.channels.map(channel => html`
            <div class="channel-name">
              <i class="material-icons">${channel.encrypted ? html`lock` : html`visibility`}</i>
              ${channel.name}
            </div>
        `)}
      `)}
    </div>
  `;
}

function App (props) {
  return html`
    <div class="page blue">
      <nav>
        <div class="nav-wrapper grey darken-4">
          <a href="#" class="brand-logo hide-on-large-only"><i class="material-icons">lock</i>DESU</a>
          <a href="#" class="brand-logo hide-on-med-and-down"><i class="material-icons">lock</i>Digital Encryption and Security for U</a>
          <ul class="right">
            <li><a href="sass.html"><i class="material-icons">search</i></a></li>
            <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
            <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
            <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
          </ul>
        </div>
      </nav>
      <div class="row full-height grey">
        <div class="col s3 grey darken-3 full-height">
          <${ServerList} />
        </div>
        <div class="col s9 grey darken-2 full-height">
          <h1>Hello ${props.name}!</h1>
          We are using Node.js <span id="node-version"></span>,
          Chromium <span id="chrome-version"></span>,
          and Electron <span id="electron-version"></span>.
        </div>
      </div>
    </div>`;
}

preact.render(html`<${App} name="World" />`, document.body);
