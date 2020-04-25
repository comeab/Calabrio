
//Using proxy server to avoid Cross site scripting problem. Our API is not allowing cross site requests
const proxyServer = 'https://cors-anywhere.herokuapp.com/';

export const remoteServerUrl = `${proxyServer}http://pizzacabininc.azurewebsites.net/PizzaCabinInc.svc/schedule/`;

//When using our local data
export const localDataUrl='./../src/mock-data/pizza_experts.json?';
