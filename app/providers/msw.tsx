import {MSWDevTools} from 'msw-devtools';
import {ReactNode} from "react";

import {handlers} from '@/app/api/mocks/handlers';
import {db} from '@/app/api/mocks/db';
import {initializeMocks} from "@/app/api/mocks/initialize";

export type MSWWrapperProps = {
  children: ReactNode
}

initializeMocks();

export const MSWWrapper = ({children}: MSWWrapperProps) => {
  return (
    <>
      <MSWDevTools db={db} handlers={handlers}/>
      {children}
    </>
  )
}
