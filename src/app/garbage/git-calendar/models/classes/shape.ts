export class ShapeC {
  private width!: string;

  private height!: string;

  private border!: string;

  private borderRadius!: string;

  private color!: string;

  constructor(
    width: string = '1rem',
    height: string = '1rem',
    border: string = 'none',
    borderRadius: string = '50%',
    color: string = 'red'
  ) {
    this.width = width;
    this.height = height;
    this.border = border;
    this.borderRadius = borderRadius;
    this.color = color;
  }
}
