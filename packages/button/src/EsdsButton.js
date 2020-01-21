import { html, LitElement } from 'lit-element';
import styles from './esds-button-styles.js';

// Extend the LitElement base class
export class EsdsButton extends LitElement {
    static get styles() {
      return [styles];
    }

  static get properties() {
    return {
      disabled: {type: Boolean},
      element: {type: String},
      href: {type: String},
      iconLeft: {type: String, attribute: 'icon-left'},
      iconLeftTitle: {type: String, attribute: 'icon-left-title'},
      iconRight: {type: String, attribute: 'icon-right'},
      iconRightTitle: {type: String, attribute: 'icon-right-title'},
      size: {type: String},
      text: { type: String },
      type: { type: String },
      variant: { type: String }
    }
  }

  constructor() {
    super();
    this.defaultButtonText = 'Button Text';
    this.defaultClass = 'esds-button-v1';
    this.baseModifierClass = 'esds-button--';
    this.disabled = false;
    this.element = 'button';
    this.text = this.defaultButtonText;
    this.type = 'button';
  }


  render(){
     let blockLevelClass = this.defaultClass;
     if (this.size) {
       blockLevelClass += ` ${this.baseModifierClass}${this.size}`;
     }
     if (this.variant) {
       blockLevelClass += ` ${this.baseModifierClass}${this.variant}`;
     }
     if (this.disabled) {
       blockLevelClass += ` ${this.baseModifierClass}disabled`;
     }

     if (this.href) {
       this.element = 'a';
     }

     if (this.text === this.defaultButtonText && (this.iconLeft || this.iconRight)) {
       this.text = false;
     }

     // if ((!this.text || this.text === this.defaultButtonText) && this.slots.default) {
     //   this.text = this.slots.default;
     // }

     let component;
     let iconLeft;
     let iconRight;
     let text;

     if (this.iconLeft) {
       iconLeft = html`<esds-icon class="esds-button__icon" name="${this.iconLeft}" title="${ifDefined(this.iconLeftTitle)}"></esds-icon>`;
     }

     if (this.iconRight) {
       iconRight = html`<esds-icon class="esds-button__icon" name="${this.iconRight}" title="${ifDefined(this.iconRightTitle)}"></esds-icon>`;
     }

     if ((this.iconRight || this.iconLeft) && this.text) {
       text = html`<span class="esds-button__label">${this.text}</span>`;
     } else if (this.text) {
       text = this.text;
     }

     if (this.element === 'button') {
       component = html`
       <button class="${blockLevelClass}" type="${this.type}" ?disabled=${this.disabled}>
         ${iconLeft}
         <slot>${text}</slot>
         ${iconRight}
       </button>`;
     } else if (this.element === 'a') {
       component = html`
       <a class="${blockLevelClass}" href="${this.href}">
         ${iconLeft}
         <slot>${text}</slot>
         ${iconRight}
       </a>`;
     }

    return html`
      ${component}
    `;
  }
}
