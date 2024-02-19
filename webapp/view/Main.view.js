sap.ui.jsview("mickey.view.Main", {
    getControllerName: function () {
        return "mickey.controller.Main";
    },
    createContent: function (oController) {
        var oBtn = new sap.m.Button({
            id: "idSpiderman",
            text: "JS_BUTTON", 
            press : oController.callMe           
        });
        return oBtn;
    }
});
