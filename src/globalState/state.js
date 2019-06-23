import React from 'react';

import { AuthProvider, AuxDataProvider, AlertProvider } from '.';

function ProviderComposer({ context, children }) {
  return context.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      context={[<AuthProvider />, <AlertProvider />, <AuxDataProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
