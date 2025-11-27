export const createFileSrcById = (id: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/api/v1/file/file_id/${id}`;
};

export const extractFileIdBySrc = (src: string) => {
  return src.replace(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/file/file_id/`,
    "",
  );
};
