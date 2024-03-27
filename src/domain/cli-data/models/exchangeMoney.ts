import { AutoMap } from '@automapper/classes';

export default class ExchangeMoney {
  constructor(id: number = 0, name: string = '', value: number = 0) {
    this.id = id;
    this.name = name;
    this.value = value;
  }

  @AutoMap()
  id: number = 0;
  @AutoMap()
  name: string = '';
  @AutoMap()
  value: number = 0;
}
