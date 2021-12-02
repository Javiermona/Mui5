// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller", // Module
    "sap/m/MessageToast" 
 
],
/** coment
     * @param {typeof sap.ui.core.mvc.Controller}  Controller  
     * @param {typeof sap.m.MessageToast}  MessageToast   
     */
    function (Controller, MessageToast  ) {
    "use strict"
    return Controller.extend("logaligroup.invoices.controller.HelloPenal", { // Logica que devolvemos
        onInit: function () {},
        onShowHello: function () { // read text i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            // read property
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },
        onOpenDialog: function () {
        this.getOwnerComponent().openHelloDialog();

        } 
        
    });
});
