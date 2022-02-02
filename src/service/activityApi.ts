import { ApiService } from "./api";

export const activityApi = {
  getActivity() {
    return ApiService.get("activity");
  },
};
