import { EsdsButton } from '@eightshapes/esds-button';
customElements.define('esds-button', EsdsButton);

export default { title: 'EsdsButton' };

export const withText = () => "<esds-button size='large'>Kevin's Button</esds-button><esds-button>Sara's Button</esds-button>";
