// http://stackoverflow.com/questions/12536354/bootstrap-affix-plugin-with-fluid-layout
$(document).ready(function() {
    $('.sidebar-menu').each(function() {
        var elem = $(this);
        var parent = elem.parent();
        var resizeFn = function() {
            var width = $(parent).width() - parseInt(elem.css('paddingLeft')) - parseInt(elem.css('paddingRight')) - parseInt(elem.css('marginLeft')) - parseInt(elem.css('marginRight')) - parseInt(elem.css('borderLeftWidth')) - parseInt(elem.css('borderRightWidth'));
            elem.css('width', width);
        };
        resizeFn();
        $(window).resize(resizeFn);
    });
});
