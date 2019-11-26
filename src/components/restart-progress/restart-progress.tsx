import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'restart-progress',
  styleUrl: 'restart-progress.scss',
  shadow: true
})
export class RestartProgress {

  @Event() restartProgress: EventEmitter;

  restartProgressHandler() {
    this.restartProgress.emit(10);
  }

  render() {
    return (
      <button onClick={() => this.restartProgressHandler()}>Restart progress</button>
    );
  }

}
