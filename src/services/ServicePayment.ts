import { service as api } from './ServiceConfig';
import mock from '@/mockUp/mock-up.json';

export default {
  async getPayment(saleOrderId: any) {
    // const resp: any = await api.get('/getPayment');
    const resp: any = mock.getPayment;
    if (resp) {
      return resp;
    }
    return false;
  },
}