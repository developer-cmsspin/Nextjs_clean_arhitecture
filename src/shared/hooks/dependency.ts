"use client";

import DependencyInjectionApplication from "@/application/dependencyInjectionApplication";
import { DependencyInjectionInfrastructurePersistence } from "@/infrastructure/persistence/DependencyInjectionInfrastructurePersistence";
import DependencyInjectionInfrastructureService from "@/infrastructure/service/dependencyInjectionInfrastructureService";
import "reflect-metadata";
import { container } from "tsyringe";

export function dependencyInjection() {
  DependencyInjectionApplication();
  DependencyInjectionInfrastructureService();
  DependencyInjectionInfrastructurePersistence();
}

export function getDependency<T>(token: string): T {
  return container.resolve<T>(token);
}
