#!/bin/bash

CONFIG="config/config.json"

echo '{"ProxyPath":"'$2'"}' > $CONFIG

INDEX="index.php"

echo '<?php
/*
  Plugin Name: '$1'
  Plugin URI: #
  Description: #
  Author: #
  Version: 0.0.0

  Built using [pluginpack](https://github.com/willtpwise/pluginpack)
*/
require __DIR__ . "/inc/environment.php";
require __DIR__ . "/inc/dependencies.php";

// Delete the lines below, once your ready.
function plugin_pack_well_done() {
  ?>
  <div class="updated notice">
    <p>You"ve successfull installed the plugin pack.<br>
			Now head to <code>plugin-pack/index.php</code> and start your plugin.</p>
  </div>
  <?php
}
add_action("admin_notices", "plugin_pack_well_done");
add_action("network_admin_notices", "plugin_pack_well_done");
' > $INDEX
