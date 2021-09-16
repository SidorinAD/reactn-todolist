import { useState, useEffect, useCallback } from 'react';

export const useAsync = <T, E = string> (
    asyncFunction: any,
    immediate = true
) => {
    const [value, setValue] = useState<T | null>(null);
    const [error, setError] = useState<E | null>(null);

    const execute = useCallback(() => {
        setValue(null);
        setError(null);

        return asyncFunction()
            .then((response: any) => {
                setValue(response);
            })
            .catch((error: any) => {
                setError(error);
            });
    }, [asyncFunction]);

    useEffect(() => {
        if(immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, value, error };
};