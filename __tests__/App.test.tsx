import React from "react";
import renderer, { act }  from "react-test-renderer";
import { render } from '@testing-library/react-native';
import App from "../App";

jest.mock('expo-font', () => ({
  useFonts: jest.fn().mockReturnValue([true]),
  Font: {
    display: 'swap',
  },
}));

describe("<App />", () => {
  it('renders correctly', () => {
    act(() => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  it('renders Home screen', () => {
    const { getByText } = render(<App />);
    const homeText = getByText('Wallet Test');
    expect(homeText).toBeTruthy();
  });
});

