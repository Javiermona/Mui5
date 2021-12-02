
sap.ui.define(["sap/ui/model/json/JSONModel"],

/** comen
     * 
     * @param {typeof sap.ui.model.json.JSONModel } JSONModel
     */
    function (JSONModel) {
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
        }


    }

});
