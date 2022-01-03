app.controller('tableCtrl', function ($scope) {
    $scope.item = [
        {
            "name": "pampapathi",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "mounesha",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "akshaya kumar",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "mahendra",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "praoudadevaraya",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "krishnadevaraya",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "pulikeshi",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "lalitaditya",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "raja singh",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "bharat",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "shiva",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "pruthwi raj chauhan",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "sita",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "laxman",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "rama",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "krishna",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "vikramaditya",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "pushyamitra sunga",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "ashok",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "thayagi",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "pavitra",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "kamlesh",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "pawan",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "suresh",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
        {
            "name": "ravi",
            "city": "bellary",
            "phonenumber": "123456",
            "age": "25"
        },
    ];
    $scope.viewby = 10;
    $scope.totalItems = $scope.item.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 5; //Number of pager buttons to show

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.setItemsPerPage = function (num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first paghe
    }
});