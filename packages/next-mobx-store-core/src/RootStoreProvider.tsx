import { IRootStore } from "@next-mobx-store/type";
import { NextComponentType } from "next";
import { AppProps } from "next/app";
import React, { ReactComponentElement, ReactElement } from "react";
import { Renderer } from "react-dom";

export const MobXStoreContext = React.createContext<IRootStore | undefined>(
  undefined
);

interface RootStoreProviderProps {
  store?: IRootStore;
}

export default function RootStoreProvider({
  children,
  store,
}: React.PropsWithChildren<RootStoreProviderProps>) {
  return (
    <MobXStoreContext.Provider value={store}>
      {children}
    </MobXStoreContext.Provider>
  );
}
