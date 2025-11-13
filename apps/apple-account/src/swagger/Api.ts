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

import {
  AdminChargeWalletDto,
  AdminDeducteWalletDto,
  ALERT_ACCESS,
  ALERT_STATUS,
  ALERT_TYPE,
  ALERT_VISIBE,
  APPLEID_AUDIT_ACTION_TYPE,
  APPLEID_COUNTRY,
  AppleIdControllerGetAdminAppleIdsParamsStatusEnum,
  AppleIdControllerGetAdminAppleIdsParamsTypeEnum,
  AppleIdGetDetailResponseDto,
  AppleIdListLogsResponseDto,
  AppleIDResponseDto,
  AppleIdStatResponseDto,
  AppleIdStatUSACountResponseDto,
  AssignFormToProductDto,
  AssignFormToProductResponseDto,
  AssignFormulaToFormDto,
  AssignRoleBodyDto,
  AssignRoleResponseDto,
  AssingFormulaResponseDto,
  BadRequestResponseDto,
  BanStatusDto,
  BanUserResponseDto,
  CATEGORY_STATUS,
  ChargingPackageListResponseDto,
  ChargingPackageResponseDto,
  ChartResponseDto,
  CheckAssignFormToProductResponseDto,
  ClientEditAppleIdDto,
  ClientEditAppleIdResponseDto,
  COMMENT_STATUS,
  COMMENT_TYPE,
  CommentResponseWithRelationDto,
  CommentStatResponseDto,
  CompleteOrderDto,
  CompleteOrderResponseDto,
  CONTACT_US_STATUS,
  ContactUsStatResponseDto,
  CreateAlertDto,
  CreateAlertResponseDto,
  CreateAppleIdByFileDto,
  CreateAppleIdResponseDto,
  CreateAppleIdsDto,
  CreateBulkLabelDto,
  CreateBulkLabelResponseDto,
  CreateCategoryDto,
  CreateCategoryResponseDto,
  CreateChargingPackageDto,
  CreateCommentDto,
  CreateCommentResponseDto,
  CreateContactResponseDto,
  CreateContactUsDto,
  CreateCountryDto,
  CreateCountryQuestionDto,
  CreateCountryResponseDto,
  CreateEmailDomainDto,
  CreateEmailDomainResponseDto,
  CreateFAQDto,
  CreateFAQResponseDto,
  CreateFormDto,
  CreateFormulaDto,
  CreateFormulaResponseDto,
  CreateIpgGatewayDto,
  CreateLabelDto,
  CreateLabelResponseDto,
  CreateNoteDto,
  CreateNoteResponseDto,
  CreateNoticResponseDto,
  CreateNotifierGatewayDto,
  CreateNotifierGatewayResponseDto,
  CreateNotifierTemplateDto,
  CreateNotifierTemplateResponseDto,
  CreateOfferDto,
  CreateOfferResponseDto,
  CreateOrderStatusDto,
  CreateOrderStatusResponseDto,
  CreatePostDto,
  CreatePostResponseDto,
  CreateProductCategoryDto,
  CreateProductCategoryResponseDto,
  CreateProductDto,
  CreateProductResponseDto,
  CreateReplyCommentDto,
  CreateReplyCommentResponseDto,
  CreateRoleDto,
  CreateRoleResponseDto,
  CreateSettingDto,
  CreateSettingResponseDto,
  CreateSuggestDto,
  CreateSuggestResponseDto,
  CreateTagDto,
  CreateTagResponseDto,
  CreateUserByAdminDto,
  CreateUserResponseDto,
  DashboardStatResponseDto,
  DashboardStatsResponseDto,
  DeleteAlertResponseDto,
  DeleteAppleIdResponseDto,
  DeleteBulkLabelDto,
  DeleteBulkLabelResponseDto,
  DeleteCategoryResponseDto,
  DeleteContactResponseDto,
  DeleteCountryQuestionDto,
  DeleteCountryResponseDto,
  DeleteEmailDomainResponseDto,
  DeleteFAQResponseDto,
  DeleteFileResponseDto,
  DeleteFormulaResponseDto,
  DeleteNoteResponseDto,
  DeleteNoticResponseDto,
  DeleteNotifierGatewayResponseDto,
  DeleteNotifierTemplateResponseDto,
  DeleteOfferResponseDto,
  DeleteOrderStatusResponseDto,
  DeletePostResponseDto,
  DeleteProductCategoryResponseDto,
  DeleteProductResponseDto,
  DeleteRoleResponseDto,
  DeleteSettingResponseDto,
  DeleteSuggestResponseDto,
  DeleteTagResponseDto,
  EmailEditScraperDto,
  EmailValidationScraperDto,
  FILE_TYPE,
  FileQueryType,
  FollowUpContactUsDto,
  FollowUpOrderResponseDto,
  ForceCloseFollowUpDto,
  FORM_FORMULA_TAB_STATUS,
  FormSubmissionListResponseDto,
  FrobiddenResponseDto,
  GalleryResponseDto,
  GetAdminAuditListResponseDto,
  GetAlertPublicProductResponseDto,
  GetAlertResponseDto,
  GetAppleIDsLogsResponseDto,
  GetAppleIDsResponseDto,
  GetByCodeOfferResponseDto,
  GetByIdAlertResponseDto,
  GetByIdContactResponseDto,
  GetByIdNoteResponseDto,
  GetByIdOrderStatusResponseDto,
  GetByIdPostResponseDto,
  GetByIdSuggestResponseDto,
  GetCategoryAssignedToFormResponseDto,
  GetCategoryResponseDto,
  GetCommentsRelatedResponseDto,
  GetCommentsResponseDto,
  GetContactResponseDto,
  GetCountryResponseDto,
  GetDeletedProductsResponseDto,
  GetDetailCountryResponseDto,
  GetDetailEmailDomainResponseDto,
  GetDetailNoticResponseDto,
  GetDetailNotifierGatewayResponseDto,
  GetDetailNotifierTemplateResponseDto,
  GetDetailTransactionResponseDto,
  GetElementResponseDto,
  GetFAQByIdResponseDto,
  GetFAQResponseDto,
  GetFormDetailResponseDto,
  GetFormListResponseDto,
  GetFormulaDetailResponseDto,
  GetFormulaListResponseDto,
  GetIpgGatewayListResponseDto,
  GetIpgGatewayOmitedResponseDto,
  GetLabelByIdResponseDto,
  GetLabelResponseDto,
  GetListEmailDomainResponseDto,
  GetListNoticResponseDto,
  GetListNotifierGatewayResponseDto,
  GetListSettingResponseDto,
  GetNotifierTemplateResponseDto,
  GetOfferResponseDto,
  GetOneAdminAuditResponseDto,
  GetOneCategoryResponseDto,
  GetOneOfferResponseDto,
  GetOneProductCategoryResponseDto,
  GetOrderDetailResponseDto,
  GetOrderResponseDto,
  GetOrderStatusResponseDto,
  GetPostResponseDto,
  GetProductAssignedToFormResponseDto,
  GetProductByIdResponseDto,
  GetProductCategoryResponseDto,
  GetProductsResponseDto,
  GetResponseDto,
  GetRoleBySearchResponseDto,
  GetRoleResponseByIdDto,
  GetRoleResponseDto,
  GetSettingDetailResponseDto,
  GetStatusScraperListResponseDto,
  GetSuggestResponseDto,
  GetTagResponseDto,
  GetTimerRequestDetailResponseDto,
  GetTimerRequestListResponseDto,
  GetTokenWsResponseDto,
  GetTransactionDetailForUserResponseDto,
  GetTransactionResponseDto,
  GetUserDetailsResponseDto,
  GetUserOrdersResponseDto,
  GetUserProfileResponseDto,
  GetUsersListResponseDto,
  GroupByFields,
  InvoiceStatStatResponseDto,
  LABEL_STATUS,
  LoginDto,
  LoginResponseDto,
  NOTIFIER_GATEWAY_PROVIDER,
  NOTIFIER_GATEWAY_STATUS,
  NOTIFIER_METHOD_NAME,
  OrderBy,
  OrderCustomListResponseDto,
  OrderDownloadType,
  OrderLabelDto,
  OrderResponseDto,
  OrderSearchResponseDto,
  OrderStatDailyResponseDto,
  OrderStatListResponseDto,
  OrderStatResponseDto,
  OrderStatStatusCount,
  OrderUpdateResponseDto,
  OrderUpdateStatusDto,
  PAYMENT_GATEWAY,
  PermissionExposeArrayDto,
  PermissionResponseDto,
  POST_STATUS,
  POST_TYPE,
  PrismaSortOrder,
  PRODUCT_STATUS,
  PRODUCT_TYPE,
  ProductCategoryControllerGetCategoriesParamsExpandEnum,
  ProductPayDto,
  PublishCodeScraperDto,
  PublishCodeScraperResponseDto,
  PurchaseProductByWalletResponseDto,
  PurchaseProductResponseDto,
  QuestionCreateDto,
  QuestionUpdateDto,
  RefreshTokenDto,
  RegisterCardShebaListResponseDto,
  RegisterCardShebaResponseDto,
  RegisterDto,
  RegisterResponseDto,
  RegisterUserCardDto,
  ResponseContactUsDto,
  RetryScraperParamDto,
  RoleListUserResponseDto,
  RSS_FILE_NAME,
  ScraperUserIdResponseDto,
  ScraperUserIdsResponseDto,
  ScraperValidateEmailResponseDto,
  SearchProductSellingResponseDto,
  SearchResponseProductDto,
  SearchUserSellingResponseDto,
  SecurityQuestionsDetailDto,
  SecurityQuestionsDto,
  SendOTPDto,
  SendOTPResponseDto,
  SetTimerRequestDto,
  SetTimerRequestResponseDto,
  SETTING_TYPE,
  SortOrder,
  StartScraperInputsDto,
  SubmitFormResponseDto,
  SubmitFormValueDto,
  TAG_STATUS,
  TIMER_ACTION_TYPE,
  TIMER_MANAGMENT_STATUS,
  TimerDashboardFilterResponseDto,
  TimerDashboardFilterType,
  TimerDashboardStatChartResponseDto,
  TimerDashboardStatResponseDto,
  TimerLogGroupByFields,
  TimerLogOrderBy,
  TimerOrderStatResponseDto,
  TimerProductAggregatorResponseDto,
  TimerProductCategoryStatResponseDto,
  TimerProductStatResponseDto,
  TimerStatByIdsResponseDto,
  TimerStopTimerTrackerResponseDto,
  TimerTrackerResponseDto,
  TimerTrackerWithActionResponseDto,
  TimerUserStatResponseDto,
  TRANSACTION_CAUSE,
  TRANSACTION_GATEWAY,
  TRANSACTION_STATUS,
  UnauthorizedResponseDto,
  UpdateAlertDto,
  UpdateAlertResponseDto,
  UpdateAppleIdResponseDto,
  UpdateAppleIdWithStateDto,
  UpdateBodyEmailDomainDto,
  UpdateBodyNotifierGatewayDto,
  UpdateBodyNotifierGatewayResponseDto,
  UpdateBodyNotifierTemplateDto,
  UpdateBulkLabelDto,
  UpdateCategoryDto,
  UpdateCategoryResponseDto,
  UpdateChargingPackageDto,
  UpdateCommentResponseDto,
  UpdateCommentStatusBodyDto,
  UpdateContactResponseDto,
  UpdateContactUsDto,
  UpdateCountryDto,
  UpdateCountryQuestionDto,
  UpdateCountryResponseDto,
  UpdateEmailDomainResponseDto,
  UpdateFAQDto,
  UpdateFAQResponseDto,
  UpdateFollowUpOrderDto,
  UpdateFormDto,
  UpdateFormulaBodyDto,
  UpdateFormulaResponseDto,
  UpdateFormulaStatusDto,
  UpdateFormulaStatusResponseDto,
  UpdateIpgGatewayDto,
  UpdateNoteDto,
  UpdateNoteResponseDto,
  UpdateNoticDto,
  UpdateNoticResponseDto,
  UpdateNotifierTemplateResponseDto,
  UpdateOfferDto,
  UpdateOfferResponseDto,
  UpdateOrderStatusDto,
  UpdateOrderStatusResponseDto,
  UpdatePhoneOTPDto,
  UpdatePostDto,
  UpdatePostResponseDto,
  UpdateProductCategoryDto,
  UpdateProductCategoryResponseDto,
  UpdateProductDto,
  UpdateProductResponseDto,
  UpdateProfileDto,
  UpdateRoleDto,
  UpdateRoleResponseDto,
  UpdateSettingDto,
  UpdateSettingResponseDto,
  UpdateStatusTimerRequestArrayDto,
  UpdateSuggestDto,
  UpdateSuggestResponseDto,
  UpdateTagDto,
  UpdateTagResponseDto,
  UpdateTimerRequestBulkResponseDto,
  UpdateUserAdminDto,
  UpdateUserAdminResponseDto,
  UploadFileDto,
  UploadFileResponseDto,
  UserCreatedResponseDto,
  UserStatResponseDto,
  VERIFY_TYPE,
  VerifyTransactionDto,
  VerifyTransactionResponseDto,
  WALLET_TRANSACTION_GATEWAY,
  WalletChargeDto,
  WalletResponseDto,
  WalletTransactionAdminList,
  WalletTransactionResponseDto,
  WalletWithdrawalDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerAuthorize
   * @summary Authorize User
   * @request POST:/api/v1/auth/authorize
   */
  authControllerAuthorize = (data: RegisterDto, params: RequestParams = {}) =>
    this.request<
      RegisterResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/auth/authorize`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerAuthenticate
   * @summary Authenticate User
   * @request POST:/api/v1/auth/authenticate
   */
  authControllerAuthenticate = (data: LoginDto, params: RequestParams = {}) =>
    this.request<
      LoginResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/auth/authenticate`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerGetTokenForWs
   * @summary Get User Token For WS
   * @request POST:/api/v1/auth/ws/token
   * @secure
   */
  authControllerGetTokenForWs = (params: RequestParams = {}) =>
    this.request<
      GetTokenWsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/auth/ws/token`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerLogout
   * @summary Logout User
   * @request POST:/api/v1/auth/logout
   * @secure
   */
  authControllerLogout = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/auth/logout`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerRefresh
   * @summary Refresh Token
   * @request POST:/api/v1/auth/refresh
   * @secure
   */
  authControllerRefresh = (data: RefreshTokenDto, params: RequestParams = {}) =>
    this.request<
      LoginResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/auth/refresh`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerBanUser
   * @summary Ban & Un Ban User
   * @request PATCH:/api/v1/auth/ban/{userId}
   * @secure
   */
  authControllerBanUser = (
    userId: string,
    data: BanStatusDto,
    params: RequestParams = {},
  ) =>
    this.request<
      BanUserResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/auth/ban/${userId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerGetUserPermission
   * @summary Get User Permission
   * @request GET:/api/v1/auth/permission
   * @secure
   */
  authControllerGetUserPermission = (params: RequestParams = {}) =>
    this.request<
      PermissionResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/auth/permission`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Admin Audit
   * @name AdminAuditControllerGetCategories
   * @summary Get Admin Audit List
   * @request GET:/api/v1/admin-audit
   * @secure
   */
  adminAuditControllerGetCategories = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** user id */
      user_id?: string;
      /** model name */
      model?: string;
      /** action name */
      action?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      /** Phone Number  */
      phone_number?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetAdminAuditListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/admin-audit`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Admin Audit
   * @name AdminAuditControllerGetAdminAuditById
   * @summary Get Admin Audit By Id
   * @request GET:/api/v1/admin-audit/{admin_audit_id}
   * @secure
   */
  adminAuditControllerGetAdminAuditById = (
    adminAuditId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetOneAdminAuditResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/admin-audit/${adminAuditId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerWalletCharge
   * @summary Wallet Charge by IPG
   * @request POST:/api/v1/payment/wallet/charge
   * @secure
   */
  paymentControllerWalletCharge = (
    data: WalletChargeDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PurchaseProductResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/payment/wallet/charge`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerProductPurchase
   * @summary purchase Product by IPG
   * @request POST:/api/v1/payment/product/purchase
   * @secure
   */
  paymentControllerProductPurchase = (
    data: ProductPayDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PurchaseProductResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/payment/product/purchase`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerProductPurchaseByWallet
   * @summary Purchase Product By Wallet
   * @request POST:/api/v1/payment/product/wallet/purchase
   * @secure
   */
  paymentControllerProductPurchaseByWallet = (
    data: WalletWithdrawalDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PurchaseProductByWalletResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/payment/product/wallet/purchase`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerVerifyProductTransaction
   * @summary Verify transaction
   * @request POST:/api/v1/payment/verify/{type}
   * @secure
   */
  paymentControllerVerifyProductTransaction = (
    type: VERIFY_TYPE,
    data: VerifyTransactionDto,
    params: RequestParams = {},
  ) =>
    this.request<
      VerifyTransactionResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/payment/verify/${type}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payment
   * @name PaymentControllerVerifyZibalProductTransaction
   * @summary Zibal verify transaction
   * @request GET:/api/v1/payment/verify/zibal/{type}
   * @secure
   */
  paymentControllerVerifyZibalProductTransaction = (
    type: VERIFY_TYPE,
    query: {
      /** trackerId */
      trackId: string;
      /** success */
      success: string;
      /** orderId */
      orderId: string;
      /** status */
      status: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      VerifyTransactionResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/payment/verify/zibal/${type}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Transaction
   * @name TransactionControllerGetTrandactionListByUserIdForAdmin
   * @summary Get List Transaction By User Id For Admin
   * @request GET:/api/v1/transaction/admin/{user_id}
   * @secure
   */
  transactionControllerGetTrandactionListByUserIdForAdmin = (
    userId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      OrderCustomListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/transaction/admin/${userId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Transaction
   * @name TransactionControllerGetListClient
   * @summary Get List Transaction For Client
   * @request GET:/api/v1/transaction/client
   * @secure
   */
  transactionControllerGetListClient = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** cause */
      cause?: TRANSACTION_CAUSE;
      /** User phone address */
      phone_number?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      ipg_transaction_id?: string;
      wallet_transaction_id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetTransactionResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/transaction/client`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Transaction
   * @name TransactionControllerGetDetailClient
   * @summary Get Detail Transaction For Client
   * @request GET:/api/v1/transaction/client/{transaction_id}
   * @secure
   */
  transactionControllerGetDetailClient = (
    transactionId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetDetailTransactionResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/transaction/client/${transactionId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Transaction
   * @name TransactionControllerGetList
   * @summary Get List Transaction For Admin
   * @request GET:/api/v1/transaction
   * @secure
   */
  transactionControllerGetList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** cause */
      cause?: TRANSACTION_CAUSE;
      /** User phone address */
      phone_number?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      ipg_transaction_id?: string;
      wallet_transaction_id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetTransactionResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/transaction`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Transaction
   * @name TransactionControllerGetListByUser
   * @summary Get List Transaction For Admin By User
   * @request GET:/api/v1/transaction/admin/list/{user_id}
   * @secure
   */
  transactionControllerGetListByUser = (
    userId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Sort */
      sort?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetTransactionDetailForUserResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/transaction/admin/list/${userId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Transaction
   * @name TransactionControllerGetDetail
   * @summary Get Detail Transaction For Admin
   * @request GET:/api/v1/transaction/{transaction_id}
   * @secure
   */
  transactionControllerGetDetail = (
    transactionId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetDetailTransactionResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/transaction/${transactionId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerAdminOrderListBySearch
   * @summary Admin Get List By Search
   * @request GET:/api/v1/order/admin/search/list
   * @secure
   */
  orderControllerAdminOrderListBySearch = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** IPG Gateway */
      ipg_gateway?: TRANSACTION_GATEWAY;
      /** Type */
      type?: PAYMENT_GATEWAY;
      /** Payment Status */
      payment_status?: TRANSACTION_STATUS;
      /** Order Status */
      order_status?: PRODUCT_STATUS;
      /** Product Type */
      product_type?: PRODUCT_TYPE;
      /** Phone Number */
      phone_number?: string;
      /** Order Number */
      order_hash?: string;
      /** Apple ID Email */
      appleid_email?: string;
      /**
       * Start Date
       * @format date-time
       */
      start_date?: string;
      /**
       * End Date
       * @format date-time
       */
      end_date?: string;
      /** Sort */
      sort?: PrismaSortOrder;
      /**
       * Sort Field
       * @example "created_at"
       */
      sort_field?: string;
      /** label ids */
      label_ids?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      OrderSearchResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/admin/search/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerAdminOrderListByUserId
   * @summary Admin Get List By User Id
   * @request GET:/api/v1/order/admin/list/{user_id}
   * @secure
   */
  orderControllerAdminOrderListByUserId = (
    userId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      OrderSearchResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/admin/list/${userId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerAdminAssignLabelToOrder
   * @summary Admin Assign Label To Order
   * @request PATCH:/api/v1/order/admin/label/assign/{order_id}
   * @secure
   */
  orderControllerAdminAssignLabelToOrder = (
    orderId: string,
    data: OrderLabelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      OrderResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/admin/label/assign/${orderId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerAdminGetOrderDetail
   * @summary Admin Get Order Detail
   * @request GET:/api/v1/order/admin/detail/{order_id}
   * @secure
   */
  orderControllerAdminGetOrderDetail = (
    orderId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetOrderDetailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/admin/detail/${orderId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerAdminUpdateOrderStatus
   * @summary Admin Update Order Status
   * @request PATCH:/api/v1/order/admin/status/{order_id}
   * @secure
   */
  orderControllerAdminUpdateOrderStatus = (
    orderId: string,
    data: OrderUpdateStatusDto,
    params: RequestParams = {},
  ) =>
    this.request<
      OrderUpdateResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/admin/status/${orderId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerGetUserOrders
   * @summary Get User Orders
   * @request GET:/api/v1/order/list
   * @secure
   */
  orderControllerGetUserOrders = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetUserOrdersResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerGetOrder
   * @summary Get Order
   * @request GET:/api/v1/order/{order_id}
   * @secure
   */
  orderControllerGetOrder = (orderId: string, params: RequestParams = {}) =>
    this.request<
      GetOrderResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/${orderId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerCompleteOrder
   * @summary Complete Order information
   * @request POST:/api/v1/order/{order_id}
   * @secure
   */
  orderControllerCompleteOrder = (
    orderId: string,
    data: CompleteOrderDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CompleteOrderResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/${orderId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerDownloadOrder
   * @summary Download Order
   * @request GET:/api/v1/order/{order_id}/download
   * @secure
   */
  orderControllerDownloadOrder = (
    orderId: string,
    query: {
      /** download type */
      downloadType: OrderDownloadType;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v1/order/${orderId}/download`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerAppleIdEditScope
   * @summary Client edit appleid fields based on scope
   * @request PATCH:/api/v1/order/{order_id}/appleid/{apple_id}/edit-scope
   * @secure
   */
  orderControllerAppleIdEditScope = (
    orderId: string,
    appleId: string,
    data: ClientEditAppleIdDto,
    params: RequestParams = {},
  ) =>
    this.request<
      ClientEditAppleIdResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/${orderId}/appleid/${appleId}/edit-scope`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerUpdateFollowUpStatus
   * @summary Update Follow Up Order Status
   * @request PATCH:/api/v1/order/follow/{order_id}
   * @secure
   */
  orderControllerUpdateFollowUpStatus = (
    orderId: string,
    data: UpdateFollowUpOrderDto,
    params: RequestParams = {},
  ) =>
    this.request<
      FollowUpOrderResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/follow/${orderId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderControllerEndFollowUpStatus
   * @summary Update Follow Up Order Status To False
   * @request POST:/api/v1/order/follow/force/close
   * @secure
   */
  orderControllerEndFollowUpStatus = (
    data: ForceCloseFollowUpDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CompleteOrderResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/follow/force/close`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Label
   * @name LabelControllerGetLabelList
   * @summary Get Label List
   * @request GET:/api/v1/label
   * @secure
   */
  labelControllerGetLabelList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** name */
      name?: string;
      /** user id */
      user_id?: string;
      /** status */
      status?: LABEL_STATUS;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetLabelResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/label`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Label
   * @name LabelControllerCreateLabel
   * @summary Create Label
   * @request POST:/api/v1/label
   * @secure
   */
  labelControllerCreateLabel = (
    data: CreateLabelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateLabelResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/label`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Label
   * @name LabelControllerGetLabel
   * @summary Get Label Detail
   * @request GET:/api/v1/label/{label_id}
   * @secure
   */
  labelControllerGetLabel = (labelId: string, params: RequestParams = {}) =>
    this.request<
      GetLabelByIdResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/label/${labelId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Label
   * @name LabelControllerCreateBulkLabel
   * @summary Create Bulk Label
   * @request POST:/api/v1/label/create/bulk
   * @secure
   */
  labelControllerCreateBulkLabel = (
    data: CreateBulkLabelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateBulkLabelResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/label/create/bulk`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Label
   * @name LabelControllerUpdateBulkLabel
   * @summary Update Bulk Label By Ids
   * @request PUT:/api/v1/label/update/bulk
   * @secure
   */
  labelControllerUpdateBulkLabel = (
    data: UpdateBulkLabelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      GetLabelResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/label/update/bulk`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Label
   * @name LabelControllerDeleteBulkLabel
   * @summary Delete Bulk Label By Id
   * @request POST:/api/v1/label/delete/bulk
   * @secure
   */
  labelControllerDeleteBulkLabel = (
    data: DeleteBulkLabelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteBulkLabelResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/label/delete/bulk`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Note
   * @name NoteControllerGetOneNote
   * @summary Get One Note List
   * @request GET:/api/v1/note/{note_id}
   * @secure
   */
  noteControllerGetOneNote = (noteId: string, params: RequestParams = {}) =>
    this.request<
      GetByIdNoteResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/note/${noteId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Note
   * @name NoteControllerCreateNote
   * @summary Create Note
   * @request POST:/api/v1/note
   * @secure
   */
  noteControllerCreateNote = (
    data: CreateNoteDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateNoteResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/note`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Note
   * @name NoteControllerUpdateNote
   * @summary Update Note By Id
   * @request PUT:/api/v1/note/{noteId}
   * @secure
   */
  noteControllerUpdateNote = (
    noteId: string,
    data: UpdateNoteDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateNoteResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/note/${noteId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Note
   * @name NoteControllerDeleteNote
   * @summary Delete Note By Id
   * @request DELETE:/api/v1/note/{noteId}
   * @secure
   */
  noteControllerDeleteNote = (noteId: string, params: RequestParams = {}) =>
    this.request<
      DeleteNoteResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/note/${noteId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Status
   * @name OrderStatusControllerGetStatusList
   * @summary Get Status List
   * @request GET:/api/v1/order/status
   * @secure
   */
  orderStatusControllerGetStatusList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetOrderStatusResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/status`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Status
   * @name OrderStatusControllerCreateStatus
   * @summary Create Status
   * @request POST:/api/v1/order/status
   * @secure
   */
  orderStatusControllerCreateStatus = (
    data: CreateOrderStatusDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateOrderStatusResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/status`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Status
   * @name OrderStatusControllerGetOneStatus
   * @summary Get One Status List
   * @request GET:/api/v1/order/status/{status_id}
   * @secure
   */
  orderStatusControllerGetOneStatus = (
    statusId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetByIdOrderStatusResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/status/${statusId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Status
   * @name OrderStatusControllerUpdateStatus
   * @summary Update Status By Id
   * @request PUT:/api/v1/order/status/{status_id}
   * @secure
   */
  orderStatusControllerUpdateStatus = (
    statusId: string,
    data: UpdateOrderStatusDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateOrderStatusResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/status/${statusId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order Status
   * @name OrderStatusControllerDeleteStatus
   * @summary Delete Status By Id
   * @request DELETE:/api/v1/order/status/{status_id}
   * @secure
   */
  orderStatusControllerDeleteStatus = (
    statusId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteOrderStatusResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/order/status/${statusId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Time Tracker
   * @name TimerControllerTimerLogList
   * @summary Get Timer Log List
   * @request GET:/api/v1/timer
   * @secure
   */
  timerControllerTimerLogList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** order id */
      order_id?: string;
      /** user id */
      user_id?: string;
      /** user id of the user who placed the order */
      buyer_user_id?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      action_type?: TIMER_ACTION_TYPE;
      min_sec?: number;
      max_sec?: number;
      /** operator_name */
      operator_name?: string;
      /** دame of the user who placed the order */
      user_name?: string;
      /** product_category_id */
      product_category_id?: string;
      /** order_hash */
      order_hash?: string;
      /** order_count */
      product_count?: number;
      /** Sort */
      sort?: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      TimerTrackerWithActionResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/timer`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Time Tracker
   * @name TimerControllerTimerLogDetail
   * @summary Get Timer Detail Start/Stop
   * @request GET:/api/v1/timer/{timer_id}
   * @secure
   */
  timerControllerTimerLogDetail = (
    timerId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      TimerTrackerResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/timer/${timerId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Time Tracker
   * @name TimerControllerTimerStop
   * @summary Set Timer Stop
   * @request PATCH:/api/v1/timer/{order_id}
   * @secure
   */
  timerControllerTimerStop = (orderId: string, params: RequestParams = {}) =>
    this.request<
      TimerStopTimerTrackerResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/timer/${orderId}`,
      method: "PATCH",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Time Request
   * @name TimerRequestControllerGetTimerList
   * @summary Get Timer Request List
   * @request GET:/api/v1/timer-request
   * @secure
   */
  timerRequestControllerGetTimerList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** status */
      status?: TIMER_MANAGMENT_STATUS;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetTimerRequestListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/timer-request`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Time Request
   * @name TimerRequestControllerSetTimerRequest
   * @summary Set New Request For Update Timer
   * @request POST:/api/v1/timer-request
   * @secure
   */
  timerRequestControllerSetTimerRequest = (
    data: SetTimerRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<
      SetTimerRequestResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/timer-request`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Time Request
   * @name TimerRequestControllerTimerRequestManagment
   * @summary Update Timer Request Status
   * @request PATCH:/api/v1/timer-request
   * @secure
   */
  timerRequestControllerTimerRequestManagment = (
    data: UpdateStatusTimerRequestArrayDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateTimerRequestBulkResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/timer-request`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Time Request
   * @name TimerRequestControllerGetTimerDetail
   * @summary Get Timer Request Detail
   * @request GET:/api/v1/timer-request/{timer_request_id}
   * @secure
   */
  timerRequestControllerGetTimerDetail = (
    timerRequestId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetTimerRequestDetailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/timer-request/${timerRequestId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FAQ
   * @name FaqControllerGetFaqList
   * @summary Get FAQ List
   * @request GET:/api/v1/faq
   * @secure
   */
  faqControllerGetFaqList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** user_id */
      user_id?: string;
      /** title */
      title?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetFAQResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/faq`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FAQ
   * @name FaqControllerCreateFaq
   * @summary Create FAQ
   * @request POST:/api/v1/faq
   * @secure
   */
  faqControllerCreateFaq = (data: CreateFAQDto, params: RequestParams = {}) =>
    this.request<
      CreateFAQResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/faq`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FAQ
   * @name FaqControllerGetFaqById
   * @summary Get FAQ By Id
   * @request GET:/api/v1/faq/{faqId}
   * @secure
   */
  faqControllerGetFaqById = (faqId: string, params: RequestParams = {}) =>
    this.request<
      GetFAQByIdResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/faq/${faqId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FAQ
   * @name FaqControllerUpdateFaq
   * @summary Update FAQ By Id
   * @request PUT:/api/v1/faq/{faqId}
   * @secure
   */
  faqControllerUpdateFaq = (
    faqId: string,
    data: UpdateFAQDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateFAQResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/faq/${faqId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags FAQ
   * @name FaqControllerDeleteFaq
   * @summary Delete FAQ By Id
   * @request DELETE:/api/v1/faq/{faqId}
   * @secure
   */
  faqControllerDeleteFaq = (faqId: string, params: RequestParams = {}) =>
    this.request<
      DeleteFAQResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/faq/${faqId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductControllerCreateProduct
   * @summary Create products
   * @request POST:/api/v1/product
   * @secure
   */
  productControllerCreateProduct = (
    data: CreateProductDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateProductResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductControllerGetAllProducts
   * @summary Get all products
   * @request GET:/api/v1/product
   * @secure
   */
  productControllerGetAllProducts = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Title */
      title?: string;
      /** Slug */
      slug?: string;
      /** Is Suggest */
      is_suggest?: boolean;
      /** Is Bulk */
      is_bulk?: boolean;
      /** Product Count */
      product_count?: number;
      /** Category Ids */
      category_ids?: string[];
      /** Types */
      types?: PRODUCT_TYPE[];
      /** Countries */
      countries?: APPLEID_COUNTRY[];
      /**
       * Start Created At
       * @format date-time
       */
      start?: string;
      /**
       * End Created At
       * @format date-time
       */
      end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductControllerUpdateProduct
   * @summary Update Product
   * @request PUT:/api/v1/product/{product_id}
   * @secure
   */
  productControllerUpdateProduct = (
    productId: string,
    data: UpdateProductDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateProductResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product/${productId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductControllerDeleteProduct
   * @summary Delete product
   * @request DELETE:/api/v1/product/{product_id}
   * @secure
   */
  productControllerDeleteProduct = (
    productId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteProductResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product/${productId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductControllerGetProductById
   * @summary Get product by id
   * @request GET:/api/v1/product/{product_id}
   * @secure
   */
  productControllerGetProductById = (
    productId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductByIdResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductControllerGetAllProductTimers
   * @summary Get all product timers
   * @request GET:/api/v1/product/timer
   * @secure
   */
  productControllerGetAllProductTimers = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      TimerProductAggregatorResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product/timer`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductControllerGetProductBySlug
   * @summary Get product by slug
   * @request GET:/api/v1/product/slug/{slug}
   * @secure
   */
  productControllerGetProductBySlug = (
    slug: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductByIdResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product/slug/${slug}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductControllerGetFile
   * @summary Stream product image
   * @request GET:/api/v1/product/stream/{file_name}
   * @secure
   */
  productControllerGetFile = (fileName: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/product/stream/${fileName}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductControllerGetDeletedProducts
   * @summary Get Deleted products
   * @request GET:/api/v1/product/deleted
   * @secure
   */
  productControllerGetDeletedProducts = (params: RequestParams = {}) =>
    this.request<
      GetDeletedProductsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product/deleted`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product Category
   * @name ProductCategoryControllerGetCategories
   * @summary Get Product Categories
   * @request GET:/api/v1/product-category
   * @secure
   */
  productCategoryControllerGetCategories = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Title */
      name?: string;
      /**
       * Start Date
       * @format date-time
       */
      start?: string;
      /**
       * End Date
       * @format date-time
       */
      end?: string;
      /** Relations to include in the response */
      expand?: ProductCategoryControllerGetCategoriesParamsExpandEnum[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product-category`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product Category
   * @name ProductCategoryControllerCreateProductCategory
   * @summary Create Product Categories
   * @request POST:/api/v1/product-category
   * @secure
   */
  productCategoryControllerCreateProductCategory = (
    data: CreateProductCategoryDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateProductCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product-category`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product Category
   * @name ProductCategoryControllerGetProductCategoryById
   * @summary Get Product Category By Id
   * @request GET:/api/v1/product-category/{product_category_id}
   * @secure
   */
  productCategoryControllerGetProductCategoryById = (
    productCategoryId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetOneProductCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product-category/${productCategoryId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product Category
   * @name ProductCategoryControllerUpdateProductCategory
   * @summary Update Product Category By Id
   * @request PUT:/api/v1/product-category/{product_category_id}
   * @secure
   */
  productCategoryControllerUpdateProductCategory = (
    productCategoryId: string,
    data: UpdateProductCategoryDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateProductCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product-category/${productCategoryId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product Category
   * @name ProductCategoryControllerDeleteProductCategory
   * @summary Delete Product Category By Id
   * @request DELETE:/api/v1/product-category/{product_category_id}
   * @secure
   */
  productCategoryControllerDeleteProductCategory = (
    productCategoryId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteProductCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/product-category/${productCategoryId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Email Domain
   * @name EmailDomainControllerGetEmailDomainList
   * @summary Get Email Domain List
   * @request GET:/api/v1/email-domain
   * @secure
   */
  emailDomainControllerGetEmailDomainList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetListEmailDomainResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/email-domain`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Email Domain
   * @name EmailDomainControllerCreateEmailDomain
   * @summary Create Email Domain
   * @request POST:/api/v1/email-domain
   * @secure
   */
  emailDomainControllerCreateEmailDomain = (
    data: CreateEmailDomainDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateEmailDomainResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/email-domain`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Email Domain
   * @name EmailDomainControllerGetEmailDomainById
   * @summary Get Email Domain By Id
   * @request GET:/api/v1/email-domain/{email_domain_id}
   * @secure
   */
  emailDomainControllerGetEmailDomainById = (
    emailDomainId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetDetailEmailDomainResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/email-domain/${emailDomainId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Email Domain
   * @name EmailDomainControllerUpdateEmailDomain
   * @summary Update Email Domain By Id
   * @request PUT:/api/v1/email-domain/{email_domain_id}
   * @secure
   */
  emailDomainControllerUpdateEmailDomain = (
    emailDomainId: string,
    data: UpdateBodyEmailDomainDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateEmailDomainResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/email-domain/${emailDomainId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Email Domain
   * @name EmailDomainControllerDeleteEmailDomain
   * @summary Delete Email Domain By Id
   * @request DELETE:/api/v1/email-domain/{email_domain_id}
   * @secure
   */
  emailDomainControllerDeleteEmailDomain = (
    emailDomainId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteEmailDomainResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/email-domain/${emailDomainId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AppleIds
   * @name AppleIdControllerCreateAppleIdWithFile
   * @summary Create new apple ID By File
   * @request POST:/api/v1/appleid/excel
   * @secure
   */
  appleIdControllerCreateAppleIdWithFile = (
    data: CreateAppleIdByFileDto,
    params: RequestParams = {},
  ) =>
    this.request<
      AppleIDResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/appleid/excel`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AppleIds
   * @name AppleIdControllerCreateAppleId
   * @summary Create new apple ID
   * @request POST:/api/v1/appleid
   * @secure
   */
  appleIdControllerCreateAppleId = (
    data: CreateAppleIdsDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateAppleIdResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/appleid`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AppleIds
   * @name AppleIdControllerGetAdminAppleIds
   * @summary Get admin apple IDs
   * @request GET:/api/v1/appleid/list
   * @secure
   */
  appleIdControllerGetAdminAppleIds = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Email */
      email?: string;
      /** Apple ID type */
      type?: AppleIdControllerGetAdminAppleIdsParamsTypeEnum;
      file_id?: string;
      /** Purchase status */
      status?: AppleIdControllerGetAdminAppleIdsParamsStatusEnum;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetAppleIDsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/appleid/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AppleIds
   * @name AppleIdControllerUpdateAppleId
   * @summary Update apple ID (admin) and optionally set client edit scope
   * @request PATCH:/api/v1/appleid/{apple_id}
   * @secure
   */
  appleIdControllerUpdateAppleId = (
    appleId: string,
    data: UpdateAppleIdWithStateDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateAppleIdResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/appleid/${appleId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AppleIds
   * @name AppleIdControllerDeleteAppleId
   * @summary delete apple id
   * @request DELETE:/api/v1/appleid/{apple_id}
   * @secure
   */
  appleIdControllerDeleteAppleId = (
    appleId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteAppleIdResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/appleid/${appleId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AppleIds
   * @name AppleIdControllerGetAppleIdLogsListForAdmin
   * @summary Get appleid list & audit for admin
   * @request GET:/api/v1/appleid/logs
   * @secure
   */
  appleIdControllerGetAppleIdLogsListForAdmin = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** order hash */
      order_hash?: string;
      /** name + family */
      username?: string;
      /** action type */
      action_type?: APPLEID_AUDIT_ACTION_TYPE;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      /**
       * Order Start of creation date range
       * @format date-time
       */
      order_created_at_start?: string;
      /**
       * Order End of creation date range
       * @format date-time
       */
      order_created_at_end?: string;
      /** Sort */
      sort?: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      AppleIdListLogsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/appleid/logs`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AppleIds
   * @name AppleIdControllerGetAppleIdLogsByAppleIdForAdmin
   * @summary Get appleid audit by apple_id
   * @request GET:/api/v1/appleid/logs/{apple_id}
   * @secure
   */
  appleIdControllerGetAppleIdLogsByAppleIdForAdmin = (
    appleId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** order hash */
      order_hash?: string;
      /** name + family */
      username?: string;
      /** action type */
      action_type?: APPLEID_AUDIT_ACTION_TYPE;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      /**
       * Order Start of creation date range
       * @format date-time
       */
      order_created_at_start?: string;
      /**
       * Order End of creation date range
       * @format date-time
       */
      order_created_at_end?: string;
      /** Sort */
      sort?: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetAppleIDsLogsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/appleid/logs/${appleId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AppleIds
   * @name AppleIdControllerGetAppleIdDetail
   * @summary Get apple id detail
   * @request GET:/api/v1/appleid/detail/{apple_id}
   * @secure
   */
  appleIdControllerGetAppleIdDetail = (
    appleId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      AppleIdGetDetailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/appleid/detail/${appleId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AppleIds
   * @name AppleIdControllerGetDeletedAppleids
   * @summary Get Deleted apple ids
   * @request GET:/api/v1/appleid/deleted
   * @secure
   */
  appleIdControllerGetDeletedAppleids = (params: RequestParams = {}) =>
    this.request<
      GetAppleIDsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/appleid/deleted`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Security Question
   * @name QuestionControllerGetQuestion
   * @summary Get Question List
   * @request GET:/api/v1/security-questions
   * @secure
   */
  questionControllerGetQuestion = (
    query?: {
      /** Question */
      question?: string;
      /** Title */
      title?: string;
      /** Priority */
      priority?: number;
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /**
       * Start Date
       * @format date-time
       */
      start?: string;
      /**
       * End Date
       * @format date-time
       */
      end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      SecurityQuestionsDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/security-questions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Security Question
   * @name QuestionControllerCreateQuestion
   * @summary Create Question
   * @request POST:/api/v1/security-questions
   * @secure
   */
  questionControllerCreateQuestion = (
    data: QuestionCreateDto,
    params: RequestParams = {},
  ) =>
    this.request<
      SecurityQuestionsDetailDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/security-questions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Security Question
   * @name QuestionControllerGetOneQuestion
   * @summary Get One Question
   * @request GET:/api/v1/security-questions/{question_id}
   * @secure
   */
  questionControllerGetOneQuestion = (
    questionId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      SecurityQuestionsDetailDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/security-questions/${questionId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Security Question
   * @name QuestionControllerUpdateQuestion
   * @summary Update Question By Id
   * @request PUT:/api/v1/security-questions/{question_id}
   * @secure
   */
  questionControllerUpdateQuestion = (
    questionId: string,
    data: QuestionUpdateDto,
    params: RequestParams = {},
  ) =>
    this.request<
      SecurityQuestionsDetailDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/security-questions/${questionId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Security Question
   * @name QuestionControllerDeleteQuestion
   * @summary Delete Question By Id
   * @request DELETE:/api/v1/security-questions/{question_id}
   * @secure
   */
  questionControllerDeleteQuestion = (
    questionId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      SecurityQuestionsDetailDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/security-questions/${questionId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Scraper
   * @name AppleIdScraperControllerValidateEmailByScraper
   * @summary validate email appleid
   * @request POST:/api/v1/scraper/validate/email
   * @secure
   */
  appleIdScraperControllerValidateEmailByScraper = (
    data: EmailValidationScraperDto,
    params: RequestParams = {},
  ) =>
    this.request<
      ScraperValidateEmailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/scraper/validate/email`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Scraper
   * @name AppleIdScraperControllerGetScraperStatus
   * @summary get scraper status by order
   * @request GET:/api/v1/scraper/status/{order_id}
   * @secure
   */
  appleIdScraperControllerGetScraperStatus = (
    orderId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetStatusScraperListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/scraper/status/${orderId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Scraper
   * @name AppleIdScraperControllerUpdateAppleIdByScraper
   * @summary update appleid
   * @request POST:/api/v1/scraper/update/appleid
   * @secure
   */
  appleIdScraperControllerUpdateAppleIdByScraper = (
    data: StartScraperInputsDto,
    params: RequestParams = {},
  ) =>
    this.request<
      ScraperUserIdsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/scraper/update/appleid`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Scraper
   * @name AppleIdScraperControllerUpdateEmailAppleIdByScraper
   * @summary update appleid email
   * @request POST:/api/v1/scraper/update/appleid/email
   * @secure
   */
  appleIdScraperControllerUpdateEmailAppleIdByScraper = (
    data: EmailEditScraperDto,
    params: RequestParams = {},
  ) =>
    this.request<
      ScraperUserIdsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/scraper/update/appleid/email`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Scraper
   * @name AppleIdScraperControllerRetryUpdateAppleIdByScraper
   * @summary retry update appleid
   * @request POST:/api/v1/scraper/retry/update/appleid
   * @secure
   */
  appleIdScraperControllerRetryUpdateAppleIdByScraper = (
    data: RetryScraperParamDto,
    params: RequestParams = {},
  ) =>
    this.request<
      ScraperUserIdResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/scraper/retry/update/appleid`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Scraper
   * @name AppleIdScraperControllerPushCodeScraper
   * @summary scraper push code
   * @request POST:/api/v1/scraper/push/code
   * @secure
   */
  appleIdScraperControllerPushCodeScraper = (
    data: PublishCodeScraperDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PublishCodeScraperResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/scraper/push/code`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerGetBalance
   * @summary Get user balance
   * @request GET:/api/v1/wallet/balance
   * @secure
   */
  walletControllerGetBalance = (params: RequestParams = {}) =>
    this.request<
      GetResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/balance`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerAdminGetBalance
   * @summary Get user balance by admin
   * @request GET:/api/v1/wallet/admin/balance
   * @secure
   */
  walletControllerAdminGetBalance = (
    query: {
      /** User Id */
      user_id: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/admin/balance`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerAsync
   * @summary Get User Wallet Transactions
   * @request GET:/api/v1/wallet/admin/wallet/transaction/{user_id}
   * @secure
   */
  walletControllerAsync = (
    userId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      WalletTransactionResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/admin/wallet/transaction/${userId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerAdminChargeWallet
   * @summary Charging user wallet by admin
   * @request POST:/api/v1/wallet/admin/charge
   * @secure
   */
  walletControllerAdminChargeWallet = (
    data: AdminChargeWalletDto,
    params: RequestParams = {},
  ) =>
    this.request<
      WalletResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/admin/charge`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerAdminDeductWallet
   * @summary Deduct user wallet by admin
   * @request POST:/api/v1/wallet/admin/deduct
   * @secure
   */
  walletControllerAdminDeductWallet = (
    data: AdminDeducteWalletDto,
    params: RequestParams = {},
  ) =>
    this.request<
      WalletResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/admin/deduct`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerAdminTransactionListByUserId
   * @summary Get list wallet transactions by user id for admin
   * @request GET:/api/v1/wallet/admin/transaction/{user_id}/list
   * @secure
   */
  walletControllerAdminTransactionListByUserId = (
    userId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** cause */
      cause?: TRANSACTION_CAUSE;
      /** User phone address */
      phone_number?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      ipg_transaction_id?: string;
      wallet_transaction_id?: string;
      /** full name */
      full_name?: string;
      /** gateway */
      gateway?: WALLET_TRANSACTION_GATEWAY;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      WalletTransactionAdminList,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/admin/transaction/${userId}/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerAdminTransactionList
   * @summary Get list wallet transactions by admin
   * @request GET:/api/v1/wallet/admin/transaction/list
   * @secure
   */
  walletControllerAdminTransactionList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** cause */
      cause?: TRANSACTION_CAUSE;
      /** User phone address */
      phone_number?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      ipg_transaction_id?: string;
      wallet_transaction_id?: string;
      /** full name */
      full_name?: string;
      /** gateway */
      gateway?: WALLET_TRANSACTION_GATEWAY;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      WalletTransactionAdminList,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/admin/transaction/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerRegisterUserCard
   * @summary Register new user card
   * @request POST:/api/v1/wallet/card
   * @secure
   */
  walletControllerRegisterUserCard = (
    data: RegisterUserCardDto,
    params: RequestParams = {},
  ) =>
    this.request<
      RegisterCardShebaResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/card`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerGetUserCards
   * @summary Get user cards
   * @request GET:/api/v1/wallet/cards
   * @secure
   */
  walletControllerGetUserCards = (params: RequestParams = {}) =>
    this.request<
      RegisterCardShebaListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/cards`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerCreateChargingPackage
   * @summary Create charging package
   * @request POST:/api/v1/wallet/charge
   * @secure
   */
  walletControllerCreateChargingPackage = (
    data: CreateChargingPackageDto,
    params: RequestParams = {},
  ) =>
    this.request<
      ChargingPackageResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/charge`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerListChargingPackages
   * @summary List charging packages
   * @request GET:/api/v1/wallet/charges
   * @secure
   */
  walletControllerListChargingPackages = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** title */
      title?: string;
      /** bonus */
      bonus?: number;
      /** price */
      price?: number;
      /** is suggest */
      is_suggest?: boolean;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ChargingPackageListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/charges`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerUpdateChargingPackage
   * @summary update charging package
   * @request PATCH:/api/v1/wallet/charge/{charge_id}
   * @secure
   */
  walletControllerUpdateChargingPackage = (
    chargeId: string,
    data: UpdateChargingPackageDto,
    params: RequestParams = {},
  ) =>
    this.request<
      ChargingPackageResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/charge/${chargeId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wallet
   * @name WalletControllerDeleteChargingPackage
   * @summary delete charging package
   * @request DELETE:/api/v1/wallet/charge/{charge_id}
   * @secure
   */
  walletControllerDeleteChargingPackage = (
    chargeId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      ChargingPackageResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/wallet/charge/${chargeId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerGetUsers
   * @summary Get all users
   * @request GET:/api/v1/user
   * @secure
   */
  userControllerGetUsers = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Phone number */
      phone_number?: string;
      /** First name */
      name?: string;
      /** Last name */
      family?: string;
      /** Email */
      email?: string;
      /** Rol Id */
      role_id?: string;
      /** Is Active status */
      is_active?: boolean;
      /** Is Ban status */
      is_ban?: boolean;
      /**
       * Start of membership date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of membership date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetUsersListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/user`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerCreateUserByAdmin
   * @summary Create User by Admin
   * @request POST:/api/v1/user
   * @secure
   */
  userControllerCreateUserByAdmin = (
    data: CreateUserByAdminDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateUserResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/user`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerGetUserDetails
   * @summary Get User details
   * @request GET:/api/v1/user/{user_id}
   * @secure
   */
  userControllerGetUserDetails = (userId: string, params: RequestParams = {}) =>
    this.request<
      GetUserDetailsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/user/${userId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerUpdateUserByAdmin
   * @summary Update User by Admin
   * @request PATCH:/api/v1/user/{user_id}
   * @secure
   */
  userControllerUpdateUserByAdmin = (
    userId: string,
    data: UpdateUserAdminDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateUserAdminResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/user/${userId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerGetProfile
   * @summary Get user profile
   * @request GET:/api/v1/user/profile
   * @secure
   */
  userControllerGetProfile = (params: RequestParams = {}) =>
    this.request<
      GetUserProfileResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/user/profile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerUpdateProfile
   * @summary Update User Profile
   * @request PATCH:/api/v1/user/edit/profile
   * @secure
   */
  userControllerUpdateProfile = (
    data: UpdateProfileDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateUserAdminResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/user/edit/profile`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerSendOtp
   * @summary Send OTP For Update Phone Number
   * @request POST:/api/v1/user/edit/phone/otp
   * @secure
   */
  userControllerSendOtp = (data: SendOTPDto, params: RequestParams = {}) =>
    this.request<
      SendOTPResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/user/edit/phone/otp`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerUpdatePhone
   * @summary Update User Phone Number
   * @request PATCH:/api/v1/user/edit/phone
   * @secure
   */
  userControllerUpdatePhone = (
    data: UpdatePhoneOTPDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UserCreatedResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/user/edit/phone`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerGetCommentByProduct
   * @summary Get Comment By Related Id And Type
   * @request GET:/api/v1/comment/{related_id}/{type}
   * @secure
   */
  commentControllerGetCommentByProduct = (
    relatedId: string,
    type: COMMENT_TYPE,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Sort */
      sort?: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCommentsRelatedResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/${relatedId}/${type}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerGetDetailComment
   * @summary Get Comment Detail For Admin Panel
   * @request GET:/api/v1/comment/admin/detail/{comment_id}
   * @secure
   */
  commentControllerGetDetailComment = (
    commentId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      CommentResponseWithRelationDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/admin/detail/${commentId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerGetPendingComments
   * @summary Get Pending Comments For Admin Panel
   * @request GET:/api/v1/comment/admin/pending
   * @secure
   */
  commentControllerGetPendingComments = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Sort */
      sort?: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCommentsRelatedResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/admin/pending`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerSearchAdmin
   * @summary Search Comments Admin
   * @request GET:/api/v1/comment/admin/search
   * @secure
   */
  commentControllerSearchAdmin = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Phone Number  */
      phone_number?: string;
      /**
       * Start Date
       * @format date-time
       */
      start?: string;
      /**
       * End Date
       * @format date-time
       */
      end?: string;
      /** Is Responsed Or Not */
      response_status?: boolean;
      /** Type */
      type?: COMMENT_TYPE;
      /** Sort */
      sort?: SortOrder;
      /** Status */
      status?: COMMENT_STATUS;
      /** User Id */
      user_id?: string;
      /** Product Title */
      product_title?: string;
      /** Post Title */
      post_title?: string;
      /** User Name */
      user_name?: string;
      /** Family */
      family?: string;
      /** Message */
      message?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCommentsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/admin/search`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerGetCommentsByUser
   * @summary Search Comments Admin
   * @request GET:/api/v1/comment/admin/comments/{user_id}
   * @secure
   */
  commentControllerGetCommentsByUser = (
    userId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Sort */
      sort?: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCommentsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/admin/comments/${userId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerGetAllCommentsByUserId
   * @summary Get All Comments By Type Admin
   * @request GET:/api/v1/comment/admin/{user_id}/all
   * @secure
   */
  commentControllerGetAllCommentsByUserId = (
    userId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Sort */
      sort?: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCommentsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/admin/${userId}/all`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerGetAllCommentsByType
   * @summary Get All Comments By Type Admin
   * @request GET:/api/v1/comment/admin/all/{type}
   * @secure
   */
  commentControllerGetAllCommentsByType = (
    type: COMMENT_TYPE,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Sort */
      sort?: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCommentsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/admin/all/${type}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerCreateComment
   * @summary Create New Comment
   * @request POST:/api/v1/comment
   * @secure
   */
  commentControllerCreateComment = (
    data: CreateCommentDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateCommentResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerCreateReply
   * @summary Create Reply For Comment
   * @request POST:/api/v1/comment/reply
   * @secure
   */
  commentControllerCreateReply = (
    data: CreateReplyCommentDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateReplyCommentResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/reply`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerUpdateCommentStatus
   * @summary Update Comment Status By Admin
   * @request PATCH:/api/v1/comment/{commentId}
   * @secure
   */
  commentControllerUpdateCommentStatus = (
    commentId: string,
    data: UpdateCommentStatusBodyDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateCommentResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/${commentId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comment
   * @name CommentControllerDeleteCommentStatus
   * @summary Delete Comment Status By Admin
   * @request DELETE:/api/v1/comment/{comment_id}
   * @secure
   */
  commentControllerDeleteCommentStatus = (
    commentId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateCommentResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/comment/${commentId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name CategoryControllerGetCategories
   * @summary Get Categories
   * @request GET:/api/v1/category
   * @secure
   */
  categoryControllerGetCategories = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** name */
      name?: string;
      /** user id */
      user_id?: string;
      /** status */
      status?: CATEGORY_STATUS;
      /** parent id */
      parent_id?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/category`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name CategoryControllerCreateCategory
   * @summary Create Category
   * @request POST:/api/v1/category
   * @secure
   */
  categoryControllerCreateCategory = (
    data: CreateCategoryDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/category`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name CategoryControllerGetCategoryById
   * @summary Get Category By Id
   * @request GET:/api/v1/category/{categoryId}
   * @secure
   */
  categoryControllerGetCategoryById = (
    categoryId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetOneCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/category/${categoryId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name CategoryControllerUpdateCategory
   * @summary Update Category By Id
   * @request PUT:/api/v1/category/{categoryId}
   * @secure
   */
  categoryControllerUpdateCategory = (
    categoryId: string,
    data: UpdateCategoryDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/category/${categoryId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name CategoryControllerDeleteCategory
   * @summary Delete Category By Id
   * @request DELETE:/api/v1/category/{categoryId}
   * @secure
   */
  categoryControllerDeleteCategory = (
    categoryId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/category/${categoryId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name CategoryControllerGetPublicCategories
   * @summary Get Public Category
   * @request GET:/api/v1/category/landing
   * @secure
   */
  categoryControllerGetPublicCategories = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/category/landing`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name CategoryControllerGetPublicCategoryById
   * @summary Get Public Category By Id
   * @request GET:/api/v1/category/landing/{categoryId}
   * @secure
   */
  categoryControllerGetPublicCategoryById = (
    categoryId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetOneCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/category/landing/${categoryId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name CategoryControllerGetPostBySlug
   * @summary Get Category By Slug
   * @request GET:/api/v1/category/landing/slug/{slug}
   * @secure
   */
  categoryControllerGetPostBySlug = (
    slug: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetOneCategoryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/category/landing/slug/${slug}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostControllerGetPostWithCategory
   * @summary Get Posts For Admin With Category Id
   * @request GET:/api/v1/post/category/{category_id}
   * @secure
   */
  postControllerGetPostWithCategory = (
    categoryId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Status */
      status?: POST_STATUS;
      /** Creator Id */
      user_id?: string;
      /** Title */
      title?: string;
      /** Category Ids */
      category_ids?: string[];
      /** category slugs */
      category_slugs?: string[];
      /** slug */
      slug?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetPostResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/post/category/${categoryId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostControllerGetPosts
   * @summary Get Posts For Admin
   * @request GET:/api/v1/post/type/{type}
   * @secure
   */
  postControllerGetPosts = (
    type: POST_TYPE,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Status */
      status?: POST_STATUS;
      /** Creator Id */
      user_id?: string;
      /** Title */
      title?: string;
      /** Category Ids */
      category_ids?: string[];
      /** category slugs */
      category_slugs?: string[];
      /** slug */
      slug?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetPostResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/post/type/${type}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostControllerGetPostById
   * @summary Get Post By Id For Admin
   * @request GET:/api/v1/post/post/{postId}
   * @secure
   */
  postControllerGetPostById = (
    postId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Status */
      status?: POST_STATUS;
      /** Creator Id */
      user_id?: string;
      /** Title */
      title?: string;
      /** Category Ids */
      category_ids?: string[];
      /** category slugs */
      category_slugs?: string[];
      /** slug */
      slug?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetByIdPostResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/post/post/${postId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostControllerGetPostBySlug
   * @summary Get Post By Slug For Admin
   * @request GET:/api/v1/post/slug/{slug}
   * @secure
   */
  postControllerGetPostBySlug = (slug: string, params: RequestParams = {}) =>
    this.request<
      GetByIdPostResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/post/slug/${slug}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostControllerGetPostCategoryBySlug
   * @summary Get Post By Category Slug
   * @request GET:/api/v1/post/category/slug/{slug}
   * @secure
   */
  postControllerGetPostCategoryBySlug = (
    slug: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetPostResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/post/category/slug/${slug}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostControllerGetPostsLanding
   * @summary Get Posts
   * @request GET:/api/v1/post/landing/type/{type}
   * @secure
   */
  postControllerGetPostsLanding = (
    type: POST_TYPE,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Title */
      title?: string;
      /** Category Ids */
      category_ids?: string[];
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      /** slug */
      slug?: string;
      /** category slugs */
      category_slugs?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetPostResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/post/landing/type/${type}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostControllerCreatePost
   * @summary Create Post
   * @request POST:/api/v1/post
   * @secure
   */
  postControllerCreatePost = (
    data: CreatePostDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreatePostResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/post`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostControllerUpdatePost
   * @summary Update Post By Id
   * @request PUT:/api/v1/post/{postId}
   * @secure
   */
  postControllerUpdatePost = (
    postId: string,
    data: UpdatePostDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdatePostResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/post/${postId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostControllerDeletePost
   * @summary Delete Post By Id
   * @request DELETE:/api/v1/post/{postId}
   * @secure
   */
  postControllerDeletePost = (postId: string, params: RequestParams = {}) =>
    this.request<
      DeletePostResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/post/${postId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suggest
   * @name SuggestControllerGetSuggests
   * @summary Get Suggests Product
   * @request GET:/api/v1/suggest
   * @secure
   */
  suggestControllerGetSuggests = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetSuggestResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/suggest`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suggest
   * @name SuggestControllerCreateSuggest
   * @summary Create Suggest Product
   * @request POST:/api/v1/suggest
   * @secure
   */
  suggestControllerCreateSuggest = (
    data: CreateSuggestDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateSuggestResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/suggest`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suggest
   * @name SuggestControllerGetSuggestByIdLanding
   * @summary Get Suggest Product By Id
   * @request GET:/api/v1/suggest/{suggestId}
   * @secure
   */
  suggestControllerGetSuggestByIdLanding = (
    suggestId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetByIdSuggestResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/suggest/${suggestId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suggest
   * @name SuggestControllerUpdateSuggest
   * @summary Update Suggest Product By Id
   * @request PUT:/api/v1/suggest/{suggestId}
   * @secure
   */
  suggestControllerUpdateSuggest = (
    suggestId: string,
    data: UpdateSuggestDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateSuggestResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/suggest/${suggestId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Suggest
   * @name SuggestControllerDeleteSuggest
   * @summary Delete Suggest Product By Id
   * @request DELETE:/api/v1/suggest/{suggestId}
   * @secure
   */
  suggestControllerDeleteSuggest = (
    suggestId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteSuggestResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/suggest/${suggestId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Role
   * @name RoleControllerGetRoles
   * @summary Get Role
   * @request GET:/api/v1/role
   * @secure
   */
  roleControllerGetRoles = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetRoleResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/role`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Role
   * @name RoleControllerCreateRole
   * @summary Create Role
   * @request POST:/api/v1/role
   * @secure
   */
  roleControllerCreateRole = (
    data: CreateRoleDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateRoleResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/role`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Role
   * @name RoleControllerGetPermission
   * @summary Get Permission List
   * @request GET:/api/v1/role/permissions
   * @secure
   */
  roleControllerGetPermission = (params: RequestParams = {}) =>
    this.request<
      PermissionExposeArrayDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/role/permissions`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Role
   * @name RoleControllerSearch
   * @summary Get Role By Search
   * @request GET:/api/v1/role/search
   * @secure
   */
  roleControllerSearch = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /**
       * Start Date
       * @format date-time
       */
      start?: string;
      /**
       * End Date
       * @format date-time
       */
      end?: string;
      /** Permission */
      permission?: number;
      /** Title */
      title?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetRoleBySearchResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/role/search`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Role
   * @name RoleControllerGetRoleById
   * @summary Get Role By Id
   * @request GET:/api/v1/role/{roleId}
   * @secure
   */
  roleControllerGetRoleById = (roleId: string, params: RequestParams = {}) =>
    this.request<
      GetRoleResponseByIdDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/role/${roleId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Role
   * @name RoleControllerUpdateRole
   * @summary Update Role By Id
   * @request PUT:/api/v1/role/{roleId}
   * @secure
   */
  roleControllerUpdateRole = (
    roleId: string,
    data: UpdateRoleDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateRoleResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/role/${roleId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Role
   * @name RoleControllerAssignRole
   * @summary Assign Role To User
   * @request PATCH:/api/v1/role/{roleId}
   * @secure
   */
  roleControllerAssignRole = (
    roleId: string,
    data: AssignRoleBodyDto,
    params: RequestParams = {},
  ) =>
    this.request<
      AssignRoleResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/role/${roleId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Role
   * @name RoleControllerDeleteRole
   * @summary Delete Role By Id
   * @request DELETE:/api/v1/role/{roleId}
   * @secure
   */
  roleControllerDeleteRole = (roleId: string, params: RequestParams = {}) =>
    this.request<
      DeleteRoleResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/role/${roleId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Role
   * @name RoleControllerGetRoleRequestById
   * @summary Get User By Role Id
   * @request GET:/api/v1/role/delete/{roleId}
   * @secure
   */
  roleControllerGetRoleRequestById = (
    roleId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      RoleListUserResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/role/delete/${roleId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Contact Us
   * @name ContactControllerCreateContactUs
   * @summary Create Contact
   * @request POST:/api/v1/contact_us
   * @secure
   */
  contactControllerCreateContactUs = (
    data: CreateContactUsDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateContactResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/contact_us`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Contact Us
   * @name ContactControllerGetContacts
   * @summary Get Contacts For Admin
   * @request GET:/api/v1/contact_us
   * @secure
   */
  contactControllerGetContacts = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** full name */
      full_name?: string;
      /** Phone Number  */
      phone_number?: string;
      /** email */
      email?: string;
      /** status */
      status?: CONTACT_US_STATUS;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetContactResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/contact_us`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Contact Us
   * @name ContactControllerGetContactById
   * @summary Get Contact By Id For Admin
   * @request GET:/api/v1/contact_us/{contactId}
   * @secure
   */
  contactControllerGetContactById = (
    contactId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetByIdContactResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/contact_us/${contactId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Contact Us
   * @name ContactControllerDeleteContact
   * @summary Delete Contact By Id
   * @request DELETE:/api/v1/contact_us/{contactId}
   * @secure
   */
  contactControllerDeleteContact = (
    contactId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteContactResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/contact_us/${contactId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Contact Us
   * @name ContactControllerUpdateContact
   * @summary Update Contact By Id
   * @request PATCH:/api/v1/contact_us/status/{contactId}
   * @secure
   */
  contactControllerUpdateContact = (
    contactId: string,
    data: UpdateContactUsDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateContactResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/contact_us/status/${contactId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Contact Us
   * @name ContactControllerFollowUpContact
   * @summary Update Contact By Id
   * @request PATCH:/api/v1/contact_us/follow/up/{contactId}
   * @secure
   */
  contactControllerFollowUpContact = (
    contactId: string,
    data: FollowUpContactUsDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateContactResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/contact_us/follow/up/${contactId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Contact Us
   * @name ContactControllerResponseeContact
   * @summary Update Response Contact By Id
   * @request PATCH:/api/v1/contact_us/response/{contactId}
   * @secure
   */
  contactControllerResponseeContact = (
    contactId: string,
    data: ResponseContactUsDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateContactResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/contact_us/response/${contactId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alert
   * @name AlertControllerPublicGetAlertByProductId
   * @summary Get Public Alert Product Id
   * @request GET:/api/v1/alert/public/product/{product_id}
   * @secure
   */
  alertControllerPublicGetAlertByProductId = (
    productId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetAlertPublicProductResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/alert/public/product/${productId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alert
   * @name AlertControllerCreateAlert
   * @summary Create Alert
   * @request POST:/api/v1/alert
   * @secure
   */
  alertControllerCreateAlert = (
    data: CreateAlertDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateAlertResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/alert`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alert
   * @name AlertControllerGetAlertWithSearch
   * @summary Get Alert With Search Fields
   * @request GET:/api/v1/alert/search
   * @secure
   */
  alertControllerGetAlertWithSearch = (
    query?: {
      /** Title */
      title?: string;
      /** Type */
      type?: ALERT_TYPE;
      /** Visible */
      visible?: ALERT_VISIBE;
      /** Access */
      access?: ALERT_ACCESS;
      /** Status */
      status?: ALERT_STATUS;
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetAlertResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/alert/search`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alert
   * @name AlertControllerGetAlertById
   * @summary Get Alert By Id
   * @request GET:/api/v1/alert/{alertId}
   * @secure
   */
  alertControllerGetAlertById = (alertId: string, params: RequestParams = {}) =>
    this.request<
      GetByIdAlertResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/alert/${alertId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alert
   * @name AlertControllerDeleteAlert
   * @summary Delete Alert By Id
   * @request DELETE:/api/v1/alert/{alertId}
   * @secure
   */
  alertControllerDeleteAlert = (alertId: string, params: RequestParams = {}) =>
    this.request<
      DeleteAlertResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/alert/${alertId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alert
   * @name AlertControllerUpdateAlert
   * @summary Update Alert By Id
   * @request PUT:/api/v1/alert/{alert_id}
   * @secure
   */
  alertControllerUpdateAlert = (
    alertId: string,
    data: UpdateAlertDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateAlertResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/alert/${alertId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerContactus
   * @summary Contact Us Statistics
   * @request GET:/api/v1/statistic/contactus
   * @secure
   */
  statisticControllerContactus = (params: RequestParams = {}) =>
    this.request<
      ContactUsStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/contactus`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerComment
   * @summary Comment Statistics
   * @request GET:/api/v1/statistic/comment
   * @secure
   */
  statisticControllerComment = (params: RequestParams = {}) =>
    this.request<
      CommentStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/comment`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerUser
   * @summary User  Statistics
   * @request GET:/api/v1/statistic/user
   * @secure
   */
  statisticControllerUser = (params: RequestParams = {}) =>
    this.request<
      UserStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/user`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerOrder
   * @summary Order  Statistics
   * @request GET:/api/v1/statistic/order
   * @secure
   */
  statisticControllerOrder = (params: RequestParams = {}) =>
    this.request<
      OrderStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/order`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerOrderStatusCount
   * @summary Order Status Count
   * @request GET:/api/v1/statistic/order/current/status
   * @secure
   */
  statisticControllerOrderStatusCount = (params: RequestParams = {}) =>
    this.request<
      OrderStatStatusCount,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/order/current/status`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerOrderList
   * @summary Order  List Statistics
   * @request GET:/api/v1/statistic/order/list
   * @secure
   */
  statisticControllerOrderList = (params: RequestParams = {}) =>
    this.request<
      OrderStatListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/order/list`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerOrderDailyList
   * @summary Order Daily Statistics
   * @request GET:/api/v1/statistic/order/daily
   * @secure
   */
  statisticControllerOrderDailyList = (params: RequestParams = {}) =>
    this.request<
      OrderStatDailyResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/order/daily`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerProductStat
   * @summary Get sales statistics
   * @request GET:/api/v1/statistic/order/count
   * @secure
   */
  statisticControllerProductStat = (
    query: {
      /**
       * Start of creation date range
       * @format date-time
       */
      started_at: string;
      /**
       * End of creation date range
       * @format date-time
       */
      ended_at: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DashboardStatsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/order/count`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerChartGenerator
   * @summary Chart Generator
   * @request GET:/api/v1/statistic/order/chart/generator
   * @secure
   */
  statisticControllerChartGenerator = (
    query: {
      /**
       * Start of creation date range
       * @format date-time
       * @example "2024-01-01T00:00:00Z"
       */
      started_at: string;
      /**
       * End of creation date range
       * @format date-time
       * @example "2024-01-31T23:59:59Z"
       */
      ended_at: string;
      /** Fields to group by */
      group_by: GroupByFields[];
      /** Column to sort by (must match a _sum field) */
      order_by: OrderBy;
      /** Sort order */
      sort: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ChartResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/order/chart/generator`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerAppleid
   * @summary Apple ID  Statistics
   * @request GET:/api/v1/statistic/appleid
   * @secure
   */
  statisticControllerAppleid = (
    query?: {
      /** Number of items */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      AppleIdStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/appleid`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerAppleidBalance
   * @summary Apple ID USA Count Statistics
   * @request GET:/api/v1/statistic/appleid/balance
   * @secure
   */
  statisticControllerAppleidBalance = (params: RequestParams = {}) =>
    this.request<
      AppleIdStatUSACountResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/appleid/balance`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerInvoice
   * @summary Invoice Statistics
   * @request GET:/api/v1/statistic/invoice
   * @secure
   */
  statisticControllerInvoice = (
    query?: {
      /** Number of invoices */
      take?: number;
      /** Sort Invoices */
      sort?: SortOrder;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      InvoiceStatStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/invoice`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerDashboard
   * @summary Dashboard main statistics
   * @request GET:/api/v1/statistic/dashboard
   * @secure
   */
  statisticControllerDashboard = (params: RequestParams = {}) =>
    this.request<
      DashboardStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/dashboard`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerStat
   * @summary Timer statistics by search
   * @request GET:/api/v1/statistic/timer
   * @secure
   */
  statisticControllerTimerStat = (
    query?: {
      /** user id */
      user_id?: string;
      /** order id */
      order_id?: string;
      /** product id */
      product_id?: string;
      /** product_category id */
      product_category_id?: string;
      status?: PRODUCT_STATUS;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      TimerOrderStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerDashboard
   * @summary Get timer statistics for timer dashboard page
   * @request GET:/api/v1/statistic/timer/dashboard
   * @secure
   */
  statisticControllerTimerDashboard = (params: RequestParams = {}) =>
    this.request<
      TimerDashboardStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer/dashboard`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerDashboardChart
   * @summary Get timer current/prev month on chart
   * @request GET:/api/v1/statistic/timer/dashboard/chart
   * @secure
   */
  statisticControllerTimerDashboardChart = (params: RequestParams = {}) =>
    this.request<
      TimerDashboardStatChartResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer/dashboard/chart`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerDashboardList
   * @summary Get timer statistics for timer dashboard page, filter list
   * @request GET:/api/v1/statistic/timer/dashboard/list
   * @secure
   */
  statisticControllerTimerDashboardList = (
    query: {
      /** Filter type to select the period */
      type: TimerDashboardFilterType;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      TimerDashboardFilterResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer/dashboard/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerDashboardStates
   * @summary Get min and max focus times for a timer by its ID
   * @request GET:/api/v1/statistic/timer/dashboard/states
   * @secure
   */
  statisticControllerTimerDashboardStates = (
    query?: {
      /** Array of user IDs (MongoDB ObjectId format) */
      user_ids?: string[];
      /** Array of product IDs (MongoDB ObjectId format) */
      product_ids?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      TimerStatByIdsResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer/dashboard/states`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerOrderStat
   * @summary Timer statistics by order
   * @request GET:/api/v1/statistic/timer/order/{order_id}
   * @secure
   */
  statisticControllerTimerOrderStat = (
    orderId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      TimerOrderStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer/order/${orderId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerUserStat
   * @summary Timer statistics by user
   * @request GET:/api/v1/statistic/timer/user/{user_id}
   * @secure
   */
  statisticControllerTimerUserStat = (
    userId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      TimerUserStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer/user/${userId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerProductStat
   * @summary Timer statistics by product
   * @request GET:/api/v1/statistic/timer/product/{product_id}
   * @secure
   */
  statisticControllerTimerProductStat = (
    productId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      TimerProductStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer/product/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerProductCategoryStat
   * @summary Timer statistics by product category
   * @request GET:/api/v1/statistic/timer/product/category/{product_category_id}
   * @secure
   */
  statisticControllerTimerProductCategoryStat = (
    productCategoryId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      TimerProductCategoryStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer/product/category/${productCategoryId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistic
   * @name StatisticControllerTimerChartGenerator
   * @summary Timer chart generator
   * @request GET:/api/v1/statistic/timer/chart/generator
   * @secure
   */
  statisticControllerTimerChartGenerator = (
    query: {
      /**
       * Start of creation date range
       * @format date-time
       * @example "2024-01-01T00:00:00Z"
       */
      started_at: string;
      /**
       * End of creation date range
       * @format date-time
       * @example "2024-01-31T23:59:59Z"
       */
      ended_at: string;
      /** Sort order */
      sort: SortOrder;
      /** Fields to group by */
      group_by: TimerLogGroupByFields[];
      /** Column to sort by (must match a _sum field) */
      order_by: TimerLogOrderBy;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      TimerProductCategoryStatResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/statistic/timer/chart/generator`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Search
   * @name SearchControllerGetSearchs
   * @summary Search Product
   * @request GET:/api/v1/search/search
   */
  searchControllerGetSearchs = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Title */
      text?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      SearchResponseProductDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/search/search`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Search
   * @name SearchControllerGetTopSellingProducts
   * @summary Top Selling Products
   * @request GET:/api/v1/search/product/selling
   */
  searchControllerGetTopSellingProducts = (
    query: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Category Ids */
      category_ids?: string[];
      /**
       * Start of creation date range
       * @format date-time
       */
      started_at?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      ended_at?: string;
      /** Sort */
      sort?: SortOrder;
      /** Column to sort by (must match a _sum field) */
      order_by: OrderBy;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      SearchProductSellingResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/search/product/selling`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Search
   * @name SearchControllerGetTopSellingUserss
   * @summary Top Selling Users
   * @request GET:/api/v1/search/user/selling
   */
  searchControllerGetTopSellingUserss = (
    query: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Category Ids */
      category_ids?: string[];
      /**
       * Start of creation date range
       * @format date-time
       */
      started_at?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      ended_at?: string;
      /** Sort */
      sort?: SortOrder;
      /** Column to sort by (must match a _sum field) */
      order_by: OrderBy;
      /** ProductId */
      product_ids?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      SearchUserSellingResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/search/user/selling`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tag
   * @name TagControllerGetTagList
   * @summary Get Tag List
   * @request GET:/api/v1/tag
   * @secure
   */
  tagControllerGetTagList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** Name */
      name?: string;
      /** Status */
      status?: TAG_STATUS;
      /**
       * Start of creation date range
       * @format date-time
       */
      start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetTagResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/tag`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tag
   * @name TagControllerCreateTag
   * @summary Create Tag
   * @request POST:/api/v1/tag
   * @secure
   */
  tagControllerCreateTag = (data: CreateTagDto, params: RequestParams = {}) =>
    this.request<
      CreateTagResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/tag`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tag
   * @name TagControllerUpdateTag
   * @summary Update Tag By Id
   * @request PUT:/api/v1/tag/{tagId}
   * @secure
   */
  tagControllerUpdateTag = (
    tagId: string,
    data: UpdateTagDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateTagResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/tag/${tagId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tag
   * @name TagControllerDeleteTag
   * @summary Delete Tag By Id
   * @request DELETE:/api/v1/tag/{tagId}
   * @secure
   */
  tagControllerDeleteTag = (tagId: string, params: RequestParams = {}) =>
    this.request<
      DeleteTagResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/tag/${tagId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Country
   * @name CountryControllerCreateCountry
   * @summary Create Country
   * @request POST:/api/v1/country
   * @secure
   */
  countryControllerCreateCountry = (
    data: CreateCountryDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateCountryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/country`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Country
   * @name CountryControllerGetCountrys
   * @summary Get Countrys For Admin
   * @request GET:/api/v1/country
   * @secure
   */
  countryControllerGetCountrys = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      name?: string;
      state?: string;
      title?: string;
      user_id?: string;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCountryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/country`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Country
   * @name CountryControllerGetCountryById
   * @summary Get Country By Id For Admin
   * @request GET:/api/v1/country/{country_id}
   * @secure
   */
  countryControllerGetCountryById = (
    countryId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetDetailCountryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/country/${countryId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Country
   * @name CountryControllerUpdateCountry
   * @summary Update Country By Id
   * @request PUT:/api/v1/country/{country_id}
   * @secure
   */
  countryControllerUpdateCountry = (
    countryId: string,
    data: UpdateCountryDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateCountryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/country/${countryId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Country
   * @name CountryControllerDeleteCountry
   * @summary Delete Country By Id
   * @request DELETE:/api/v1/country/{country_id}
   * @secure
   */
  countryControllerDeleteCountry = (
    countryId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteCountryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/country/${countryId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Country
   * @name CountryControllerCreateCountryQuestions
   * @summary Create Country Question Ids
   * @request PUT:/api/v1/country/question/{country_id}
   * @secure
   */
  countryControllerCreateCountryQuestions = (
    countryId: string,
    data: CreateCountryQuestionDto,
    params: RequestParams = {},
  ) =>
    this.request<
      GetDetailCountryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/country/question/${countryId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Country
   * @name CountryControllerDeleteCountryQuestions
   * @summary Delete Country Question Ids
   * @request DELETE:/api/v1/country/question/{country_id}
   * @secure
   */
  countryControllerDeleteCountryQuestions = (
    countryId: string,
    data: DeleteCountryQuestionDto,
    params: RequestParams = {},
  ) =>
    this.request<
      GetDetailCountryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/country/question/${countryId}`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Country
   * @name CountryControllerUpdateCountryQuestions
   * @summary Update Country Question Ids
   * @request PUT:/api/v1/country/question/update/{country_id}/{current_title}
   * @secure
   */
  countryControllerUpdateCountryQuestions = (
    countryId: string,
    currentTitle: string,
    data: UpdateCountryQuestionDto,
    params: RequestParams = {},
  ) =>
    this.request<
      GetDetailCountryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/country/question/update/${countryId}/${currentTitle}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offer
   * @name OfferControllerGetOffers
   * @summary Get Offer List
   * @request GET:/api/v1/offer
   * @secure
   */
  offerControllerGetOffers = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /**
       * Start of creation date range
       * @format date-time
       */
      created_at_start?: string;
      /**
       * End of creation date range
       * @format date-time
       */
      created_at_end?: string;
      /** is_active */
      is_active?: boolean;
      /** code */
      code?: string;
      /** title */
      title?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetOfferResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/offer`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offer
   * @name OfferControllerCreateOffer
   * @summary Create Offer
   * @request POST:/api/v1/offer
   * @secure
   */
  offerControllerCreateOffer = (
    data: CreateOfferDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateOfferResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/offer`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offer
   * @name OfferControllerGetOfferById
   * @summary Get Offer By Id
   * @request GET:/api/v1/offer/{offerId}
   * @secure
   */
  offerControllerGetOfferById = (offerId: string, params: RequestParams = {}) =>
    this.request<
      GetOneOfferResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/offer/${offerId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offer
   * @name OfferControllerUpdateOffer
   * @summary Update Offer By Id
   * @request PUT:/api/v1/offer/{offerId}
   * @secure
   */
  offerControllerUpdateOffer = (
    offerId: string,
    data: UpdateOfferDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateOfferResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/offer/${offerId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offer
   * @name OfferControllerDeleteOffer
   * @summary Delete Offer By Id
   * @request DELETE:/api/v1/offer/{offerId}
   * @secure
   */
  offerControllerDeleteOffer = (offerId: string, params: RequestParams = {}) =>
    this.request<
      DeleteOfferResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/offer/${offerId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offer
   * @name OfferControllerGetOfferByCode
   * @summary Get Offer By Code
   * @request GET:/api/v1/offer/pubilc/{code}/{product_id}
   * @secure
   */
  offerControllerGetOfferByCode = (
    code: string,
    productId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetByCodeOfferResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/offer/pubilc/${code}/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags File
   * @name FileControllerUploadFile
   * @summary Upload File To Gallery
   * @request POST:/api/v1/file/upload
   * @secure
   */
  fileControllerUploadFile = (
    data: UploadFileDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UploadFileResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/file/upload`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags File
   * @name FileControllerUploadExcelFile
   * @summary Upload Excel File For AppleId
   * @request POST:/api/v1/file/upload/excel
   * @secure
   */
  fileControllerUploadExcelFile = (
    data: UploadFileDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UploadFileResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/file/upload/excel`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags File
   * @name FileControllerGetGallery
   * @summary Get Gallery Files
   * @request GET:/api/v1/file/{type}
   * @secure
   */
  fileControllerGetGallery = (
    type: FILE_TYPE,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** name */
      name?: string;
      /**
       * Start Date
       * @format date-time
       */
      start?: string;
      /**
       * End Date
       * @format date-time
       */
      end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GalleryResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/file/${type}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags File
   * @name FileControllerGetFile
   * @summary Get File
   * @request GET:/api/v1/file/{type}/{query}
   * @secure
   */
  fileControllerGetFile = (
    query: string,
    type: FileQueryType,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v1/file/${type}/${query}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags File
   * @name FileControllerRemoveFile
   * @summary Delete File
   * @request DELETE:/api/v1/file/{file_id}
   * @secure
   */
  fileControllerRemoveFile = (fileId: string, params: RequestParams = {}) =>
    this.request<
      DeleteFileResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/file/${fileId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Setting
   * @name SettingControllerGetSettingList
   * @summary Get Setting List
   * @request GET:/api/v1/setting
   * @secure
   */
  settingControllerGetSettingList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** search text */
      search_text?: string;
      /** type */
      type?: SETTING_TYPE;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetListSettingResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/setting`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Setting
   * @name SettingControllerCreateSetting
   * @summary Create Setting
   * @request POST:/api/v1/setting
   * @secure
   */
  settingControllerCreateSetting = (
    data: CreateSettingDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateSettingResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/setting`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Setting
   * @name SettingControllerGetSettingById
   * @summary Get Setting By Id
   * @request GET:/api/v1/setting/detail
   * @secure
   */
  settingControllerGetSettingById = (
    query?: {
      /** Setting Id */
      setting_id?: string;
      /** Key */
      key?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetSettingDetailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/setting/detail`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Setting
   * @name SettingControllerUpdateSetting
   * @summary Update Setting By Id
   * @request PUT:/api/v1/setting/{setting_id}
   * @secure
   */
  settingControllerUpdateSetting = (
    settingId: string,
    data: UpdateSettingDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateSettingResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/setting/${settingId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Setting
   * @name SettingControllerDeleteSetting
   * @summary Delete Setting By Id
   * @request DELETE:/api/v1/setting/{setting_id}
   * @secure
   */
  settingControllerDeleteSetting = (
    settingId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteSettingResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/setting/${settingId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SEO
   * @name SeoControllerGetRssProduct
   * @request GET:/api/v1/rss/{file_name}
   */
  seoControllerGetRssProduct = (
    fileName: RSS_FILE_NAME,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v1/rss/${fileName}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerGetElementList
   * @summary Get Element List
   * @request GET:/api/v1/form/elements
   * @secure
   */
  formControllerGetElementList = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetElementResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/elements`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerCreateFormComplete
   * @summary Create New Form
   * @request POST:/api/v1/form
   * @secure
   */
  formControllerCreateFormComplete = (
    data: CreateFormDto,
    params: RequestParams = {},
  ) =>
    this.request<
      GetFormDetailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerGetForms
   * @summary Get Form List
   * @request GET:/api/v1/form
   * @secure
   */
  formControllerGetForms = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** user id */
      user_id?: string;
      /** name */
      name?: string;
      /** title */
      title?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetFormListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerUpdateForm
   * @summary Update Form
   * @request PUT:/api/v1/form/{form_id}
   * @secure
   */
  formControllerUpdateForm = (
    formId: string,
    data: UpdateFormDto,
    params: RequestParams = {},
  ) =>
    this.request<
      GetFormDetailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/${formId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerGetFormDetail
   * @summary Get Form Detail
   * @request GET:/api/v1/form/{form_id}
   * @secure
   */
  formControllerGetFormDetail = (formId: string, params: RequestParams = {}) =>
    this.request<
      GetFormDetailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/${formId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerGetFormByProduct
   * @summary Get Form By Product
   * @request GET:/api/v1/form/product/{product_id}
   * @secure
   */
  formControllerGetFormByProduct = (
    productId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetFormDetailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/product/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerAssignFormToProduct
   * @summary Assing Form To Product
   * @request PATCH:/api/v1/form/assign/product/{form_id}
   * @secure
   */
  formControllerAssignFormToProduct = (
    formId: string,
    data: AssignFormToProductDto,
    params: RequestParams = {},
  ) =>
    this.request<
      AssignFormToProductResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/assign/product/${formId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerCheckAssignFormToProduct
   * @summary Check Assinged Form To Product Or Category
   * @request GET:/api/v1/form/check/assign/product
   * @secure
   */
  formControllerCheckAssignFormToProduct = (
    query?: {
      /** product ids */
      product_ids?: string[];
      /** category ids */
      category_ids?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      CheckAssignFormToProductResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/check/assign/product`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerGetAssignFormToProduct
   * @summary Assing Form To Product
   * @request GET:/api/v1/form/assigned/products/{form_id}
   * @secure
   */
  formControllerGetAssignFormToProduct = (
    formId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductAssignedToFormResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/assigned/products/${formId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerGetAssignFormToCategory
   * @summary Assing Form To Category
   * @request GET:/api/v1/form/assigned/categories/{form_id}
   * @secure
   */
  formControllerGetAssignFormToCategory = (
    formId: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCategoryAssignedToFormResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/assigned/categories/${formId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerSubmitFormValues
   * @summary Submit Form Values
   * @request POST:/api/v1/form/submision
   * @secure
   */
  formControllerSubmitFormValues = (
    data: SubmitFormValueDto,
    params: RequestParams = {},
  ) =>
    this.request<
      SubmitFormResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/submision`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Form Generator
   * @name FormControllerGetSubmisionForms
   * @summary Get Submission Forms
   * @request GET:/api/v1/form/submission
   * @secure
   */
  formControllerGetSubmisionForms = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** form_id */
      form_id?: string;
      /** product_id */
      product_id?: string;
      /** tab_id */
      tab_id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      FormSubmissionListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/form/submission`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Formula
   * @name FormulaControllerCreateFormula
   * @summary Create New Formula
   * @request POST:/api/v1/formula
   * @secure
   */
  formulaControllerCreateFormula = (
    data: CreateFormulaDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateFormulaResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/formula`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Formula
   * @name FormulaControllerGetListFormula
   * @summary Get Formula List
   * @request GET:/api/v1/formula
   * @secure
   */
  formulaControllerGetListFormula = (
    query: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** formula id */
      form_id: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetFormulaListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/formula`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Formula
   * @name FormulaControllerAssignFormulaToForm
   * @summary Assign Formula To Form
   * @request PATCH:/api/v1/formula/assign/{form_formula_id}
   * @secure
   */
  formulaControllerAssignFormulaToForm = (
    formFormulaId: string,
    data: AssignFormulaToFormDto,
    params: RequestParams = {},
  ) =>
    this.request<
      AssingFormulaResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/formula/assign/${formFormulaId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Formula
   * @name FormulaControllerUpdateStatusByForm
   * @summary Update Status Formula
   * @request PATCH:/api/v1/formula/update/status/formula/{status}
   * @secure
   */
  formulaControllerUpdateStatusByForm = (
    status: FORM_FORMULA_TAB_STATUS,
    data: UpdateFormulaStatusDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateFormulaStatusResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/formula/update/status/formula/${status}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Formula
   * @name FormulaControllerGetDetailFormula
   * @summary Get Formula Detail
   * @request GET:/api/v1/formula/{formula_id}
   * @secure
   */
  formulaControllerGetDetailFormula = (
    formulaId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetFormulaDetailResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/formula/${formulaId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Formula
   * @name FormulaControllerUpdateFormula
   * @summary Update Formula
   * @request PATCH:/api/v1/formula/{formula_id}
   * @secure
   */
  formulaControllerUpdateFormula = (
    formulaId: string,
    data: UpdateFormulaBodyDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateFormulaResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/formula/${formulaId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Formula
   * @name FormulaControllerDeleteFormula
   * @summary Delete Formula
   * @request DELETE:/api/v1/formula/{formula_id}
   * @secure
   */
  formulaControllerDeleteFormula = (
    formulaId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteFormulaResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/formula/${formulaId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IPG Gateway
   * @name IpgGatewayControllerGetIpgGateways
   * @summary Get Client Ipg Gateways List
   * @request GET:/api/v1/ipg-gateway
   * @secure
   */
  ipgGatewayControllerGetIpgGateways = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetIpgGatewayListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/ipg-gateway`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IPG Gateway
   * @name IpgGatewayControllerCreateIpgGateway
   * @summary Create a new Ipg Gateway
   * @request POST:/api/v1/ipg-gateway
   * @secure
   */
  ipgGatewayControllerCreateIpgGateway = (
    data: CreateIpgGatewayDto,
    params: RequestParams = {},
  ) =>
    this.request<
      GetIpgGatewayOmitedResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/ipg-gateway`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IPG Gateway
   * @name IpgGatewayControllerGetAdminIpgGateways
   * @summary Get Admin Ipg Gateways List
   * @request GET:/api/v1/ipg-gateway/list
   * @secure
   */
  ipgGatewayControllerGetAdminIpgGateways = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetIpgGatewayListResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/ipg-gateway/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IPG Gateway
   * @name IpgGatewayControllerGetIpgGateway
   * @summary Get a single Ipg Gateway by ID
   * @request GET:/api/v1/ipg-gateway/{ipg_gateway_id}
   * @secure
   */
  ipgGatewayControllerGetIpgGateway = (
    ipgGatewayId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetIpgGatewayOmitedResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/ipg-gateway/${ipgGatewayId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IPG Gateway
   * @name IpgGatewayControllerUpdateIpgGateway
   * @summary Update an existing Ipg Gateway
   * @request PATCH:/api/v1/ipg-gateway/{ipg_gateway_id}
   * @secure
   */
  ipgGatewayControllerUpdateIpgGateway = (
    ipgGatewayId: string,
    data: UpdateIpgGatewayDto,
    params: RequestParams = {},
  ) =>
    this.request<
      GetIpgGatewayOmitedResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/ipg-gateway/${ipgGatewayId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IPG Gateway
   * @name IpgGatewayControllerDeleteIpgGateway
   * @summary Delete (deactivate) an Ipg Gateway
   * @request DELETE:/api/v1/ipg-gateway/{ipg_gateway_id}
   * @secure
   */
  ipgGatewayControllerDeleteIpgGateway = (
    ipgGatewayId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetIpgGatewayOmitedResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/ipg-gateway/${ipgGatewayId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerCreateNotifierGateway
   * @summary Create Notifier Gateway
   * @request POST:/api/v1/notifier/gateway
   * @secure
   */
  notifierControllerCreateNotifierGateway = (
    data: CreateNotifierGatewayDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateNotifierGatewayResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/gateway`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerGetListNotifierGateway
   * @summary Get Notifier Gateway
   * @request GET:/api/v1/notifier/gateway
   * @secure
   */
  notifierControllerGetListNotifierGateway = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** name */
      name?: string;
      /** guard name */
      guard_name?: NOTIFIER_METHOD_NAME;
      /** provider */
      provider?: NOTIFIER_GATEWAY_PROVIDER;
      /** status */
      status?: NOTIFIER_GATEWAY_STATUS;
      /** sandbox */
      sandbox?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetListNotifierGatewayResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/gateway`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerUpdateNotifierGateway
   * @summary Update Notifier Gateway
   * @request PUT:/api/v1/notifier/gateway{notifier_gateway_id}
   * @secure
   */
  notifierControllerUpdateNotifierGateway = (
    notifierGatewayId: string,
    data: UpdateBodyNotifierGatewayDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateBodyNotifierGatewayResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/gateway${notifierGatewayId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerDeleteNotifierGateway
   * @summary Delete Notifier Gateway
   * @request DELETE:/api/v1/notifier/gateway{notifier_gateway_id}
   * @secure
   */
  notifierControllerDeleteNotifierGateway = (
    notifierGatewayId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteNotifierGatewayResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/gateway${notifierGatewayId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerGetDetailNotifierGateway
   * @summary Get Detail Notifier Gateway
   * @request GET:/api/v1/notifier/gateway{notifier_gateway_id}
   * @secure
   */
  notifierControllerGetDetailNotifierGateway = (
    notifierGatewayId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetDetailNotifierGatewayResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/gateway${notifierGatewayId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerCreateTemplate
   * @summary Create Template Notifier
   * @request POST:/api/v1/notifier/template
   * @secure
   */
  notifierControllerCreateTemplate = (
    data: CreateNotifierTemplateDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CreateNotifierTemplateResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/template`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerGetListTemplateNotifier
   * @summary Get Template Notifier
   * @request GET:/api/v1/notifier/template
   * @secure
   */
  notifierControllerGetListTemplateNotifier = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** name */
      name?: string;
      /** guard name */
      guard_name?: NOTIFIER_METHOD_NAME;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetNotifierTemplateResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/template`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerUpdateTemplate
   * @summary Update Template Notifier
   * @request PUT:/api/v1/notifier/template{notifier_template_id}
   * @secure
   */
  notifierControllerUpdateTemplate = (
    notifierTemplateId: string,
    data: UpdateBodyNotifierTemplateDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateNotifierTemplateResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/template${notifierTemplateId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerDeleteTemplate
   * @summary Delete Notifier Template
   * @request DELETE:/api/v1/notifier/template{notifier_template_id}
   * @secure
   */
  notifierControllerDeleteTemplate = (
    notifierTemplateId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteNotifierTemplateResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/template${notifierTemplateId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifier
   * @name NotifierControllerGetDetailTemplateNotifier
   * @summary Get Detail Template Notifier
   * @request GET:/api/v1/notifier/template{notifier_template_id}
   * @secure
   */
  notifierControllerGetDetailTemplateNotifier = (
    notifierTemplateId: string,
    params: RequestParams = {},
  ) =>
    this.request<
      GetDetailNotifierTemplateResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notifier/template${notifierTemplateId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notic User
   * @name NoticControllerGetNotics
   * @summary Get List Notics
   * @request GET:/api/v1/notic
   * @secure
   */
  noticControllerGetNotics = (
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /** Number of items per page */
      limit?: number;
      /** user id */
      user_id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetListNoticResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notic`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notic User
   * @name NoticControllerCreate
   * @summary Create Notics
   * @request POST:/api/v1/notic
   * @secure
   */
  noticControllerCreate = (
    query: {
      /** user id */
      user_id: string;
      /** content */
      content: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      CreateNoticResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notic`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notic User
   * @name NoticControllerGetDetail
   * @summary Get Detail Notics
   * @request GET:/api/v1/notic/{notic_id}
   * @secure
   */
  noticControllerGetDetail = (noticId: string, params: RequestParams = {}) =>
    this.request<
      GetDetailNoticResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notic/${noticId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notic User
   * @name NoticControllerUpdate
   * @summary Update Notics
   * @request PUT:/api/v1/notic/{notic_id}
   * @secure
   */
  noticControllerUpdate = (
    noticId: string,
    data: UpdateNoticDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateNoticResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notic/${noticId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notic User
   * @name NoticControllerDelete
   * @summary Delete Notics
   * @request DELETE:/api/v1/notic/{notic_id}
   * @secure
   */
  noticControllerDelete = (noticId: string, params: RequestParams = {}) =>
    this.request<
      DeleteNoticResponseDto,
      BadRequestResponseDto | UnauthorizedResponseDto | FrobiddenResponseDto
    >({
      path: `/api/v1/notic/${noticId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
