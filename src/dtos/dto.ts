
class Dto {
  data: any;

  constructor(data: any) {
    this.data = data;
    Object.assign(this, data);
  }

  toJson(): any  {
    return JSON.parse(JSON.stringify(this.data));
  }
}

export default Dto;