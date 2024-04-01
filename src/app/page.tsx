'use client';
/**
 * This module exports the Page component which represents a React functional component.
 * It is responsible for rendering a page that displays data from an external API source.
 * The component utilizes dependency injection to fetch data from the API and handles user interactions.
 *
 * @module Page
 */

import IGetCliUseCase from '@/domain/interfaces/application/useCase/iGetCliUseCase';
import ITestAction from '@/domain/interfaces/infrastructure/persistence/redux/iTestAction';
import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import { ButtonPrimary } from '@/package/ui-kit/components/ui/01_atoms/button-primary';
import { getDependency } from '@/shared/hooks/architecture/dependency';
import dependencyInjectionClient from '@/shared/hooks/architecture/dependencyClient';

/**
 * Retrieves the required dependencies for the page and returns them as an object.
 *
 * @function getDependencyPage
 * @returns {Object} - Object containing the required dependencies for the page
 */
const getDependencyPage = () => {
  const application = getDependency<IGetCliUseCase>('IGetCliUseCase');
  const action = getDependency<ITestAction>('ITestAction');
  return { application, action };
};

/**
 * Main component representing the page that displays data from an external API source.
 *
 * @component
 * @example
 * return <Page />;
 */
export default function Page() {
  // Perform dependency injection setup
  dependencyInjectionClient();

  // Retrieve the required dependencies
  const { application, action } = getDependencyPage();

  // Fetch test data and loading status using the action dependency
  const list = action.GetTestData();
  const isLoading = action.GetTestLoading();

  /**
   * Event handler for the button click event.
   * Invokes the application's handler function with a RequestExchangeDto object.
   *
   * @function onClick
   */
  const onClick = () => {
    application.handler(new RequestExchangeDto());
  };

  // Render the page content
  return (
    <>
      <div>
        <ButtonPrimary onClick={onClick} loading={isLoading}>
          Show data
        </ButtonPrimary>
      </div>

      {isLoading ? (
        <div>loading....</div>
      ) : (
        <div>
          <div>Slider {list.list.length}</div>
          <div></div>
        </div>
      )}
    </>
  );
}
