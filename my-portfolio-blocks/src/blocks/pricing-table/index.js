import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';

// This block expects pricing plans to be provided via ACF fields (server-side),
// so in the editor we render a lightweight placeholder and instructions.

registerBlockType(metadata.name, {
    edit: () => {
        return (
            <div className="pricing-table-editor">
                <h3>{__('Pricing Table (ACF-driven)', 'my-portfolio-blocks')}</h3>
                <p>{__('Use the block settings (ACF fields) to configure pricing plans. ACF PRO must be active.', 'my-portfolio-blocks')}</p>
            </div>
        );
    },

    save: () => {
        // Pricing data will be rendered server-side with ACF, so save returns null.
        return null;
    }
});
