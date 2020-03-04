jQuery(document).ready(function() {
    jQuery('.headerCart').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounce',
        offset: 0
    });
    
    jQuery('.topBannerWrap').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });

    jQuery('.offers').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('.featuredItemsWrap').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.featuredAllProductsBtn').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 300
    });

    jQuery('.offerForWomen').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated jackInTheBox',
        offset: 300
    });

    jQuery('.reviews').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });

    jQuery('.subscribeRight').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 300
    });

    jQuery('footer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.benefits').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('.modelSliderLeftArrow, .modelSliderRightArrow').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.modelData').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('.alsoLike').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.checkOutWrap').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.checkOutData').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: -10
    });

});