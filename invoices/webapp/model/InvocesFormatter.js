// @ts-nocheck
sap.ui.define([ ], 
    function(){
        return {
                invoceStatus: function(sStatus){
                    const resourceBundle = this.getView().getModel("i18n").getResourceBundle();
                   switch (sStatus) {
                        case 'A':return resourceBundle.getText("InvoceStatusA");
                        case 'B':return resourceBundle.getText("InvoceStatusB");
                        case 'C':return resourceBundle.getText("InvoceStatusC");
                    default: return resourceBundle.getText("InvoceStatusA"); // sStatus;
                   } 

                }


        }




    });