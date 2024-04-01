'use client';
import dependencyInjectionClientApplication from '@/application/dependencyInjectionClientApplication';
import DependencyInjectionClientInfrastructurePersistence from '@/infrastructure/persistence/DependencyInjectionClientInfrastructurePersistence';
import dependencyInjectionClientInfrastructureService from '@/infrastructure/service/dependencyInjectionClientInfrastructureService';
import 'reflect-metadata';

/**
 * Client Dependency Injection.
 *
 * @remarks
 * This function orchestrates the dependency injection process for the client. It first calls the `dependencyInjection` function to perform
 * any necessary general dependency injections. Then, it invokes the `DependencyInjectionClientInfrastructurePersistence` function to handle
 * dependency injections specific to the client infrastructure persistence layer.
 *
 * Example usage:
 * ```typescript
 * DependencyInjectionClient();
 * ```
 */
const DependencyInjectionClient = () => {
  dependencyInjectionClientApplication();
  dependencyInjectionClientInfrastructureService();
  DependencyInjectionClientInfrastructurePersistence();
};

export default DependencyInjectionClient;
