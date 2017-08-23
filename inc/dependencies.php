<?php
/**
 * Plugin static dependencies
 *
 * Enqueues static assets
 */

add_action('wp_enqueue_scripts', function () {
  $env = $GLOBALS['PLUGIN_PACK_ENV'];
  $hash = $env['NODE'] === 'production' ? $env['HASH'] : 'dev';
  $name = $env['NAME'];
  wp_enqueue_script(
    $name,
    plugin_dir_url(__FILE__) . '../dist/bundle.' . $hash . '.js'
  );
  wp_enqueue_style(
    $name,
    plugin_dir_url(__FILE__) . '../dist/bundle.' . $hash . '.css'
  );
});
