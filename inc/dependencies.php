<?php
/**
 * Plugin static dependencies
 *
 * Enqueues static assets
 */

add_action('enqueue_scripts', function () {
  $hash = $GLOBALS['PLUGIN_PACK_ENV']['HASH'];
  $name = $GLOBALS['PLUGIN_PACK_ENV']['NAME'];
  wp_enqueue_script(
    $name,
    plugin_dir_url(__FILE__) . '/dist/bundle.' . $hash . '.js'
  );
  wp_enqueue_style(
    $name,
    plugin_dir_url(__FILE__) . '/dist/bundle.' . $hash . '.js'
  );
});
