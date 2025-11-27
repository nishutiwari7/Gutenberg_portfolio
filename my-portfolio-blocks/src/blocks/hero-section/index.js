import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, RangeControl, ColorPicker, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';

registerBlockType(metadata.name, {
    edit: ({ attributes, setAttributes }) => {
        const { title, description, buttonText, buttonUrl, backgroundImage, overlayColor, overlayOpacity, textColor } = attributes;

        const onSelectImage = (image) => setAttributes({ backgroundImage: image });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Background Settings', 'my-portfolio-blocks')}>
                        <BaseControl label={__('Background Image', 'my-portfolio-blocks')}>
                            <MediaUpload onSelect={onSelectImage} type="image" value={backgroundImage?.id} render={({ open }) => (
                                <div>
                                    {!backgroundImage && (<Button onClick={open}>{__('Select Background Image','my-portfolio-blocks')}</Button>)}
                                    {backgroundImage && (<div><img src={backgroundImage.url} style={{maxWidth:'100%'}} alt=""/></div>)}
                                </div>
                            )} />
                        </BaseControl>

                        <RangeControl label={__('Overlay Opacity','my-portfolio-blocks')} value={overlayOpacity} onChange={(val)=>setAttributes({overlayOpacity: val})} min={0} max={1} step={0.1} />
                        <ColorPicker color={overlayColor} onChange={(val)=>setAttributes({overlayColor: val})} />
                    </PanelBody>
                </InspectorControls>

                <div className="hero-section-editor" style={{ minHeight: '300px', backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <div style={{ textAlign: 'center', color: textColor }}>
                        <RichText tagName="h2" value={title} onChange={(val)=>setAttributes({title: val})} placeholder={__('Enter title...', 'my-portfolio-blocks')} />
                        <RichText tagName="p" value={description} onChange={(val)=>setAttributes({description: val})} placeholder={__('Enter description...', 'my-portfolio-blocks')} />
                        <RichText tagName="span" value={buttonText} onChange={(val)=>setAttributes({buttonText: val})} placeholder={__('Button text...', 'my-portfolio-blocks')} style={{display:'inline-block', padding: '10px 20px', backgroundColor:'#007cba', color:'#fff', borderRadius: 4}} />
                    </div>
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { title, description, buttonText, buttonUrl, backgroundImage, overlayColor, overlayOpacity, textColor } = attributes;
        return (
            <div className="hero-section" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none' }}>
                <div className="hero-overlay" style={{ backgroundColor: overlayColor, opacity: overlayOpacity }} />
                <div className="hero-content" style={{ color: textColor }}>
                    <RichText.Content tagName="h2" value={title} />
                    <RichText.Content tagName="p" value={description} />
                    {buttonText && (<a href={buttonUrl || '#'} className="hero-button"><RichText.Content tagName="span" value={buttonText} /></a>)}
                </div>
            </div>
        );
    }
});
