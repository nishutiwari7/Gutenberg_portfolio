<?php
/**
 * Plugin Name: My Portfolio Blocks
 * Description: Custom Gutenberg blocks for portfolio websites.
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('MY_PORTFOLIO_BLOCKS_VERSION', '1.0.0');
define('MY_PORTFOLIO_BLOCKS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('MY_PORTFOLIO_BLOCKS_PLUGIN_PATH', plugin_dir_path(__FILE__));

// Register ACF fields for Pricing Table
add_action('acf/include_fields', function() {
    if (!function_exists('acf_add_local_field_group')) return;

    acf_add_local_field_group(array(
        'key' => 'group_pricing_table',
        'title' => 'Pricing Table',
        'fields' => array(
            array(
                'key' => 'field_pricing_plans',
                'label' => 'Pricing Plans',
                'name' => 'pricing_plans',
                'type' => 'repeater',
                'layout' => 'block',
                'sub_fields' => array(
                    array(
                        'key' => 'field_plan_name',
                        'label' => 'Plan Name',
                        'name' => 'plan_name',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_plan_price',
                        'label' => 'Price',
                        'name' => 'plan_price',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_plan_period',
                        'label' => 'Period',
                        'name' => 'plan_period',
                        'type' => 'text',
                        'placeholder' => '/month, /year, etc.',
                    ),
                    array(
                        'key' => 'field_plan_features',
                        'label' => 'Features',
                        'name' => 'plan_features',
                        'type' => 'textarea',
                        'instructions' => 'Enter each feature on a new line',
                    ),
                    array(
                        'key' => 'field_plan_button_text',
                        'label' => 'Button Text',
                        'name' => 'plan_button_text',
                        'type' => 'text',
                        'default_value' => 'Get Started',
                    ),
                    array(
                        'key' => 'field_plan_button_url',
                        'label' => 'Button URL',
                        'name' => 'plan_button_url',
                        'type' => 'url',
                    ),
                    array(
                        'key' => 'field_plan_featured',
                        'label' => 'Featured Plan',
                        'name' => 'plan_featured',
                        'type' => 'true_false',
                        'default_value' => 0,
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'block',
                    'operator' => '==',
                    'value' => 'my-portfolio-blocks/pricing-table',
                ),
            ),
        ),
    ));
});

// Enqueue block assets
add_action('init', function() {
    register_block_type(__DIR__ . '/build/blocks/hero-section');
    register_block_type(__DIR__ . '/build/blocks/testimonial-carousel');
    register_block_type(__DIR__ . '/build/blocks/pricing-table');
    register_block_type(__DIR__ . '/build/blocks/team-grid');
    register_block_type(__DIR__ . '/build/blocks/faq-accordion');
});

// Enqueue frontend styles and scripts
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style(
        'my-portfolio-blocks-frontend',
        MY_PORTFOLIO_BLOCKS_PLUGIN_URL . 'build/style-index.css',
        array(),
        MY_PORTFOLIO_BLOCKS_VERSION
    );
    
    wp_enqueue_script(
        'my-portfolio-blocks-frontend',
        MY_PORTFOLIO_BLOCKS_PLUGIN_URL . 'build/frontend.js',
        array(),
        MY_PORTFOLIO_BLOCKS_VERSION,
        true
    );
});
