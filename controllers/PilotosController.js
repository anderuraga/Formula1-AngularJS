var PilotosController = (function () {
    function PilotosController($scope, clasificacionMundial) {
        this.$scope = $scope;
        this.driversList = [];
        this.nameFilter = "";
        console.debug('PilotosController constructor,tom cambio');
        $scope.vm = this;
        this.driversList = clasificacionMundial;
    }
    PilotosController.$inject = ["$scope", "clasificacionMundial"];
    return PilotosController;
}());
//# sourceMappingURL=PilotosController.js.map