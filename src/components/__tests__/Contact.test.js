import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us Page Test Case', () => {
  // beforeAll(() => {
  //   console.log('Before All');
  // });
  // beforeEach(() => {
  //   console.log('Before Each');
  // });
  // afterEach(() => {
  //   console.log('After Each');
  // });
  // afterAll(() => {
  //   console.log('After All');
  // });

  it('Should load heading inside Contact Us Component', () => {
    //render
    render(<Contact />);

    //Querying
    const heading = screen.getByRole('heading');

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it('Should load Button inside Contact Us Component', () => {
    //render
    render(<Contact />);

    //Querying
    const button = screen.getByText('Submit');

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it('Should load Input inside Contact Us Component', () => {
    //render
    render(<Contact />);

    //Querying
    const inputName = screen.getByPlaceholderText('name');

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it('Should load 2 Input Boxes inside Contact Us Component', () => {
    //render
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole('textbox');
    console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3)
  });
});
