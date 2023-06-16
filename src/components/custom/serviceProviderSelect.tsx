import { PrimaryInput, PrimarySelect, PrimarySelectProp } from 'components';
import { useState } from 'react';

interface ServiceProviderSelectProps extends PrimarySelectProp {}

export const ServiceProviderSelect: React.FC<ServiceProviderSelectProps> = ({ ...rest }) => {
  const [newValue, setNewValue] = useState('');

  const handleNewValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value);
  };

  return (
    <>
      <PrimarySelect {...rest}>
        <option value="financial institution">Financial Institution</option>
        <option value="saving and loan Groups">Saving and Loan Groups</option>
        <option value="others">Others, Specify</option> {/* Updated value */}
      </PrimarySelect>
      {rest.value === 'others' && ( /* Updated condition */
        <PrimaryInput className="mt-4"
          type="text"
          value={newValue}
          onChange={handleNewValueChange}
          placeholder="Please specify..."
          style={{
            backgroundColor: "#F2FAFC",
            borderRadius: 0,
            borderColor: "#CAECF3",
          }}
        />
      )}
    </>
  );
};
