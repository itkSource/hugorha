(function() {
    var check = function check(hiddenFilter) {
        var hash = '';
        if(window.location.hash) {
            hash = window.location.hash.split('#')[1];
            for(var i in hiddenFilter){
                if (hiddenFilter.hasOwnProperty(i)) {
                    hiddenFilter[i].style.opacity = '1';
                }
            }
        } else {
            for(var i in hiddenFilter){
                if (hiddenFilter.hasOwnProperty(i)) {
                    hiddenFilter[i].style.opacity = '';
                }
            }
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
    
    window.addEventListener('load', function() {
        var hiddenFilter = document.getElementsByClassName('hiddenFilter');
        if (hiddenFilter.length !== 0) {
            check(hiddenFilter);
            window.addEventListener('hashchange', function() {
                check(hiddenFilter);
            });
        }
    });
})()