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

export class SitemapBlogXml<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SEO
   * @name SeoControllerGenerateSiteMapBlog
   * @request GET:/sitemap-blog.xml
   */
  seoControllerGenerateSiteMapBlog = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/sitemap-blog.xml`,
      method: "GET",
      ...params,
    });

  /**
   * Redux AsyncThunk for seoControllerGenerateSiteMapBlog */
  seoControllerGenerateSiteMapBlogAsyncThunk = createAsyncThunk(
    "seoControllerGenerateSiteMapBlog",
    async (data?: { params?: RequestParams }) => {
      return await this.seoControllerGenerateSiteMapBlog(data?.params);
    },
  );
}
