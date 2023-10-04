import { service as api } from './ServiceConfig';
import mock from '@/mockUp/mock-up.json';

export default {
  async getBannerList() {
    // const resp: any = await api.get('/getMasterCategoryGroup');
    const resp: any = mock.getBanner;
    if (resp) {
      return resp;
    }
    return false;
  },
}