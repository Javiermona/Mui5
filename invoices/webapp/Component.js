sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/invoices/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
],
/** coment
 * @param {typeof sap.ui.core.UIComponen}  UIComponen
 * @param {typeof sap.ui.model.resource.ResourceModel}  ResourceModel  
 * @param {typeof sap.ui.Device}  Device
 */
    function (UIComponent, Models, ResourceModel, HelloDialog, Device) {

    return UIComponent.extend("logaligroup.invoices.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () { // call init function of the parent
            UIComponent.prototype.init.apply(this, arguments)
            // Logica

            // Vincular la vista
            this.setModel(Models.createRecipient());


            // Set divace model.
            this.setModel(Models.createRecipient(), "device");

            // Set i18n
            // var i18nModel = new ResourceModel({bundleName: "logaligroup.invoices.i18n.i18n"});
            // this.setModel(i18nModel, "i18n");
            this._helloDialog = new HelloDialog(this.getRootControl());

            // Create the views based on the urt/hash
            this.getRouter().initialize();
        },
        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;

        },
        openHelloDialog: function () {
            this._helloDialog.open();

        },
        getContentDensityClass: function () {
         if (!Device.support.touch) {
                this._sContentDensityClass = "sapUiSizeCompact";

            } else {
                this._sContentDensityClass = "sapUiSizeCozy";
            }
            return this._sContentDensityClass;
        }  


    });

});
