/**
 * Created by Frederik on 11/15/2024.
 */

import { LightningElement, track } from "lwc";

export default class StartStopTimer extends LightningElement{
  @track
  time = 0;
  interval;

  startHandler(){
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  }

  pauseHandler(){
    clearInterval(this.interval);
  }

  resumeHandler(){
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  }

  stopHandler(){
    clearInterval(this.interval);
  }

  resetHandler(){
    this.time = 0;
    clearInterval(this.interval);
  }

  get formattedTime(){
    const hours = Math.floor(this.time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((this.time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (this.time % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

}