import { ButtonPrimary } from '@/package/ui-kit/components/ui/01_atoms/button-primary';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Render controls', () => {
  /**
   * Test the happy path of rendering a component.
   * @returns A promise that resolves when the test completes.
   */
  test('happy path render', async () => {
    // Render the ButtonPrimary component with the text "Click Me".
    render(<ButtonPrimary>Click Me</ButtonPrimary>);

    // Check if the rendered component contains the text "Click Me".
    expect(screen.getByText(/Click Me/)).toBeInTheDocument();
  });
});
