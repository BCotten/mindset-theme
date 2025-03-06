<?php

/**
 * Title: Book Review
 * Slug: mindset-theme/book-review
 * Categories: media, text
 */
?>

<!-- wp:media-text {"mediaId":14,"mediaLink":"http://localhost/mindset/yellow-flowers/","mediaType":"image","mediaWidth":40,"mediaSizeSlug":"large"} -->
<div class="wp-block-media-text is-stacked-on-mobile" style="grid-template-columns:40% auto">
  <figure class="wp-block-media-text__media"><img src=" <?php echo esc_url(get_theme_file_uri('assets/images/book-cover.jpg')) ?>"
      alt="<?php esc_html_e('Book Cover', 'mindset-theme'); ?>" class="wp-image-14 size-large" /></figure>
  <div class="wp-block-media-text__content"><!-- wp:heading -->
    <h2 class="wp-block-heading">Title</h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Author</p>
    <!-- /wp:paragraph -->

    <!-- wp:paragraph -->
    <p>Description</p>
    <!-- /wp:paragraph -->
  </div>
</div>
<!-- /wp:media-text -->