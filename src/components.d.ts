/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CircleProgress {
    'progressAmount': number;
    'progressColor': string;
    'progressLabel': string;
  }
  interface CookieConsent {
    'privacyUrl': string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface RestartProgress {}
}

declare global {


  interface HTMLCircleProgressElement extends Components.CircleProgress, HTMLStencilElement {}
  var HTMLCircleProgressElement: {
    prototype: HTMLCircleProgressElement;
    new (): HTMLCircleProgressElement;
  };

  interface HTMLCookieConsentElement extends Components.CookieConsent, HTMLStencilElement {}
  var HTMLCookieConsentElement: {
    prototype: HTMLCookieConsentElement;
    new (): HTMLCookieConsentElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLRestartProgressElement extends Components.RestartProgress, HTMLStencilElement {}
  var HTMLRestartProgressElement: {
    prototype: HTMLRestartProgressElement;
    new (): HTMLRestartProgressElement;
  };
  interface HTMLElementTagNameMap {
    'circle-progress': HTMLCircleProgressElement;
    'cookie-consent': HTMLCookieConsentElement;
    'my-component': HTMLMyComponentElement;
    'restart-progress': HTMLRestartProgressElement;
  }
}

declare namespace LocalJSX {
  interface CircleProgress {
    'progressAmount'?: number;
    'progressColor'?: string;
    'progressLabel'?: string;
  }
  interface CookieConsent {
    'privacyUrl'?: string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface RestartProgress {
    'onRestartProgress'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'circle-progress': CircleProgress;
    'cookie-consent': CookieConsent;
    'my-component': MyComponent;
    'restart-progress': RestartProgress;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'circle-progress': LocalJSX.CircleProgress & JSXBase.HTMLAttributes<HTMLCircleProgressElement>;
      'cookie-consent': LocalJSX.CookieConsent & JSXBase.HTMLAttributes<HTMLCookieConsentElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'restart-progress': LocalJSX.RestartProgress & JSXBase.HTMLAttributes<HTMLRestartProgressElement>;
    }
  }
}


