import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';

registerBlockType(metadata.name, {
    edit: ({ attributes, setAttributes }) => {
        const { faqs = [] } = attributes;

        const addFAQ = () => setAttributes({ faqs: [...faqs, { id: Date.now(), question: '', answer: '' }] });
        const update = (id, field, val) => setAttributes({ faqs: faqs.map(f => f.id === id ? { ...f, [field]: val } : f) });
        const remove = (id) => setAttributes({ faqs: faqs.filter(f => f.id !== id) });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('FAQ Items', 'my-portfolio-blocks')}>
                        <Button onClick={addFAQ} variant="primary">{__('Add FAQ','my-portfolio-blocks')}</Button>
                        {faqs.map(f=> (
                            <div key={f.id} style={{border:'1px solid #eee', padding:10, marginTop:10}}>
                                <TextControl label={__('Question','my-portfolio-blocks')} value={f.question} onChange={(v)=>update(f.id,'question',v)} />
                                <TextareaControl label={__('Answer','my-portfolio-blocks')} value={f.answer} onChange={(v)=>update(f.id,'answer',v)} />
                                <Button onClick={()=>remove(f.id)} isDestructive>{__('Remove FAQ','my-portfolio-blocks')}</Button>
                            </div>
                        ))}
                    </PanelBody>
                </InspectorControls>

                <div className="faq-accordion-editor">
                    <h3>{__('FAQ Accordion', 'my-portfolio-blocks')}</h3>
                    {faqs.length === 0 ? <p>{__('No FAQs yet — add some in the block inspector.', 'my-portfolio-blocks')}</p> : (
                        <div className="faq-preview">
                            {faqs.map(f=> (
                                <div key={f.id} className="faq-item-preview"><strong>Q:</strong> {f.question || 'Question...'}<div><strong>A:</strong> {f.answer || 'Answer...'}</div></div>
                            ))}
                        </div>
                    )}
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { faqs = [] } = attributes;
        if (!faqs.length) return null;
        return (
            <div className="faq-accordion">
                {faqs.map(f => (
                    <div key={f.id} className="faq-item">
                        <div className="faq-question"><RichText.Content tagName="h4" value={f.question} /><span className="faq-toggle">+</span></div>
                        <div className="faq-answer"><RichText.Content tagName="div" value={f.answer} /></div>
                    </div>
                ))}
            </div>
        );
    }
});
