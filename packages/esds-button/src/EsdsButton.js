import { html, css, LitElement } from 'lit-element';
//
// export class EsdsButton extends LitElement {
//   static get styles() {
//     return css`
//       :host {
//
//       }
//
//       button {
//         background: darkorange;
//         border: 0;
//         border-radius: 20px;
//         cursor: pointer;
//         font-size: 24px;
//         padding: 10px 20px;
//         color: white;
//       }
//
//       button:active {
//         background: blue;
//       }
//     `;
//   }
//
//   static get properties() {
//     return {
//
//     };
//   }
//
//   render() {
//     return html`
//       <button><slot></slot></button>
//     `;
//   }
// }


// import { EsdsBaseWc, html, ifDefined } from 'esds-base-wc';
// import EsdsIcon from 'esds-icon';
//
// // Define esds-icon custom element if it hasn't been already
// const tagName = 'esds-icon';
//
// if (!customElements.get(tagName)) {
//   customElements.define(tagName, EsdsIcon);
// }

// Extend the LitElement base class
export class EsdsButton extends LitElement {
    static get styles() {
      return css`
      .esds-button-v1 {
        font-family: Barlow, "Lato", sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0;
        text-align: left;
        text-decoration: none;
        text-indent: 0;
        text-shadow: none;
        text-transform: none;
        font-size: 16px;
        background-color: #D24B00;
        border: 1px solid #D24B00;
        border-radius: 8px;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        fill: #FFFFFF;
        letter-spacing: normal;
        line-height: 1;
        margin: 0;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        text-indent: initial;
        text-shadow: none;
        text-transform: none;
        -webkit-transition: background-color 0.2s linear, border-color 0.2s linear, color 0.2s linear, fill 0.2s linear;
        transition: background-color 0.2s linear, border-color 0.2s linear, color 0.2s linear, fill 0.2s linear;
        white-space: nowrap; }
        @media screen and (min-width: 480px) {
          .esds-button-v1 {
            font-size: 16px; } }
        @media screen and (min-width: 768px) {
          .esds-button-v1 {
            font-size: 19.2px; } }
        @media screen and (min-width: 1000px) {
          .esds-button-v1 {
            font-size: 19.2px; } }
        .esds-button-v1:hover,
        .esds-button--hover .esds-button-v1 {
          background-color: #E85200;
          border-color: #E85200; }
          .esds-container--brand .esds-button-v1:hover, .esds-container--brand
          .esds-button--hover .esds-button-v1 {
            border-color: #FFFFFF; }
        .esds-button-v1:active,
        .esds-button--active .esds-button-v1 {
          background-color: #E85200;
          border-color: #E85200;
          -webkit-box-shadow: 0 0 8px #068194;
                  box-shadow: 0 0 8px #068194; }
          .esds-container--brand .esds-button-v1:active, .esds-container--brand
          .esds-button--active .esds-button-v1 {
            border-color: #FFFFFF; }
        .esds-button-v1:focus,
        .esds-button--focus .esds-button-v1 {
          -webkit-box-shadow: 0 0 8px #068194;
                  box-shadow: 0 0 8px #068194;
          outline: 0; }
        .esds-button-v1:disabled, .esds-button-v1.esds-button--disabled {
          background-color: #EEAC8D;
          border-color: #EEAC8D;
          cursor: not-allowed; }
          .esds-button-v1:disabled:active, .esds-button-v1:disabled:focus, .esds-button-v1.esds-button--disabled:active, .esds-button-v1.esds-button--disabled:focus {
            -webkit-box-shadow: none;
                    box-shadow: none; }
          .esds-container--brand .esds-button-v1:disabled, .esds-container--brand .esds-button-v1.esds-button--disabled {
            border-color: #EEAC8D; }
        .esds-button-v1.esds-button--icon-only {
          padding: 8px; }
        .esds-button-v1.esds-button--large {
          font-size: 19.2px;
          padding: 16px 32px; }
          @media screen and (min-width: 480px) {
            .esds-button-v1.esds-button--large {
              font-size: 20px; } }
          @media screen and (min-width: 768px) {
            .esds-button-v1.esds-button--large {
              font-size: 21.28px; } }
          @media screen and (min-width: 1000px) {
            .esds-button-v1.esds-button--large {
              font-size: 22.624px; } }
          .esds-button-v1.esds-button--large.esds-button--icon-only {
            padding: 16px; }
        .esds-button-v1.esds-button--small {
          font-size: 12px;
          font-weight: 400;
          padding: 4px 8px; }
          @media screen and (min-width: 480px) {
            .esds-button-v1.esds-button--small {
              font-size: 13.6px; } }
          @media screen and (min-width: 768px) {
            .esds-button-v1.esds-button--small {
              font-size: 14.4px; } }
          @media screen and (min-width: 1000px) {
            .esds-button-v1.esds-button--small {
              font-size: 14.4px; } }
          .esds-button-v1.esds-button--small.esds-button--icon-only {
            padding: 4px; }
        .esds-button-v1.esds-button--secondary {
          background-color: #FFFFFF;
          color: #D24B00;
          fill: #D24B00; }
          .esds-button-v1.esds-button--secondary:hover,
          .esds-button--hover .esds-button-v1.esds-button--secondary {
            background-color: #E85200;
            color: #FFFFFF;
            fill: #FFFFFF; }
          .esds-button-v1.esds-button--secondary:active,
          .esds-button--active .esds-button-v1.esds-button--secondary {
            background-color: #E85200;
            color: #FFFFFF;
            fill: #FFFFFF; }
          .esds-button-v1.esds-button--secondary:disabled, .esds-button-v1.esds-button--secondary.esds-button--disabled {
            background-color: #E6E3E3;
            border-color: #6B6B6B;
            color: #6B6B6B;
            fill: #6B6B6B; }
        .esds-button-v1.esds-button--flat {
          background-color: transparent;
          border-color: transparent;
          color: #D24B00;
          fill: #D24B00; }
          .esds-container--brand .esds-button-v1.esds-button--flat {
            color: #FFFFFF;
            fill: #FFFFFF; }
          .esds-button-v1.esds-button--flat:hover,
          .esds-button--hover .esds-button-v1.esds-button--flat {
            background-color: #E85200;
            color: #FFFFFF;
            fill: #FFFFFF; }
          .esds-button-v1.esds-button--flat:active,
          .esds-button--active .esds-button-v1.esds-button--flat {
            background-color: #E85200;
            color: #FFFFFF;
            fill: #FFFFFF; }
          .esds-button-v1.esds-button--flat:disabled, .esds-button-v1.esds-button--flat.esds-button--disabled {
            background-color: transparent;
            border-color: transparent;
            color: #6B6B6B;
            fill: #6B6B6B; }
            .esds-container--brand .esds-button-v1.esds-button--flat:disabled, .esds-container--brand .esds-button-v1.esds-button--flat.esds-button--disabled {
              border-color: transparent; }
        .esds-button-v1 .esds-button__label {
          display: inline-block;
          vertical-align: middle;
          white-space: normal; }
          .esds-button__icon + .esds-button-v1 .esds-button__label {
            padding-left: 2px; }
        .esds-button-v1 .esds-button__icon .esds-icon-v1 {
          display: inline-block;
          height: 16px;
          vertical-align: middle;
          width: 16px; }
        .esds-button-v1 .esds-button__label + .esds-button__icon .esds-icon-v1 {
          padding-left: 2px; }
        .esds-button-v1.esds-button--large .esds-icon-v1 {
          height: 20px;
          width: 20px; }
        .esds-button-v1.esds-button--small .esds-icon-v1 {
          height: 12px;
          width: 12px; }
      `;
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
      tag: { type: String },
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
    this.stylesheet = 'esds-button.css';
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

     // getStylesheet is generating an opening angle bracket in IE for some reason
    return html`
      ${component}
    `;
  }
}
