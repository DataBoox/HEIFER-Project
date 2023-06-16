import { PrimaryInput, PrimarySelect, PrimarySelectProp } from 'components';
import { useState } from 'react';

interface FinancialServicesSelectProps extends PrimarySelectProp {}

export const FinancialServicesSelect: React.FC<FinancialServicesSelectProps> = ({ ...rest }) => {
  const [otherValue, setOtherValue] = useState('');

  const handleOtherValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherValue(event.target.value);
  };

  return (
    <>
      <PrimarySelect {...rest}>
        <option value="purchasing inputs">Purchasing Inputs</option>
        <option value="mechanization">Mechanization</option>
        <option value="aggregation">Aggregation</option>
        <option value="others">Others, Please Specify</option>
      </PrimarySelect>
      {rest.value === 'others' && (
        <PrimaryInput className="mt-4"
          type="text"
          value={otherValue}
          onChange={handleOtherValueChange}
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
