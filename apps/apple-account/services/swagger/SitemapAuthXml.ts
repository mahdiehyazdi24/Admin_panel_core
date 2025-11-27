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

export class SitemapAuthXml<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SEO
   * @name SeoControllerGenerateSiteMapAuth
   * @request GET:/sitemap-auth.xml
   */
  seoControllerGenerateSiteMapAuth = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/sitemap-auth.xml`,
      method: "GET",
      ...params,
    });

  /**
   * Redux AsyncThunk for seoControllerGenerateSiteMapAuth */
  seoControllerGenerateSiteMapAuthAsyncThunk = createAsyncThunk(
    "seoControllerGenerateSiteMapAuth",
    async (data?: { params?: RequestParams }) => {
      return await this.seoControllerGenerateSiteMapAuth(data?.params);
    },
  );
}
