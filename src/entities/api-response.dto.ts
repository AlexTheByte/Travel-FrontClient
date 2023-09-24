export class ApiResponseDto {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(data: any) {}

  static create(data: any | any[]) {
    if (Array.isArray(data)) {
      return data.map(d => new this(d));
    }

    return new this(data);
  }
}
