import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'spark-main-menu',
  styleUrl: 'main-menu.scss',
  shadow: true
})
export class MainMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
