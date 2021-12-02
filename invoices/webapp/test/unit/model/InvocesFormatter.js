// @ts-nocheck
sap.ui.define([
"logaligroup/invoices/model/InvocesFormatter",
"sap/ui/model/resource/ResourceModel" 
], 
/**
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 */
    function(InvocesFormatter, ResourceModel){
     QUnit.module("QUnit Invoces", { 
     
     beforeEach: function(){
         this._oResourceModel = new ResourceModel({
            bundleUrl: sap.ui.require.toUrl("logaligroup/invoices") + "/i18n/i18n.properties"      });
        },
     afterEach: function() {
        this._oResourceModel.destroy();
     } 
    });
    
QUnit.test("shold return the invoice Status", function(assert){
    let oModel = this.stub();
    oModel.withArgs("i18n").returns(this._oResourceModel);
    let oViewStub = {  getModel: oModel };
    let oContrellerStub = { getView : this.stub().returns(oViewStub) };
    let fnIsolatedFormatter = InvocesFormatter.invoceStatus.bind(oContrellerStub);
    //Assert  
    assert.strictEqual(fnIsolatedFormatter("A"), "New"        , "Teh invoces the status is correct");
    assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "Teh invoces the status is correct");
    assert.strictEqual(fnIsolatedFormatter("C"), "Done"       , "Teh invoces the status is correct");
});

});
