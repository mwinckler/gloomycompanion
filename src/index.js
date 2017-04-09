var m = require("mithril");
var Tableau = require("./views/Tableau");
var SettingsPane = require("./views/SettingsPane");

m.route(document.body, "/config/scenario", {
    "/": Tableau,
    "/config": SettingsPane,
    "/config/:tab": SettingsPane
});