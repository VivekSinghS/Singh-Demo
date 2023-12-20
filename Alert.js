var alertStrings = { confirmButtonLabel: "Got it", text: "Something happened.", title: "Alert Title" };
var alertOptions = { height: 500, width: 500 };
Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
    function success(result) {
        console.log("Alert dialog closed");
    },
    function (error) {
        console.log(error.message);
    }
);