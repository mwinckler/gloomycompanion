var m = require("mithril");
var Scenarios = require("./Scenarios");
var Decks = require("./Decks");

function getClass(tabName) {
    return m.route.param("tab") == tabName ? "" : "inactive";
}

module.exports = {
    view: function() {
        var currentTab = null;

        switch (m.route.param("tab")) {
            case "decks":
                currentTab = m(Decks);
                break;
            case "scenario":
                currentTab = m(Scenarios);
                break;
        }

        return m(".panecontainer",
            m("#settingspane.pane.expanded",
                m("ul.tabcontainer",
                    m("li", { class: getClass("scenario") }, m("a[href=/config/scenario]", { oncreate: m.route.link }, "Scenario")),
                    m("li", { class: getClass("decks") }, m("a[href=/config/decks]", { oncreate: m.route.link }, "Decks"))
                ),
                m(".tabcontainer", currentTab)
            ),
            m("#cancelarea")
        );
    }
}