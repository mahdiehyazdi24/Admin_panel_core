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

export class SitemapStaticXml<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SEO
   * @name SeoControllerGenerateSiteMapStatic
   * @request GET:/sitemap-static.xml
   */
  seoControllerGenerateSiteMapStatic = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/sitemap-static.xml`,
      method: "GET",
      ...params,
    });

  /**
   * Redux AsyncThunk for seoControllerGenerateSiteMapStatic */
  seoControllerGenerateSiteMapStaticAsyncThunk = createAsyncThunk(
    "seoControllerGenerateSiteMapStatic",
    async (data?: { params?: RequestParams }) => {
      return await this.seoControllerGenerateSiteMapStatic(data?.params);
    },
  );
}
