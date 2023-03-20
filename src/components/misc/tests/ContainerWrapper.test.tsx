import React from 'react';
import { render } from '@testing-library/react';
import ContainerWrapper from '../ContainerWrapper';

describe('ContainerWrapper', () => {
  test('renders the component passed as a prop', () => {
    const FakeComponent = () => <div>Fake Component</div>;
    const { getByText } = render(
      <ContainerWrapper Component={<FakeComponent />} name="Test" />
    );
    expect(getByText('Fake Component')).toBeInTheDocument();
  });

  test('renders the name prop as a title', () => {
    const FakeComponent = () => <div>Fake Component</div>;
    const { getByText } = render(
      <ContainerWrapper Component={<FakeComponent />} name="Test" />
    );
    expect(getByText('Test')).toBeInTheDocument();
  });

  test('adds a data-test attribute with the name prop', () => {
    const FakeComponent = () => <div>Fake Component</div>;
    const { container } = render(
      <ContainerWrapper Component={<FakeComponent />} name="Test" />
    );
    expect(container.firstChild).toHaveAttribute('data-test', 'QA-container-Test');
  });

  test('renders the styled wrapper with the correct width', () => {
    const FakeComponent = () => <div>Fake Component</div>;
    const { container } = render(
      <ContainerWrapper Component={<FakeComponent />} name="Test" />
    );
    expect(container.firstChild).toHaveStyle('width: 1440px');
  });

  test('renders the styled wrapper with the correct padding', () => {
    const FakeComponent = () => <div>Fake Component</div>;
    const { container } = render(
      <ContainerWrapper Component={<FakeComponent />} name="Test" />
    );
    expect(container.firstChild).toHaveStyle('padding: 20px');
  });
});
