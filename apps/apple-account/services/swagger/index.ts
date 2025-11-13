import { Metadata } from "next";
import { Api } from "./Api";
export * from "./data-contracts";
import { RequestParams } from "./http-client";

import {
  ENamadResponse,
  GeneralSettingsResponse,
  GoftinoResponse,
  SamanDehiResponse,
  SettingEntityWithRelationDtoGeneric,
  SocialDictionary,
  SymbolResponse,
} from "../models";
import _ from "lodash";
import { SETTING_TYPE } from "./data-contracts";

export class ApplicationApi extends Api {
  createPayment = async (token: string, gateway: string) => {
    if (typeof document === "undefined") return;

    if (gateway !== "paystar" && gateway !== "zibal") return;

    if (gateway === "zibal") {
      const form = document.createElement("form") as HTMLFormElement;
      form.method = "-POST";
      form.action = `https://gateway.zibal.ir/start/${token}`;
      document.body.appendChild(form);
      form.submit();
    }

    if (gateway === "paystar") {
      const form = document.createElement("form") as HTMLFormElement;
      form.method = "POST";
      form.action = "https://api.paystar.shop/api/pardakht/payment";

      const tokenInput = document.createElement("input");
      tokenInput.type = "hidden";
      tokenInput.name = "token";
      tokenInput.value = token;
      form.appendChild(tokenInput);
      document.body.appendChild(form);
      form.submit();
    }
  };

  getMetaDataByPage = async (page = "*"): Promise<Metadata> => {
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/v1/setting/detail?key=meta-data-page:${decodeURI(page)}`,
        {
          cache: "force-cache",
        }
      );

      if (!response.ok) return {};

      const data = await response.json();
      return data?.value as Metadata;
    } catch {
      return {};
    }
  };

  getSiteSetting = async () => {
    // general-settings
    // ^social-media-
    // ^symbol-management-
    // ^(general-settings|symbol-management|social-media)(.+)?
    const { settings } = await this.settingControllerGetSettingList({
      search_text: `^(general-settings|symbol-management|social-media)(.+)?`,
    });

    const generalSettings = _.filter(settings, (item) =>
      item?.key?.startsWith("general-settings")
    );

    const symbolManagement = _.filter(settings, (item) =>
      item.key?.startsWith("symbol-management")
    );

    // const socialMedia = _.filter(settings, item =>
    //   item.key?.startsWith('social-media')
    // ) as SettingEntityWithRelationDtoGeneric<SocialResponse>[];

    return {
      generalSettings,
      symbolManagement,
    };
  };

  getSocials = async () => {
    const key = "social-media";
    const response = await this.settingControllerGetSettingList(
      { search_text: key },
      {
        fetchOptions: {
          "no-error": true,
          "no-auth": true,
        },
      }
    );
    const result = response.settings.find((x) => x.key == key);
    return {
      ...result,
      value: result?.value as SocialDictionary,
    };
  };

  setSocials = async (value: SocialDictionary) => {
    const key = "social-media";
    const current = await this.getSocials();

    if (current && current?.setting_id)
      return this.settingControllerUpdateSetting(current.setting_id, {
        value,
      });

    return this.settingControllerCreateSetting({
      key,
      value,
      type: SETTING_TYPE.GeneralSetting,
    });
  };

  getSymbols = async (link?: string, params?: RequestParams) => {
    const result = await this.settingControllerGetSettingList(
      {
        search_text: `^symbol-management-${link || ""}`,
      },
      params
    );

    return result.settings as SettingEntityWithRelationDtoGeneric<SymbolResponse>[];
  };

  setSymbol = async (
    value: SymbolResponse,
    setting_id?: string,
    params?: RequestParams
  ) => {
    const { title } = value;
    const key = `symbol-management-${title}`;
    const symbols = await this.getSymbols();
    const current = symbols.find((x) => x.setting_id === setting_id);
    if (current)
      return this.settingControllerUpdateSetting(
        current.setting_id,
        {
          value,
          key,
        },
        params
      );
    else
      return this.settingControllerCreateSetting(
        { key, value, type: SETTING_TYPE.GeneralSetting },
        params
      );
  };

  getGeneralSetting = (params?: RequestParams) => {
    return this.settingControllerGetSettingById(
      { key: "general-settings" },
      params
    ) as Promise<SettingEntityWithRelationDtoGeneric<GeneralSettingsResponse>>;
  };

  setGeneralSetting = async (
    setting: string,
    value: GeneralSettingsResponse
  ) => {
    return this.settingControllerUpdateSetting(setting, {
      value,
    });
  };

  getAboutUs = () =>
    this.settingControllerGetSettingById(
      { key: "contact-us-content" },
      { fetchOptions: { "no-error": true } }
    ).catch(() => undefined) as Promise<
      SettingEntityWithRelationDtoGeneric<{ content: string }>
    >;

  setAboutUs = async (content: string) => {
    const current = await this.getAboutUs();

    if (!current)
      return await this.settingControllerCreateSetting({
        key: "contact-us-content",
        value: {
          content,
        },
        type: SETTING_TYPE.GeneralSetting,
      });

    return await this.settingControllerUpdateSetting(current.setting_id, {
      value: { content },
    });
  };

  getENamad = async (params?: RequestParams) => {
    const result = await this.settingControllerGetSettingList(
      {
        search_text: `^symbol-management-enamad`,
      },
      { fetchOptions: { "no-error": true }, ...params }
    );

    return result.settings[0] as
      | SettingEntityWithRelationDtoGeneric<ENamadResponse>
      | undefined;
  };

  setENamad = async (value: ENamadResponse, params?: RequestParams) => {
    const key = `symbol-management-enamad`;
    const current = await this.getENamad();
    if (current)
      return this.settingControllerUpdateSetting(
        current.setting_id,
        {
          value,
        },
        params
      );
    else
      return this.settingControllerCreateSetting(
        { key, value, type: SETTING_TYPE.GeneralSetting },
        params
      );
  };

  getSamanDehi = async (params?: RequestParams) => {
    const result = await this.settingControllerGetSettingList(
      {
        search_text: `^symbol-management-samandehi`,
      },
      { fetchOptions: { "no-error": true }, ...params }
    );

    return result.settings[0] as
      | SettingEntityWithRelationDtoGeneric<SamanDehiResponse>
      | undefined;
  };

  setSamanDehi = async (value: SamanDehiResponse, params?: RequestParams) => {
    const key = `symbol-management-samandehi`;
    const current = await this.getSamanDehi();
    if (current)
      return this.settingControllerUpdateSetting(
        current.setting_id,
        {
          value,
        },
        params
      );
    else
      return this.settingControllerCreateSetting(
        { key, value, type: SETTING_TYPE.GeneralSetting },
        params
      );
  };

  getGoftino = async (params?: RequestParams) => {
    const result = await this.settingControllerGetSettingList(
      {
        search_text: `^symbol-management-goftino`,
      },
      { fetchOptions: { "no-error": true }, ...params }
    );

    return result.settings[0] as
      | SettingEntityWithRelationDtoGeneric<GoftinoResponse>
      | undefined;
  };

  setGoftino = async (value: GoftinoResponse, params?: RequestParams) => {
    const key = `symbol-management-goftino`;
    const current = await this.getGoftino();
    if (current)
      return this.settingControllerUpdateSetting(
        current.setting_id,
        {
          value,
        },
        params
      );
    else
      return this.settingControllerCreateSetting(
        { key, value, type: SETTING_TYPE.GeneralSetting },
        params
      );
  };
}
