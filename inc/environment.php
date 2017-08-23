<?php
/**
 * Environment config
 *
 * Handles the interaction between Webpack and runtime PHP
 */

$env = __DIR__ . '/../dist/config/environment.json';
$env = file_get_contents($env);
$env = json_decode($env);

$GLOBALS['PLUGIN_PACK_ENV'] = $env;

// You can now access Webpack variables in `config/environment.json.js` using
// the global array 'PLUGIN_PACK_ENV'
// E.g. $GLOBALS['PLUGIN_PACK_ENV']['HASH']
