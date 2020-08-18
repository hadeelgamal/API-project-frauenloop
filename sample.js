    /* This tell the browser to wait until the documemt ready before running the code. For a document to be ready all of the HTML, CSS and JS has to be loaded. */
    $(document).ready(function() {
        /* The above code gave us one user we update the url to get 20 users. */
        $.ajax({
            url: 'https://randomuser.me/api/?results=20',
            dataType: 'json',
            success: function(data) {
                console.log(data) /* The respose gives us to top level pieces of information. An array of results and info */

                /* From the data that comes back we are only interested in the array of results. Using our for/each code we examine each element in the results array*/
                $.each(data.results, function(key, value) {
                    /* the value in the results array is about an indivudal person so lets make our code a bit easier to read and assign value to a variable called person. */
                    var person = value
                    console.log(person.name.first);
                    $("#thing").append('<div class="col column" align="center">' +
                        '<img class="img" src= ' +
                        person.picture.large +
                        '>' +
                        '<p class="person">' +
                        person.name.first +
                        ' ' +
                        person.name.last +
                        '</p>' +
                        '<div class= "nat">' +
                        '<span class="flag-icon flag-icon-' + person.nat.toLowerCase() + '">' +
                        '</span>' +
                        '</div>' +
                        '<ul class="social">' +
                        '<li class="fab fa-github ' + person.gender + ' "></li>' +
                        '<li class="fab fa-facebook-f ' + person.gender + ' "></li>' +
                        '<li class="fab fa-twitter ' + person.gender + ' "></li>' +
                        '</ul>' +
                        '</div>')

                    // This another way to load the img and apend it to thing
                    // console.log(person.picture.thumbnail);
                    // $("<img />").attr('src', thumbnailUrl);
                    // var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
                    // img.attr('src', thumbnailUrl);
                    // img.appendTo('#thing');
                });
            }
        });
    });