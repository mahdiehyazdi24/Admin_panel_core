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

export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterResponseDto {
  is_user_active: boolean;
}

export interface BanUserResponseDto {
  /**
   * Unique identifier for the user
   * @example "67752b8b29ea59625252c544"
   */
  user_id: string;
  /**
   * Phone number of the user
   * @example "09031641388"
   */
  phone_number: string;
  /**
   * Email of the user
   * @example null
   */
  email: string | null;
  /**
   * Password of the user
   * @example null
   */
  password: string | null;
  /**
   * avatar picture theme of the user
   * @example "Purple"
   */
  avatar: object | null;
  /**
   * First name of the user
   * @example null
   */
  name: string | null;
  /**
   * Last name of the user
   * @example null
   */
  family: string | null;
  /**
   * Role ID of the user
   * @example "6775206fad04cabae51ee8bd"
   */
  role_id: string;
  /**
   * Avatar ID of the user
   * @example "6775206fad04cabae51ee8bd"
   */
  avatar_id: string | null;
  /**
   * IP of the user
   * @example "127.0.0.1"
   */
  ip: string | null;
  email_verified_at?: boolean | null;
  /**
   * Whether the user is active
   * @example true
   */
  is_active: boolean;
  /**
   * Whether the user is banned
   * @example false
   */
  is_ban: boolean;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2025-01-01T11:48:27.321Z"
   */
  created_at: string;
  /**
   * Last update timestamp
   * @format date-time
   * @example "2025-01-01T12:02:12.530Z"
   */
  updated_at: string;
}

export interface PermissionResponseDto {
  permissions: string[];
  name: string;
  role_id: string;
  is_client: boolean;
}

export interface GetTokenWsResponseDto {
  accessToken: string;
}

export interface RegisterDto {
  /**
   * User phone address
   * @example "09031641383"
   */
  phone_number: string;
}

export interface LoginDto {
  /** User phone address */
  phone_number: string;
  /**
   * User otp code
   * @example 12345
   */
  code: number;
}

export interface RefreshTokenDto {
  /** User Id */
  user_id: string;
}

export interface BanStatusDto {
  /** Status */
  is_ban: boolean;
}

export interface PaginationDto {
  /**
   * Page number
   * @default 1
   */
  page?: number;
  /** Number of items per page */
  limit?: number;
}

export interface PaginationResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
}

export interface AdminAuditDto {
  /** admin audit id */
  admin_audit_id: string;
  /** user id */
  user_id: string;
  /** model name */
  model: string;
  /** action name */
  action: string;
  /**
   * Start of creation date range
   * @format date-time
   */
  created_at_start: string;
  /**
   * End of creation date range
   * @format date-time
   */
  created_at_end: string;
}

export interface UserForAdminResponseDto {
  /** User id */
  user_id: string | null;
  /**
   * User first name
   * @example "doe"
   */
  name: string | null;
  /**
   * User last name
   * @example "john"
   */
  family: string | null;
  /** User avatar id */
  avatar_id: string | null;
  /** Phone Number */
  phone_number?: string;
}

export interface AdminAuditWithDateDto {
  /** admin audit id */
  admin_audit_id: string;
  /** user id */
  user_id: string;
  /** model name */
  model: string;
  /** action name */
  action: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  args: string;
  where?: string;
  user: UserForAdminResponseDto;
}

export interface GetAdminAuditListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  logs: AdminAuditWithDateDto[] | null;
}

export interface GetOneAdminAuditResponseDto {
  /** admin audit id */
  admin_audit_id: string;
  /** user id */
  user_id: string;
  /** model name */
  model: string;
  /** action name */
  action: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  args: string;
  where?: string;
  user: UserForAdminResponseDto;
}

export interface GetResponseDto {
  balance: number;
}

export interface PurchaseProductResponseDto {
  /**
   * Transaction token for the payment gateway
   * @example "some-unique-token"
   */
  token: string;
  /**
   * Total amount to be paid after applying offers
   * @example 250000
   */
  payment_amount: number;
}

export interface VerifyTransactionResponseDto {
  /**
   * Status of the transaction verification
   * @example "1"
   */
  status: number;
  /**
   * Message about the verification result
   * @example "Payment verified successfully."
   */
  message: string;
  /**
   * Final payment amount after verification
   * @example 250000
   */
  price: number;
}

export interface PurchaseProductByWalletResponseDto {
  balance: number;
}

export interface WalletChargeDto {
  /** Charge Id */
  charge_id?: string;
  /** Ipg Gateway id */
  ipg_gateway_id?: string;
  /** Description */
  description?: string;
  /** Amount */
  amount?: number;
  /** Card Number */
  card_number?: string;
}

export interface ProductPayDto {
  /** Product id */
  product_id: string;
  /** Ipg Gateway id */
  ipg_gateway_id?: string;
  /** form submission id */
  form_submission_id?: string;
  /** Count */
  count: number;
  /** Tax */
  tax: number;
  /** User card number */
  card_number?: string;
  /** Transaction description */
  description?: string;
  /** Transaction offer code */
  offer_code?: string;
  /**
   * attachment
   * @format binary
   */
  attachment?: File;
}

export interface WalletWithdrawalDto {
  /** Product id */
  product_id: string;
  /** form submission id */
  form_submission_id?: string;
  /**
   * Product count
   * @default 1
   */
  product_count: number;
  /** Transaction description */
  description?: string;
  /** Transaction offer code */
  offer_code?: string;
  /**
   * attachment
   * @format binary
   */
  attachment?: File;
}

export interface VerifyTransactionDto {
  /**
   * Transaction status
   * @example 1
   */
  status: number;
  /** Transaction reference number */
  ref_num: string;
  /** Order id */
  order_id: string;
  /** Transaction id */
  transaction_id: string;
  /** Card number */
  card_number?: string;
  /** Hashed card number */
  hashed_card_number?: string;
  /** Tracking code */
  tracking_code?: string;
}

export enum VERIFY_TYPE {
  Wallet = "wallet",
  Product = "product",
}

export interface IpgGatewayNameDto {
  name: string;
}

export interface IpgTransactionForGatewayDto {
  ipg_gateway: IpgGatewayNameDto;
}

export interface OrderHashEntityResponseDto {
  order_hash: string;
}

export interface TransactionResponseDto {
  /**
   * Transaction ID
   * @example "673250cabe84492502bc0d03"
   */
  transaction_id: string;
  /**
   * Attachment ID
   * @example "673250cabe84492502bc0d03"
   */
  attachment_id: string;
  /**
   * Transaction amount
   * @example 10000
   */
  amount: number;
  /** Offer code */
  offer_code: string | null;
  /**
   * User ip
   * @example "127.0.0.01"
   */
  ip: string | null;
  /** Offer value */
  offer_value: number | null;
  /** Reward type */
  reward_type: string | null;
  /**
   * Payment amount
   * @example 10000
   */
  payment_amount: number;
  /**
   * Transaction status
   * @example 1
   */
  status: TransactionResponseDtoStatusEnum;
  /**
   * Phone number
   * @example "1234567890"
   */
  phone: string;
  /**
   * Transaction description
   * @example "test"
   */
  description: string | null;
  /**
   * Transaction creation timestamp
   * @format date-time
   * @example "2024-11-11T18:45:30.103Z"
   */
  created_at: string;
  /**
   * Transaction update timestamp
   * @format date-time
   * @example "2024-11-11T18:45:30.103Z"
   */
  updated_at: string;
  product_count: number | null;
  bonus: number;
  product_id: string | null;
  charge_id: string | null;
  user_id: string | null;
  /** @format date-time */
  verified_at: string | null;
  product_price: number;
  name: string;
  family: string;
  cause: string;
  gateway: string;
  orders?: OrderHashEntityResponseDto[];
  ipg_transaction: IpgTransactionForGatewayDto;
}

export interface GetTransactionResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  transactions: TransactionResponseDto[];
}

export interface OrderWalletTransactionDetailDto {
  wallet_transaction_id: string;
  pre_balance: number;
  nxt_balance: number;
  user_id: string;
  admin_id: string;
  gateway: string;
  type: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface OrderIpgTransactoinDetailDto {
  ipg_transaction_id: string;
  ipg_gateway_id: string;
  tax: number;
  ref_num: string;
  token: string;
  tracking_code: string;
  card_number: string;
  hashed_card_number: string;
  status: number;
  message: string;
  transaction_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface GetDetailTransactionResponseDto {
  transaction_id: string;
  amount: number;
  payment_amount: number;
  product_count: number;
  product_price: number;
  bonus: number;
  tax: number;
  reward_type: string;
  status: string;
  ip: string;
  name: string;
  family: string;
  phone: string;
  description: string;
  cause: string;
  gateway: string;
  user_id: string;
  ipg_transaction_id: string;
  product_id: string;
  offer_code: string;
  offer_value: number;
  charge_id: string;
  attachment_id: string;
  wallet_transaction_id: string;
  form_submission_id: string;
  /** @format date-time */
  verified_at: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  wallet_transaction: OrderWalletTransactionDetailDto | null;
  ipg_transaction: OrderIpgTransactoinDetailDto | null;
}

export interface OrderTransactionDetailsDto {
  transaction_id: string;
  amount: number;
  payment_amount: number;
  product_count: number;
  product_price: number;
  bonus: number;
  tax: number;
  reward_type: string;
  status: string;
  ip: string;
  name: string;
  family: string;
  phone: string;
  description: string;
  cause: string;
  gateway: string;
  user_id: string;
  ipg_transaction_id: string;
  product_id: string;
  offer_code: string;
  offer_value: number;
  charge_id: string;
  attachment_id: string;
  wallet_transaction_id: string;
  form_submission_id: string;
  /** @format date-time */
  verified_at: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  wallet_transaction: OrderWalletTransactionDetailDto | null;
  ipg_transaction: OrderIpgTransactoinDetailDto | null;
}

export interface OrderProductDetailsDto {
  /** @example " اپل‌آی‌دی عمده" */
  title: string;
  price: number;
}

export interface UserResponseDto {
  /** User id */
  user_id: string | null;
  /**
   * User first name
   * @example "doe"
   */
  name: string | null;
  /**
   * User last name
   * @example "john"
   */
  family: string | null;
  /** User avatar id */
  avatar_id: string | null;
}

export interface OrderStatusDto {
  /** order status id */
  order_status_id: string;
  /** creator */
  user: UserResponseDto;
  /** creator id */
  user_id: string;
  /** status */
  status: string;
  /** title */
  title: string;
  /** is locked */
  is_locked: boolean;
  /**
   * created at
   * @format date-time
   */
  created_at: string;
  /**
   * updated at
   * @format date-time
   */
  updated_at: string;
}

export interface UniqueOrderResponseDto {
  /** @example "67daadf58e2e787d54fba68b" */
  order_id: string;
  /** @example "get_info" */
  status: OrderStatusDto;
  /** @example "CD2423" */
  order_hash: string;
  /** @format date-time */
  created_at: string;
  product: OrderProductDetailsDto;
  transaction: OrderTransactionDetailsDto;
}

export interface OrderCustomListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  orders: UniqueOrderResponseDto[];
}

export interface GetTransactionDetailForUserResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  transactions: TransactionResponseDto[];
  successTransactions: number;
  failedTransactions: number;
  /** @format date-time */
  firstPayment?: string | null;
}

export enum TRANSACTION_CAUSE {
  Product = "product",
  Wallet = "wallet",
}

export interface ElementInputDto {
  element_id: string;
  name: string;
  description: string;
  mode: string;
  is_input: boolean;
  type: string;
  file_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface FormTabRowElementOptionDto {
  form_element_option_id: string;
  form_tab_row_element_id: string;
  name: string;
  value: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface FormTabRowElementDto {
  form_tab_row_element_id: string;
  row_id: string;
  element_id: string;
  input_placeholder: string;
  input_title: string;
  input_is_optional: boolean;
  input_max_length?: number | null;
  input_min_length?: number | null;
  content?: string | null;
  content_heading_type?: string | null;
  content_type?: string | null;
  alert_type?: string | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  element: ElementInputDto;
  form_tab_row_element_option: FormTabRowElementOptionDto[];
}

export interface FormDisplayRowDto {
  row_id: string;
  form_id: string;
  form_tab_display_mode_id: string;
  division: number;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_tab_row_element: FormTabRowElementDto[];
}

export interface FormTabDisplayModeDto {
  form_tab_display_mode_id: string;
  tab_id: string;
  form_id: string;
  display_mode: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_display_row: FormDisplayRowDto[];
}

export interface FormTabDto {
  tab_id: string;
  name: string;
  form_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_tab_display_mode: FormTabDisplayModeDto[];
}

export interface FormDto {
  form_id: string;
  user_id: string;
  name: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_tab: FormTabDto[];
}

export interface FormProductDto {
  form_product_id: string;
  product_id: string;
  form_id: string;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form: FormDto;
}

export interface FormProductResponseDto {
  form_product: FormProductDto[];
}

export interface WalletTransactionWithoutRelationDto {
  /** Wallet Transaction Id */
  wallet_transaction_id: string;
  /** User Id */
  user_id: string;
  /** Admin Id */
  admin_id: string;
  /**
   * Balance before the transaction
   * @example 5000
   */
  pre_balance: number;
  /** Nxt Balance */
  nxt_balance: number;
  /** Gateway */
  gateway: string;
  /** Type */
  type: string;
  /** transactions */
  transactions: TransactionResponseDto[];
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
}

/** Type of the product category */
export enum PRODUCT_TYPE {
  PersonalInfo = "personal_info",
  NotActive = "not_active",
  CountryBased = "country_based",
  Card = "card",
}

export interface CountryQuestionDetailResponseDto {
  question_id: string;
  question: string;
  title: string;
  priority: number;
  is_active: boolean;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface CountrySecurityQuestionDto {
  country_question_id: string;
  title: string;
  question_id: string;
  country_id: string;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  question: CountryQuestionDetailResponseDto;
}

export interface CountryResponseDto {
  /**
   * Unique identifier for the tag
   * @example "67742018b8087c262c1d12f2"
   */
  country_id: string;
  /**
   * Name of the country
   * @example "Iran"
   */
  name: string;
  /**
   * Stat of the country
   * @example "Iran"
   */
  state: string;
  /**
   * Status of the country
   * @example "image-url"
   */
  flag_id: string;
  /**
   * Code of the country
   * @example "IR"
   */
  code: string;
  /**
   * Status of the country
   * @example "title"
   */
  title: string;
  /**
   * Unique identifier for the user associated with the country
   * @example "6773f301808c1242cc1f94cf"
   */
  user_id: string;
  country_question?: CountrySecurityQuestionDto[] | null;
  /**
   * Creation timestamp of the country
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  created_at: string;
  /**
   * Last update timestamp of the country
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  updated_at: string;
}

export interface ProductCategoryResponseDto {
  /**
   * Product category ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_category_id: string;
  /**
   * Product category name
   * @example "Category 1"
   */
  name: string;
  /**
   * Type of the product category
   * @example "physical"
   */
  type: PRODUCT_TYPE;
  country?: CountryResponseDto | null;
  /**
   * Indicates if the category is default
   * @example false
   */
  is_default: boolean;
  /**
   * User ID of the owner
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  user_id: string;
  /**
   * Parent category ID
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  parent_id: string | null;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
}

export interface ProductCategoryWithChildsResponseDto {
  /**
   * Product category ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_category_id: string;
  /**
   * Product category name
   * @example "Category 1"
   */
  name: string;
  /**
   * Type of the product category
   * @example "physical"
   */
  type: PRODUCT_TYPE;
  country?: CountryResponseDto | null;
  /**
   * Indicates if the category is default
   * @example false
   */
  is_default: boolean;
  /**
   * User ID of the owner
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  user_id: string;
  /**
   * Parent category ID
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  parent_id: string | null;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  /** Child categories */
  children: ProductCategoryResponseDto[];
  /** Parent categories */
  parent: ProductCategoryResponseDto;
}

export interface ProductInOrderDto {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
}

export interface OrderWithoutAppleIdsDto {
  order_id: string;
  /** @format date-time */
  timer_started_at?: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  tracker: UserForAdminResponseDto | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
  /** Order status id */
  status_id: string;
  product: ProductInOrderDto;
  user: UserResponseDto;
  transaction: OrderTransactionDetailsDto;
}

export interface GetUserOrdersResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  orders: OrderWithoutAppleIdsDto[];
}

export enum ORDER_NOTE_TYPE {
  Admin = "admin",
  System = "system",
}

export enum ORDER_NOTE_TARGET {
  Admin = "admin",
  Client = "client",
}

export interface NoteResponseWithRelationDto {
  /** Unique identifier for the suggestion */
  order_note_id: string;
  /** User ID associated with the suggestion */
  user_id: string;
  /** Order ID who created the suggestion */
  order_id: string;
  /** Note */
  note: string;
  type: ORDER_NOTE_TYPE;
  target: ORDER_NOTE_TARGET;
  /** Details of the user who created the suggestion */
  user?: UserResponseDto;
  /**
   * Timestamp of suggestion creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last suggestion update
   * @format date-time
   */
  updated_at: string;
}

export interface CompleteOrderResponseDto {
  /**
   * Apple ID record ID
   * @example "67af888e088095eb4dca4dbe"
   */
  apple_id: string;
  /**
   * Email associated with the Apple ID
   * @example "test@gmail.com"
   */
  email: string;
  /**
   * First name (if available)
   * @example ""
   */
  firstname: string;
  /**
   * Last name (if available)
   * @example ""
   */
  lastname: string;
  /** Is follow up */
  is_follow_up?: boolean;
  /** tracker_id */
  tracker_id?: string | null;
  /**
   * Birth date in ISO format
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /**
   * Status of the Apple ID
   * @example "purchased"
   */
  purchase_status: CompleteOrderResponseDtoPurchaseStatusEnum;
  /**
   * Type of the Apple ID
   * @example "personal_info"
   */
  type: CompleteOrderResponseDtoTypeEnum;
  country: CountryResponseDto | null;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Creation timestamp in ISO format
   * @format date-time
   * @example "2025-02-14T18:16:46.015Z"
   */
  created_at: string;
  /**
   * Last updated timestamp in ISO format
   * @format date-time
   * @example "2025-02-14T18:16:46.015Z"
   */
  updated_at: string;
  tracker?: UserForAdminResponseDto | null;
  /** @format date-time */
  timer_started_at?: string | null;
}

export interface OrderAdminDetailResponseDto {
  order_id: string;
  /** @format date-time */
  timer_started_at?: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  tracker: UserForAdminResponseDto | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
  /** Order status id */
  status_id: string;
  product: ProductInOrderDto;
  user: UserResponseDto;
  transaction: OrderTransactionDetailsDto;
}

export interface OrderUpdateResponseDto {
  order_id: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
}

export interface OrderWithoutResponseDto {
  order_id: string;
  /** @format date-time */
  timer_started_at?: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  tracker: UserForAdminResponseDto | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
  /** Order status id */
  status_id: string;
  transaction: OrderTransactionDetailsDto;
}

export interface LabelResponseWithRelationDto {
  /** Unique identifier for the tag */
  label_id: string;
  /** Name of the tag */
  name: string;
  /** Color */
  color_hex?: string;
  /** Description of the tag */
  description: string;
  /** Details of the user associated with the tag */
  user: UserResponseDto;
  /** Unique identifier for the user associated with the tag */
  user_id: string;
  /**
   * Creation timestamp of the tag
   * @format date-time
   */
  created_at: string;
  /**
   * Last update timestamp of the tag
   * @format date-time
   */
  updated_at: string;
}

export interface LabelResponseInOrder {
  order_label_id: string;
  order_id: string;
  user_id: string;
  priority: number;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  label: LabelResponseWithRelationDto;
}

export interface GetOrderLabelAssignResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  orders: OrderWithoutResponseDto;
}

export enum PURCHASE_STATUS {
  Purchased = "purchased",
  NotPurchased = "not_purchased",
}

export enum PRODUCT_STATUS {
  Unpaid = "unpaid",
  OnlinePayment = "online_payment",
  TransferToWallet = "transfer_to_wallet",
  Canceled = "canceled",
  Archived = "archived",
  CustomerNoResponse = "customer_no_response",
  IncorrectInfo = "incorrect_info",
  ReadyForDelivery = "ready_for_delivery",
  InProgress = "in_progress",
  Completed = "completed",
  UnderReview = "under_review",
  GetInfo = "get_info",
  ScraperFail = "scraper_fail",
}

export interface SecurityQuestionWithoutUserResponseDto {
  /**
   * Unique identifier for the security question
   * @example "67cb4167a8bd1b25e09c3e6e"
   */
  question_id: string;
  /**
   * The security question in English
   * @example "In what city did your parents meet?"
   */
  question: string;
  /**
   * The translated security question
   * @example "در کدام شهر والدین شما ملاقات کردند؟"
   */
  title: string;
  /**
   * Date and time when the question was created
   * @format date-time
   * @example "2025-03-07T18:56:39.638Z"
   */
  created_at: string;
  /**
   * Date and time when the question was last updated
   * @format date-time
   * @example "2025-03-07T18:56:45.702Z"
   */
  updated_at: string;
  priority: number;
  is_active: boolean;
  user_id: string;
}

export interface AppleIdQuestionNestedResponseDto {
  appleid_question_id: string;
  answer: string;
  apple_id: string;
  question_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  question?: SecurityQuestionWithoutUserResponseDto | null;
}

export interface AppleIdInOrderDetailDetail {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  questions?: AppleIdQuestionNestedResponseDto[] | null;
}

export interface GetOrderDetailResponseDto {
  order_id: string;
  /** @format date-time */
  timer_started_at?: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  tracker: UserForAdminResponseDto | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
  /** Order status id */
  status_id: string;
  product: ProductInOrderDto;
  user: UserResponseDto;
  transaction: OrderTransactionDetailsDto;
  ordered_appleids: AppleIdInOrderDetailDetail[] | null;
  /** order note */
  order_note: NoteResponseWithRelationDto[];
  order_label: LabelResponseInOrder[] | null;
}

export interface SecurityQuestionDto {
  /**
   * Security question id
   * @example "67cb4167a8bd1b25e09c3e6e"
   */
  question_id: string;
  /**
   * Security question text
   * @example "In what city did your parents meet?"
   */
  question: string;
  /**
   * Answer to the security question
   * @example "string"
   */
  answer: string;
}

export enum APPLEID_CLIENT_EDIT_STATE {
  ProfileData = "profile_data",
  Email = "email",
  AppleidPassword = "appleid_password",
  SecurityQuestions = "security_questions",
}

export interface AppleIdEditScopeDto {
  apple_id: string;
  order_id: string;
  /** @example null */
  scope?: APPLEID_CLIENT_EDIT_STATE | null;
  /** @example 0 */
  attempts: number;
}

export interface OrderedAppleIDWithoutCountryResponseDto {
  /** @example "67cf151ac2a7c640886d2b28" */
  apple_id: string;
  /** @example "doe" */
  first_name: string;
  /** @example "john" */
  last_name: string;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /** @example "appleid type" */
  appleid_type: PRODUCT_TYPE;
  /** @example "67cf151ac2a7c640886d2b28" */
  order_id: string;
  /** @example "test@gmail.com" */
  appleid: string;
  /** @example "Aa12345678" */
  email_password: string | null;
  /** @example "Aa12345678" */
  appleid_password: string;
  /** @example "Jan 01, 1990" */
  birth_date: string;
  questions: SecurityQuestionDto[];
  /**
   * Estimated time for this Apple ID
   * @example "0:0:0"
   */
  estimated_completion_time: string;
  country: string;
  edit_scope?: AppleIdEditScopeDto | null;
}

export interface GetOrderResponseDto {
  order_id: string;
  /** @format date-time */
  timer_started_at?: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  tracker: UserForAdminResponseDto | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
  /** Order status id */
  status_id: string;
  product: ProductInOrderDto;
  transaction: OrderTransactionDetailsDto;
  form_product?: FormProductDto[];
  /**
   * Estimated completion time
   * @example null
   */
  estimated_completion_time: string;
  ordered_appleids: OrderedAppleIDWithoutCountryResponseDto[] | null;
}

export interface OrderResponseDto {
  order_id: string;
  /** @format date-time */
  timer_started_at?: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  tracker: UserForAdminResponseDto | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
  /** Order status id */
  status_id: string;
  product: ProductInOrderDto;
  user: UserResponseDto;
  transaction: OrderTransactionDetailsDto;
}

export interface PaymentResponseDto {
  /**
   * Payment ID
   * @example "674cdbb2e22dd7e815b077e6"
   */
  payment_id: string;
  /**
   * Payment amount
   * @example 900000
   */
  amount: number;
  /**
   * Product count
   * @example 1
   */
  product_count: number;
  /**
   * Order description
   * @example "test order"
   */
  description: string;
  /**
   * Payment amount
   * @example 900000
   */
  payment_amount: number;
  /** Payment status */
  status: string;
  /**
   * User ID
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Transaction ID
   * @example "673250cabe84492502bc0d03"
   */
  transaction_id: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-01T21:57:06.201Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-01T21:57:06.201Z"
   */
  updated_at: string;
  transaction: TransactionResponseDto | null;
  wallet_transaction: WalletTransactionWithoutRelationDto | null;
}

export interface SuggestResponseDto {
  /** Unique identifier for the suggestion */
  p_suggest_id: string;
  /** Product ID associated with the suggestion */
  product_id: string;
  /** User ID who created the suggestion */
  user_id: string;
  order: number;
  /**
   * Timestamp of suggestion creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last suggestion update
   * @format date-time
   */
  updated_at: string;
}

export interface ProductResponseDto {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
  product_suggest: SuggestResponseDto | null;
}

export interface ProductResponseWithoutSuggest {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
}

export interface SuggestResponseWithRelationDto {
  /** Unique identifier for the suggestion */
  p_suggest_id: string;
  /** Product ID associated with the suggestion */
  product_id: string;
  /** User ID who created the suggestion */
  user_id: string;
  /** Details of the user who created the suggestion */
  user: UserResponseDto;
  order: number;
  /** Details of the product associated with the suggestion */
  product: ProductResponseWithoutSuggest;
  /**
   * Timestamp of suggestion creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last suggestion update
   * @format date-time
   */
  updated_at: string;
}

export interface OrderAdminResponseDto {
  order_id: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  tracker: UserForAdminResponseDto | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
  /** Order status id */
  status_id: string;
  product: ProductInOrderDto;
  transaction: OrderTransactionDetailsDto;
  user: UserForAdminResponseDto | null;
}

export interface OrderSearchResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  orders: OrderAdminResponseDto[];
}

export interface SecurityQuestionResponseDto {
  /**
   * Unique identifier for the security question
   * @example "67cb4167a8bd1b25e09c3e6e"
   */
  question_id: string;
  /**
   * The security question in English
   * @example "In what city did your parents meet?"
   */
  question: string;
  /**
   * The translated security question
   * @example "در کدام شهر والدین شما ملاقات کردند؟"
   */
  title: string;
  /**
   * Date and time when the question was created
   * @format date-time
   * @example "2025-03-07T18:56:39.638Z"
   */
  created_at: string;
  /**
   * Date and time when the question was last updated
   * @format date-time
   * @example "2025-03-07T18:56:45.702Z"
   */
  updated_at: string;
  priority: number;
  is_active: boolean;
  user_id: string;
  user?: UserResponseDto | null;
}

export interface AppleIdQuestionResponseDto {
  appleid_question_id: string;
  answer: string;
  apple_id: string;
  question_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  question: SecurityQuestionResponseDto;
}

export interface AppleIDResponseDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  user?: UserResponseDto;
  order?: OrderHashEntityResponseDto;
}

export interface ClientEditAppleIdResponseDto {
  appleid: AppleIDResponseDto;
  /** @example 2 */
  attempts_left: number;
  edit_scope: AppleIdEditScopeDto;
}

export interface FollowUpOrderResponseDto {
  order_id: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  status_id: string;
  is_follow_up: boolean;
  tracker_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** @format date-time */
  timer_started_at: string;
  tracker: UserForAdminResponseDto;
}

export enum TRANSACTION_GATEWAY {
  Paystar = "paystar",
  Zibal = "zibal",
}

export enum PAYMENT_GATEWAY {
  Online = "online",
  Wallet = "wallet",
}

export enum TRANSACTION_STATUS {
  Pending = "pending",
  Success = "success",
  Failed = "failed",
}

export enum PrismaSortOrder {
  Asc = "asc",
  Desc = "desc",
}

export interface OrderLabelDto {
  /** Label Ids */
  label_ids: string[];
}

export interface OrderUpdateStatusDto {
  /** Status */
  status: PRODUCT_STATUS;
}

export enum OrderDownloadType {
  Image = "image",
  Text = "text",
  Zip = "zip",
}

export interface QuestionDto {
  /**
   * AppleID question
   * @example "675d97dd626db24ad7ecde75"
   */
  question_id: string;
  /**
   * question answer
   * @example "string"
   */
  answer: string;
}

export interface CompleteOrderDto {
  /**
   * email
   * @example "test@gmail.com"
   */
  email: string;
  /** Apple ID password */
  appleid_password: string;
  /** Apple ID email password */
  email_password: string;
  /**
   * Birth date in YYYY-MM-DD format
   * @example "1990-01-01"
   */
  birth_date: string;
  /** country_id */
  country_id?: string;
  /** other information */
  other_info?: string;
  /**
   * AppleID questions
   * @example [{"question_id":"675d97dd626db24ad7ecde75","answer":"string"},{"question_id":"675d97dd626db24ad7ecde75","answer":"string"},{"question_id":"675d97dd626db24ad7ecde75","answer":"string"}]
   */
  questions: QuestionDto[];
}

export interface ClientEditAppleIdDto {
  firstname?: string;
  lastname?: string;
  /** YYYY-MM-DD */
  birth_date?: string;
  email?: string;
  appleid_password?: string;
  questions?: QuestionDto[];
}

export interface UpdateFollowUpOrderDto {
  /**
   * Is Follow Up
   * @example "true"
   */
  is_follow_up: boolean;
}

export interface ForceCloseFollowUpDto {
  /** Order Id */
  order_id: string;
}

export interface GetLabelResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  labels: LabelResponseWithRelationDto[];
}

export interface CreateLabelResponseDto {
  label: LabelResponseWithRelationDto;
}

export interface UpdateLabelResponseDto {
  label: LabelResponseWithRelationDto;
}

export interface DeleteLabelResponseDto {
  label: LabelResponseWithRelationDto;
}

export interface GetLabelByIdResponseDto {
  label: LabelResponseWithRelationDto;
}

export interface CreateBulkLabelResponseDto {
  count: number;
}

export interface DeleteBulkLabelDto {
  /** Label Ids */
  labelIds: string[];
}

export interface DeleteBulkImprovmentResponseDto {
  label_id: string;
  name: string;
}

export interface DeleteBulkLabelResponseDto {
  count: number;
  list: DeleteBulkImprovmentResponseDto[];
}

export interface CreateLabelDto {
  /** Name */
  name: string;
  /** Description */
  description: string;
  /** Color */
  color_hex?: string;
}

export interface CreateBulkLabelDto {
  datas: CreateLabelDto[];
}

export interface UpdateLabelBulkPayloadDto {
  /** Name */
  name: string;
  /** Description */
  description: string;
  /** Color */
  color_hex?: string;
  /** LabelId */
  labelId: string;
}

export interface UpdateBulkLabelDto {
  datas: UpdateLabelBulkPayloadDto[];
}

export interface CreateNoteResponseDto {
  note: NoteResponseWithRelationDto;
}

export interface UpdateNoteResponseDto {
  note: NoteResponseWithRelationDto;
}

export interface DeleteNoteResponseDto {
  note: NoteResponseWithRelationDto;
}

export interface GetByIdNoteResponseDto {
  note: NoteResponseWithRelationDto;
}

export interface CreateNoteDto {
  /** Note */
  note: string;
  /** Order Id */
  order_id: string;
  /** Target Type */
  target: ORDER_NOTE_TARGET;
}

export interface UpdateNoteDto {
  /** Note */
  note?: string;
  /** Order Id */
  order_id?: string;
  /** Target Type */
  target?: ORDER_NOTE_TARGET;
}

export interface GetOrderStatusResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  status: OrderStatusDto[];
}

export interface GetByIdOrderStatusResponseDto {
  status: OrderStatusDto;
}

export interface CreateOrderStatusResponseDto {
  status: OrderStatusDto;
}

export interface UpdateOrderStatusResponseDto {
  status: OrderStatusDto;
}

export interface DeleteOrderStatusResponseDto {
  status: OrderStatusDto;
}

export interface CreateOrderStatusDto {
  /** status */
  status: string;
  /** title */
  title: string;
}

export interface UpdateOrderStatusDto {
  /** status */
  status?: string;
  /** title */
  title?: string;
}

export interface OrderTransactionTimerResponseDto {
  product_count: number;
  user: UserResponseDto;
}

export interface OrderHashTimerResponseDto {
  order_hash: string;
  transaction: OrderTransactionTimerResponseDto;
}

export interface ProductNameResponseDto {
  title: string;
}

export interface ProductCategoryNameResponseDto {
  name: string;
}

export interface TimerTrackerWithRelationResponseDto {
  timer_id: string;
  product_id?: string;
  product_category_id?: string;
  user_id: string;
  order_id: string;
  /** @format date-time */
  started_at: string;
  action_type: string;
  /** @format date-time */
  ended_at: string;
  seconds?: number | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  product: ProductNameResponseDto;
  product_category: ProductCategoryNameResponseDto;
  user: UserForAdminResponseDto;
  order: OrderResponseDto;
}

export interface TimerTrackerResponseDto {
  timer_id: string;
  product_id?: string;
  product_category_id?: string;
  user_id: string;
  order_id: string;
  /** @format date-time */
  started_at: string;
  action_type: string;
  /** @format date-time */
  ended_at: string;
  seconds?: number | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  product: ProductNameResponseDto;
  product_category: ProductCategoryNameResponseDto;
  order: OrderHashTimerResponseDto;
}

export interface AppleIdAuditTimerResponseDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  apple_audit_id: string;
  first_question_answer: string;
  second_question_answer: string;
  third_question_answer: string;
  action: string;
}

export interface OrderAuditResponseDto {
  order_audit_id: string;
  status_id: string;
  user_id: string;
  order_id: string;
  is_follow_up: boolean;
  note: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface TimerActionResponseDto {
  timer_action_id: string;
  timer_id: string;
  appleid_audit_id: string;
  order_audit_id: string;
  appleid_audit: AppleIdAuditTimerResponseDto;
  order_audit: OrderAuditResponseDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface TimerTrackerForSearchListDto {
  timer_id: string;
  product_id?: string;
  product_category_id?: string;
  user_id: string;
  order_id: string;
  /** @format date-time */
  started_at: string;
  action_type: string;
  /** @format date-time */
  ended_at: string;
  seconds?: number | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  product: ProductNameResponseDto;
  product_category: ProductCategoryNameResponseDto;
  order: OrderHashTimerResponseDto;
  timer_action: TimerActionResponseDto[];
}

export interface TimerTrackerWithActionResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  logs: TimerTrackerForSearchListDto[];
}

export interface TimerStoperDto {
  /** order id */
  order_id: string;
}

export interface TimerStopOrderAuditDto {
  order_audit_id: string;
  status_id: string;
  user_id: string;
  order_id: string;
  is_follow_up: boolean | null;
  note: string | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface TimerStopTimerActionDto {
  timer_action_id: string;
  timer_id: string;
  appleid_audit_id: string | null;
  order_audit_id: string | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  appleid_audit: object | null;
  order_audit: TimerStopOrderAuditDto;
}

export interface TimerStopTransactionUserDto {
  user_id: string;
  name: string;
  family: string;
  avatar_id: string | null;
}

export interface TimerStopTransactionDto {
  product_count: number;
  user: TimerStopTransactionUserDto;
}

export interface TimerStopOrderDto {
  order_hash: string;
  transaction: TimerStopTransactionDto;
}

export interface TimerStopProductDto {
  title: string;
}

export interface TimerStopProductCategoryDto {
  name: string;
}

export interface TimerStopTimerTrackerResponseDto {
  timer_id: string;
  user_id: string;
  order_id: string;
  product_id: string;
  product_category_id: string;
  action_type: string;
  /** @format date-time */
  started_at: string;
  /** @format date-time */
  ended_at: string;
  seconds: number;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  user: UserForAdminResponseDto;
  timer_action: TimerStopTimerActionDto[];
  order: TimerStopOrderDto;
  product: TimerStopProductDto;
  product_category: TimerStopProductCategoryDto;
}

export enum TIMER_ACTION_TYPE {
  Viewed = "viewed",
  Acted = "acted",
  NoActed = "no_acted",
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

/** status */
export enum TIMER_MANAGMENT_STATUS {
  Pending = "pending",
  Approve = "approve",
  Denied = "denied",
}

export interface GetTimerRequestListDto {
  /**
   * Page number
   * @default 1
   */
  page?: number;
  /** Number of items per page */
  limit?: number;
  /** status */
  status?: TIMER_MANAGMENT_STATUS;
}

export interface GetTimerRequestDetailDto {
  /** Timer Log Id */
  timer_request_id: string;
}

export interface SetTimerRequestDto {
  /** Timer Log Id */
  timer_log_id: string;
  /**
   * new ended at
   * @format date-time
   */
  ended_at: string;
  /** description */
  description?: string;
}

export interface UpdateStatusTimerRequestDto {
  /** Timer Log Ids */
  timer_request_id: string;
  /** status */
  status: TIMER_MANAGMENT_STATUS;
}

export interface UpdateStatusTimerRequestArrayDto {
  inputs: UpdateStatusTimerRequestDto[];
}

export interface ProductTimerRequestDto {
  /** @example "68064618f350bfefe8a05b0e" */
  product_id: string;
  /** @example "برطرف کردن خطای نات‌اکتیو اپل‌آی‌دی" */
  title: string;
}

export interface ProductCategoryTimerRequestDto {
  /** @example "68064618f350bfefe8a05afe" */
  product_category_id: string;
  /** @example "نات اکتیو" */
  name: string;
}

export interface OrderTimerRequestDto {
  /** @example "686f67f11daa5d3c6425cb79" */
  order_id: string;
  /** @example "TA1264" */
  order_hash: string;
}

export interface TimerLogForTimerRequestDto {
  /**
   * @format date-time
   * @example "2025-06-28T15:50:17.270Z"
   */
  ended_at: string;
  /**
   * @format date-time
   * @example "2025-06-24T08:14:01.870Z"
   */
  started_at: string;
  /** @example 372975 */
  seconds: number;
  user: UserForAdminResponseDto;
  product: ProductTimerRequestDto;
  product_category: ProductCategoryTimerRequestDto;
  order: OrderTimerRequestDto;
}

export interface TimerRequestDto {
  timer_request_id: string;
  timer_log_id: string;
  description?: string;
  /** @format date-time */
  ended_at: string;
  status: TimerRequestDtoStatusEnum;
  admin_id?: string;
  admin?: UserForAdminResponseDto | null;
  timer_log: TimerLogForTimerRequestDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface GetTimerRequestListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  requests: TimerRequestDto[];
}

export interface SetTimerRequestResponseDto {
  timer_request_id: string;
  timer_log_id: string;
  description?: string;
  /** @format date-time */
  ended_at: string;
  status: SetTimerRequestResponseDtoStatusEnum;
  admin_id?: string;
  admin?: UserForAdminResponseDto | null;
  timer_log: TimerLogForTimerRequestDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface GetTimerRequestDetailResponseDto {
  timer_request_id: string;
  timer_log_id: string;
  description?: string;
  /** @format date-time */
  ended_at: string;
  status: GetTimerRequestDetailResponseDtoStatusEnum;
  admin_id?: string;
  admin?: UserForAdminResponseDto | null;
  timer_log: TimerLogForTimerRequestDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface UpdateTimerRequestResponseDto {
  timer_request_id: string;
  timer_log_id: string;
  description?: string;
  /** @format date-time */
  ended_at: string;
  status: UpdateTimerRequestResponseDtoStatusEnum;
  admin_id?: string;
  admin?: UserForAdminResponseDto | null;
  timer_log: TimerLogForTimerRequestDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface UpdateTimerRequestBulkResponseDto {
  list: UpdateTimerRequestResponseDto[];
}

export interface FAQResponseWithRelationDto {
  /**
   * Unique identifier for the tag
   * @example "67742018b8087c262c1d12f2"
   */
  faq_id: string;
  /**
   * Name of the tag
   * @example "tag-1"
   */
  title: string;
  /**
   * Status of the tag
   * @example "active"
   */
  content: string;
  /** Details of the user associated with the tag */
  owner: UserResponseDto;
  /**
   * Unique identifier for the user associated with the tag
   * @example "6773f301808c1242cc1f94cf"
   */
  owner_id: string;
  /**
   * Array of post tags associated with the tag
   * @example false
   */
  is_chosen: boolean;
  /**
   * Creation timestamp of the tag
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  created_at: string;
  /**
   * Last update timestamp of the tag
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  updated_at: string;
}

export interface CreateFAQResponseDto {
  faq: FAQResponseWithRelationDto;
}

export interface UpdateFAQResponseDto {
  faq: FAQResponseWithRelationDto;
}

export interface DeleteFAQResponseDto {
  faq: FAQResponseWithRelationDto;
}

export interface GetFAQResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  faqs: FAQResponseWithRelationDto[];
}

export interface GetFAQByIdResponseDto {
  faq: FAQResponseWithRelationDto;
}

export interface CreateFAQDto {
  /** Title */
  title: string;
  /** Content */
  content: string;
  /**
   * Is Chosen
   * @default false
   */
  is_chosen: boolean;
}

export interface UpdateFAQDto {
  /** Title */
  title?: string;
  /** Content */
  content?: string;
  /**
   * Is Chosen
   * @default false
   */
  is_chosen?: boolean;
}

export enum OFFER_TYPE {
  Specific = "specific",
  Group = "group",
}

export enum REWARD_TYPE {
  Price = "price",
  Wallet = "wallet",
}

export interface OfferResponseDto {
  offer_id: string;
  title: string;
  code: string;
  value: number;
  /** @format date-time */
  start: string;
  /** @format date-time */
  end: string;
  is_percentage: boolean;
  is_active: boolean;
  is_auto: boolean;
  type: OFFER_TYPE;
  reward: REWARD_TYPE;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface OfferProductWithRelationResponseDto {
  /** @example "67ebb30d07a3a80bc314dd7c" */
  offer_product_id: string;
  /** @example "67ebb30d07a3a80bc314dd7b" */
  offer_id: string;
  /** @example "67e2c5ae78bf64d0b0df1908" */
  product_id: string;
  /** @example "67e2c5ae78bf64d0b0df1908" */
  user_id: string;
  /**
   * @format date-time
   * @example "2025-04-01T09:34:05.479Z"
   */
  created_at: string;
  /**
   * @format date-time
   * @example "2025-04-01T09:34:05.479Z"
   */
  updated_at: string;
  offer: OfferResponseDto;
}

export interface CalculateOfferAutoForProductResponseDto {
  /** Type */
  type: REWARD_TYPE;
  /** Actual Price */
  actual_price: number;
  /** Payment Price */
  payment_price: number;
  /** Offer Value */
  offer_value: number;
  /** Offer Reward */
  offer_reward: number;
}

export interface ProductWithOfferResponseDto {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
  product_suggest: SuggestResponseDto | null;
  offer_product?: OfferProductWithRelationResponseDto[];
  /** Final Price For Payment */
  price_info?: CalculateOfferAutoForProductResponseDto | null;
}

export interface GetProductsResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  products: ProductWithOfferResponseDto[];
  /**
   * Available count for the product
   * @example 10
   */
  available: number | null;
}

export interface OmitTypeClass {
  /** Alert Product Id */
  alert_product_id: string;
  /** Alert Id */
  alert_id: string;
  /** Product Id */
  product_id: string;
  user_id: string;
  /** User */
  user?: UserResponseDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface GetProductByIdResponseDto {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
  product_suggest: SuggestResponseDto | null;
  /**
   * Product file URL
   * @example "https://example.com/image.jpg"
   */
  image: string;
  alert_product: OmitTypeClass[] | null;
  offer_product: OfferProductWithRelationResponseDto[] | null;
  /**
   * Product Available Count
   * @example 5
   */
  available: number | null;
  /** Final Price For Payment */
  price_info: CalculateOfferAutoForProductResponseDto | null;
}

export interface CreateProductResponseDto {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
}

export interface ProductCategoryResponseWithCountry {
  /** product_category_id */
  product_category_id?: string;
  /** name */
  name: string;
  /** ParentId(ProductCategoryId) */
  parent_id?: string;
  /** email domain */
  email_domain_id: string;
  /** UserId(ProductCategoryId) */
  user_id?: string;
  /** type */
  type: PRODUCT_TYPE;
  /** Is Default */
  is_default: boolean;
  country: CountryResponseDto;
}

export interface DeleteProductCategoryResponseDto {
  /** The comment data */
  category: ProductCategoryResponseWithCountry;
}

export interface UpdateProductCategoryResponseDto {
  /** The comment data */
  category: ProductCategoryResponseWithCountry;
}

export interface DeleteProductResponseDto {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
}

export interface ProductResponseWithoutDto {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
}

export interface GetAppleIDsResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** List of Apple IDs */
  appleids: AppleIDResponseDto[];
}

export interface UpdateProductResponseDto {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
}

export interface SecurityQuestionsDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** List of security questions */
  questions: SecurityQuestionResponseDto[];
}

export interface OfferProductWithRelation {
  offer_product_id: string;
  offer?: OfferResponseDto;
  offer_id: string;
  product: ProductResponseDto;
  user: UserResponseDto;
}

export interface OfferResponseWithRelationDto {
  offer_id: string;
  title: string;
  code: string;
  value: number;
  /** @format date-time */
  start: string;
  /** @format date-time */
  end: string;
  is_percentage: boolean;
  is_active: boolean;
  is_auto: boolean;
  type: OFFER_TYPE;
  reward: REWARD_TYPE;
  offer_product?: OfferProductWithRelation[] | null;
  user_id: string;
  user?: UserResponseDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface AlertProductResponseWithoutSuggestCategory {
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
}

export enum ALERT_TYPE {
  Alert = "alert",
  Successful = "successful",
  Notification = "notification",
  Warning = "warning",
}

export enum ALERT_POSITION {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
}

export enum ALERT_VISIBE {
  Category = "category",
  Product = "product",
}

export enum ALERT_ACCESS {
  Guest = "guest",
  Authenticated = "authenticated",
}

export enum ALERT_STATUS {
  Active = "active",
  DeActive = "deActive",
}

export interface AlertResponseDto {
  alert_id: string;
  title: string;
  content: string;
  type: ALERT_TYPE;
  position: ALERT_POSITION;
  visible: ALERT_VISIBE;
  access: ALERT_ACCESS;
  status: ALERT_STATUS;
  priority: number;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface AlertProductResponseDto {
  /** Alert Product Id */
  alert_product_id: string;
  /** Alert Id */
  alert_id: string;
  /** Product Id */
  product_id: string;
  user_id: string;
  /** User */
  user?: UserResponseDto;
  /** Product */
  product?: AlertProductResponseWithoutSuggestCategory | null;
  /** Alert */
  alert?: AlertResponseDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface GetDeletedProductsResponseDto {
  products: ProductWithOfferResponseDto[];
}

export interface TimerProductUserDto {
  user_id: string;
  name: string;
  family: string;
  phone_number: string;
}

export interface TimerProductProductCategoryDto {
  product_category_id: string;
  title: string;
}

export interface TimerProductProductStatsDto {
  product_id: string;
  file_id: string;
  title: string;
  fastest_user: TimerProductUserDto;
  max_seconds: number;
  min_seconds: number;
  avg_seconds: number;
  total_product_count: number;
  product_category: TimerProductProductCategoryDto;
}

export interface TimerProductAggregatorResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  products: TimerProductProductStatsDto[];
}

export interface CreateProductDto {
  /** Title */
  title: string;
  /** Summary */
  summary: string;
  /** Slug */
  slug?: string;
  /**
   * Use Auto Slug
   * @default false
   */
  use_auto_slug?: boolean;
  /** Image Alt */
  img_alt: string;
  /** Description */
  description?: string;
  /** Count */
  count: number;
  /** Price */
  price: number;
  /** Delivery Time */
  delivery_time: number;
  /** Max products per order */
  max_per_order: number;
  /** Features Texerea */
  features?: string;
  /** Is Suggest */
  is_suggest: boolean;
  /** Appleid Category Id */
  category_id: string;
  /** Product File Id */
  file_id: string;
}

export interface UpdateProductDto {
  /** Title */
  title?: string;
  /** Summary */
  summary?: string;
  /** Slug */
  slug?: string;
  /**
   * Use Auto Slug
   * @default false
   */
  use_auto_slug?: boolean;
  /** Image Alt */
  img_alt?: string;
  /** Description */
  description?: string;
  /** Count */
  count?: number;
  /** Price */
  price?: number;
  /** Delivery Time */
  delivery_time?: number;
  /** Max products per order */
  max_per_order?: number;
  /** Features Texerea */
  features?: string;
  /** Is Suggest */
  is_suggest?: boolean;
  /** Appleid Category Id */
  category_id?: string;
  /** Product File Id */
  file_id?: string;
}

export enum APPLEID_COUNTRY {
  Afghanistan = "Afghanistan",
  Albania = "Albania",
  Algeria = "Algeria",
  Angola = "Angola",
  Anguilla = "Anguilla",
  AntiguaAndBarbuda = "Antigua And Barbuda",
  Argentina = "Argentina",
  Armenia = "Armenia",
  Australia = "Australia",
  Austria = "Austria",
  Azerbaijan = "Azerbaijan",
  Bahamas = "Bahamas",
  Bahrain = "Bahrain",
  Bangladesh = "Bangladesh",
  Barbados = "Barbados",
  Belarus = "Belarus",
  Belgium = "Belgium",
  Belize = "Belize",
  Benin = "Benin",
  Bermuda = "Bermuda",
  Bhutan = "Bhutan",
  Bolivia = "Bolivia",
  BosniaAndHerzegovina = "Bosnia and Herzegovina",
  Botswana = "Botswana",
  Brazil = "Brazil",
  BritishVirginIslands = "British Virgin Islands",
  BruneiDarussalam = "Brunei Darussalam",
  Bulgaria = "Bulgaria",
  BurkinaFaso = "Burkina Faso",
  Cambodia = "Cambodia",
  Canada = "Canada",
  Cameroon = "Cameroon",
  CapeVerde = "Cape Verde",
  CaymanIslands = "Cayman Islands",
  Chad = "Chad",
  Chile = "Chile",
  China = "China",
  Colombia = "Colombia",
  CostaRica = "Costa Rica",
  CoteDIvoire = "Côte d'Ivoire",
  Croatia = "Croatia",
  Cyprus = "Cyprus",
  Czechia = "Czechia",
  DemocraticRepublicOfTheCongo = "Democratic Republic of the Congo",
  Denmark = "Denmark",
  Dominica = "Dominica",
  DominicanRepublic = "Dominican Republic",
  Ecuador = "Ecuador",
  Egypt = "Egypt",
  ElSalvador = "El Salvador",
  Estonia = "Estonia",
  Eswatini = "Eswatini",
  Fiji = "Fiji",
  Finland = "Finland",
  France = "France",
  Gabon = "Gabon",
  Gambia = "Gambia",
  Georgia = "Georgia",
  Germany = "Germany",
  Ghana = "Ghana",
  Greece = "Greece",
  Grenada = "Grenada",
  Guatemala = "Guatemala",
  GuineaBissau = "Guinea-Bissau",
  Guyana = "Guyana",
  Honduras = "Honduras",
  HongKong = "Hong Kong",
  Hungary = "Hungary",
  Iceland = "Iceland",
  India = "India",
  Indonesia = "Indonesia",
  Iraq = "Iraq",
  Ireland = "Ireland",
  Israel = "Israel",
  Italy = "Italy",
  Jamaica = "Jamaica",
  Japan = "Japan",
  Jordan = "Jordan",
  Kazakhstan = "Kazakhstan",
  Kenya = "Kenya",
  Kosovo = "Kosovo",
  Kuwait = "Kuwait",
  Kyrgyzstan = "Kyrgyzstan",
  Laos = "Laos",
  Latvia = "Latvia",
  Lebanon = "Lebanon",
  Liberia = "Liberia",
  Libya = "Libya",
  Lithuania = "Lithuania",
  Luxembourg = "Luxembourg",
  Macao = "Macao",
  Madagascar = "Madagascar",
  Malawi = "Malawi",
  Malaysia = "Malaysia",
  Maldives = "Maldives",
  Mali = "Mali",
  Malta = "Malta",
  Mauritania = "Mauritania",
  Mauritius = "Mauritius",
  Mexico = "Mexico",
  Micronesia = "Micronesia",
  Moldova = "Moldova",
  Mongolia = "Mongolia",
  Montenegro = "Montenegro",
  Montserrat = "Montserrat",
  Morocco = "Morocco",
  Mozambique = "Mozambique",
  Myanmar = "Myanmar",
  Namibia = "Namibia",
  Nauru = "Nauru",
  Nepal = "Nepal",
  Netherlands = "Netherlands",
  NewZealand = "New Zealand",
  Nicaragua = "Nicaragua",
  Niger = "Niger",
  Nigeria = "Nigeria",
  NorthMacedonia = "North Macedonia",
  Norway = "Norway",
  Oman = "Oman",
  Pakistan = "Pakistan",
  Palau = "Palau",
  Panama = "Panama",
  PapuaNewGuinea = "Papua New Guinea",
  Paraguay = "Paraguay",
  Peru = "Peru",
  Philippines = "Philippines",
  Poland = "Poland",
  Portugal = "Portugal",
  Qatar = "Qatar",
  RepublicOfTheCongo = "Republic of the Congo",
  Romania = "Romania",
  Russia = "Russia",
  Rwanda = "Rwanda",
  SaintKittsAndNevis = "Saint Kitts And Nevis",
  SaintLucia = "Saint Lucia",
  SaintVincentAndTheGrenadines = "Saint Vincent and the Grenadines",
  SaoTomeAndPrincipe = "Sao Tome And Principe",
  SaudiArabia = "Saudi Arabia",
  Senegal = "Senegal",
  Serbia = "Serbia",
  Seychelles = "Seychelles",
  SierraLeone = "Sierra Leone",
  Singapore = "Singapore",
  Slovakia = "Slovakia",
  Slovenia = "Slovenia",
  SolomonIslands = "Solomon Islands",
  SouthAfrica = "South Africa",
  SouthKorea = "South Korea",
  Spain = "Spain",
  SriLanka = "Sri Lanka",
  Suriname = "Suriname",
  Sweden = "Sweden",
  Switzerland = "Switzerland",
  Taiwan = "Taiwan",
  Tajikistan = "Tajikistan",
  Tanzania = "Tanzania",
  Thailand = "Thailand",
  Tonga = "Tonga",
  TrinidadAndTobago = "Trinidad and Tobago",
  Tunisia = "Tunisia",
  Turkmenistan = "Turkmenistan",
  Turkey = "Turkey",
  TurksAndCaicosIslands = "Turks and Caicos Islands",
  Uganda = "Uganda",
  Ukraine = "Ukraine",
  UnitedArabEmirates = "United Arab Emirates",
  UnitedKingdom = "United Kingdom",
  UnitedStates = "United States",
  Uruguay = "Uruguay",
  Uzbekistan = "Uzbekistan",
  Vanuatu = "Vanuatu",
  Venezuela = "Venezuela",
  Vietnam = "Vietnam",
  Yemen = "Yemen",
  Zambia = "Zambia",
  Zimbabwe = "Zimbabwe",
}

export interface AlertProductCategoryResponseDto {
  alert_category_id: string;
  alert_id: string;
  category_id: string;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  alert: AlertResponseDto;
}

export interface CreateProductCategoryResponseDto {
  /** The comment data */
  category: ProductCategoryResponseDto;
}

export interface ProductCategoryWithChildsNestedResponseDto {
  /**
   * Product category ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_category_id: string;
  /**
   * Product category name
   * @example "Category 1"
   */
  name: string;
  /**
   * Type of the product category
   * @example "physical"
   */
  type: PRODUCT_TYPE;
  country?: CountryResponseDto | null;
  /**
   * Indicates if the category is default
   * @example false
   */
  is_default: boolean;
  /**
   * User ID of the owner
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  user_id: string;
  /**
   * Parent category ID
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  parent_id: string | null;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  /** Child categories */
  children: ProductCategoryWithChildsResponseDto[] | null;
}

export interface GetProductCategoryListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** The comment data */
  categories: ProductCategoryWithChildsNestedResponseDto[];
}

export interface ProductAlertResponseDto {
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
}

export interface ProductCategoryWithRelationResponseDto {
  /**
   * Product category ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_category_id: string;
  /**
   * Product category name
   * @example "Category 1"
   */
  name: string;
  /**
   * Type of the product category
   * @example "physical"
   */
  type: PRODUCT_TYPE;
  country?: CountryResponseDto | null;
  /**
   * Indicates if the category is default
   * @example false
   */
  is_default: boolean;
  /**
   * User ID of the owner
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  user_id: string;
  /**
   * Parent category ID
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  parent_id: string | null;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  /** Child categories */
  children: ProductCategoryResponseDto[];
  /** Parent categories */
  parent: ProductCategoryResponseDto[];
  products: ProductAlertResponseDto[] | null;
  owner: UserResponseDto;
  alert_category: AlertProductCategoryResponseDto[] | null;
}

export interface GetOneProductCategoryResponseDto {
  /** The comment data */
  category: ProductCategoryWithRelationResponseDto;
}

export interface GetProductCategoryResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** The comment data */
  categories: ProductCategoryWithRelationResponseDto[];
}

export interface CreateProductCategoryDto {
  /** name */
  name: string;
  /** email domain */
  email_domain_id: string;
  /** type */
  type: PRODUCT_TYPE;
  /** Is Default */
  is_default: boolean;
  /** ParentId(ProductCategoryId) */
  parent_id?: string;
  /** country id */
  country_id?: string;
}

export interface UpdateProductCategoryDto {
  /** name */
  name?: string;
  /** email domain */
  email_domain_id?: string;
  /** type */
  type?: PRODUCT_TYPE;
  /** Is Default */
  is_default?: boolean;
  /** ParentId(ProductCategoryId) */
  parent_id?: string;
  /** country id */
  country_id?: string;
}

export interface EmailDomainPropertyDto {
  /** email domain id */
  email_domain_id: string;
  /** user id */
  user_id: string;
  /** name */
  name: string;
  /** pattern */
  pattern: string;
  /** boolean */
  is_default: boolean;
  /** sample */
  sample: string;
  /**
   * created at
   * @format date-time
   */
  created_at: string;
  /**
   * updated at
   * @format date-time
   */
  updated_at: string;
  /** user */
  user?: UserResponseDto;
}

export interface CreateEmailDomainResponseDto {
  /** email domain id */
  email_domain_id: string;
  /** user id */
  user_id: string;
  /** name */
  name: string;
  /** pattern */
  pattern: string;
  /** boolean */
  is_default: boolean;
  /** sample */
  sample: string;
  /**
   * created at
   * @format date-time
   */
  created_at: string;
  /**
   * updated at
   * @format date-time
   */
  updated_at: string;
  /** user */
  user?: UserResponseDto;
}

export interface GetListEmailDomainResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  emailDoamins: EmailDomainPropertyDto[];
}

export interface GetDetailEmailDomainResponseDto {
  /** email domain id */
  email_domain_id: string;
  /** user id */
  user_id: string;
  /** name */
  name: string;
  /** pattern */
  pattern: string;
  /** boolean */
  is_default: boolean;
  /** sample */
  sample: string;
  /**
   * created at
   * @format date-time
   */
  created_at: string;
  /**
   * updated at
   * @format date-time
   */
  updated_at: string;
  /** user */
  user?: UserResponseDto;
}

export interface UpdateEmailDomainResponseDto {
  /** email domain id */
  email_domain_id: string;
  /** user id */
  user_id: string;
  /** name */
  name: string;
  /** pattern */
  pattern: string;
  /** boolean */
  is_default: boolean;
  /** sample */
  sample: string;
  /**
   * created at
   * @format date-time
   */
  created_at: string;
  /**
   * updated at
   * @format date-time
   */
  updated_at: string;
  /** user */
  user?: UserResponseDto;
}

export interface DeleteEmailDomainResponseDto {
  /** email domain id */
  email_domain_id: string;
  /** user id */
  user_id: string;
  /** name */
  name: string;
  /** pattern */
  pattern: string;
  /** boolean */
  is_default: boolean;
  /** sample */
  sample: string;
  /**
   * created at
   * @format date-time
   */
  created_at: string;
  /**
   * updated at
   * @format date-time
   */
  updated_at: string;
  /** user */
  user?: UserResponseDto;
}

export interface CreateEmailDomainDto {
  /** name */
  name: string;
  /** pattern */
  pattern: string;
  /** sample */
  sample: string;
  /** is default */
  is_default: boolean;
}

export interface UpdateBodyEmailDomainDto {
  /** name */
  name?: string;
  /** pattern */
  pattern?: string;
  /** sample */
  sample?: string;
  /** is default */
  is_default?: boolean;
}

export interface AppleIdResponseWithoutUserDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  order?: OrderHashEntityResponseDto;
}

export interface CreateAppleIdResponseDto {
  appleids: AppleIdResponseWithoutUserDto[];
}

export interface AppleIdResponseWithRelationDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  user?: UserResponseDto;
  order?: OrderResponseDto[];
  questions?: AppleIdQuestionResponseDto[];
}

export interface AppleIdLogResponseDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  user?: UserResponseDto;
  order?: OrderHashEntityResponseDto;
  apple_audit_id: string;
  first_question_answer: string;
  second_question_answer: string;
  third_question_answer: string;
}

export interface GetAppleIDsLogsResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** List of Apple IDs */
  appleid: AppleIdResponseWithRelationDto;
  /** List of Apple IDs */
  logs: AppleIdLogResponseDto[];
}

export interface AppleIdLogsResponseDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  user?: UserResponseDto;
  order?: OrderHashEntityResponseDto;
  apple_audit_id: string;
  first_question_answer: string;
  second_question_answer: string;
  third_question_answer: string;
  logs: AppleIdLogResponseDto[];
}

export interface UpdateAppleIdResponseDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  order?: OrderHashEntityResponseDto;
}

export interface DeleteAppleIdResponseDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  order?: OrderHashEntityResponseDto;
}

export interface AppleIdGetDetailResponseDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  user?: UserResponseDto;
  payment_type?: string;
  order_hash?: string;
  order_status?: string;
  questions?: AppleIdQuestionResponseDto[];
}

export interface AppleIdAuditResponseDto {
  /**
   * Unique identifier for the Apple ID
   * @example "67cf17eb7b77a5550a5dd8c5"
   */
  apple_id: string;
  /**
   * Apple ID email address
   * @example "test1@gmail.com"
   */
  email: string;
  /**
   * First name of the Apple ID owner
   * @example "doe"
   */
  firstname: string;
  /**
   * Last name of the Apple ID owner
   * @example "john"
   */
  lastname: string;
  /**
   * Date of birth of the Apple ID owner
   * @format date-time
   * @example "1990-01-01T00:00:00.000Z"
   */
  birth_date: string;
  /** @example "purchased" */
  purchase_status: PURCHASE_STATUS;
  /** @example "under_review" */
  process_status: PRODUCT_STATUS;
  /**
   * User ID associated with the Apple ID
   * @example "67cb4167a8bd1b25e09c3e45"
   */
  user_id: string;
  /**
   * Order ID related to the Apple ID
   * @example "67cf151ac2a7c640886d2b28"
   */
  order_id: string;
  /** @example "personal_info" */
  type: PRODUCT_TYPE;
  country: CountryResponseDto;
  /**
   * Additional information about the Apple ID
   * @example "other info"
   */
  other_info: string;
  /**
   * Date when the Apple ID was created
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  created_at: string;
  /**
   * Date when the Apple ID was last updated
   * @format date-time
   * @example "2025-03-10T16:48:43.052Z"
   */
  updated_at: string;
  email_password?: string;
  appleid_password?: string;
  is_assignable?: boolean;
  is_deleted?: boolean;
  /** @format date-time */
  deleted_at?: string;
  user?: UserResponseDto;
  order?: OrderHashEntityResponseDto;
  questions?: AppleIdQuestionResponseDto[];
  appleid_audit: AppleIdLogResponseDto[];
}

export interface AppleIdListLogsResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  appleids: AppleIdAuditResponseDto[];
}

export interface CreateAppleIdByFileDto {
  /** Country Id */
  country_id: string;
  /** is assignable */
  is_assignable: boolean;
  /** emain domain id */
  email_domain_id: string;
  /** Question Ids */
  question_ids: string[];
  file_id: string;
}

export interface CreateAppleIdDto {
  /** Firstname */
  firstname?: string;
  /** Lastname */
  lastname?: string;
  /**
   * email
   * @example "0sV3I@example.com"
   */
  email: string;
  /** Email password */
  email_password: string;
  /** Apple ID password */
  appleid_password: string;
  /**
   * Birth date in YYYY-MM-DD format
   * @example "1990-01-01"
   */
  birth_date?: string;
  /**
   * purchase status
   * @default "not_purchased"
   */
  purchase_status: PURCHASE_STATUS;
  /** Status */
  process_status: PRODUCT_STATUS;
  /** AppleID type */
  appleid_type: PRODUCT_TYPE;
  /** AppleID Order ID */
  order_id?: string;
  /** Country Id */
  country_id: string;
  /** is assignable */
  is_assignable: boolean;
  /** file_id */
  file_id?: string;
  /** emain domain id */
  email_domain_id: string;
  /**
   * AppleID questions
   * @example [{"question_id":"675d97dd626db24ad7ecde75","answer":"string"},{"question_id":"675d97dd626db24ad7ecde75","answer":"string"},{"question_id":"675d97dd626db24ad7ecde75","answer":"string"}]
   */
  questions: QuestionDto[];
  /** Other Info */
  other_info?: string;
}

export interface CreateAppleIdsDto {
  /** Array of Apple ID data */
  appleIds: CreateAppleIdDto[];
}

export interface UpdateAppleIdWithStateDto {
  /** Firstname */
  firstname?: string;
  /** Lastname */
  lastname?: string;
  /**
   * email
   * @example "0sV3I@example.com"
   */
  email?: string;
  /**
   * Birth date in YYYY-MM-DD format
   * @example "1990-01-01"
   */
  birth_date?: string;
  /**
   * purchase status
   * @default "not_purchased"
   */
  purchase_status?: PURCHASE_STATUS;
  /** Status */
  process_status?: PRODUCT_STATUS;
  /** Country Id */
  country_id?: string;
  /** is assignable */
  is_assignable?: boolean;
  /**
   * AppleID questions
   * @example [{"question_id":"675d97dd626db24ad7ecde75","answer":"string"},{"question_id":"675d97dd626db24ad7ecde75","answer":"string"},{"question_id":"675d97dd626db24ad7ecde75","answer":"string"}]
   */
  questions?: QuestionDto[];
  /** Email password */
  email_password?: string;
  /** Apple ID password */
  appleid_password?: string;
  scope?: APPLEID_CLIENT_EDIT_STATE;
}

export enum APPLEID_AUDIT_ACTION_TYPE {
  Add = "add",
  Remove = "remove",
  Update = "update",
}

export interface SecurityQuestionsDetailDto {
  /** Detail security questions */
  question: SecurityQuestionResponseDto;
}

export interface QuestionCreateDto {
  /** Question */
  question: string;
  /** Title */
  title: string;
  /** Priority */
  priority: number;
}

export interface QuestionUpdateDto {
  /** Question */
  question: string;
  /** Title */
  title: string;
  /** Priority */
  priority: number;
}

/** status */
export enum EProcessState {
  Queued = "Queued",
  OrderChange = "OrderChange",
  Starting = "Starting",
  PageLoaded = "PageLoaded",
  ValidEmail = "ValidEmail",
  Dashboard = "Dashboard",
  AuthenticateAccepted = "AuthenticateAccepted",
  StartChangeProfile = "StartChangeProfile",
  CompleteChangeProfile = "CompleteChangeProfile",
  StartValidateEmail = "StartValidateEmail",
  StartChangeEmail = "StartChangeEmail",
  PushCode = "PushCode",
  CompleteChangeEmail = "CompleteChangeEmail",
  StartChangePassword = "StartChangePassword",
  CompleteChangePassword = "CompleteChangePassword",
  StartChangeSecurityAnswers = "StartChangeSecurityAnswers",
  CompleteChangeSecurityAnswers = "CompleteChangeSecurityAnswers",
  InvalidMessageFormat = "InvalidMessageFormat",
  CompleteScrape = "CompleteScrape",
  VerifyCodeTimeout = "VerifyCodeTimeout",
  InvalidEmail = "InvalidEmail",
  InvalidCode = "InvalidCode",
  ExceptionError = "ExceptionError",
}

export interface ScraperValidateEmailResponseDto {
  /** status */
  status: EProcessState;
}

export interface ScraperErrorMsgDto {
  /** code */
  code: string;
  /** message */
  message: string;
  /** meta */
  meta: string;
}

export interface ScraperUserIdResponseDto {
  /** id */
  id: string;
  /** estimatedTime */
  estimatedTime: number;
  /** error */
  error: ScraperErrorMsgDto;
}

export interface ScraperUserIdsResponseDto {
  list: ScraperUserIdResponseDto;
}

export interface StartScraperDto {
  /** Order Id */
  order_id: string;
  /** birth day */
  birthDay: number;
  /** birth month */
  birthMonth: number;
  /** birth year */
  birthYear: number;
  /** email */
  email: string;
  /** family */
  family: string;
  /** name */
  name: string;
  /** password */
  password: string;
  /**
   * Question items (array of 3 numbers between 0 and 5)
   * @example [3,4,2]
   */
  questionItems: number[];
  /**
   * first question answer
   * @example "string"
   */
  answerOne: string;
  /**
   * second question answer
   * @example "string"
   */
  answerTwo: string;
  /**
   * thired question answer
   * @example "string"
   */
  answerThree: string;
}

export interface PublishCodeScraperResponseDto {
  is_success: boolean;
}

export interface EmailValidationScraperDto {
  /** email */
  email: string;
  /** Order Id */
  order_id: string;
}

export interface StartScraperInputsDto {
  /** AppleID questions */
  inputs: StartScraperDto[];
}

export interface EmailEditScraperDto {
  /** Order Id */
  scraper_process_id: string;
  /** order id */
  order_id: string;
  /** email */
  email: string;
}

export interface RetryScraperParamDto {
  /** scraper process id */
  scraper_process_id: string;
  /** Order Id */
  order_id: string;
}

export interface PublishCodeScraperDto {
  /** scraper process id */
  scraper_process_id: string;
  /** Order Id */
  order_id: string;
  /** code */
  code: string;
}

export interface WalletTransactionDto {
  /** Wallet Transaction Id */
  wallet_transaction_id: string;
  /** User Id */
  user_id: string;
  /** Admin Id */
  admin_id: string;
  /**
   * Balance before the transaction
   * @example 5000
   */
  pre_balance: number;
  /** Nxt Balance */
  nxt_balance: number;
  /** Gateway */
  gateway: string;
  /** User associated with the transaction */
  user: UserResponseDto;
  /** Admin */
  admin?: UserResponseDto;
  /** Type */
  type: string;
  /** transactions */
  transactions: TransactionResponseDto[];
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
}

export interface WalletTransactionResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** Transactions */
  transactions: WalletTransactionDto;
}

export interface WalletResponseDto {
  /**
   * Unique identifier for the wallet
   * @example "67b704433561688ac915873a"
   */
  wallet_id: string;
  /**
   * Current balance in the user’s wallet
   * @example 0
   */
  balance: number;
  /**
   * User ID associated with this wallet
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Timestamp of wallet creation
   * @format date-time
   * @example "2025-02-20T10:30:27.591Z"
   */
  created_at: string;
  /**
   * Timestamp of last wallet update
   * @format date-time
   * @example "2025-02-20T10:30:27.591Z"
   */
  updated_at: string;
}

export interface WalletTransactionAdminList {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  transactions: WalletTransactionDto[];
}

export interface RegisterCardShebaResponseDto {
  /** Card Number */
  user_card_id: string;
  /** Card Number */
  card_number: string;
  /** Sheba Number */
  sheba_number: string;
}

export interface RegisterCardShebaListResponseDto {
  /** Cards */
  cards: RegisterCardShebaResponseDto[];
}

export interface ChargingPackageResponseDto {
  /** Charge Id */
  charge_id: string;
  /** Title */
  title: string;
  /** Price */
  price: number;
  /** Bonus */
  bonus: number;
  /** Is Suggest */
  is_suggest: boolean;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
}

export interface ChargingPackageListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  chargingPackages: ChargingPackageResponseDto[];
}

export interface GetTransactionWalletByUserIdAdminDto {
  /** User Id */
  user_id: string;
}

/** gateway */
export enum WALLET_TRANSACTION_GATEWAY {
  ADMIN = "ADMIN",
  PAYSTAR = "PAYSTAR",
  ZIBAL = "ZIBAL",
  PRODUCT = "PRODUCT",
}

export interface GetWalletTransactionFilterDto {
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
}

export interface GetTransactionDto {
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
}

export interface AdminChargeWalletDto {
  /** Charging package title */
  user_id: string;
  /** Charging package price */
  description: string;
  /** Amount Charge */
  amount: number;
}

export interface AdminDeducteWalletDto {
  /** Charging package title */
  user_id: string;
  /** Charging package price */
  description: string;
  /** Amount Charge */
  amount: number;
}

export interface RegisterUserCardDto {
  /** user card number */
  card_number: string;
  /** user sheba number */
  sheba_number: string;
}

export interface CreateChargingPackageDto {
  /** Charging package title */
  title: string;
  /** Charging package price */
  price: number;
  /** Charging package bonus */
  bonus: number;
  /** Charging package is suggest */
  is_suggest: boolean;
}

export interface UpdateChargingPackageDto {
  /** Charging package title */
  title?: string;
  /** Charging package price */
  price?: number;
  /** Charging package bonus */
  bonus?: number;
  /** Charging package is suggest */
  is_suggest?: boolean;
}

export interface UserRoleResponseDto {
  /** Unique identifier for the role */
  role_id: string;
  /** Title of the role */
  title: string;
}

export interface UserDetailsResponseDto {
  /**
   * Unique identifier for the user
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Phone number of the user
   * @example "09031641383"
   */
  phone_number: string;
  /**
   * User’s first name
   * @example "doe"
   */
  name: string;
  /**
   * User’s last name
   * @example "john"
   */
  family: string;
  /**
   * User’s email address (null if not provided)
   * @example null
   */
  email: string;
  /** User’s ip address (null if not provided) */
  ip: string | null;
  /**
   * User’s avatar (null if not set)
   * @example null
   */
  avatar: object;
  /**
   * Indicates whether the user account is active
   * @example true
   */
  is_active: boolean;
  /**
   * Indicates whether the user account is ban
   * @example true
   */
  is_ban: boolean;
  /**
   * Timestamp of user account creation
   * @format date-time
   * @example "2025-02-02T20:26:36.103Z"
   */
  created_at: string;
  /**
   * Timestamp of last update on user account
   * @format date-time
   * @example "2025-02-20T10:30:27.613Z"
   */
  updated_at: string;
  /** @format date-time */
  email_verified_at?: string | null;
  password?: string | null;
  avatar_id?: string | null;
  role_id?: string | null;
  /** User wallet details */
  wallet: WalletResponseDto;
  /** User Role details */
  role: UserRoleResponseDto;
}

export interface GetUsersListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  users: UserDetailsResponseDto[];
}

export interface PostResponseDto {
  /** Unique identifier for the post */
  post_id: string;
  /** ID of the user who created the post */
  user_id: string;
  /** Title of the post */
  title: string;
  /** file id */
  file_id: string;
  /** Is auto slug */
  is_auto_slug: boolean;
  /** Content of the post */
  content: string;
  /** slug of the post */
  slug: string;
  /** Summary of the post */
  summary: string;
  /** Alternative text for the image */
  image_alt: string;
  /** Whether comments are locked */
  comments_locked: boolean;
  /** Type of the post */
  type: string;
  /** Status of the post */
  status: string;
  /**
   * Timestamp of creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last update
   * @format date-time
   */
  updated_at: string;
  /** Estimated reading time */
  reading_time: string;
}

export interface CommentResponseWithoutResponser {
  /**
   * Comment ID
   * @example "6772933675e7e2fde86baf61"
   */
  comment_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bc"
   */
  user_id: string;
  /**
   * Related ID
   * @example "67728a9897e3bdeada0153bf"
   */
  related_id: string;
  /**
   * Responser ID
   * @example null
   */
  responser_id: string;
  /**
   * Message
   * @example "message"
   */
  message: string;
  /**
   * Response to the comment
   * @example null
   */
  response: string;
  /**
   * Comment type
   * @example "product"
   */
  type: string;
  /**
   * Comment status
   * @example "pending"
   */
  status: string;
  /**
   * Created timestamp
   * @format date-time
   * @example "2024-12-30T12:33:58.374Z"
   */
  created_at: string;
  /**
   * Updated timestamp
   * @format date-time
   * @example "2024-12-30T12:33:58.374Z"
   */
  updated_at: string;
  /** Post details */
  post: PostResponseDto;
}

export interface GetUserDetailsResponseDto {
  /**
   * Unique identifier for the user
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Phone number of the user
   * @example "09031641383"
   */
  phone_number: string;
  /**
   * User’s first name
   * @example "doe"
   */
  name: string;
  /**
   * User’s last name
   * @example "john"
   */
  family: string;
  /**
   * User’s email address (null if not provided)
   * @example null
   */
  email: string;
  /** User’s ip address (null if not provided) */
  ip: string | null;
  /**
   * User’s avatar (null if not set)
   * @example null
   */
  avatar: object;
  /**
   * Indicates whether the user account is active
   * @example true
   */
  is_active: boolean;
  /**
   * Is Ban
   * @example true
   */
  is_ban: boolean;
  /**
   * Timestamp of user account creation
   * @format date-time
   * @example "2025-02-02T20:26:36.103Z"
   */
  created_at: string;
  /**
   * Timestamp of last update on user account
   * @format date-time
   * @example "2025-02-20T10:30:27.613Z"
   */
  updated_at: string;
  /** @format date-time */
  email_verified_at?: string | null;
  password?: string | null;
  avatar_id?: string | null;
  /** Role Id */
  role_id?: string | null;
  /** User Role details */
  role: UserRoleResponseDto;
  /** Balance */
  balance: number;
  comments: CommentResponseWithoutResponser[];
  payments: PaymentResponseDto[];
}

export interface GetAllUserResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** Get All User */
  users: UserDetailsResponseDto[];
}

export interface CreateUserResponseWithoutWallet {
  /**
   * Unique identifier for the user
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Phone number of the user
   * @example "09031641383"
   */
  phone_number: string;
  /**
   * User’s first name
   * @example "doe"
   */
  name: string;
  /**
   * User’s last name
   * @example "john"
   */
  family: string;
  /**
   * User’s email address (null if not provided)
   * @example null
   */
  email: string;
  /** User’s ip address (null if not provided) */
  ip: string | null;
  /**
   * User’s avatar (null if not set)
   * @example null
   */
  avatar: object;
  /**
   * Indicates whether the user account is active
   * @example true
   */
  is_active: boolean;
  /**
   * Is user ban?
   * @example true
   */
  is_ban?: boolean;
  /**
   * Timestamp of user account creation
   * @format date-time
   * @example "2025-02-02T20:26:36.103Z"
   */
  created_at: string;
  /**
   * Timestamp of last update on user account
   * @format date-time
   * @example "2025-02-20T10:30:27.613Z"
   */
  updated_at: string;
  /** @format date-time */
  email_verified_at?: string | null;
  /** User Password */
  password?: string | null;
  /** Avatar Id */
  avatar_id?: string | null;
  /** Role Id */
  role_id?: string | null;
  /** User Role details */
  role: UserRoleResponseDto;
}

export interface CreateUserResponseDto {
  /** User */
  user: CreateUserResponseWithoutWallet;
}

export interface UserCreatedResponseDto {
  /**
   * Unique identifier for the user
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Phone number of the user
   * @example "09031641383"
   */
  phone_number: string;
  /**
   * User’s first name
   * @example "doe"
   */
  name: string;
  /**
   * User’s last name
   * @example "john"
   */
  family: string;
  /**
   * User’s email address (null if not provided)
   * @example null
   */
  email: string;
  /** User’s ip address (null if not provided) */
  ip: string | null;
  /**
   * User’s avatar (null if not set)
   * @example null
   */
  avatar: object;
  /**
   * Indicates whether the user account is active
   * @example true
   */
  is_active: boolean;
  /**
   * Is user ban?
   * @example true
   */
  is_ban?: boolean;
  /**
   * Timestamp of user account creation
   * @format date-time
   * @example "2025-02-02T20:26:36.103Z"
   */
  created_at: string;
  /**
   * Timestamp of last update on user account
   * @format date-time
   * @example "2025-02-20T10:30:27.613Z"
   */
  updated_at: string;
  /** @format date-time */
  email_verified_at?: string | null;
  /** User Password */
  password?: string | null;
  /** Avatar Id */
  avatar_id?: string | null;
  /** Role Id */
  role_id?: string | null;
  /** User wallet details */
  wallet: WalletResponseDto;
  /** User Role details */
  role: UserRoleResponseDto;
}

export interface SendOTPResponseDto {
  /** Token */
  token: string;
}

export interface UpdateUserAdminRespone {
  /**
   * Unique identifier for the user
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Phone number of the user
   * @example "09031641383"
   */
  phone_number: string;
  /**
   * User’s first name
   * @example "doe"
   */
  name: string;
  /**
   * User’s last name
   * @example "john"
   */
  family: string;
  /**
   * User’s email address (null if not provided)
   * @example null
   */
  email: string;
  /** User’s ip address (null if not provided) */
  ip: string | null;
  /**
   * User’s avatar (null if not set)
   * @example null
   */
  avatar: object;
  /**
   * Indicates whether the user account is active
   * @example true
   */
  is_active: boolean;
  /**
   * Is user ban?
   * @example true
   */
  is_ban?: boolean;
  /**
   * Timestamp of user account creation
   * @format date-time
   * @example "2025-02-02T20:26:36.103Z"
   */
  created_at: string;
  /**
   * Timestamp of last update on user account
   * @format date-time
   * @example "2025-02-20T10:30:27.613Z"
   */
  updated_at: string;
  /** @format date-time */
  email_verified_at?: string | null;
  /** User Password */
  password?: string | null;
  /** Avatar Id */
  avatar_id?: string | null;
  /** Role Id */
  role_id?: string | null;
  /** User Role details */
  role: UserRoleResponseDto;
}

export interface UpdateUserAdminResponseDto {
  /** User */
  user: UpdateUserAdminRespone;
}

export interface UserAvatarDto {
  /** File Id */
  file_id: string;
  /** Name */
  name: string;
  /** Mime */
  mime: string;
  /** Size */
  size: number;
  /** Path */
  path: string;
  /** Meta */
  meta: string;
  /** User Id */
  user_id: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
}

export interface RoleResponseDto {
  /** Unique identifier for the role */
  role_id: string;
  /** Title of the role */
  title: string;
  /** List of permissions associated with the role */
  permissions: number[];
  /** Indicates if this role is clinet */
  is_client: boolean;
  /** Indicates if this role is admin */
  is_admin: boolean;
  /** Unique identifier for the role */
  owner_id: string;
  /**
   * Timestamp of role creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of last role update
   * @format date-time
   */
  updated_at: string;
  /** Owner id */
  owner: string;
}

export interface GetUserProfileResponseDto {
  /**
   * Unique identifier for the user
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Phone number of the user
   * @example "09031641383"
   */
  phone_number: string;
  /**
   * User’s first name
   * @example "doe"
   */
  name: string;
  /**
   * User’s last name
   * @example "john"
   */
  family: string;
  /**
   * User’s email address (null if not provided)
   * @example null
   */
  email: string;
  /** User’s ip address (null if not provided) */
  ip: string | null;
  /**
   * User’s avatar (null if not set)
   * @example null
   */
  avatar: object;
  /**
   * Indicates whether the user account is active
   * @example true
   */
  is_active: boolean;
  /**
   * Is user ban?
   * @example true
   */
  is_ban?: boolean;
  /**
   * Timestamp of user account creation
   * @format date-time
   * @example "2025-02-02T20:26:36.103Z"
   */
  created_at: string;
  /**
   * Timestamp of last update on user account
   * @format date-time
   * @example "2025-02-20T10:30:27.613Z"
   */
  updated_at: string;
  /** @format date-time */
  email_verified_at?: string | null;
  /** User Password */
  password?: string | null;
  /** Avatar Id */
  avatar_id?: string | null;
  /** Role Id */
  role_id?: string | null;
  /** User wallet details */
  wallet: WalletResponseDto;
  /** User Role details */
  role: UserRoleResponseDto;
  /** Count Active Orders */
  count_active_order: number;
}

export interface CreateUserByAdminDto {
  /** Role Id */
  role_id: string;
  /**
   * Phone number
   * @example "09123456789"
   */
  phone_number: string;
  /**
   * Email address
   * @example "test@gmail.com"
   */
  email?: string;
  /** First name of the user */
  name: string;
  /** Last name of the user */
  family: string;
  /**
   * Is phone number verified?
   * @example true
   */
  phone_verified?: boolean;
  /**
   * Is email verified?
   * @example true
   */
  email_verified?: boolean;
  /** avatar id */
  avatar_id?: string;
}

export interface UpdateUserAdminDto {
  /** email */
  email?: string;
  /**
   * User phone address
   * @example "0912345678"
   */
  phone_number?: string;
  /** Firstname */
  name?: string;
  /** Lastname */
  family?: string;
  avatar_id?: string;
  role_id?: string;
  /** Email Confirm */
  email_confirm?: boolean;
  /** Is Ban */
  is_ban?: boolean;
  /** Is Active */
  is_active?: boolean;
}

export interface UpdateProfileDto {
  /** First name of the user */
  name?: string;
  /** Last name of the user */
  family?: string;
  avatar_id?: string;
  /**
   * Email address
   * @example "test@gmail.com"
   */
  email?: string;
}

export interface SendOTPDto {
  /** User phone address */
  phone_number: string;
}

export interface UpdatePhoneOTPDto {
  /** OTP Code */
  code: number;
  /** OTP Token */
  token: string;
}

export interface CommentResponseWithRelationDto {
  /**
   * Comment ID
   * @example "6772933675e7e2fde86baf61"
   */
  comment_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bc"
   */
  user_id: string;
  /**
   * Related ID
   * @example "67728a9897e3bdeada0153bf"
   */
  related_id: string;
  /**
   * Responser ID
   * @example null
   */
  responser_id: string;
  /**
   * Message
   * @example "message"
   */
  message: string;
  /**
   * Response to the comment
   * @example null
   */
  response: string;
  /**
   * Comment type
   * @example "product"
   */
  type: string;
  /**
   * Comment status
   * @example "pending"
   */
  status: string;
  /**
   * Created timestamp
   * @format date-time
   * @example "2024-12-30T12:33:58.374Z"
   */
  created_at: string;
  /**
   * Updated timestamp
   * @format date-time
   * @example "2024-12-30T12:33:58.374Z"
   */
  updated_at: string;
  /**
   * Responser details
   * @example null
   */
  responser: UserResponseDto;
  /** Product details */
  product: ProductResponseDto;
  /** Post details */
  post: PostResponseDto;
  /** User details */
  user: UserResponseDto;
}

export interface CreateReplyCommentResponseDto {
  /** The comment data */
  comment: CommentResponseWithoutResponser;
}

export interface CreateCommentResponseDto {
  /** The comment data */
  comment: CommentResponseWithoutResponser;
}

export interface CommentResponseDto {
  /**
   * Comment ID
   * @example "6772933675e7e2fde86baf61"
   */
  comment_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bc"
   */
  user_id: string;
  /**
   * Related ID
   * @example "67728a9897e3bdeada0153bf"
   */
  related_id: string;
  /**
   * Responser ID
   * @example null
   */
  responser_id: string;
  /**
   * Message
   * @example "message"
   */
  message: string;
  /**
   * Response to the comment
   * @example null
   */
  response: string;
  /**
   * Comment type
   * @example "product"
   */
  type: string;
  /**
   * Comment status
   * @example "pending"
   */
  status: string;
  /**
   * Created timestamp
   * @format date-time
   * @example "2024-12-30T12:33:58.374Z"
   */
  created_at: string;
  /**
   * Updated timestamp
   * @format date-time
   * @example "2024-12-30T12:33:58.374Z"
   */
  updated_at: string;
  /**
   * Responser details
   * @example null
   */
  responser: UserResponseDto;
  /** Post details */
  post: PostResponseDto;
}

export interface UpdateCommentResponseDto {
  /** The comment data */
  comment: CommentResponseWithoutResponser;
}

export interface GetCommentsRelatedResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** List of comments */
  comments: CommentResponseWithRelationDto[];
}

export interface CommentWithAdminDataResponseDto {
  /**
   * Comment ID
   * @example "6772933675e7e2fde86baf61"
   */
  comment_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bc"
   */
  user_id: string;
  /**
   * Related ID
   * @example "67728a9897e3bdeada0153bf"
   */
  related_id: string;
  /**
   * Responser ID
   * @example null
   */
  responser_id: string;
  /**
   * Message
   * @example "message"
   */
  message: string;
  /**
   * Response to the comment
   * @example null
   */
  response: string;
  /**
   * Comment type
   * @example "product"
   */
  type: string;
  /**
   * Comment status
   * @example "pending"
   */
  status: string;
  /**
   * Created timestamp
   * @format date-time
   * @example "2024-12-30T12:33:58.374Z"
   */
  created_at: string;
  /**
   * Updated timestamp
   * @format date-time
   * @example "2024-12-30T12:33:58.374Z"
   */
  updated_at: string;
  /** Product details */
  product: ProductResponseDto;
  /** Post details */
  post: PostResponseDto;
  user: UserForAdminResponseDto;
  responser: UserForAdminResponseDto;
}

export interface GetCommentsResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** List of comments */
  comments: CommentWithAdminDataResponseDto[];
}

export enum COMMENT_TYPE {
  Post = "post",
  Product = "product",
}

export enum COMMENT_STATUS {
  Pending = "pending",
  Approve = "approve",
  Denied = "denied",
}

export interface CreateCommentDto {
  /** Related Id */
  related_id: string;
  /** Message */
  message: string;
  /** Message */
  type: COMMENT_TYPE;
}

export interface CreateReplyCommentDto {
  /** Comment Id */
  comment_id: string;
  /** Message */
  message: string;
}

export interface UpdateCommentStatusBodyDto {
  /** Message */
  status: COMMENT_STATUS;
}

export interface CategoryResponseDto {
  category_id: string;
  name: string;
  icon: string;
  status: string;
  /** Is auto slug */
  is_auto_slug: boolean;
  /** Content of the post */
  slug: string;
  parent_id?: string | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface CreateCategoryResponseDto {
  /** The comment data */
  category: CategoryResponseDto;
}

export interface CategoryWithRelationResponseDto {
  category_id: string;
  name: string;
  icon: string;
  status: string;
  /** Is auto slug */
  is_auto_slug: boolean;
  /** Content of the post */
  slug: string;
  parent_id?: string | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  parent: CategoryResponseDto | null;
  children: CategoryResponseDto[];
  user: UserResponseDto;
}

export interface UpdateCategoryResponseDto {
  /** The comment data */
  category: CategoryWithRelationResponseDto;
}

export interface GetOneCategoryResponseDto {
  /** The comment data */
  category: CategoryWithRelationResponseDto;
}

export interface DeleteCategoryResponseDto {
  /** The comment data */
  category: CategoryWithRelationResponseDto;
}

export interface GetCategoryResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  /** The comment data */
  categories: CategoryWithRelationResponseDto[];
}

export enum CATEGORY_STATUS {
  Active = "active",
  DeActive = "deActive",
}

export interface CreateCategoryDto {
  /** name */
  name: string;
  /** Slug */
  slug?: string;
  /**
   * Use Auto Slug
   * @default false
   */
  use_auto_slug?: boolean;
  /** icon */
  icon: string;
  /** ParentId(CategoryId) */
  parent_id: string;
  /** Status */
  status: CATEGORY_STATUS;
}

export interface UpdateCategoryDto {
  /** name */
  name?: string;
  /** Slug */
  slug?: string;
  /**
   * Use Auto Slug
   * @default false
   */
  use_auto_slug?: boolean;
  /** icon */
  icon?: string;
  /** ParentId(CategoryId) */
  parent_id?: string;
  /** Status */
  status?: CATEGORY_STATUS;
}

export interface PostCategoryResponseDto {
  /** Unique identifier for the category */
  category_id: string;
  slug: string;
  is_auto_slug: boolean;
  /** Name of the category */
  name: string;
  /** Icon URL of the category */
  icon: string;
  /**
   * Timestamp of creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last update
   * @format date-time
   */
  updated_at: string;
  /** User ID associated with the category */
  user_id: string;
  /** Status of the category */
  status: string;
  /** Parent ID of the category */
  parent_id: string | null;
}

export interface PostTagResponseDto {
  /** Unique identifier for the tag */
  tag_id: string;
  /** Name of the tag */
  name: string;
  /** Status of the tag */
  status: string;
  /** User ID associated with the tag */
  user_id: string;
  /**
   * Timestamp of creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last update
   * @format date-time
   */
  updated_at: string;
}

export interface CreatePostResponseDto {
  /** Unique identifier for the post */
  post_id: string;
  /** ID of the user who created the post */
  user_id: string;
  /** Title of the post */
  title: string;
  /** file id */
  file_id: string;
  /** Is auto slug */
  is_auto_slug: boolean;
  /** Content of the post */
  content: string;
  /** slug of the post */
  slug: string;
  /** Summary of the post */
  summary: string;
  /** Alternative text for the image */
  image_alt: string;
  /** Whether comments are locked */
  comments_locked: boolean;
  /** Type of the post */
  type: string;
  /** Status of the post */
  status: string;
  /**
   * Timestamp of creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last update
   * @format date-time
   */
  updated_at: string;
  /** Estimated reading time */
  reading_time: string;
  /** User who created the post */
  user: UserResponseDto;
  /** Categories associated with the post */
  post_category: PostCategoryResponseDto[];
  /** Categories associated with the post */
  post_tag: PostTagResponseDto[];
}

export interface PostResponseWithRelationDto {
  /** Unique identifier for the post */
  post_id: string;
  /** ID of the user who created the post */
  user_id: string;
  /** Title of the post */
  title: string;
  /** file id */
  file_id: string;
  /** Is auto slug */
  is_auto_slug: boolean;
  /** Content of the post */
  content: string;
  /** slug of the post */
  slug: string;
  /** Summary of the post */
  summary: string;
  /** Alternative text for the image */
  image_alt: string;
  /** Whether comments are locked */
  comments_locked: boolean;
  /** Type of the post */
  type: string;
  /** Status of the post */
  status: string;
  /**
   * Timestamp of creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last update
   * @format date-time
   */
  updated_at: string;
  /** Estimated reading time */
  reading_time: string;
  /** User who created the post */
  user: UserResponseDto;
  /** Categories associated with the post */
  post_category: PostCategoryResponseDto[];
  /** Categories associated with the post */
  post_tag: PostTagResponseDto[];
}

export interface GetByIdPostResponseDto {
  post: PostResponseWithRelationDto;
}

export interface GetPostResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  posts: PostResponseWithRelationDto[];
}

export interface UpdatePostResponseDto {
  /** Unique identifier for the post */
  post_id: string;
  /** ID of the user who created the post */
  user_id: string;
  /** Title of the post */
  title: string;
  /** file id */
  file_id: string;
  /** Is auto slug */
  is_auto_slug: boolean;
  /** Content of the post */
  content: string;
  /** slug of the post */
  slug: string;
  /** Summary of the post */
  summary: string;
  /** Alternative text for the image */
  image_alt: string;
  /** Whether comments are locked */
  comments_locked: boolean;
  /** Type of the post */
  type: string;
  /** Status of the post */
  status: string;
  /**
   * Timestamp of creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last update
   * @format date-time
   */
  updated_at: string;
  /** Estimated reading time */
  reading_time: string;
  /** User who created the post */
  user: UserResponseDto;
  /** Categories associated with the post */
  post_category: PostCategoryResponseDto[];
  /** Categories associated with the post */
  post_tag: PostTagResponseDto[];
}

export interface DeletePostResponseDto {
  /** Unique identifier for the post */
  post_id: string;
  /** ID of the user who created the post */
  user_id: string;
  /** Title of the post */
  title: string;
  /** file id */
  file_id: string;
  /** Is auto slug */
  is_auto_slug: boolean;
  /** Content of the post */
  content: string;
  /** slug of the post */
  slug: string;
  /** Summary of the post */
  summary: string;
  /** Alternative text for the image */
  image_alt: string;
  /** Whether comments are locked */
  comments_locked: boolean;
  /** Type of the post */
  type: string;
  /** Status of the post */
  status: string;
  /**
   * Timestamp of creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the last update
   * @format date-time
   */
  updated_at: string;
  /** Estimated reading time */
  reading_time: string;
}

export enum POST_STATUS {
  Active = "active",
  DeActive = "deActive",
}

export enum POST_TYPE {
  Blog = "blog",
  News = "news",
}

export interface CreatePostDto {
  /** Title */
  title: string;
  /** Slug */
  slug?: string;
  /**
   * Use Auto Slug
   * @default false
   */
  use_auto_slug?: boolean;
  /** Content */
  content: string;
  /** Status */
  status: POST_STATUS;
  /** Type */
  type: POST_TYPE;
  /** CategoryIds */
  category_ids: string[];
  /** TagIds */
  tag_ids: string[];
  /** TagIds */
  file_id: string;
  /** Summary */
  summary: string;
  /** Image ALT */
  image_alt: string;
  /** Comments Locked */
  comments_locked: boolean;
  /** Reading Time */
  reading_time: string;
}

export interface UpdatePostDto {
  /** Title */
  title?: string;
  /** Slug */
  slug?: string;
  /**
   * Use Auto Slug
   * @default false
   */
  use_auto_slug?: boolean;
  /** Content */
  content?: string;
  /** Status */
  status?: POST_STATUS;
  /** Type */
  type?: POST_TYPE;
  /** CategoryIds */
  category_ids?: string[];
  /** TagIds */
  tag_ids?: string[];
  /** TagIds */
  file_id?: string;
  /** Summary */
  summary?: string;
  /** Image ALT */
  image_alt?: string;
  /** Comments Locked */
  comments_locked?: boolean;
  /** Reading Time */
  reading_time?: string;
}

export interface CreateSuggestResponseDto {
  suggest: SuggestResponseWithRelationDto;
}

export interface UpdateSuggestResponseDto {
  suggest: SuggestResponseWithRelationDto;
}

export interface DeleteSuggestResponseDto {
  suggest: SuggestResponseWithRelationDto;
}

export interface GetSuggestResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  suggests: SuggestResponseWithRelationDto[];
}

export interface GetByIdSuggestResponseDto {
  suggest: SuggestResponseWithRelationDto;
}

export interface CreateSuggestDto {
  /** ProductId */
  productId: string;
}

export interface UpdateSuggestDto {
  /** ProductId */
  productId?: string;
  /** Order */
  order: number;
}

export interface CreateRoleResponseType {
  /** Unique identifier for the role */
  role_id: string;
  /** Title of the role */
  title: string;
  /** List of permissions associated with the role */
  permissions: number[];
  /** Indicates if this role is clinet */
  is_client: boolean;
  /** Indicates if this role is admin */
  is_admin: boolean;
  /** Unique identifier for the role */
  owner_id: string;
  /**
   * Timestamp of role creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of last role update
   * @format date-time
   */
  updated_at: string;
}

export interface CreateRoleResponseDto {
  role: CreateRoleResponseType;
}

export interface UserResponseWithoutWalletRole {
  /**
   * Unique identifier for the user
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Phone number of the user
   * @example "09031641383"
   */
  phone_number: string;
  /**
   * User’s first name
   * @example "doe"
   */
  name: string;
  /**
   * User’s last name
   * @example "john"
   */
  family: string;
  /**
   * User’s email address (null if not provided)
   * @example null
   */
  email: string;
  /** User’s ip address (null if not provided) */
  ip: string | null;
  /**
   * User’s avatar (null if not set)
   * @example null
   */
  avatar: object;
  /**
   * Indicates whether the user account is active
   * @example true
   */
  is_active: boolean;
  /**
   * Indicates whether the user account is ban
   * @example true
   */
  is_ban: boolean;
  /**
   * Timestamp of user account creation
   * @format date-time
   * @example "2025-02-02T20:26:36.103Z"
   */
  created_at: string;
  /**
   * Timestamp of last update on user account
   * @format date-time
   * @example "2025-02-20T10:30:27.613Z"
   */
  updated_at: string;
  /** @format date-time */
  email_verified_at?: string | null;
  password?: string | null;
  avatar_id?: string | null;
  role_id?: string | null;
}

export interface AssignRoleResponseDto {
  role: RoleResponseDto;
  user: UserResponseWithoutWalletRole;
}

export interface RoleResponseWithRelationDto {
  /** Unique identifier for the role */
  role_id: string;
  /** Title of the role */
  title: string;
  /** List of permissions associated with the role */
  permissions: number[];
  /** Indicates if this role is clinet */
  is_client: boolean;
  /** Indicates if this role is admin */
  is_admin: boolean;
  /** Unique identifier for the role */
  owner_id: string;
  /** Owner details of the role */
  owner: UserResponseDto;
  /**
   * Timestamp of role creation
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of last role update
   * @format date-time
   */
  updated_at: string;
}

export interface GetRoleResponseByIdDto {
  role: RoleResponseWithRelationDto;
}

export interface GetRoleResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  roles: RoleResponseWithRelationDto[];
}

export interface UpdateRoleResponseDto {
  role: RoleResponseDto;
}

export interface DeleteRoleResponseDto {
  role: RoleResponseDto;
}

export interface GetRoleBySearchResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  roles: RoleResponseWithRelationDto[];
}

export interface PermissionSubItemDto {
  en: string;
  fa: string;
  index: number;
}

export interface PermissionSubCategoryDto {
  title: string;
  sub: object;
}

export interface PermissionExposeDto {
  title: string;
  sub: PermissionSubCategoryDto[];
}

export interface PermissionExposeArrayDto {
  items: PermissionExposeDto[];
}

export interface RoleListUserDto {
  /** User Id */
  user_id: string;
  /** Name */
  name: string;
  /** Family */
  family: string;
  /** Avatar */
  avatar: string;
}

export interface RoleListUserResponseDto {
  users: RoleListUserDto[];
}

export interface GetUsersByRoleResponseDto {
  users: UserResponseDto[];
}

export interface CreateRoleDto {
  /** Title */
  title: string;
  /** permissions list */
  permissions: number[];
  /** is admin */
  is_admin: boolean;
}

export interface UpdateRoleDto {
  /** Title */
  title?: string;
  /** permissions list */
  permissions?: number[];
  /** is admin */
  is_admin?: boolean;
}

export interface AssignRoleBodyDto {
  /** User Id */
  userId: string;
}

/** Status */
export enum CONTACT_US_STATUS {
  Pending = "pending",
  Checking = "checking",
  Checked = "checked",
}

export interface ContactUsResponseDto {
  /** Unique identifier for the contact us request */
  contact_us_id: string;
  /** Name of the user */
  name: string;
  /** Request content from the user */
  request: string;
  /**  Is the request a follow-up phone call? */
  is_phone_follow_up: boolean;
  /** Phone number of the user */
  phone: string;
  /** Email address of the user */
  email: string;
  /** Responser id */
  responser_id: string;
  /**
   * Responser details
   * @example null
   */
  responser?: UserResponseDto;
  /** Admin Response */
  response?: string;
  /** Status */
  status: CONTACT_US_STATUS;
  /**
   * Creation timestamp
   * @format date-time
   */
  created_at: string;
  /**
   * Last update timestamp
   * @format date-time
   */
  updated_at: string;
}

export interface CreateContactResponseDto {
  contactUs: ContactUsResponseDto;
}

export interface GetContactResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  contact_us: ContactUsResponseDto[];
}

export interface GetByIdContactResponseDto {
  contact_us: ContactUsResponseDto;
}

export interface UpdateContactResponseDto {
  contact_us: ContactUsResponseDto;
}

export interface DeleteContactResponseDto {
  contact_us: ContactUsResponseDto;
}

export interface CreateContactUsDto {
  /** Name */
  name: string;
  /** Family */
  request: string;
  /** Email */
  email: string;
  /** Phone */
  phone: string;
}

export interface UpdateContactUsDto {
  /** Status */
  status: CONTACT_US_STATUS;
}

export interface FollowUpContactUsDto {
  /** Follow Up By Call */
  is_follow_up: boolean;
}

export interface ResponseContactUsDto {
  /** Response */
  response: string;
}

export interface GetByIdAlert {
  alert_id: string;
  title: string;
  content: string;
  type: ALERT_TYPE;
  position: ALERT_POSITION;
  visible: ALERT_VISIBE;
  access: ALERT_ACCESS;
  status: ALERT_STATUS;
  priority: number;
  user_id: string;
  user?: UserResponseDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface CreateAlertResponseDto {
  alert: GetByIdAlert;
}

export interface ProductCountResponseDto {
  count: number;
}

export interface DeleteAlertResponseDto {
  alert: GetByIdAlert;
}

export interface ProductCategoryResponseWihoutCountryDto {
  /**
   * Product category ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_category_id: string;
  /**
   * Product category name
   * @example "Category 1"
   */
  name: string;
  /**
   * Type of the product category
   * @example "physical"
   */
  type: PRODUCT_TYPE;
  /**
   * Indicates if the category is default
   * @example false
   */
  is_default: boolean;
  /**
   * User ID of the owner
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  user_id: string;
  /**
   * Parent category ID
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  parent_id: string | null;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
}

export interface GetByIdAlertResponseDto {
  alert: GetByIdAlert;
  alert_product?: ProductAlertResponseDto[];
  alert_category?: ProductCategoryResponseWihoutCountryDto[];
}

export interface UpdateAlertResponseDto {
  alert: GetByIdAlert;
}

export interface GetAlerPublictProductResponse {
  /** Alert Product Id */
  alert_product_id: string;
  /** Alert Id */
  alert_id: string;
  /** Product Id */
  product_id: string;
  user_id: string;
  /** User */
  user?: UserResponseDto;
  /** Product */
  product?: AlertProductResponseWithoutSuggestCategory | null;
  /** Alert */
  alert?: AlertResponseDto;
}

export interface GetAlertPublicProductResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  alerts: GetAlerPublictProductResponse[];
}

export interface AlertResponseWithRelationDto {
  alert_id: string;
  title: string;
  content: string;
  type: ALERT_TYPE;
  position: ALERT_POSITION;
  visible: ALERT_VISIBE;
  access: ALERT_ACCESS;
  status: ALERT_STATUS;
  priority: number;
  user_id: string;
  user?: UserResponseDto;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface GetAlertResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  alerts: AlertResponseWithRelationDto[];
}

export interface CreateAlertDto {
  /** Title */
  title: string;
  /** Content */
  content: string;
  /** Type */
  type: ALERT_TYPE;
  /** Position */
  position: ALERT_POSITION;
  /** Visible */
  visible: ALERT_VISIBE;
  /** Access */
  access: ALERT_ACCESS;
  /** Status */
  status: ALERT_STATUS;
  /** Priority */
  priority: number;
  /** ProductId */
  product_ids: string[];
  /** CategoryId */
  category_ids: string[];
}

export interface UpdateAlertDto {
  /** Title */
  title?: string;
  /** Content */
  content?: string;
  /** Type */
  type?: ALERT_TYPE;
  /** Position */
  position?: ALERT_POSITION;
  /** Visible */
  visible?: ALERT_VISIBE;
  /** Access */
  access?: ALERT_ACCESS;
  /** Status */
  status?: ALERT_STATUS;
  /** Priority */
  priority?: number;
  /** ProductId */
  product_ids?: string[];
  /** CategoryId */
  category_ids?: string[];
}

export interface ContactUsStatResponseDto {
  /** All */
  all: number;
  /** All */
  allPending: number;
  /** To Day Pending */
  todayPending: number;
  /** To Day Checked */
  todayChecked: number;
  /** To Day Checking */
  todayChecking: number;
  /** To Day Checking */
  todayAll: number;
}

export interface CommentStatResponseDto {
  /** All Comments */
  allComments: number;
  /** All To Day Comments */
  allTodayComments: number;
  /** All Approve */
  allApprove: number;
  /** All Pending */
  allPending: number;
  /** To Day Pending */
  todayPending: number;
  /** To Day Approve */
  todayApprove: number;
  /** To Day Denied */
  todayDenied: number;
  onTodayPending: number;
  onTodayApprove: number;
  onTodayDenied: number;
}

export interface UserStatMonthResponseDto {
  user_statistic_id: string;
  /** Count */
  count: number;
  /** Date */
  date: number;
  /** type */
  type: string;
  /** Month */
  month?: number;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
}

export interface UserStatResponseDto {
  /** All */
  all: number;
  /** To Day */
  today: number;
  /** Months */
  months: UserStatMonthResponseDto[];
}

export interface OrderWihtUserRelatedResponseDto {
  order_id: string;
  /** @format date-time */
  timer_started_at?: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  tracker: UserForAdminResponseDto | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
  /** Order status id */
  status_id: string;
  user: UserResponseDto;
  transaction: OrderTransactionDetailsDto;
}

export interface OrderStatResponseDto {
  allUnderReview: number;
  allCountryBaseToday: number;
  allPersonalInfoToday: number;
  all: number;
  today: number;
  allProgressToday: number;
  lastOrders: OrderWihtUserRelatedResponseDto[];
}

export interface OrderStatisticsResponseDto {
  order_statistic_id: string;
  day: number;
  week: number;
  month: string;
  type: string;
  status: string;
  country: CountryResponseDto;
  count: number;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export enum APPLEID_STAT_TYPE {
  Charge = "charge",
  Deduct = "deduct",
}

export interface AppleIdStatisticResponseDto {
  appleid_statistic_id: string;
  country: CountryResponseDto;
  country_id: string;
  count: number;
  type: APPLEID_STAT_TYPE;
  is_deleted?: boolean;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface AppleIdStatResponseDto {
  appleIDStatistics: AppleIdStatisticResponseDto[];
}

export interface PaymentResponseForInvoiceStatDto {
  order_id: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status id */
  status_id: string;
  product: ProductInOrderDto;
  transaction: OrderTransactionDetailsDto;
  user: UserForAdminResponseDto | null;
}

export interface InvoiceStatStatResponseDto {
  invoiceStatistics: PaymentResponseForInvoiceStatDto[];
}

export interface DashboardStatResponseDto {
  todayContactus: number;
  todaySales: number;
  appleidBalance: AppleIdStatisticResponseDto[];
  orders: OrderStatisticsResponseDto[];
}

export interface OrderWihtoutRelatedResponseDto {
  order_id: string;
  /** @format date-time */
  timer_started_at?: string;
  order_hash: string;
  user_id: string;
  product_id: string;
  transaction_id: string;
  is_follow_up: boolean;
  tracker_id: string | null;
  tracker: UserForAdminResponseDto | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  /** Order status */
  status: OrderStatusDto;
  /** Order status id */
  status_id: string;
  transaction: OrderTransactionDetailsDto;
}

export interface TransactionWithRelationResponseDto {
  /**
   * Transaction ID
   * @example "673250cabe84492502bc0d03"
   */
  transaction_id: string;
  /**
   * Attachment ID
   * @example "673250cabe84492502bc0d03"
   */
  attachment_id: string;
  /**
   * Transaction amount
   * @example 10000
   */
  amount: number;
  /** Offer code */
  offer_code: string | null;
  /**
   * User ip
   * @example "127.0.0.01"
   */
  ip: string | null;
  /** Offer value */
  offer_value: number | null;
  /** Reward type */
  reward_type: string | null;
  /**
   * Payment amount
   * @example 10000
   */
  payment_amount: number;
  /**
   * Transaction status
   * @example 1
   */
  status: TransactionWithRelationResponseDtoStatusEnum;
  /**
   * Phone number
   * @example "1234567890"
   */
  phone: string;
  /**
   * Transaction description
   * @example "test"
   */
  description: string | null;
  /**
   * Transaction creation timestamp
   * @format date-time
   * @example "2024-11-11T18:45:30.103Z"
   */
  created_at: string;
  /**
   * Transaction update timestamp
   * @format date-time
   * @example "2024-11-11T18:45:30.103Z"
   */
  updated_at: string;
  product_count: number | null;
  bonus: number;
  product_id: string | null;
  charge_id: string | null;
  user_id: string | null;
  /** @format date-time */
  verified_at: string | null;
  product_price: number;
  name: string;
  family: string;
  cause: string;
  gateway: string;
  orders?: OrderHashEntityResponseDto[];
  ipg_transaction: IpgTransactionForGatewayDto;
  product: ProductResponseDto;
  user: UserResponseDto;
}

export interface AppleIdStatUSACountResponseDto {
  usa: number;
  others: number;
  /** Count of assignable Apple IDs */
  assignable: number;
  /** Count of non-assignable Apple IDs */
  non_assignable: number;
}

export interface OrderStatFieldsDto {
  count: number;
  week: number;
  month: number;
}

export interface OrderStatListResponseDto {
  orders: OrderStatFieldsDto[];
}

export interface OrderStatStatusCount {
  unpaid?: number;
  online_payment?: number;
  transfer_to_wallet?: number;
  canceled?: number;
  archived?: number;
  customer_no_response?: number;
  incorrect_info?: number;
  ready_for_delivery?: number;
  in_progress?: number;
  completed?: number;
  under_review?: number;
  get_info?: number;
}

export interface TimerOrderStatResponseDto {
  total_seconds: number;
  avrg_seconds: number;
  count_record: number;
  max_second: number;
  min_second: number;
}

export interface TimerUserStatResponseDto {
  total_seconds: number;
  avrg_seconds: number;
  count_record: number;
  max_second: number;
  min_second: number;
  total_today_seconds: number;
}

export interface TimerProductStatResponseDto {
  total_seconds: number;
  avrg_seconds: number;
  count_record: number;
  max_second: number;
  min_second: number;
  total_today_seconds: number;
}

export interface TimerProductCategoryStatResponseDto {
  total_seconds: number;
  avrg_seconds: number;
  count_record: number;
  max_second: number;
  min_second: number;
  total_today_seconds: number;
}

export interface SumChartResponseDto {
  payment_amount: number;
  product_count: number;
}

export interface UserChartResponseDto {
  /**
   * Unique identifier for the user
   * @example "679fd4fcf4ce7a4866dedd24"
   */
  user_id: string;
  /**
   * Phone number of the user
   * @example "09031641383"
   */
  phone_number: string;
  /**
   * User’s first name
   * @example "doe"
   */
  name: string;
  /**
   * User’s last name
   * @example "john"
   */
  family: string;
  /**
   * User’s email address (null if not provided)
   * @example null
   */
  email: string;
  /** User’s ip address (null if not provided) */
  ip: string | null;
  /**
   * User’s avatar (null if not set)
   * @example null
   */
  avatar: object;
  /**
   * Indicates whether the user account is active
   * @example true
   */
  is_active: boolean;
  /**
   * Indicates whether the user account is ban
   * @example true
   */
  is_ban: boolean;
  /**
   * Timestamp of user account creation
   * @format date-time
   * @example "2025-02-02T20:26:36.103Z"
   */
  created_at: string;
  /**
   * Timestamp of last update on user account
   * @format date-time
   * @example "2025-02-20T10:30:27.613Z"
   */
  updated_at: string;
  /** @format date-time */
  email_verified_at?: string | null;
  password?: string | null;
  avatar_id?: string | null;
  role_id?: string | null;
}

export interface ProductChartResponseDto {
  form_product?: FormProductDto[];
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
}

export interface ProductCategoryChartResponseDto {
  /**
   * Product category ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_category_id: string;
  /**
   * Product category name
   * @example "Category 1"
   */
  name: string;
  /**
   * Type of the product category
   * @example "physical"
   */
  type: PRODUCT_TYPE;
  /**
   * Indicates if the category is default
   * @example false
   */
  is_default: boolean;
  /**
   * User ID of the owner
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  user_id: string;
  /**
   * Parent category ID
   * @example "617a5f62b77c5b2a1e5fbc5d"
   */
  parent_id: string | null;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
}

export interface ChartItemDto {
  user_id?: string;
  category_id?: string;
  product_id?: string;
  _sum: SumChartResponseDto;
  user?: UserChartResponseDto;
  product?: ProductChartResponseDto;
  category?: ProductCategoryChartResponseDto;
}

export interface ChartResponseDto {
  chart: ChartItemDto[];
}

export interface ProductSalesDto {
  product_id: string;
  product_title: string;
  total_sales: number;
  percentage?: number;
}

export interface TypeAmountCountDto {
  type: string;
  product_title: string;
  count: number;
  amount: number;
}

export interface WeeklySalesDto {
  date: string;
  total: number;
}

export interface WeekGroupDto {
  weekNumber: number;
  start: string;
  end: string;
  salesCount: number;
}

export interface TopCustomerDto {
  type: string;
  count: number;
  amount: number;
  full_name: string;
}

export interface DashboardStatsResponseDto {
  topSalengProducts: ProductSalesDto[];
  lowSalengProducts: TypeAmountCountDto[];
  topCustomers: TopCustomerDto[];
  productMonthly: ProductSalesDto[];
  weeklySales: WeeklySalesDto[];
  monthGroupWeek: WeekGroupDto[];
}

export interface TimerDashProductFieldStatResponseDto {
  title: string;
  file_id: string;
  order_count: number;
}

export interface TimerDashUserFieldStatResponseDto {
  name: string;
  family: string;
  avatar_id: string;
  order_count: number;
}

export interface TimerAvgInWeekStatResponseDto {
  /** @format date-time */
  day: string;
  averageSeconds: number;
  count: number;
}

export interface TimerToDayHoureResponseDto {
  /** @format date-time */
  block: string;
  averageSeconds: number;
  count: number;
}

export interface TimerDashProductStatResponseDto {
  avg: number;
  count: number;
  max: number;
  min: number;
  id: string;
  product: TimerDashProductFieldStatResponseDto;
}

export interface TimerDashUserStatResponseDto {
  avg: number;
  count: number;
  max: number;
  min: number;
  id: string;
  user: TimerDashUserFieldStatResponseDto;
}

export interface TimerDashboardStatResponseDto {
  fastProductsInWeek: TimerDashProductStatResponseDto[];
  fastProducts: TimerDashProductStatResponseDto[];
  slowProducts: TimerDashProductStatResponseDto[];
  fastAdmins: TimerDashUserStatResponseDto[];
  fastAdminsInWeek: TimerDashUserStatResponseDto[];
  avgCurrentWeek: TimerAvgInWeekStatResponseDto[];
  todyHoure: TimerToDayHoureResponseDto[];
}

export interface TimerUserStatByIdsResponseDto {
  user_id: string;
  min: number;
  max: number;
}

export interface TimerProductStatByIdsResponseDto {
  product_id: string;
  min: number;
  max: number;
}

export interface TimerStatByIdsResponseDto {
  users: TimerUserStatByIdsResponseDto[];
  products: TimerProductStatByIdsResponseDto[];
}

export interface TimerDashboardFilterResponseDto {
  fastProducts: TimerDashProductStatResponseDto[];
  slowProducts: TimerDashProductStatResponseDto[];
  fastAdmins: TimerDashUserStatResponseDto[];
}

export interface WeekAvgChartDto {
  week: number;
  avgSeconds: number;
}

export interface TimerDashboardStatChartResponseDto {
  currentMonth: WeekAvgChartDto[];
  prevMonth: WeekAvgChartDto[];
}

export enum GroupByFields {
  ProductId = "product_id",
  CategoryId = "category_id",
  UserId = "user_id",
}

export enum OrderBy {
  PaymentAmount = "payment_amount",
  ProductCount = "product_count",
}

export enum TimerDashboardFilterType {
  Today = "today",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}

export enum TimerLogGroupByFields {
  ProductId = "product_id",
  ProductCategoryId = "product_category_id",
  UserId = "user_id",
  OrderId = "order_id",
}

export enum TimerLogOrderBy {
  Seconds = "seconds",
}

export interface ProductStateSellingDto {
  count: number;
  amount: number;
  type: string;
  product_title: string;
}

export interface SearchResponseProductDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  products: ProductResponseDto[];
}

export interface SearchProductCategoryDto {
  name: string;
}

export interface SearchProductDto {
  /**
   * Page number
   * @default 1
   */
  page?: number;
  /** Number of items per page */
  limit?: number;
  /** Title */
  text?: string;
}

export interface SearchOrderDto {
  user_id: string;
  product: SearchProductDto;
  product_name: string;
  product_category: string;
}

export interface SearchUserStatsDto {
  count: number;
  amount: number;
  type: string;
  full_name: string;
}

export interface SearchUserDto {
  user_id: string;
  phone_number: string;
  name: string;
  family: string;
  email: string;
  is_ban: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  user: SearchUserStatsDto;
  orders: SearchOrderDto[];
}

export interface SearchUserSellingResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  users: SearchUserDto[];
}

export interface ProductStatsDto {
  count: number;
  amount: number;
  type: string;
}

export interface ProductItemDto {
  /**
   * Product ID
   * @example "67728a9897e3bdeada0153bf"
   */
  product_id: string;
  /**
   * Product title
   * @example "اپل‌آی‌دی عمده"
   */
  title: string;
  /**
   * Is auth slug
   * @example false
   */
  is_auto_slug: boolean;
  /**
   * Product image alt
   * @example "اپل‌آی‌دی عمده"
   */
  img_alt: string | null;
  /**
   * Product description
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  description: string;
  /**
   * Product slug
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  slug: string;
  /**
   * Product summary
   * @example "حداقل ۱۰ عدد ، فوری"
   */
  summary?: string | null;
  /**
   * Product file URL
   * @example "67728a9897e3bdeada0153bf"
   */
  file_id: string;
  /**
   * User ID
   * @example "67728a9897e3bdeada0153bf"
   */
  user_id: string;
  /**
   * Category ID
   * @example "67e2c5ae78bf64d0b0df1901"
   */
  category_id: string;
  /**
   * Product count
   * @example 10
   */
  count: number;
  /**
   * Product max per order
   * @example 10
   */
  max_per_order?: number;
  /**
   * Product features
   * @example "<h3>ایمیل اکانت</h3>
   * <p>ساخته شده با ایمیل معتبر به نام شما</p>
   *
   * <h3>وریفای</h3>
   * <p>وریفای شده امریکا</p>
   *
   * <h3>اطلاعات اکانت</h3>
   * <p>ایجاد اکانت با اطلاعات شخصی شما</p>
   *
   * <h3>تعویض پسورد</h3>
   * <p>قابلیت تعویض پسورد و سوالات امنیتی</p>
   * "
   */
  features: string;
  /**
   * Product price
   * @example 1100000
   */
  price: number;
  /**
   * Product delivery time
   * @example 45
   */
  delivery_time: number;
  is_deleted: boolean;
  /** @format date-time */
  deleted_at?: string;
  /**
   * Creation timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  created_at: string;
  /**
   * Update timestamp
   * @format date-time
   * @example "2024-12-30T11:57:12.482Z"
   */
  updated_at: string;
  category: ProductCategoryWithChildsResponseDto | null;
  product: ProductStatsDto;
}

export interface SearchProductSellingResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  products: ProductItemDto[];
  getProducts: ProductStateSellingDto[];
}

export interface TagResponseWithRelationDto {
  /**
   * Unique identifier for the tag
   * @example "67742018b8087c262c1d12f2"
   */
  tag_id: string;
  /**
   * Name of the tag
   * @example "tag-1"
   */
  name: string;
  /**
   * Status of the tag
   * @example "active"
   */
  status: string;
  /** Details of the user associated with the tag */
  user: UserResponseDto;
  /**
   * Unique identifier for the user associated with the tag
   * @example "6773f301808c1242cc1f94cf"
   */
  user_id: string;
  /**
   * Array of post tags associated with the tag
   * @example []
   */
  post_tag: string[];
  /**
   * Creation timestamp of the tag
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  created_at: string;
  /**
   * Last update timestamp of the tag
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  updated_at: string;
}

export interface GetTagResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  tags: TagResponseWithRelationDto[];
}

export interface CreateTagResponseDto {
  tag: TagResponseWithRelationDto;
}

export interface TagResponseDto {
  /**
   * Unique identifier for the tag
   * @example "67742018b8087c262c1d12f2"
   */
  tag_id: string;
  /**
   * Name of the tag
   * @example "tag-1"
   */
  name: string;
  /**
   * Status of the tag
   * @example "active"
   */
  status: string;
  /**
   * Unique identifier for the user associated with the tag
   * @example "6773f301808c1242cc1f94cf"
   */
  user_id: string;
  /**
   * Array of post tags associated with the tag
   * @example []
   */
  post_tag: string[];
  /**
   * Creation timestamp of the tag
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  created_at: string;
  /**
   * Last update timestamp of the tag
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  updated_at: string;
}

export interface UpdateTagResponseDto {
  tag: TagResponseDto;
}

export interface DeleteTagResponseDto {
  tag: TagResponseWithRelationDto;
}

export interface GetTagByIdResponseDto {
  tag: TagResponseWithRelationDto;
}

export enum TAG_STATUS {
  Active = "active",
  DeActive = "deActive",
}

export interface CreateTagDto {
  /** Name */
  name: string;
  /** Status */
  status: TAG_STATUS;
}

export interface UpdateTagDto {
  /** Name */
  name?: string;
  /** Status */
  status?: TAG_STATUS;
}

export interface CountryResponseWithRelationDto {
  /**
   * Unique identifier for the tag
   * @example "67742018b8087c262c1d12f2"
   */
  country_id: string;
  /**
   * Name of the country
   * @example "Iran"
   */
  name: string;
  /**
   * Stat of the country
   * @example "Iran"
   */
  state: string;
  /**
   * Status of the country
   * @example "image-url"
   */
  flag_id: string;
  /**
   * Code of the country
   * @example "IR"
   */
  code: string;
  /**
   * Status of the country
   * @example "title"
   */
  title: string;
  /** Details of the user associated with the country */
  user: UserResponseDto;
  /**
   * Unique identifier for the user associated with the country
   * @example "6773f301808c1242cc1f94cf"
   */
  user_id: string;
  country_question?: CountrySecurityQuestionDto[] | null;
  /**
   * Creation timestamp of the country
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  created_at: string;
  /**
   * Last update timestamp of the country
   * @format date-time
   * @example "2024-12-31T16:47:20.538Z"
   */
  updated_at: string;
}

export interface GetDetailCountryResponseDto {
  country: CountryResponseWithRelationDto;
}

export interface GetCountryResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  countries: CountryResponseWithRelationDto[];
}

export interface CreateCountryResponseDto {
  country: CountryResponseWithRelationDto;
}

export interface DeleteCountryResponseDto {
  country: CountryResponseWithRelationDto;
}

export interface CreateCountryQuestionDto {
  /** Question Ids */
  question_ids: string[];
  /** Title */
  title: string;
}

export interface DeleteCountryQuestionDto {
  /** Title */
  title: string;
}

export interface UpdateCountryResponseDto {
  country: CountryResponseWithRelationDto;
}

export interface CreateCountryDto {
  /** State */
  state?: string | null;
  /** Country */
  name: APPLEID_COUNTRY;
  /** Title */
  title: string;
  /** flag id */
  flag_id?: string;
  /** Code */
  code?: string;
}

export interface UpdateCountryDto {
  /** State */
  state?: string | null;
  /** Country */
  name?: APPLEID_COUNTRY;
  /** Title */
  title?: string;
  /** flag id */
  flag_id?: string;
  /** Code */
  code?: string;
}

export interface UpdateCountryQuestionDto {
  /** Question Ids */
  question_ids: string[];
  /** Title */
  new_title: string;
}

export interface GetOfferResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  offers: OfferResponseDto[];
}

export interface CategoryCountResponseDto {
  count: number;
}

export interface CreateOfferResponseDto {
  offer: OfferResponseDto;
  products?: ProductCountResponseDto;
  categories?: CategoryCountResponseDto;
}

export interface OfferResponseWithProductIds {
  offer_id: string;
  title: string;
  code: string;
  value: number;
  /** @format date-time */
  start: string;
  /** @format date-time */
  end: string;
  is_percentage: boolean;
  is_active: boolean;
  is_auto: boolean;
  type: OFFER_TYPE;
  reward: REWARD_TYPE;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  offer_product: string[];
  offer_category: string[];
}

export interface GetOneOfferResponseDto {
  offer: OfferResponseWithProductIds;
}

export interface GetByCodeOfferResponseDto {
  type: REWARD_TYPE;
  actual_price: number;
  payment_price: number;
  offer_value: number;
  offer_reward: number;
}

export interface UpdateOfferResponseDto {
  offer: OfferResponseDto;
  products?: ProductCountResponseDto;
  categories?: CategoryCountResponseDto;
}

export interface DeleteOfferResponseDto {
  offer: OfferResponseDto;
  products?: ProductCountResponseDto;
  categories?: CategoryCountResponseDto;
}

export interface GetOneOfferWithoutProductIdsResponseDto {
  offer: OfferResponseDto;
}

/** Type */
export enum TYPE_QUERY_VALIDATION {
  Specific = "specific",
  Group = "group",
}

export interface CreateOfferDto {
  /** Is Auto */
  is_auto: boolean;
  /** Code */
  code: string;
  /** Title */
  title: string;
  /** Type */
  type: TYPE_QUERY_VALIDATION;
  /**
   * Start Date
   * @format date-time
   */
  start: string;
  /**
   * End Date
   * @format date-time
   */
  end: string;
  /** Is Percentage */
  is_percentage: boolean;
  /** Is Active */
  is_active: boolean;
  /** Value */
  value: number;
  /** Products */
  product_ids: string[];
  /** Categories */
  category_ids: string[];
}

export interface UpdateOfferDto {
  /** Is Auto */
  is_auto?: boolean;
  /** Code */
  code?: string;
  /** Title */
  title?: string;
  /** Type */
  type?: TYPE_QUERY_VALIDATION;
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
  /** Is Percentage */
  is_percentage?: boolean;
  /** Is Active */
  is_active?: boolean;
  /** Value */
  value?: number;
  /** Products */
  product_ids: string[];
  /** Categories */
  category_ids: string[];
}

export interface FileResponseDto {
  /**
   * File Id
   * @example "67e2c5af78bf64d0b0df1920"
   */
  file_id: string;
  /** Name */
  name: string;
  /** Type */
  type: string;
  /** Mime Type */
  mime: string;
  /** Size */
  size: number;
  /** Path */
  path: string;
  /** Meta Data */
  meta: object;
  /**
   * User Id
   * @example "67e2c5ae78bf64d0b0df18fe"
   */
  user_id: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
}

export interface GalleryResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  files: FileResponseDto[];
}

export interface DeleteFileResponseDto {
  /**
   * File Id
   * @example "67e2c5af78bf64d0b0df1920"
   */
  file_id: string;
  /** Name */
  name: string;
  /** Type */
  type: string;
  /** Mime Type */
  mime: string;
  /** Size */
  size: number;
  /** Path */
  path: string;
  /** Meta Data */
  meta: object;
  /**
   * User Id
   * @example "67e2c5ae78bf64d0b0df18fe"
   */
  user_id: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
}

export interface UploadFileResponseDto {
  /**
   * File Id
   * @example "67e2c5af78bf64d0b0df1920"
   */
  file_id: string;
  /** Name */
  name: string;
  /** Type */
  type: string;
  /** Mime Type */
  mime: string;
  /** Size */
  size: number;
  /** Path */
  path: string;
  /** Meta Data */
  meta: object;
  /**
   * User Id
   * @example "67e2c5ae78bf64d0b0df18fe"
   */
  user_id: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
}

/** File Type */
export enum FILE_TYPE {
  Product = "product",
  Avatar = "avatar",
  AppleId = "apple_id",
  AppleIdExcel = "apple_id_excel",
  Setting = "setting",
  Flag = "flag",
  Blog = "blog",
  IpgGateway = "ipg_gateway",
}

export interface UploadFileDto {
  /** File Type */
  type: FILE_TYPE;
  /**
   * File
   * @format binary
   */
  file: File;
}

export enum FileQueryType {
  FileId = "file_id",
  Name = "name",
}

export interface SettingEntityWithRelationDto {
  setting_id: string;
  key: string;
  value: object;
  owner_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  owner: UserResponseDto;
}

export interface GetListSettingResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  settings: SettingEntityWithRelationDto[];
}

export interface CreateSettingResponseDto {
  setting_id: string;
  key: string;
  owner_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  value: string;
}

export interface GetSettingDetailResponseDto {
  setting_id: string;
  key: string;
  value: object;
  owner_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  owner: UserResponseDto;
}

export interface UpdateSettingResponseDto {
  setting_id: string;
  key: string;
  owner_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  value: string;
}

export interface DeleteSettingResponseDto {
  setting_id: string;
  key: string;
  owner_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  value: string;
}

export interface SettingEntityResponseDto {
  setting_id: string;
  key: string;
  value: object;
  owner_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export enum SETTING_TYPE {
  GeneralSetting = "general_setting",
  Seo = "seo",
}

export interface CreateSettingDto {
  /** Key */
  key: string;
  /** Value */
  value: object;
  /** type */
  type: SETTING_TYPE;
}

export interface UpdateSettingDto {
  /** Key */
  key?: string;
  /** Value */
  value?: object;
  /** type */
  type?: SETTING_TYPE;
}

export interface JsonSeoResponseDto {
  id: string;
  /** @format date-time */
  created_at: string;
  slug: string;
  type: string;
}

export enum RSS_FILE_NAME {
  ProductXml = "product.xml",
  BlogXml = "blog.xml",
}

export interface ElementDto {
  element_id: string;
  name: string;
  description: string;
  file_id?: string;
  type: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export enum FORM_CONTENT_HEADING_TYPE {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export enum FORM_TAB_ROW_CONTENT_TYPE {
  Text = "text",
  Title = "title",
  Alert = "alert",
  Link = "link",
}

export enum FORM_TAB_ROW_CONTENT_ALERT_TYPE {
  Info = "info",
  Success = "success",
  Warning = "warning",
  Error = "error",
}

export interface CreateTabRowElementOptions {
  /** name */
  name: string;
  /** value */
  value: string;
}

export interface CreateTabRowElement {
  /** element_id */
  element_id: string;
  /** placeholder */
  placeholder?: string;
  /** title */
  title?: string;
  /** example */
  example?: string;
  /** is optional */
  is_optional?: boolean;
  /** max length */
  max_length?: number;
  /** min_length */
  min_length?: number;
  content?: string;
  content_heading_type?: FORM_CONTENT_HEADING_TYPE;
  content_type?: FORM_TAB_ROW_CONTENT_TYPE;
  alert_type?: FORM_TAB_ROW_CONTENT_ALERT_TYPE;
  /** options */
  options?: CreateTabRowElementOptions[];
}

export interface CreateTabRow {
  /** division column */
  division: number;
  elements: CreateTabRowElement[];
}

export interface CreateTabRowElementAlert {
  /** type */
  type: FORM_TAB_ROW_CONTENT_TYPE;
  /** text */
  text: string;
}

/** type */
export enum FORM_TAB_ROW_CONTENT_SIZE {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export interface CreateTabRowContent {
  /** type */
  type: FORM_TAB_ROW_CONTENT_TYPE;
  /** type */
  size?: FORM_TAB_ROW_CONTENT_SIZE;
  /** content */
  content: string;
  is_bold?: boolean;
  is_italic?: boolean;
  is_underline?: boolean;
}

export interface DisplayModeDto {
  pc?: CreateTabRow[];
  tablet?: CreateTabRow[];
  mobile?: CreateTabRow[];
}

export interface CreateFormTabs {
  display_mode: DisplayModeDto;
  /** tab name */
  name: string;
}

export type CreateFormRseponseDto = object;

export interface GetElementResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  elements: ElementDto[];
}

export interface CreateFormDto {
  /** name */
  name: string;
  tabs: CreateFormTabs[];
}

export interface FormTabRowContentDto {
  form_tab_row_id: string;
  row_id: string;
  content: string;
  type: string;
  is_italic: boolean;
  is_underline: boolean;
  is_bold: boolean;
  aling: string;
  size: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface FormTabRowElementSchemaDto {
  form_tab_row_element_id: string;
  row_id: string;
  element_id: string;
  placeholder: string;
  align: string;
  title: string;
  sort: number;
  example: string;
  is_optional: boolean;
  max_length: number;
  min_length: number;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_tabTab_id: string;
  form_element_alert: string[];
  form_element_option: string[];
}

export interface FormTabRowDto {
  row_id: string;
  form_id: string;
  tab_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_tab_row_element: FormTabRowElementSchemaDto[];
  form_tab_row_content: FormTabRowContentDto[];
}

export interface FormTabSchemaDto {
  form_formula_id: string;
  tab_id: string;
  form_id: string;
  column_count: number;
  display_mode: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_tab_row: FormTabRowDto[];
}

export interface FormSchemaDto {
  form_id: string;
  user_id: string;
  name: string;
  title: string;
  title_heading: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_tab: FormTabSchemaDto[];
  user: UserResponseDto;
}

export interface ElementMetaDto {
  element_id: string;
  name: string;
  description: string;
  mode: string;
  type: string;
  file_id: string | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface OptionElementDto {
  option_element_id: string;
  name: string;
  value: string;
}

export interface BaseElementDto {
  form_tab_row_element_id: string;
  row_id: string;
  element_id: string;
  is_input: boolean;
  input_placeholder: string | null;
  input_title: string | null;
  input_is_optional: boolean | null;
  input_max_length: number | null;
  input_min_length: number | null;
  content: string | null;
  content_heading_type: string | null;
  content_type: string | null;
  alert_type: string | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  element: ElementMetaDto;
  options?: OptionElementDto[];
  type: string;
}

export interface RowDto {
  division: number;
  items: BaseElementDto[];
}

export interface TabDto {
  tab_id: string;
  name: string;
  pc: RowDto[];
  tablet: RowDto[];
  mobile: RowDto[];
}

export interface FormDtoV2 {
  form_id: string;
  name: string;
  tabs: TabDto[];
}

export interface GetFormDetailResponseDto {
  form: FormDtoV2;
}

export interface ProductCategoryInProductFormResponseDto {
  name: string;
  product_category_id: string;
}

export interface ProductCategoryInFormCategoryResponseDto {
  form_category_id: string;
  form_id: string;
  product_category_id: string;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  product_category: ProductCategoryInProductFormResponseDto;
}

export interface CategoryInProductFormResponseDto {
  name: string;
}

export interface ProductInFormListResponseDto {
  title: string;
  product_id: string;
  category: CategoryInProductFormResponseDto;
}

export interface FormProductInFormListResponseDto {
  form_product_id: string;
  product_id: string;
  form_id: string;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  product: ProductInFormListResponseDto;
}

export interface FormWithProductResponseDto {
  form_id: string;
  user_id: string;
  name: string;
  title: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_category: ProductCategoryInFormCategoryResponseDto;
  form_product: FormProductInFormListResponseDto[];
}

export interface GetFormListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  forms: FormWithProductResponseDto[];
}

export interface AssignFormToProductResponseDto {
  affected_count: number;
  assigned_form_id: string;
  assigned_product_ids: string[];
  assigned_category_ids: string[];
}

export interface GetProductAssignedToFormResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  products: ProductAlertResponseDto[];
}

export interface SubmitFormElements {
  /** id */
  element_id: string;
  /** value */
  value: string;
}

export interface SubmitFormResponseDto {
  form_submission_id: string;
  form_id: string;
  product_id: string;
  tab_id: string;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface FormElementResponseDto {
  element_id: string;
  name: string;
  description: string;
  type: string;
  file_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface FormTabRowElementResponseDto {
  form_tab_row_element_id: string;
  row_id: string;
  element_id: string;
  placeholder: string;
  align: string;
  title: string;
  example: string;
  is_optional: string;
  max_length: string;
  min_length: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_tabTab_id: string;
  element: FormElementResponseDto;
}

export interface FormSubmissionResponsesValueDto {
  form_submssion_value_id: string;
  value: string;
  data_type: string;
  form_submission_id: string;
  form_tab_row_element_id: string;
  created_at: string;
  /** @format date-time */
  updated_at: string;
  form_tab_row_element: FormTabRowElementResponseDto;
}

export interface FormSubmissionResponseDto {
  form_submission_id: string;
  form_id: string;
  product_id: string;
  tab_id: string;
  user_id: string;
  responses: FormSubmissionResponsesValueDto[];
  product: ProductAlertResponseDto;
  user: UserResponseDto;
  created_at: string;
  updated_at: string;
}

export interface FormSubmissionListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  submissions: FormSubmissionResponseDto[];
}

export interface CheckAssignFormToProductResponseDto {
  product_ids: string[];
  category_ids: string[];
}

export interface GetCategoryAssignedToFormResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  categories: ProductCategoryWithChildsResponseDto[];
}

export interface UpdateFormDto {
  /** name */
  name: string;
  tabs: CreateFormTabs[];
}

export interface AssignFormToProductDto {
  /** product ids */
  product_ids?: string[];
  /** category ids */
  category_ids?: string[];
}

export interface SubmitFormValueDto {
  /** id */
  form_id: string;
  /** id */
  product_id: string;
  /** id */
  tab_id: string;
  /** display_mode_id */
  display_mode_id: string;
  /** elements */
  elements: SubmitFormElements[];
}

export interface FormulaDto {
  form_formula_id: string;
  user_id: string;
  name: string;
  round: string;
  product_field: string;
  expression: string;
  successful: string;
  fallback: string;
  deduct: number;
  is_general: boolean;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface CreateFormulaResponseDto {
  form_formula_id: string;
  user_id: string;
  name: string;
  round: string;
  product_field: string;
  expression: string;
  successful: string;
  fallback: string;
  deduct: number;
  is_general: boolean;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface GetFormulaListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  formulas: FormulaDto[];
}

export interface GetFormulaDetailResponseDto {
  form_formula_id: string;
  user_id: string;
  name: string;
  round: string;
  product_field: string;
  expression: string;
  successful: string;
  fallback: string;
  deduct: number;
  is_general: boolean;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface DeleteFormulaResponseDto {
  form_formula_id: string;
  user_id: string;
  name: string;
  round: string;
  product_field: string;
  expression: string;
  successful: string;
  fallback: string;
  deduct: number;
  is_general: boolean;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface UpdateFormulaResponseDto {
  form_formula_id: string;
  user_id: string;
  name: string;
  round: string;
  product_field: string;
  expression: string;
  successful: string;
  fallback: string;
  deduct: number;
  is_general: boolean;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface AssingFormulaResponseDto {
  form_formula_tab: string;
  status: string;
  form_formula_id: string;
  form_tab_id: string;
  form_id: string;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface UpdateFormulaStatusResponseDto {
  count: number;
}

/** round type */
export enum FORMULA_ROUND_TYPE {
  Round = "round",
  Floor = "floor",
  Ceil = "ceil",
  Truncate = "truncate",
}

/** product fields */
export enum FORMULA_PRODUCT_FIELD {
  Price = "price",
}

export interface CreateFormulaDto {
  /** formula id */
  form_id?: string;
  /** formula id */
  tab_id?: string;
  /** element ids */
  element_ids?: string[];
  /** formula name */
  name: string;
  /** round type */
  round: FORMULA_ROUND_TYPE;
  /** product fields */
  product_field: FORMULA_PRODUCT_FIELD;
  /** formula */
  expression: string;
  /** formula */
  successful: string;
  /** formula */
  fallback: string;
  /** formula */
  deduct: number;
  /** is general */
  is_general: boolean;
}

export interface AssignFormulaToFormDto {
  /** form id */
  form_id: string;
  /** tab id */
  tab_id: string;
}

export enum FORM_FORMULA_TAB_STATUS {
  Active = "active",
  DeActive = "deActive",
}

export interface UpdateFormulaStatusDto {
  /** form id */
  form_id?: string;
  /** tab id */
  tab_id: string;
}

export interface UpdateFormulaBodyDto {
  /** element ids */
  element_ids?: string[];
  /** formula name */
  name?: string;
  /** round type */
  round?: FORMULA_ROUND_TYPE;
  /** product fields */
  product_field?: FORMULA_PRODUCT_FIELD;
  /** formula */
  expression?: string;
  /** formula */
  successful?: string;
  /** formula */
  fallback?: string;
  /** formula */
  deduct?: number;
  /** is general */
  is_general?: boolean;
}

export interface GetIpgGatewayOmitedResponseDto {
  /**
   * Primary key (MongoDB ObjectId) for the IPG gateway
   * @example "60d21b4667d0d8992e610c85"
   */
  ipg_gateway_id: string;
  /**
   * Logical gateway name (must be unique)
   * @example "paystar"
   */
  name: TRANSACTION_GATEWAY;
  /**
   * Tax percentage applied by this gateway
   * @example 0
   */
  tax: number;
  /**
   * Whether this gateway is currently active
   * @example true
   */
  active: boolean;
  /**
   * Whether this gateway is the default choice
   * @example false
   */
  is_default: boolean;
  /**
   * MongoDB ObjectId of the owning user
   * @example "60d21b4967d0d8992e610c86"
   */
  user_id: string;
  /**
   * Record creation timestamp
   * @format date-time
   * @example "2025-07-01T12:34:56.789Z"
   */
  created_at: string;
  /**
   * Last update timestamp
   * @format date-time
   * @example "2025-07-08T09:00:00.000Z"
   */
  updated_at: string;
}

export interface GetIpgGatewayListResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  gateways: GetIpgGatewayOmitedResponseDto[];
}

export interface IpgGatewayDto {
  /**
   * Primary key (MongoDB ObjectId) for the IPG gateway
   * @example "60d21b4667d0d8992e610c85"
   */
  ipg_gateway_id: string;
  /**
   * Logical gateway name (must be unique)
   * @example "paystar"
   */
  name: TRANSACTION_GATEWAY;
  /**
   * Tax percentage applied by this gateway
   * @example 0
   */
  tax: number;
  /**
   * Base URL for all gateway API calls
   * @example "https://api.paystar.shop/api/pardakht"
   */
  base_url: string;
  /**
   * Callback URL for payment verification
   * @example "https://appleaccount.me/api/v1/payment/verify"
   */
  callback_url: string;
  /**
   * External identifier assigned to this gateway
   * @example "gateway_12345"
   */
  gateway_id: string;
  /**
   * HMAC/signing key for securing requests
   * @example "s3cr3t-signing-key"
   */
  sign_key: string;
  /**
   * Whether this gateway is currently active
   * @example true
   */
  active: boolean;
  /**
   * Whether this gateway is the default choice
   * @example false
   */
  is_default: boolean;
  /**
   * MongoDB ObjectId of the owning user
   * @example "60d21b4967d0d8992e610c86"
   */
  user_id: string;
  /**
   * Record creation timestamp
   * @format date-time
   * @example "2025-07-01T12:34:56.789Z"
   */
  created_at: string;
  /**
   * Last update timestamp
   * @format date-time
   * @example "2025-07-08T09:00:00.000Z"
   */
  updated_at: string;
}

export interface GetIpgGatewayListDto {
  /**
   * Page number
   * @default 1
   */
  page?: number;
  /** Number of items per page */
  limit?: number;
}

export interface CreateIpgGatewayDto {
  /** Gateway name */
  name: TRANSACTION_GATEWAY;
  /** Tax rate as a float */
  tax: number;
  /** Merchant identifier */
  merchant_id?: string;
  /** Store identifier */
  store_id?: string;
  /** Base URL for the gateway */
  base_url: string;
  /** Callback URL for notifications */
  callback_url: string;
  /** Gateway identifier */
  gateway_id: string;
  /** Signing key for requests */
  sign_key: string;
  /** @default true */
  active?: boolean;
  /** @default false */
  is_default?: boolean;
  /** Logo file ID */
  logo_id?: string;
}

export interface UpdateIpgGatewayDto {
  /** Gateway name */
  name?: TRANSACTION_GATEWAY;
  /** Tax rate as a float */
  tax?: number;
  /** Merchant identifier */
  merchant_id?: string;
  /** Store identifier */
  store_id?: string;
  /** Base URL for the gateway */
  base_url?: string;
  /** Callback URL for notifications */
  callback_url?: string;
  /** Gateway identifier */
  gateway_id?: string;
  /** Signing key for requests */
  sign_key?: string;
  /** @default true */
  active?: boolean;
  /** @default false */
  is_default?: boolean;
  /** Logo file ID */
  logo_id?: string;
}

export interface CreateNotifierGatewayDataDto {
  /** field */
  field: string;
  /** value */
  value: string;
}

export interface NotifierGatewayResponseDto {
  notifier_gateway_id: string;
  name: string;
  guard_name: string;
  provider: string;
  status: string;
  sandbox: boolean;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface CreateNotifierGatewayResponseDto {
  notifier_gateway_id: string;
  name: string;
  guard_name: string;
  provider: string;
  status: string;
  sandbox: boolean;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface UpdateBodyNotifierGatewayResponseDto {
  notifier_gateway_id: string;
  name: string;
  guard_name: string;
  provider: string;
  status: string;
  sandbox: boolean;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface DeleteNotifierGatewayResponseDto {
  notifier_gateway_id: string;
  name: string;
  guard_name: string;
  provider: string;
  status: string;
  sandbox: boolean;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface GetListNotifierGatewayResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  notifiers: NotifierGatewayResponseDto[];
}

export interface GetDetailNotifierGatewayResponseDto {
  notifier_gateway_id: string;
  name: string;
  guard_name: string;
  provider: string;
  status: string;
  sandbox: boolean;
  user_id: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface CreateNotifierTemplateResponseDto {
  notifier_template_id: string;
  name: string;
  guard_name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface UpdateNotifierTemplateResponseDto {
  notifier_template_id: string;
  name: string;
  guard_name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface DeleteNotifierTemplateResponseDto {
  notifier_template_id: string;
  name: string;
  guard_name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface NotifierTemplateResponseDto {
  notifier_template_id: string;
  name: string;
  guard_name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface GetNotifierTemplateResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  templates: NotifierTemplateResponseDto[];
}

export interface GetDetailNotifierTemplateResponseDto {
  notifier_template_id: string;
  name: string;
  guard_name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

/** guard name */
export enum NOTIFIER_METHOD_NAME {
  Sms = "sms",
  Email = "email",
  PushNotification = "push_notification",
}

/** provider */
export enum NOTIFIER_GATEWAY_PROVIDER {
  Kavenegar = "kavenegar",
}

/** status */
export enum NOTIFIER_GATEWAY_STATUS {
  Active = "active",
  Inactive = "inactive",
}

export interface CreateNotifierGatewayDto {
  /** name */
  name: string;
  /** guard name */
  guard_name: NOTIFIER_METHOD_NAME;
  /** provider */
  provider: NOTIFIER_GATEWAY_PROVIDER;
  /** status */
  status: NOTIFIER_GATEWAY_STATUS;
  /** sandbox */
  sandbox: boolean;
  /** data */
  data: CreateNotifierGatewayDataDto[];
}

export interface UpdateBodyNotifierGatewayDto {
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
  /** data */
  data?: CreateNotifierGatewayDataDto[];
}

export interface CreateNotifierTemplateDto {
  /** name */
  name: string;
  /** guard name */
  guard_name: NOTIFIER_METHOD_NAME;
}

export interface UpdateBodyNotifierTemplateDto {
  /** name */
  name?: string;
  /** guard name */
  guard_name?: NOTIFIER_METHOD_NAME;
}

export interface NoticResponseDto {
  notic_id: string;
  user_id: string;
  admin_id: string;
  content: string;
  seen: boolean;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface NoticWithRelationResponseDto {
  notic_id: string;
  user_id: string;
  admin_id: string;
  content: string;
  seen: boolean;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  user: UserResponseDto;
  admin: UserResponseDto;
}

export interface CreateNoticResponseDto {
  notic: NoticResponseDto;
}

export interface GetListNoticResponseDto {
  /**
   * Number of items per page
   * @example 10
   */
  limit?: number;
  /**
   * Current page number
   * @example 1
   */
  page?: number;
  /**
   * Total number of items
   * @example 3
   */
  total?: number;
  /**
   * Total number of pages
   * @example 1
   */
  totalPages?: number;
  /**
   * Offset for pagination
   * @example 0
   */
  offset?: number;
  /**
   * Has next page
   * @example false
   */
  hasNextPage?: boolean;
  /**
   * Has previous page
   * @example false
   */
  hasPrevPage?: boolean;
  notics: NoticWithRelationResponseDto[];
}

export interface GetDetailNoticResponseDto {
  notic: NoticWithRelationResponseDto;
}

export interface UpdateNoticResponseDto {
  notic: NoticResponseDto;
}

export interface DeleteNoticResponseDto {
  notic: NoticResponseDto;
}

export interface UpdateNoticDto {
  /** content */
  content?: string;
  /** seen */
  seen?: boolean;
}

export interface BadRequestResponseDto {
  /** @example false */
  status: boolean;
  /** @example 400 */
  statusCode: number;
  /** @example {"message":[{"field":"field_name","errors":["field_name must be a number string"]}],"error":"Bad Request","statusCode":400} */
  errors: {
    message?: {
      /** @example "field_name" */
      field?: string;
      /** @example ["field_name must be a number string"] */
      errors?: string[];
    }[];
    /** @example "Bad Request" */
    error?: string;
    /** @example 400 */
    statusCode?: number;
  };
  /** @example "Sorry! something went wrong on our end, Please try again later" */
  message: string;
}

export interface UnauthorizedResponseDto {
  /** @example "لطفا ابتدا وارد شوید" */
  message: string;
  /** @example "Unauthorized" */
  error: string;
  /** @example 401 */
  statusCode: number;
}

export interface FrobiddenResponseDto {
  /** @example "شما اجازه دسترسی به این بخش را ندارید" */
  message: string;
  /** @example "Forbidden" */
  error: string;
  /** @example 403 */
  statusCode: number;
}

export interface ApiResponseDto {
  /** @example true */
  status: boolean;
  /** @example 200 */
  statusCode: number;
  /** @example "Operation successful" */
  message: string;
}

/**
 * Transaction status
 * @example 1
 */
export enum TransactionResponseDtoStatusEnum {
  Pending = "pending",
  Success = "success",
  Failed = "failed",
}

/**
 * Status of the Apple ID
 * @example "purchased"
 */
export enum CompleteOrderResponseDtoPurchaseStatusEnum {
  Purchased = "purchased",
  NotPurchased = "not_purchased",
}

/**
 * Type of the Apple ID
 * @example "personal_info"
 */
export enum CompleteOrderResponseDtoTypeEnum {
  PersonalInfo = "personal_info",
  NotActive = "not_active",
  CountryBased = "country_based",
  Card = "card",
}

export enum TimerRequestDtoStatusEnum {
  Pending = "pending",
  Approve = "approve",
  Denied = "denied",
}

export enum SetTimerRequestResponseDtoStatusEnum {
  Pending = "pending",
  Approve = "approve",
  Denied = "denied",
}

export enum GetTimerRequestDetailResponseDtoStatusEnum {
  Pending = "pending",
  Approve = "approve",
  Denied = "denied",
}

export enum UpdateTimerRequestResponseDtoStatusEnum {
  Pending = "pending",
  Approve = "approve",
  Denied = "denied",
}

/**
 * Transaction status
 * @example 1
 */
export enum TransactionWithRelationResponseDtoStatusEnum {
  Pending = "pending",
  Success = "success",
  Failed = "failed",
}

/** Apple ID type */
export enum AppleIdControllerGetAdminAppleIdsParamsTypeEnum {
  PersonalInfo = "personal_info",
  NotActive = "not_active",
  CountryBased = "country_based",
  Card = "card",
}

/** Purchase status */
export enum AppleIdControllerGetAdminAppleIdsParamsStatusEnum {
  Purchased = "purchased",
  NotPurchased = "not_purchased",
}
