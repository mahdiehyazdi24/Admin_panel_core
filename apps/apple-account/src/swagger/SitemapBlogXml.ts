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

import { HttpClient, RequestParams } from "./http-client";

export class SitemapBlogXml<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
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
}
