// @ts-nocheck
sap.ui.define([
    "sap/ui/base/ManagedObject", 
    "sap/ui/core/Fragment"
],
/** coment
 * @param {typeof sap.ui.base.ManagedObject} ManagedObject 
 * @param {typeof sap.ui.core.Fragment}  Fragment
 */
    function (ManagedObject, Fragment) {
    "use strict"
    return ManagedObject.extend("logaligroup.invoices.comtroller.HelloDialog", {
        constructor: function (oView) {
            this._oViow = oView       },
        exit: function (oView) {
            delete this._oViow;
        },
        open: function () {
            const oView = this._oViow; // this.getView();
            //create Doaglogo
            if (! oView.byId("helloDialog")) {
                let oFragment = {

                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                };
                //Load Fragment XML
                Fragment.load({
                                    id: oView.getId(), 
                                    name: "logaligroup.invoices.view.helloDialog", 
                                    controller: oFragment 
                                }).then(function (oDialog) {
                                        oView.addDependent(oDialog);
                                        oDialog.open();
                });
            } else {
                oView.byId("helloDialog").open();
            }
        }
    });
});
