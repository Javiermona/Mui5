// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller", //Module
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"  
 ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller}  Controller  
     * @param {typeof sap.ui.core.routing.History}  History 
     *  @param {typeof sap.ui.core.UIComponent}  UIComponent     
      */
    function ( Controller, History, UIComponent ) {
        "use strict"
        return Controller.extend("logaligroup.invoices.controller.Details", {
            
            _onObjectMatch: function(oEvent){
              this.getView().byId('rating').reset();

                this.getView().bindElement({
            path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
            model: "northwind"
                });
              
                
            },
            //Logica que devolvemos
                onInit: function(){
                    let oRouter = sap.ui.core.UIComponent.getRouterFor(this);         
                    oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatch, this);

                },
        
        onNavBack: function(){

            let oHistory = History.getInstance();
            let sPreviousHash =    oHistory.getPreviousHash();
             if ( sPreviousHash !== undefined )   {
                 // back a la llamada anterior, tomando el historial
                 window.history.go(-1); 
                } else {
                    // Volver al index.
                let oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("RouteApp",{}, true);
                }
               
     },

     onRatingChange: function(oEvent){ 

       var fValue = oEvent.getParameter("value");
       var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
        sap.m.MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));

     }
     
        });

    });