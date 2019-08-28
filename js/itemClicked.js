jQuery(document).ready(function() {

  var lastClicked = '';

   function doMyStuff(){
     if (sessionStorage.getItem('lastClicked') == null){
       jQuery('ul.product-categories li.cat-item-16 a').css('background-color', 'red');
       jQuery('ul.product-categories li.cat-item-16 a').css('border-radius', '10px');
     }
     else {
     jQuery(sessionStorage.getItem('lastClicked')).css('background-color', 'red');
     jQuery(sessionStorage.getItem('lastClicked')).css('border-radius', '10px');
   }
 }

 doMyStuff();

   jQuery('ul.product-categories li.cat-item-16 a').click(function(e) {
     lastClicked = 'ul.product-categories li.cat-item-16 a';
     sessionStorage.setItem('lastClicked', lastClicked);
     jQuery('ul.product-categories li.cat-item-16 a').css('background-color', '');
     jQuery('ul.product-categories li.cat-item-16 a').css('border-radius', '');
     jQuery(lastClicked).css('background-color', 'red');
     jQuery(lastClicked).css('border-radius', '10px');
   });

   jQuery('ul.product-categories li.cat-item-17 a').click(function(e) {
     lastClicked = 'ul.product-categories li.cat-item-17 a';
     sessionStorage.setItem('lastClicked', lastClicked);
     jQuery('ul.product-categories li.cat-item-16 a').css('background-color', '');
     jQuery('ul.product-categories li.cat-item-16 a').css('border-radius', '');
     jQuery(lastClicked).css('background-color', 'red');
     jQuery(lastClicked).css('border-radius', '10px');
   });

   jQuery('ul.product-categories li.cat-item-18 a').click(function(e) {
     lastClicked = 'ul.product-categories li.cat-item-18 a';
     sessionStorage.setItem('lastClicked', lastClicked);
     jQuery('ul.product-categories li.cat-item-16 a').css('background-color', '');
     jQuery('ul.product-categories li.cat-item-16 a').css('border-radius', '');
     jQuery(lastClicked).css('background-color', 'red');
     jQuery(lastClicked).css('border-radius', '10px');
   });

   jQuery('ul.product-categories li.cat-item-19 a').click(function(e) {
     lastClicked = 'ul.product-categories li.cat-item-19 a';
     sessionStorage.setItem('lastClicked', lastClicked);
     jQuery('ul.product-categories li.cat-item-16 a').css('background-color', '');
     jQuery('ul.product-categories li.cat-item-16 a').css('border-radius', '');
     jQuery(lastClicked).css('background-color', 'red');
     jQuery(lastClicked).css('border-radius', '10px');
   });

   jQuery('ul.product-categories li.cat-item-20 a').click(function(e) {
     lastClicked = 'ul.product-categories li.cat-item-20 a';
     sessionStorage.setItem('lastClicked', lastClicked);
     jQuery('ul.product-categories li.cat-item-16 a').css('background-color', '');
     jQuery('ul.product-categories li.cat-item-16 a').css('border-radius', '');
     jQuery(lastClicked).css('background-color', 'red');
     jQuery(lastClicked).css('border-radius', '10px');
   });

   jQuery('ul.product-categories li.cat-item-21 a').click(function(e) {
     lastClicked = 'ul.product-categories li.cat-item-21 a';
     sessionStorage.setItem('lastClicked', lastClicked);
     jQuery('ul.product-categories li.cat-item-16 a').css('background-color', '');
     jQuery('ul.product-categories li.cat-item-16 a').css('border-radius', '');
     jQuery(lastClicked).css('background-color', 'red');
     jQuery(lastClicked).css('border-radius', '10px');
   });

   jQuery('ul.product-categories li.cat-item-22 a').click(function(e) {
     lastClicked = 'ul.product-categories li.cat-item-22 a';
     sessionStorage.setItem('lastClicked', lastClicked);
     jQuery('ul.product-categories li.cat-item-16 a').css('background-color', '');
     jQuery('ul.product-categories li.cat-item-16 a').css('border-radius', '');
     jQuery(lastClicked).css('background-color', 'red');
     jQuery(lastClicked).css('border-radius', '10px');
   });

});
