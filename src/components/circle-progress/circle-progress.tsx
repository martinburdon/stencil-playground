import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'circle-progress',
  styleUrl: 'circle-progress.scss',
  shadow: true
})
export class CircleProgress {
  @Prop() progressAmount: number = 0;
  @Prop() progressLabel: string = '0%';
  @Prop() progressColor: string = '#2ecc71';

  @Watch('progressAmount')
  watchHandler(newValue: number) {
    this.progressLabel = `${newValue.toString()}%`;
    if (newValue === 100) this.progressLabel = '🔥🔥🔥';
  }

  connectedCallback() {
    const interval = window.setInterval(() => {
      this.progressAmount = this.progressAmount + 1;
      if (this.progressAmount >= 100) {
        this.progressAmount = 100;
        window.clearInterval(interval);
      }
    }, 30);
  }

  render() {
    return (
      <div style={{
        background: `conic-gradient(${this.progressColor} ${this.progressAmount}%, 0, #ecf0f1 ${(100 - this.progressAmount).toString()}%)`
      }}>
        <span>{`${this.progressLabel}`}</span>
      </div>
    );
  }

}
