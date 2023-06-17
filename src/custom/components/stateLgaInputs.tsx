import { PrimaryMultiSelect, PrimaryMultiSelectProp } from "components";
import { StateOption, StatesOptions, getStateLocals } from "utilities";
import React, { useEffect, useState } from "react";
import city from "assets/json/state.cities.json";
import NaijaStates from 'naija-state-local-government';

export const StateLGAInput: React.FC<{
    state?: string;
    lga?: string;
    style?: React.CSSProperties; 
    errors?: { state?: string; lga?: string },
    touched?: { state?: boolean; lga?: boolean },
    onChange?: (values: { state: string, lga: string }) => void
    stateContainerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    areaContainerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    stateInputProps?: PrimaryMultiSelectProp,
    areaInputProps?: PrimaryMultiSelectProp,
}> = ({
    state,
    lga,
    style,
    errors,
    touched,
    onChange = () => { },
    stateContainerProps,
    areaContainerProps,
    stateInputProps,
    areaInputProps
}) => {
        const [selState, setSelState] = useState<StateOption>()
        const [selArea, setSelArea] = useState<StateOption>()
        const [areas, setAreas] = useState<StateOption[]>([]);
        const cities: any = city;

        useEffect(() => {
            if (state) {
                
              const findState = setAreas(cities[state as typeof cities])
              const stateAreas = getStateLocals(Number(findState));
              let findArea: StateOption|undefined = stateAreas[0];

              if (lga && lga.length) {
                  onChange({ state: state, lga: findArea.label })
                  setSelArea(findArea)
              }
            }
        }, [state, lga])

        return (
          <>
            <div {...stateContainerProps}>
              <PrimaryMultiSelect
                placeholder="Select State"
                options={NaijaStates.states()}
                value={selState}
                error={Boolean(touched?.state && errors?.state)}
                bottomText={errors?.state}
                onChange={(selected) => {
                  onChange({ state: selected.label, lga: "" });
                  // set state
                  setSelState(selected);
                  // fetch new lga areas
                }}
                {...stateInputProps}
              />
            </div>

            {selState && state && areas ? (
              <div
                {...areaContainerProps}
              >
                <PrimaryMultiSelect
                  placeholder="Select Local Government Area"
                  options={areas}
                  value={selArea}
                  error={Boolean(touched?.lga && errors?.lga)}
                  bottomText={errors?.lga}
                  onChange={(selected) => {
                    setSelArea(selected);
                    onChange({ state: state, lga: selected.label });
                  }}
                  {...areaInputProps}
                />
              </div>
            ) : null}
          </>
        );
    }