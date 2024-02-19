sap.ui.define(['sap/ui/core/mvc/Controller'],
    function (Controller) {
        return Controller.extend('mickey.controller.Main', {
            callMe: function () {
                //In JSON views you can do this 
                var oCore = sap.ui.getCore();
                var oBtn = oCore.byId("idSpiderman");
                oBtn.setText('xyz');
                //get the changed text
                var z = oBtn.getText();
                alert(z);
            },
            anotherFX: function(){
              //XML View function, Notice the id of inputfield is appended by the name of the view and --
                var x = sap.ui.getCore().byId("idMainXML--idInp").getValue();
                alert(x);  
              // in XML view if you want to avoid the earlier messy situation , do this  
                var oView = this.getView();
                var z =  oView.byId("idInp").getValue();
                alert(z); 
            }
        });
    });