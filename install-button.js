class ESPWebInstallButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button style="background:#2563eb;color:white;padding:12px 24px;border:none;border-radius:6px;font-size:16px;cursor:pointer;font-weight:bold;">Install Software</button>`;
    this.querySelector('button').addEventListener('click', async () => {
      if (!navigator.serial) {
        alert("Your browser does not support Web Serial. Please use Google Chrome or Microsoft Edge.");
        return;
      }
      try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });
        alert("Connected to board! Press OK to begin flashing memory.");
      } catch (err) {
        alert("Connection failed: " + err.message);
      }
    });
  }
}
customElements.define('esp-web-install-button', ESPWebInstallButton);
