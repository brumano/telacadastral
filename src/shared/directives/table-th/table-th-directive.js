App.directive('th', function () {
    return {
        restrict: 'E',
        replace: false,
        compile: function compile(element, attrs) {
            if(attrs.ngClick != undefined) {
                element.addClass('th-sort');
                element.append(' <span class="btn no-padding svg-bg-icon sort-circle_gray"></span>');
            }
        }
    };
});