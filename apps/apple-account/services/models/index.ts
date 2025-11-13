import { PRODUCT_STATUS, SettingEntityWithRelationDto } from "../swagger/index";

export interface ApplicationQuestionDto {
  question: string;
  answer: string;
}

export interface OrderedAppleId {
  first_name: string | null;
  last_name: string | null;
  country: string;
  process_status: PRODUCT_STATUS;
  order_id: string;
  appleid: string;
  appleid_password: string;
  birth_date?: string;
  email_password?: string;
  questions: ApplicationQuestionDto[];
  estimated_completion_time: string;
}

export interface AppleIdsDto {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  offset: number;
  appleIds: {
    id: string;
    email: string;
    birthDay: string;
    category: string;
    paymentStatus: boolean;
  }[];
}

export interface FileUpdateResponse {
  file_id: "67f76fd3fd7d465246a40769";
  name: "12d001e1-81cd-475e-974c-8c6dc2ebd242_Screenshot 2025-03-13 095530.png";
  type: "avatar";
  mime: "image/png";
  size: 16547;
  path: "storage/uploads/12d001e1-81cd-475e-974c-8c6dc2ebd242_Screenshot 2025-03-13 095530.png";
  meta: null;
  user_id: "67f76faefd7d465246a40766";
  created_at: "2025-04-10T07:14:27.052Z";
  updated_at: "2025-04-10T07:14:27.052Z";
}

export const socials = [
  "instagram",
  "whatsapp",
  "telegram",
  "linkedin",
  "tiktok",
  "youtube",
  "twitter",
  "facebook",
] as const;
export interface SocialProps {
  active: boolean;
  id: string;
}

export type SocialDictionary = Partial<
  Record<(typeof socials)[number], SocialProps>
>;

export interface SettingEntityWithRelationDtoGeneric<TData>
  extends Omit<SettingEntityWithRelationDto, "value"> {
  value: TData;
}

export interface SocialResponse {
  order: number;
  title: string;
  link: string;
}

export interface SymbolResponse {
  title: string;
  script: string;
  // link: string;
  // image: string;
  // open: "tab" | "href";
  order: number;
}

export interface GeneralSettingsResponse {
  contactUsDescription: string;
  siteLogo: string;
  siteLogoLight: string;
}

export type ENamadResponse = {
  script: string;
};

export type SamanDehiResponse = {
  id: string;
  link: string;
  src: string;
};

export type GoftinoResponse = {
  i: string;
};
