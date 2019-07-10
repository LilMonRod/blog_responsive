echo.init({
    callback: function (element, op) {
        console.log(element, 'has been', op + 'ed')
    }
});

// echo.render(); is also available for non-scroll callbacks
