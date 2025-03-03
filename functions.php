<?php
function mindset_enqueues() {
	// Load style.css on the front-end
	// Parameters: Unique handle, Source, Dependencies, Version number, Media
	wp_enqueue_style(
		'mindset-style',
		get_stylesheet_uri(),
		array(),
		wp_get_theme()->get( 'Version' ),
		'all'
	);

  // Lord Normalize
  wp_enqueue_style(
    'mindset-normalize',
    'https://unpkg.com/@csstools/normalize.css',
    array(),
    '12.1.0'
  );

  // Load scroll-to-top.js on the front-end
  wp_enqueue_script(
    'mindset-scroll-to-top',
    get_theme_file_uri( 'assets/js/scroll-to-top.js' ),
    array(),
    wp_get_theme()->get( 'Version' ),
    array( 'strategy' => 'defer' )
  );

  // Load contact.js on the front-end
  if ( is_page( 34 ) ) {
    wp_enqueue_script(
      'mindset-contact-scripts',
      get_theme_file_uri( 'assets/js/contact.js'),
      array( 'mindset-scroll-to-top' ), // dependency declared here
      wp_get_theme()->get( 'Version' ),
      array( 'strategy' => 'defer' )
    );
  }
}
add_action( 'wp_enqueue_scripts', 'mindset_enqueues' );

function mindset_setup() {
  // Loads style.css on the back-end editor
	add_editor_style( get_stylesheet_uri() );

  // Add custom image sizes
  // Crop images to 400px by 500px
  add_image_size( '400x500', 400, 500, true );
  // Crop images to 200px by 250px
  add_image_size( '200x250', 200, 250, true );
  add_image_size( '800x400', 800, 400, true );
  add_image_size( '400x200', 400, 200, true );
}
add_action( 'after_setup_theme', 'mindset_setup' );

// Make Custom sizes selectable fro wordpress admin.
function mindset_add_custom_image_sizes( $size_names ) {
	$new_sizes = array(
    '800x400' => __( '800x400', 'mindset-theme' ),
		'400x200' => __( '400x200', 'mindset-theme' ),
		'400x500' => __( '400x500', 'mindset-theme' ),
		'200x250' => __( '200x250', 'mindset-theme' ),
	);
	return array_merge( $size_names, $new_sizes );
}
add_filter( 'image_size_names_choose', 'mindset_add_custom_image_sizes' );

// Load custom blocks
require get_theme_file_path() . '/mindset-blocks/mindset-blocks.php';