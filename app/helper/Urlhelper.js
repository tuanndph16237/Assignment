export default class Urlhelper {
    readParamsFromURL = (url) => {
        var vars = [];
        var parts = url.replace(
            /[?&]+([^=&]+)=([^&]*)/gi,
            function(m, key, value) {
                vars[key] = value;
            }
        );
        return vars;
    };
    readParam = (url, paramName) => {
        const vars = this.readParamsFromURL(url);
        return vars[paramName];
    };
}