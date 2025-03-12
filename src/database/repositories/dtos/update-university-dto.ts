export type UpdateUniversity = {
  universityId: string;
  name: string;
  addressId?: string;
};

export type UpdateUniversityAddress = {
  universityId: string;
  addressId: string;
};
