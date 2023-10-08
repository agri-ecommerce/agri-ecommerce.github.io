import { service as api } from './ServiceConfig';
import mock from '@/mockUp/mock-up.json';

export default {
  async getBasket() {
    // const resp: any = await api.get('/getMasterCategoryGroup');
    const resp: any = mock.getBasket;
    if (resp) {
      return resp;
    }
    return false;
  },
}