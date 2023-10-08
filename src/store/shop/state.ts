export interface State {
    isLoggedIn: boolean;
    userId: string;
    email: string;
    displayName: string;
    isFilter: number;
  }
  
export const initialState: State = {
    isLoggedIn: false,
    userId: '',
    email: '',
    displayName: '',
    isFilter: 0,
  };
  