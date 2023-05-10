import { PrimarySelectOption } from "components"

export const NumbersOptions = (stop: number = 20, start: number = 1, active?: number): PrimarySelectOption[] => {
    let numbers:PrimarySelectOption[] = [];
    for(let n = start; n <= stop; n++){
        numbers.push({ 
            text: n,
            props: { 
                value: n, 
                disabled: Boolean(active && n > active) 
            } 
        })
    }
    return numbers;
}
