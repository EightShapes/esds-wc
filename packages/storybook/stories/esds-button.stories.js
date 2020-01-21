import { EsdsButton } from '@eightshapes/esds-button';
customElements.define('esds-button', EsdsButton);

export default { title: 'EsdsButton' };

export const slottedText = () => `<esds-button>Hello World</esds-button>`;

export const sizes = () => `<esds-button size='small'>Small</esds-button>
                            <esds-button size='medium'>Medium</esds-button>
                            <esds-button size='large'>Large</esds-button>`;

export const variants = () => `<esds-button variant='primary'>Primary</esds-button>
                                <esds-button variant='secondary'>Secondary</esds-button>
                                <esds-button variant='flat'>Flat</esds-button>`;

export const types = () => `<esds-button type='rest'>Reset</esds-button>
                            <esds-button type='button'>Button</esds-button>
                            <esds-button type='submit'>Submit</esds-button>
                            <esds-button href='http://example.com'>Link</esds-button>`;

export const states = () => `<esds-button>Default</esds-button>
                              <esds-button>Hover</esds-button>
                              <esds-button>Active</esds-button>
                              <esds-button disabled>Disabled</esds-button>`;

export const componentExplorer = () => `<esds-button>Default</esds-button>`;
