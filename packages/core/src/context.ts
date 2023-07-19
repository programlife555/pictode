import { BaseService } from '@pictode/utils';
import { fabric } from 'fabric';

import { Event } from './types';

export class Context extends BaseService<Event.ContextArgs> {
  public canvas?: fabric.Canvas;
  private canvasEl: HTMLCanvasElement;

  constructor() {
    super();
    this.canvasEl = document.createElement('canvas');
  }

  public mount(element: HTMLElement) {
    element.appendChild(this.canvasEl);
    this.canvas = new fabric.Canvas(this.canvasEl, {
      backgroundColor: 'lightgray',
      width: 500,
      height: 500,
    });
    this.addRect();
  }

  public addRect() {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20,
      hasControls: true,
      hasBorders: true,
    });

    this.canvas?.add(rect);
  }
}

export default Context;