import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('should submit the form with the provided data', async () => {
    const submitFormMock = jest.fn();
    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      date: '2023-06-01',
      time: '10:00 AM',
      guests: '5',
      occasion: 'Birthday',
    };
  
    render(<BookingForm submitForm={submitFormMock} formData={formData} />);
  
    fireEvent.click(screen.getByText('Create Reservation'));
  
    expect(submitFormMock).toHaveBeenCalledTimes(1);
    expect(submitFormMock).toHaveBeenCalledWith(formData);
  

  const firstNameInput = screen.getByLabelText('First Name Input');
  const lastNameInput = screen.getByLabelText('Last Name Input');
  const dateInput = screen.getByLabelText('Date Input');
  const guestsInput = screen.getByLabelText('Guests Input');
  const occasionSelect = screen.getByLabelText('Select Occasion');
  const form = screen.getByLabelText('Booking Reservation Form');

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(dateInput, { target: { value: '2023-06-01' } });
  fireEvent.change(guestsInput, { target: { value: '5' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
  fireEvent.submit(form);

  expect(submitFormMock).toHaveBeenCalledTimes(1);
  expect(submitFormMock).toHaveBeenCalledWith({
    firstName: 'John',
    lastName: 'Doe',
    date: '2023-06-01',
    time: '12:00 PM', // Make sure to update the expected time value if needed
    guests: '5',
    occasion: 'Birthday',
  });
});
