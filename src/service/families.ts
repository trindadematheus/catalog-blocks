import api from "./api";

type GetFamiliesData = {
  skip: number;
  take: number;
};

export async function getFamilies({ skip, take }: GetFamiliesData) {
  return await api.get(`/families`, { params: { skip, take } });
}
