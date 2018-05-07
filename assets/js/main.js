function main() {

  (function () {
     'use strict';
  
        $("#album__id").owlCarousel({
       
            navigation : false, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            autoHeight : true,
            itemsCustom : [
                  [0, 1],
                  [450, 2],
                  [600, 2],
                  [700, 2],
                  [1000, 4],
                  [1200, 5],
                  [1400, 5],
                  [1600, 5]
                ],
        });
         $("#playlist__id").owlCarousel({
            navigation : false, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            autoHeight : true,
            itemsCustom : [
                  [0, 1],
                  [450, 2],
                  [600, 2],
                  [700, 2],
                  [1000, 4],
                  [1200, 5],
                  [1400, 5],
                  [1600, 5]
                ],
        });

        $("#genre__id").owlCarousel({
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          autoHeight : true,
          itemsCustom : [
                [0, 1],
                [450, 2],
                [600, 2],
                [700, 2],
                [1000, 4],
                [1200, 5],
                [1400, 5],
                [1600, 5]
              ],
      });
  }());

  }
  main();
