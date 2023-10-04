import CryptoJS from 'crypto-js';

const el = document.getElementById('hod-config');
const config: any = el?.innerText.trim();
const environment = config ? setEnv() : setDefault();
function setEnv() {
  const env = JSON.parse(CryptoJS.AES.decrypt(config, process.env.VITE_CONFIG_SIGNATURE!)?.toString(CryptoJS.enc.Utf8));
  el?.remove();
  return env;
}
function setDefault() {
  return {
    baseApi: process.env.VITE_BASE_API,
  };
}

export default environment;
