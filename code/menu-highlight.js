$(document).ready(function() {
    var currentPath = window.location.pathname;
    $('nav.sidebar-menu a').each(function() {
        var elem = $(this);
        var targetPath = elem.attr('href');
        if (currentPath == targetPath) {
            elem.parent().addClass('active');
        }
    });
});
