'use client';
import { mapper } from '@/application/configuration/mappings/mapper';
import { Mapper } from '@automapper/core';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { MapperConfigurationExchange } from './mappers/test/mapperExchange';
import RequestExchangeConverter from './mappers/test/requestExchangeConverter';
import ResponseExchangeConverter from './mappers/test/responseExchangeConverter';
import GetCliUseCase from './useCases/test/GetCliUseCase';

/**
 * DependencyInjectionApplication function
 *
 * This function sets up dependency injection for the application.
 * It registers various dependencies and configurations using the tsyringe library.
 */
export const dependencyInjectionClientApplication = (): void => {
  // Register the 'IMapper' dependency with the provided 'mapper' value
  container.register<Mapper>('IMapper', { useValue: mapper });

  // Register the 'IGetCliUseCase' dependency with the 'GetCliUseCase' class
  container.register('IGetCliUseCase', { useClass: GetCliUseCase });
  container.register('ConvertRequestExchange', { useClass: RequestExchangeConverter });
  container.register('ConvertResponseExchange', { useClass: ResponseExchangeConverter });

  // Perform any additional configuration needed for the Mapper (Automapper)
  MapperConfigurationExchange();
};

export default dependencyInjectionClientApplication;
