export function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
}
export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
export const isBrowser = () => typeof window !== 'undefined';
export function getParameterByName(name, url) {
    if (!url)
        url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
export class LocalStorage {
    constructor(localStorage) {
        this.localStorage = localStorage || globalThis.localStorage;
    }
    clear() {
        return this.localStorage.clear();
    }
    key(index) {
        return this.localStorage.key(index);
    }
    setItem(key, value) {
        return this.localStorage.setItem(key, value);
    }
    getItem(key) {
        return this.localStorage.getItem(key);
    }
    removeItem(key) {
        return this.localStorage.removeItem(key);
    }
}
//# sourceMappingURL=helpers.js.map