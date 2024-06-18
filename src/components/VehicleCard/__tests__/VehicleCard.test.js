import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VehicleCard from '..';

const vehicle = {
  id: 'abc123',
  media: [{ url: 'https://example.com/image.jpg' }],
  price: '$10,000',
  description: 'Test description',
};

test('renders vehicle card with correct content and navigates on click', () => {
  render(
    <MemoryRouter>
      <VehicleCard vehicle={vehicle} />
    </MemoryRouter>
  );
  const vehicleName = screen.getByText(vehicle.id.toUpperCase());
  expect(vehicleName).toBeTruthy();

  const vehiclePrice = screen.getByText(`From ${vehicle.price}`);
  expect(vehiclePrice).toBeTruthy();

  const vehicleDescription = screen.getByText(vehicle.description);
  expect(vehicleDescription).toBeTruthy();

  const vehicleImage = screen.getByAltText(vehicle.id);
  expect(vehicleImage).toBeTruthy();

  fireEvent.click(screen.getByRole('article'));

});
