import { service as api } from './ServiceConfig';
import mock from '@/mockUp/mock-up.json';

export default {
  async getBranches() {
    const resp: any = await api.get('/getBranches');
    // const resp: any = mock.getBranches;
    if (resp) {
      return resp;
    }
    return false;
  },
}