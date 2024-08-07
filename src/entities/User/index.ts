export {
    userActions,
    userReducer,
} from './model/slice/userSlice';

export {
    getUserInited,
} from './model/selectors/getUserInited/getUserInited';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelector';

export {
    getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';

export type {
    UserSchema,
    User,
} from './model/types/user';

export { UserRole } from './model/consts/userConsts';
