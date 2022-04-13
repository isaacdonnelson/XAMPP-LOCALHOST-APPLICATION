Ext.define("MyApp.store.Personnel", {
  extend: "Ext.data.Store",

  alias: "store.personnel",

  fields: ["name", "email", "phone"],

  proxy: {
    type: "direct",
    directFn: "QueryDatabase.getResults",
  },

  autoLoad: true,
});
