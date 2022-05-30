import { configureStore} from '@reduxjs/toolkit';

import rootReducer from './_rootReducer';

export default configureStore({reducer: rootReducer});