(function() {
    var check = function check() {
        var hash = '';
        if(window.location.hash) {
            hash = window.location.hash.split('#')[1];
            document.getElementsByClassName('hiddenFilter')[0].style.opacity = '1';
        } else {
            document.getElementsByClassName('hiddenFilter')[0].style.opacity = '';
        }
        var articles = document.getElementsByClassName('card');
        for(var i=0, len=articles.length; i<len; i++) {
            var tags = articles[i].getElementsByClassName('card-tag');
            var found = false;
            for(var c=0, len2=tags.length; c<len2 && found === false; c++) {
                if(tags[c].innerHTML.search(hash) === -1) {
                    articles[i].style.display = 'none';
                } else {
                    articles[i].style.display = '';
                    found = true;
                }
            }
        }
    };
    window.addEventListener('hashchange', function() {
        check();
    });
    window.addEventListener('load', function() {
        check();
    });
})()