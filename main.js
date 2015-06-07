function getLikeText() {
    var random = Math.random();
    if (random < 0.5) {
        return 'I\'ll allow it';
    } else {
        return 'I validate your existence';
    }
}

function getUnlikeText() {
    var random = Math.random();
    if (random < 0.5) {
        return 'I won\'t allow it';
    } else {
        return 'I don\'t validate your existence';
    }
}

function replaceLikes() {
    var spans = $('span');
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        var text = $(span).html();
        if (text === 'Like') {
            $(span).html(getLikeText());
        }
        if (text === 'Unlike') {
            $(span).html(getUnlikeText());
        }
    }
}

$('body').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    replaceLikes();
});