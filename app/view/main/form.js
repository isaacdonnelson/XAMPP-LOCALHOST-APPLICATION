Ext.define("MyApp.view.main.Form", {
  extend: "Ext.form.Panel",
  xtype: "form",

  // Fields will be arranged vertically, stretched to full width
  layout: "anchor",
  defaults: {
    anchor: "100%",
  },
  requires: [{}],

  // The fields
  defaultType: "textfield",
  items: [
    {
      fieldLabel: "First Name",
      name: "first",
      allowBlank: false,
      id: "firstName",
    },
    {
      fieldLabel: "Last Name",
      name: "last",
      allowBlank: false,
      id: "lastName",
    },
    {
      fieldLabel: "Phone",
      name: "phonenumber",
      allowBlank: false,
      id: "phone",
      //   minLength: 10,
      inputMask: "(999) 999-9999",
      placeholder: "(xxx) xxx-xxxx",
    },
  ],

  // Reset and Submit buttons
  buttons: [
    {
      text: "Reset",
      handler: function () {
        this.up("form").getForm().reset();
      },
    },
    {
      text: "Submit",
      formBind: true, //only enabled once the form is valid
      disabled: true,
      handler: function () {
        var firstname = Ext.getCmp("firstName").getValue();
        var lastname = Ext.getCmp("lastName").getValue();
        var phone = Ext.getCmp("phone").getValue();
        Ext.Ajax.request({
          url: "/MyApp/php/save-form.php",
          params: { param1: firstname, param2: lastname, param3: phone },
        });
        console.log(firstname, lastname, phone);
        this.up("form").getForm().reset();
        Ext.Msg.alert("Status", "Changes saved successfully.");
        refresh();
      },
    },
  ],
});
