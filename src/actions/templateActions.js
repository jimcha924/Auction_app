//you can put multiple action creators in this file because you're not exporting default

/**
 * ? this is not a named export. When you import your component, you have to use the following:
 * import {increment} from path
 */

import {INCREMENT} from './types'

export const increment = (n) => {
    
    return {
        type: INCREMENT,
        data: n
    }
};
