<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_headless_store' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3;yPPC7aL.*dMj6,(ER1m^vMkY0)V_S`(r@5[h&/=|~HZ3XO3qrGz]Pj@>3xE%3=' );
define( 'SECURE_AUTH_KEY',  'ihA`[6~ :,<}a$L=J&=v!Dx31@/i8WtO9_@vll3%Aq:ZY:l1N^Q;VxC37@~#jZ/,' );
define( 'LOGGED_IN_KEY',    '|()p`!,Y,|0A@SH}=HTb>yf]dE/>;2_QC3BF2f|N61:Fo]:`z]7fdd0#r%Y33y+?' );
define( 'NONCE_KEY',        '*Ttb Wv~`JP;6 KCHOc&-O@>+jQK,cmdT`:$%sWWgqhd}nt#scajRvJV4ZzwNVXv' );
define( 'AUTH_SALT',        '`)J&QZ(/jga2^8Xoo%4:lo;y},]G j/7.R;Hb;dArdCC0>}h#C#?XvAYLN!wB&I:' );
define( 'SECURE_AUTH_SALT', 'rf&k~[~dP>5d:#^N|)3},w}<;g67hgv)GKsniTfTO<:)y{::qk`kYvkpc|KD5O9j' );
define( 'LOGGED_IN_SALT',   ',Oo`.;x/Zo6qlK.BSIk25V^Ui~n^H^(ed9iHjm6-$QsJTYE6N)wbruYVoTMEDj3v' );
define( 'NONCE_SALT',       'kx+et?%C(Tr<{Ld|-20zfh%B.C+c1YW.</UEbww,sFDPk|Z%xZ=2$L[J)4pCd~=p' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
