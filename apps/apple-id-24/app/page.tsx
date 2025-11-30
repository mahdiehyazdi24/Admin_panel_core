"use client";

import { useForm } from "react-hook-form";
import { Form } from "../components/organisms";
import { Button } from "@repo/ui";
import { Icon } from "@repo/icons";
import { useRef, useState } from "react";

export default function Page() {
  const form = useForm();

  const [hasMore, setHasMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const submitHandler = (data: any) => {
    console.log("FORM DATA:", data);
  };

  return (
    <div className="p-8 max-w-xl mx-auto space-y-8 bg-white">
      <Form
        form={form}
        onSubmit={submitHandler}
        className="max-w-lg mx-auto p-5"
      >
        <Form.Title text="form test">
          <Form.Clear />
          <Form.Input
            name="username"
            label="نام کاربری"
            rules={{ required: "نام کاربری الزامی است" }}
          />

          <Form.NumericInput name="phone" label="شماره همراه" />

          <Form.GroupSelect
            name="category_ids"
            options={[
              { label: "React", value: "react" },
              { label: "Next.js", value: "next" },
              { label: "TypeScript", value: "ts" },
            ]}
            label={"دسته بندی ها"}
          />

          <Form.GridBoxMultiSelect
            options={[
              { label: "React", value: "react" },
              { label: "Next.js", value: "next" },
              { label: "TypeScript", value: "ts" },
            ]}
            loaderRef={loaderRef}
            hasMore={hasMore}
            name="categoryList"
          />

          <Form.File
            accept="image/*"
            name="avatar"
            renderTrigger={(e) => (
              <Button
                className="w-full gap-2"
                onClick={e.openFilePicker}
                variant="primary"
                outline
              >
                <Icon src="EditFramed" className="stroke-primary" />
                <div className="flex items-end gap-1">
                  {e.file?.name ? (
                    <p className="mx-auto max-w-[90%] truncate">
                      {e.file?.name}
                    </p>
                  ) : (
                    <>
                      <p>ویرایش</p>
                      <p className="hidden md:block">تصویر</p>
                    </>
                  )}
                </div>
              </Button>
            )}
          />

          <Form.UploadButton
            variant="primary"
            render={() => <p>آپلود آیکون</p>}
            name="image"
          />

          <Form.Textarea
            name="bio"
            label="بیوگرافی"
            rules={{ maxLength: 200 }}
          />

          <Form.Select
            name="gender"
            label="جنسیت"
            options={[
              { label: "مرد", value: "male" },
              { label: "زن", value: "female" },
            ]}
          />

          <Form.Switch name="active" label="وضعیت فعال" />

          <Form.Checkbox name="acceptRules" label="قوانین را قبول دارم" />

          <Form.CheckboxGroup
            name="skills"
            options={[
              { label: "React", value: "react" },
              { label: "Next.js", value: "next" },
              { label: "TypeScript", value: "ts" },
            ]}
          />

          <Form.Radio
            name="role"
            options={[
              { label: "ادمین", value: "admin" },
              { label: "کاربر", value: "user" },
            ]}
          />

          <Form.DatePicker name="date" label="تاریخ تولد" clear isGregorian />

          <Form.Submit label="ثبت فرم" />
        </Form.Title>
      </Form>
    </div>
  );
}
