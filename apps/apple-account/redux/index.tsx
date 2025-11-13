"use client";
import React from "react";
import { Provider } from "react-redux";
import createStore, { RootState } from "./store";
import { DeepPartial } from "react-hook-form";

interface StoreProviderProps {
  /** Optional preloaded state for initializing the Redux store */
  state?: DeepPartial<RootState>;
}

/**
 * Redux store provider for managing global state.
 *
 * This component initializes and provides the Redux store to its children.
 * It supports preloading state, which is useful for server-side state hydration.
 *
 * ⚠️ **Important Considerations When Using in Layouts (`layout.tsx`)**
 * - **Next.js layouts persist across navigations** in the App Router.
 * - If placed in `layout.tsx`, the Redux store **will not be reset** when navigating between pages.
 * - This means state will **only be initialized once**, based on the first request.
 * - If you need different preloaded state per page request, **use this inside page components instead**.
 *
 * @component
 * @example
 * ```tsx
 * import StoreProvider from "@/lib/reduxStore/StoreProvider";
 * import MyComponent from "./MyComponent";
 *
 * export default function Page() {
 *   const preloadedState = { auth: { isLogin: true } };
 *
 *   return (
 *     <StoreProvider state={preloadedState}>
 *       <MyComponent />
 *     </StoreProvider>
 *   );
 * }
 * ```
 *
 * @param {StoreProviderProps} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the Redux store provider
 * @param {DeepPartial<RootState>} [props.state] - Optional preloaded state for initializing Redux store
 * @returns {JSX.Element} The provider wrapping the children components
 */
const StoreProvider: React.FC<React.PropsWithChildren<StoreProviderProps>> = ({
  children,
  state,
}) => {
  const store = React.useMemo(() => createStore(state), [state]);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
