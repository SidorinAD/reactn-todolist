import { DependencyList, useEffect } from 'react';

type AsyncCallback = () => Promise<any>

export const useAsyncEffect = (asyncCallback: AsyncCallback, deps: DependencyList[]) => {
  useEffect(() => {
    asyncCallback();
  }, deps);
};