//you can put multiple action creators in this file because you're not exporting default

/**
 * ? this is not a named export. When you import your component, you have to use the following:
 * import {increment} from path
 */

import { REGISTER_USER, BID_NOW } from './types'


export const register_user = (n) => {
    
    return {
        type: REGISTER_USER,
        data: []
    }
};

export const bid_now = (n) => {
    
    return {
        type: BID_NOW,
        data: []
    }
};
