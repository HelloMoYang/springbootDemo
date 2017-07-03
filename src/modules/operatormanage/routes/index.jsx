import List from '../views/list'
import Edit from '../views/Edit'

import * as _ from 'lodash'

export default [
    {
        path: 'list',
        component: List
    }, {
        path: 'create',
        component: Edit
    }, {
        path: 'edit/:id',
        component: Edit
    }
]
