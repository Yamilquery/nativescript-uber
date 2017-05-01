"use strict";
var uber_view_common_1 = require("./uber-common");

/*
var UberDelegateImp = (function (_super) {
	__extends(UberDelegateImp, _super);
	function UberDelegateImp() {
        _super.apply(this, arguments);
    }

	function applyUberToView(view) {
		let location = CLLocation(latitude: 37.787654, longitude: -122.402760)
		let parameters = RideParametersBuilder().setPickupLocation(location).build()
		let rideRequestView = RideRequestView(rideParameters: parameters, frame: view.bounds)
		view.addSubview(rideRequestView);
	}
});
*/

var UberView = (function (_super) {
    __extends(UberView, _super);
    function UberView() {
        _super.call(this);
        /*
        this._markers = [];
        this._shapes = [];
        this._ios = GMSMapView.mapWithFrameCamera(CGRectZero, this._createCameraPosition());
        */
    }

    function applyUberToView(view) {
		let location = CLLocation(latitude: 37.787654, longitude: -122.402760)
		let parameters = RideParametersBuilder().setPickupLocation(location).build()
		let rideRequestView = RideRequestView(rideParameters: parameters, frame: view.bounds)
		view.addSubview(rideRequestView);
	}

    return UberView;
}(uber_view_common_1.UberView));
exports.UberView = UberView;