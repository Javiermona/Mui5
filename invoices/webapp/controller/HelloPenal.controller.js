// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller", // Module
    "sap/m/MessageToast" ,
    "sap/base/Log"
],
/** coment
     * @param {typeof sap.ui.core.mvc.Controller}  Controller  
     * @param {typeof sap.m.MessageToast}  MessageToast   
     * @param {typeof sap.base.Log}  Log
     */
    function (Controller, MessageToast, Log  ) {
    "use strict"
    return Controller.extend("logaligroup.invoices.controller.HelloPenal", { // Logica que devolvemos
        onInit: function () {

        },
        onBeforeRendering: function(){
            window.message = "Log Message onBeforeRenfering";
            Log.info(window.message);
            Log.error(window.message);

        },

        onAfterRendering: function(){
            debugger;
        },


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
