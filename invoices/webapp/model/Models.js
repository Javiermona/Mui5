
sap.ui.define(["sap/ui/model/json/JSONModel",
               "sap/ui/Device"
],

/** comen
     * 
     * @param {typeof sap.ui.model.json.JSONModel } JSONModel
     * @param {typeof sap.ui.Device } Device
     */
    function (JSONModel, Device) {
    "use strict";


    return {
        createRecipient: function () {
            var oData = {
                recipient: {
                    name: "Wold"
                }
            };
            // Json model
            return new JSONModel(oData);
        },

            CreateDeviceModel: function(){
                    let oModel = new JSONModel(Device);
                    oModel.setDefaultBindingMode("OneWay");
                    return oModel; 
        }   




    }

});
