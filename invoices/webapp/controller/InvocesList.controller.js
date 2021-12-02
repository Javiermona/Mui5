// @ts-nocheck
sap.ui.define([
        'sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel',
        '../model/InvocesFormatter',  'sap/ui/model/Filter',
        'sap/ui/model/FilterOperator'
    ],  
    /** 
 * @param { typeof sap.ui.core.mvc.Controller}  Controller
 * @param { typeof sap.ui.model.json.JSONModel}  JSONModel
 * @param { typeof sap.ui.model.Filter}Filter 
 * @param { typeof sap.ui.model.FilterOperator} FilterOperator
 */
        function (Controller, JSONModel, InvocesFormatter, Filter, FilterOperator) {
 
            return Controller.extend("logaligrup.invoices.controller.InvoicesList", {

                formatter: InvocesFormatter,

                onInit: function () {
                    var oViewModel = new JSONModel({usd: "USD", eur: "EUR"});
                    this.getView().setModel(oViewModel, "currency");
                },
                navigateToDetails: function(oEvent){
                        let oItem = oEvent.getSource();
                        let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("Details",{
                            invoicePath: window.encodeURIComponent(oItem.getBindingContext("northwind").getPath().substr(1))
                          
                        });



                },
                onFilterInvoices: function(oEvent){
                    
                      //Logica Filtro
                    const aFilter = []; //Declaramos filtro vacio  
                    const sQuerry = oEvent.getParameter("query");
                    if (sQuerry){ 
                         aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuerry ));
                        };
                            
                const oList = this.getView().byId("invoiceList");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
                    }
        });
});
