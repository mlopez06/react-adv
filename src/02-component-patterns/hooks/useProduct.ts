import { useEffect, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface UseProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number
}

export const useProduct = ( { product, onChange, value = 0 }: UseProductArgs) => {

    const [ counter, setCounter ] = useState(0);

    const increaseBy = ( value: number ) => {
        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );

        onChange && onChange({ count: newValue, product: product });
    }

    useEffect(() => {
      setCounter(value);
    }, [value])
    
    return {
        counter,
        increaseBy
    }

}