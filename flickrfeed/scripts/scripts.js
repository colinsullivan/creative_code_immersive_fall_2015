/**
 *  @file       scripts.js
 *
 *  @desc       This is a basic example of loading photos from a flickr feed
 *              into a webpage using jQuery.
 **/

/**
 *  First, lets use jQuery to determine when the page has loaded.
 **/
$(document).ready(function () {

  /**
   * Once the page has loaded, lets load our pictures into it.  We will use
   * jQuery's `getJSON` method.  For more info on how getJSON works, check
   * out the "ajax" section of the jQuery learning center:
   *
   *    http://learn.jquery.com/ajax/
   **/
  $.getJSON(
    /**
     * first argument to `getJSON` is the URL we are using as a data source.
     * Here we use flickr's public photo feed.
     **/
    "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",

    /**
     * the second argument to `getJSON` is an object containing the parameters
     * to send along to the data source.  Here, we are telling flickr we want
     * cat photos, and the response formatted in JSON.  For more info on these
     * parameters, see the flickr documentation:
     * 
     *    https: *www.flickr.com/services/feeds/docs/photos_public/
     **/
    {
      tags: "cats",
      tagmode: "any",
      format: "json"
    }

  /**
   * now, we can focus on what happens when we get the data back from Flickr.
   * Using jQuery conventions, we pass a callback function to the `done` 
   * method, which will be used to process the data we get back from Flickr.
   **/
  ).done(function (data) {

    /**
     * we can print the data we receive from Flickr to the console, this will
     * make it much easier to determine how to use it.  Check out how you
     * can navigate this object in your web browser's JavaScript console.
     **/
    console.log(data);

    /**
     * Looks like each of the photos returned is an element in the `data.items`
     * array, so lets loop over those items.  Here we use jQuery's `each`
     * method, which runs a callback function for each item.
     **/
    $.each(data.items, function (i, item) {
      /**
       * for each photo, lets render some HTML elements to the page using
       * jQuery.
       *
       * first, lets create an <a> element which links to the photo itself.
       * It looks like this:
       * 
       *    <a href="..."></a>
       * 
       * Here we use the jQuery syntax for creating HTML elements, as opposed
       * to using simple strings.  For more info on this, check out the 
       * "Using jQuery Core" section of the jQuery learning center:
       *
       *    http: *learn.jquery.com/using-jquery-core/
       *
       * This syntax means, create an <a> element, and set its `href` attribute
       * equal to `item.link`.
       **/
      var photoLinkElement = $("<a>").attr("href", item.link);

      /**
       * now lets put stuff inside the <a> element.  We will use the jQuery
       * `append` method, passing in what we would like to be inside the
       * opening and closing <a> tags.
       **/
      photoLinkElement.append(
        /**
         * inside, lets create an element that looks like this:
         *
         *    <div class="mypicture" style="background-image: url(...)"></div>
         *
         * It will have the `mypicture` class so we can use our CSS file to
         * apply styles to all of them at once.  It also includes the `style`
         * attribute so we can define styles that are just for this element,
         * in this case, the background image is the URL of the image that
         * Flickr provided us.
         **/
        $("<div>")
          .attr("class", "mypicture")
          .css("background-image", "url(" + item.media.m + ")")

      /**
       * Now we are done with inside our <a> element (notice the closing
       * parenthesis, ending the call to `append`)
       **/
      );

      /**
       * Now back to our <a> element, lets append it to the "#wrapper" div
       * in our HTML, actually putting it on the screen.
       **/
      photoLinkElement.appendTo("#wrapper");
    });
  });
});
