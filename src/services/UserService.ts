import mock from '@/mockUp/mock-up.json';

export default {
    async signIn(phoneNumber: string, password: string) {
        // const resp: any = await api.get('/getMasterCategoryGroup');
        const resp: any[] = mock.getUser;
        // logic move to api
        const user = resp.find(u => u?.phoneNumber === phoneNumber && u?.password === password);
        if (user) {
            return user;
        }
        return false;
    }
}