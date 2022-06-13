import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import DetailPage from "./DetailPage";

describe("Given a DetailPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a button with the text Edit'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByRole("button");

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
