
// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller", //Module
 ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller}  Controller  
      */
    function (Controller   ) {
        "use strict"
        return Controller.extend("logaligroup.invoices.controller.App", {
            //Logica que devolvemos
       onInit: function(){
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
                        
                            }, //
        onOpenDialog: function(){
            this.getOwnerComponent().openHelloDialog();
        
        }
                    
        });

    });