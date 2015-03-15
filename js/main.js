window.addEventListener('load', function(){
    document.querySelector('select').addEventListener('change', function(e){
        var new_category = e.srcElement.options[e.srcElement.selectedIndex].value;
        var images = document.getElementsByTagName('img');
        var re=/^.*\/[0-9]{2,3}\/[0-9]{2,3}\/(\w+)\/.*/;
        for(var i = 0 ; i < images.length ; i++) {
            var image_url = images.item(i).src;
            //find the current category for each link
            var current_category = image_url.match(re)[1];
            var new_image_url = image_url.replace(current_category,new_category);
            images.item(i).src = new_image_url;
        }
});
});

