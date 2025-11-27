import React from "react";

export interface PageProps<
  TParams extends object | never = never,
  TSearchParams extends object | never = never,
> {
  readonly params: TParams extends never ? never : Promise<TParams>;
  readonly searchParams: TSearchParams extends never
    ? never
    : Promise<TSearchParams>;
}

export interface LayoutProps<
  TParams extends object | never = never,
  TSearchParams extends object | never = never,
> extends PageProps<TParams, TSearchParams> {
  readonly children: React.ReactNode;
}
