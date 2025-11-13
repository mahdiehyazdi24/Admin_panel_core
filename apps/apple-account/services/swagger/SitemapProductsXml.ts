/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpClient, RequestParams } from "./http-client";

export class SitemapProductsXml<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SEO
   * @name SeoControllerGenerateSiteMapProduct
   * @request GET:/sitemap-products.xml
   */
  seoControllerGenerateSiteMapProduct = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/sitemap-products.xml`,
      method: "GET",
      ...params,
    });

  /**
   * Redux AsyncThunk for seoControllerGenerateSiteMapProduct */
  seoControllerGenerateSiteMapProductAsyncThunk = createAsyncThunk(
    "seoControllerGenerateSiteMapProduct",
    async (data?: { params?: RequestParams }) => {
      return await this.seoControllerGenerateSiteMapProduct(data?.params);
    },
  );
}
