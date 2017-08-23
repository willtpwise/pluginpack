<?php
/*
  Plugin Name: Plugin Pack
  Plugin URI: https://www.williamwise.net/
  Description: Pluginpack for Wordpress and Webpack
  Author: Will Wise
  Version: 0.0.0
*/
require __DIR__ . '/inc/environment.php';
require __DIR__ . '/inc/dependencies.php';

// Delete the lines below, once your ready.
function plugin_pack_well_done() {
  ?>
  <div class="updated notice">
    <p>You've successfull installed the plugin pack.<br>
			Now head to <code>plugin-pack/index.php</code> and start your plugin.</p>
  </div>
  <?php
}
add_action('admin_notices', 'plugin_pack_well_done');
add_action('network_admin_notices', 'plugin_pack_well_done');
