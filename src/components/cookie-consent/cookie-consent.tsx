import { Component, State, Listen, Prop, h } from '@stencil/core';
import Cookies from '../../utils/cookies';

@Component({
  tag: 'cookie-consent',
  styleUrl: 'cookie-consent.scss',
  shadow: true
})
export class CookieConsent {
  @State() open: boolean = true;

  @Prop() privacyUrl: string = '/privacy-policy';

  handleClick(event: UIEvent) {
    event.preventDefault();
    Cookies.setItem('cookies', true);
    this.open = !this.open;
  }

  connectedCallback() {
    if (Cookies.getItem('cookies')) this.open = false;
  }

  render() {
    if (!this.open) return null;

    return (
      <div>
        <p>This website uses cookies to ensure you get the best experience. <a href={this.privacyUrl}>Click here to learn more.</a></p>
        <button onClick={(event: UIEvent) => this.handleClick(event)}>Accept</button>
      </div>
    );
  }

}
