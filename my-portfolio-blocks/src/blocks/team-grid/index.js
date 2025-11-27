import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, MediaUpload, RichText } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, TextareaControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';

registerBlockType(metadata.name, {
    edit: ({ attributes, setAttributes }) => {
        const { teamMembers = [], columns = 3 } = attributes;

        const addMember = () => setAttributes({ teamMembers: [...teamMembers, { id: Date.now(), name: '', position: '', bio: '', image: null, socialLinks: { linkedin:'', twitter:'', email:'' } }] });
        const update = (id, field, val) => setAttributes({ teamMembers: teamMembers.map(m => m.id === id ? { ...m, [field]: val } : m) });
        const updateImg = (id, img) => setAttributes({ teamMembers: teamMembers.map(m => m.id === id ? { ...m, image: img } : m) });
        const remove = (id) => setAttributes({ teamMembers: teamMembers.filter(m => m.id !== id) });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Grid Settings', 'my-portfolio-blocks')}>
                        <RangeControl value={columns} onChange={(val)=>setAttributes({columns:val})} label={__('Columns','my-portfolio-blocks')} min={1} max={4} />
                    </PanelBody>
                    <PanelBody title={__('Team Members', 'my-portfolio-blocks')}>
                        <Button onClick={addMember} variant="primary">{__('Add Team Member','my-portfolio-blocks')}</Button>
                        {teamMembers.map(m=> (
                            <div key={m.id} style={{border:'1px solid #ddd', padding:10, marginTop:10}}>
                                <MediaUpload onSelect={(img)=>updateImg(m.id,img)} render={({open})=> <Button onClick={open}>{m.image ? 'Change Photo' : 'Add Photo'}</Button>} />
                                <TextControl label={__('Name','my-portfolio-blocks')} value={m.name} onChange={(v)=>update(m.id,'name',v)} />
                                <TextControl label={__('Position','my-portfolio-blocks')} value={m.position} onChange={(v)=>update(m.id,'position',v)} />
                                <TextareaControl label={__('Bio','my-portfolio-blocks')} value={m.bio} onChange={(v)=>update(m.id,'bio',v)} />
                                <Button onClick={()=>remove(m.id)} isDestructive>{__('Remove Member','my-portfolio-blocks')}</Button>
                            </div>
                        ))}
                    </PanelBody>
                </InspectorControls>

                <div className="team-grid-editor">
                    <h3>{__('Team Grid','my-portfolio-blocks')}</h3>
                    {teamMembers.length === 0 ? <p>{__('No team members — add them in the inspector.', 'my-portfolio-blocks')}</p> : (
                        <div style={{display:'grid', gridTemplateColumns:`repeat(${columns},1fr)`, gap:16}}>
                            {teamMembers.map(m=> (
                                <div key={m.id} className="team-member-preview" style={{padding:10, border:'1px solid #eee'}}>
                                    {m.image && <img src={m.image.url} style={{width:'100%', height:150, objectFit:'cover'}} alt="" />}
                                    <h4>{m.name || 'Team Member'}</h4>
                                    <p>{m.position}</p>
                                    <p>{m.bio}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { teamMembers = [], columns = 3 } = attributes;
        if (!teamMembers.length) return null;
        return (
            <div className="team-grid" style={{'--team-columns': columns}}>
                {teamMembers.map(m=> (
                    <div key={m.id} className="team-member">
                        {m.image && <img src={m.image.url} alt={m.name} className="team-member-photo" />}
                        <div className="team-member-info"><h3>{m.name}</h3><p>{m.position}</p><p>{m.bio}</p></div>
                    </div>
                ))}
            </div>
        );
    }
});
