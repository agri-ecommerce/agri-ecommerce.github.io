import { service as api } from './ServiceConfig';
import mock from '@/mockUp/mock-up.json';

export default {
  async getMasterCategoryGroup() {
    // const resp: any = await api.get('/getMasterCategoryGroup');
    const resp: any = mock.getMasterCategoryGroup;
    if (resp) {
      return resp;
    }
    return false;
  },
  async getMasterGroup() {
    // const resp: any = await api.get('/getMasterCategoryGroup');
    const resp: any = mock.getGroup;
    if (resp) {
      return resp;
    }
    return false;
  },
}