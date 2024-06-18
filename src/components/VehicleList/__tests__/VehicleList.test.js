import React from "react";
import { render, waitFor } from "@testing-library/react";
import VehicleList from "..";
import useData from "../useData";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../useData");

describe("<VehicleList /> Tests", () => {
    it("Should show loading state if it not falsy", () => {
        useData.mockReturnValue([true, "An error occurred", "results"]);
        const { queryByTestId } = render(<VehicleList />);

        expect(queryByTestId("loading")).not.toBeNull();
        expect(queryByTestId("error")).toBeNull();
        expect(queryByTestId("results")).toBeNull();
    });

    it("Should show error if it is not falsy and loading is finished", () => {
        useData.mockReturnValue([false, "An error occurred", "results"]);
        const { queryByTestId } = render(<VehicleList />);

        expect(queryByTestId("loading")).toBeNull();
        expect(queryByTestId("error")).not.toBeNull();
        expect(queryByTestId("results")).toBeNull();
    });

});
