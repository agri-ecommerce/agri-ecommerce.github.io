export interface State {
    isLoggedIn: boolean;
    userId: string;
    email: string;
    displayName: string;
    isFilter: string;
  }
  
export const initialState: State = {
    isLoggedIn: false,
    userId: '',
    email: '',
    displayName: '',
    isFilter: '00',
  };
  