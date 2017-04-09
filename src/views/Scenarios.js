var m = require("mithril");

module.exports = {
    view: function() {
        return m("#scenariospage.tabbody",
            m("h2", "Scenario picker goes here"),
            m("input[type=button]", { onclick: () => alert('apply scenarios'), value: "Apply" })
        );
    }
};