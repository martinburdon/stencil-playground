import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'game-item',
  styleUrl: 'game-item.scss',
  shadow: true
})
export class GameItem {

  @Prop() displayName: string;
  @Prop() image: string;
  @Prop() slug: string;

  render() {
    let image = <img src={this.image} alt={this.displayName} />;
    if (!this.image) image = <svg class="fallback" viewBox="0 0 32 20"></svg>;

    return (
      <div class="container">
        <div class="thumb-container">
          {image}
          <a class="info" href={`/game/${this.slug}`}>i</a>
        </div>
        <span class="display-name">{this.displayName}</span>
      </div>
    );
  }

}
