import { mapper } from '@/application/configuration/mappings/mapper';
//import IGetCustomerTemplateUseCase from '@/domain/interfaces/application/customer/iGetCustomerTemplateUseCase';
import { Mapper } from '@automapper/core';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { MapperConfigurationExchange } from './configuration/mappings/mapperExchange';
//import ContentRequestConverter from './mappers/content/contentRequestConverter';
//import ContentResponseConverter from './mappers/content/contentResponseConverter';
//import GetCustomerTemplateUseCase from './useCases/customer/getCustomerTemplateUseCase';
import GetCliUseCase from './useCases/test/GetCliUseCase';

export const DependencyInjectionApplication = (): void => {
  container.register<Mapper>('IMapper', { useValue: mapper });
  container.register('IGetCliUseCase', { useClass: GetCliUseCase });
  //container.register<ContentRequestConverter>('ContentRequestConverter', { useClass: ContentRequestConverter });
  //container.register<ContentResponseConverter>('ContentResponseConverter', { useClass: ContentResponseConverter });
  //container.register<IGetCustomerTemplateUseCase>('IGetCustomerTemplateUseCase', { useClass: GetCustomerTemplateUseCase });
  MapperConfigurationExchange();
};
export default DependencyInjectionApplication;
