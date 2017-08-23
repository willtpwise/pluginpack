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
  $path = str_replace(plugin_dir_url(__FILE__), '../', '/');
  wp_enqueue_script(
    $name,
    $path . 'dist/bundle.' . $hash . '.js'
  );
  wp_enqueue_style(
    $name,
    $path . 'dist/bundle.' . $hash . '.css'
  );
});
