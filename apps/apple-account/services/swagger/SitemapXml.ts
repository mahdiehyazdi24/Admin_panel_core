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

export class SitemapXml<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SEO
   * @name SeoControllerGenerateSiteMap
   * @request GET:/sitemap.xml
   */
  seoControllerGenerateSiteMap = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/sitemap.xml`,
      method: "GET",
      ...params,
    });

  /**
   * Redux AsyncThunk for seoControllerGenerateSiteMap */
  seoControllerGenerateSiteMapAsyncThunk = createAsyncThunk(
    "seoControllerGenerateSiteMap",
    async (data?: { params?: RequestParams }) => {
      return await this.seoControllerGenerateSiteMap(data?.params);
    },
  );
}
