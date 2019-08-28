<!DOCTYPE html>
<html lang="en" dir="ltr">

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <title>TITLE GOES HERE</title>
    <?php wp_head(); ?>
  </head>


  <!-- <body> -->

  <body <?php body_class(); ?> >


    <div class="wrapper">

    <div class="header">

      <img src="http://localhost/ref_project_3/wp-content/uploads/2019/08/logo.png" alt="" class="logo">

      <img src="http://localhost/ref_project_3/wp-content/uploads/2019/08/header_img.png" alt="" class="logo2">

      <!-- <div class="shopping-cart">
          <a href="http://localhost/ref_project_3/cart/"><img src="http://localhost/ref_project_3/wp-content/uploads/2019/08/shopping-cart.png" alt="" class="shopping-cart-logo"></a>
      </div> -->


      <?php wp_nav_menu(array('theme_location' => 'primary')); ?>

      <?php get_sidebar(); ?>

    </div>
