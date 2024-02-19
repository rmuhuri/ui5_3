sap.ui.define(['sap/ui/core/mvc/Controller'],
  function (Controller) {
    return Controller.extend('mickey.controller.Main', {
      //global varibale, any function of the controller can use this.
      rishi: 100,
      onInit: function () {
        this.rishi = this.rishi + 100;
        console.log("global variable + 100 = " + this.rishi);
      },
      onBeforeRendering: function(){
        
       this.getView().byId("idSal").setValue("999");
    },
      onAfterRendering: function () { 
      $("#idMainXML--idSal").fadeOut(5000).fadeIn(1000).fadeOut(100);
      console.log('hello');
      },


      
      
      anotherFX: function () {
        var oView = this.getView();
        var z = oView.byId("idInp").getValue();
        alert(z);
      }
    });
  });