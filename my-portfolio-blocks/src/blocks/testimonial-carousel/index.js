import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';

registerBlockType(metadata.name, {
    edit: ({ attributes, setAttributes }) => {
        const { testimonials = [] } = attributes;

        const addTestimonial = () => setAttributes({ testimonials: [...testimonials, { id: Date.now(), content: '', author: '', position: '' }] });
        const update = (id, field, value) => setAttributes({ testimonials: testimonials.map(t => t.id === id ? { ...t, [field]: value } : t) });
        const remove = (id) => setAttributes({ testimonials: testimonials.filter(t => t.id !== id) });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Testimonials', 'my-portfolio-blocks')}>
                        <Button onClick={addTestimonial} variant="primary">{__('Add Testimonial','my-portfolio-blocks')}</Button>
                        {testimonials.map(t => (
                            <div key={t.id} style={{border:'1px solid #eee', padding:10, marginTop:10}}>
                                <TextareaControl label={__('Content','my-portfolio-blocks')} value={t.content} onChange={(v)=>update(t.id,'content',v)} />
                                <TextControl label={__('Author','my-portfolio-blocks')} value={t.author} onChange={(v)=>update(t.id,'author',v)} />
                                <TextControl label={__('Position','my-portfolio-blocks')} value={t.position} onChange={(v)=>update(t.id,'position',v)} />
                                <Button onClick={()=>remove(t.id)} isDestructive>{__('Remove','my-portfolio-blocks')}</Button>
                            </div>
                        ))}
                    </PanelBody>
                </InspectorControls>

                <div className="testimonial-carousel-editor">
                    <h3>{__('Testimonial Carousel','my-portfolio-blocks')}</h3>
                    {testimonials.length === 0 ? <p>{__('No testimonials yet — add some in the block inspector.', 'my-portfolio-blocks')}</p> : (
                        <div className="testimonial-preview">
                            {testimonials.map(t => (
                                <div key={t.id} className="testimonial-slide"><blockquote>"{t.content || 'Testimonial content...'}"</blockquote><cite>{t.author} {t.position && `, ${t.position}`}</cite></div>
                            ))}
                        </div>
                    )}
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { testimonials = [] } = attributes;
        if (!testimonials.length) return null;
        return (
            <div className="testimonial-carousel">
                <div className="testimonial-slides">
                    {testimonials.map((t, i) => (
                        <div key={t.id} className={`testimonial-slide ${i === 0 ? 'active' : ''}`} data-slide={i}><div className="testimonial-content">"{t.content}"</div><div className="testimonial-author"><strong>{t.author}</strong>{t.position && `, ${t.position}`}</div></div>
                    ))}
                </div>
                {testimonials.length > 1 && (
                    <>
                        <button className="carousel-prev">‹</button>
                        <button className="carousel-next">›</button>
                        <div className="carousel-dots">{testimonials.map((t, i) => <button key={t.id} className={`carousel-dot ${i === 0 ? 'active' : ''}`} data-slide={i}></button>)}</div>
                    </>
                )}
            </div>
        );
    }
});
