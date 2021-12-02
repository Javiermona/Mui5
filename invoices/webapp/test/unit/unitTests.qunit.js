/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () { //Cargamos dependencia de los modulos
	"use strict"; 

	sap.ui.require([ //traemos dependencia 
		"logaligroup/invoices/test/unit/AllTests"
	], function () {

		QUnit.start();
	})
});
