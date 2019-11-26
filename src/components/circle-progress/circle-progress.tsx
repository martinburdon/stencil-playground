import { Component, Listen, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'circle-progress',
  styleUrl: 'circle-progress.scss',
  shadow: true
})
export class CircleProgress {
  @Prop() progressAmount: number = 0;
  @Prop() progressLabel: string = '0%';
  @Prop() progressColor: string = '#2ecc71';

  @Listen('restartProgress', { target: 'window' })
  restartProgressHandler(event: CustomEvent) {
    this.startLoader(event.detail);
  }

  @Watch('progressAmount')
  watchHandler(newValue: number) {
    this.progressLabel = `${newValue.toString()}%`;
    if (newValue === 100) this.progressLabel = '🔥🔥🔥';
  }

  connectedCallback() {
    this.startLoader();
  }

  startLoader(val = 0) {
    this.progressAmount = val;
    const interval = window.setInterval(() => {
      this.progressAmount = this.progressAmount + 1;
      if (this.progressAmount >= 100) {
        this.progressAmount = 100;
        window.clearInterval(interval);
      }
    }, 15);
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
