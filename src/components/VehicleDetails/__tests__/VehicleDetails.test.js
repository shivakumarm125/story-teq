import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import VehicleDetails from '..';

// Mocking vehicle data
const mockVehicle = {
  id: 'abc123',
  media: [{ url: 'https://example.com/image.jpg' }],
  price: '$10,000',
  description: 'Test description',
  meta: {
    emissions: {
      value: '100g/km',
      template: 'EURO6'
    }
  }
};

// Mocking useLocation hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}));

const setup = () => {
  useLocation.mockReturnValue({
    state: { vehicle: mockVehicle }
  });

  return render(
    <MemoryRouter initialEntries={['/details']} initialIndex={0}>
      <Routes>
        <Route path="/details" element={<VehicleDetails />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('VehicleDetails', () => {
  test('renders vehicle details with correct content', () => {
    setup();

    // Verify vehicle details content
    const vehicleImage = screen.getByAltText(mockVehicle.id);
    expect(vehicleImage).toBeTruthy();

    const vehicleId = screen.getByText(mockVehicle.id.toUpperCase());
    expect(vehicleId).toBeTruthy();

    const vehiclePrice = screen.getByText(`From ${mockVehicle.price}`);
    expect(vehiclePrice).toBeTruthy();

    const vehicleDescription = screen.getByText(mockVehicle.description);
    expect(vehicleDescription).toBeTruthy();

    const backButton = screen.getByRole('button', { name: /back to vehicles/i });
    expect(backButton).toBeTruthy();

    // Simulate click on back button
    fireEvent.click(backButton);
  });
});
