/*global QUnit*/

sap.ui.define([
    "logaligroup/invoices/localService/mockserver", 
    "sap/ui/test/opaQunit", 
    "./pages/HelloPenal"

], function (mockserver, opaQunit) {
 
    QUnit.module("Navigation");

    opaQunit("Should see the initial page of the app", function (Given, When, Then) {
         // inicializamos mockserver
      mockserver.init();

        // Arrangements
        Given.iStartMyUIComponent({
            componentConfig: {
                name: "logaligroup.invoices"        }
        });

        // Assertions
        When.onTheAppPage.iSayHelloDialogButton();
        Then.onTheAppPage.iSeeTheHelloDialog();
        // Cleanup
        Then.iTeardownMyApp();

    });     
});
