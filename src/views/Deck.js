var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m(".deck", vnode.attrs.name);
    }
}