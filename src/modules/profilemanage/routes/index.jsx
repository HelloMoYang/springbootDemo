import List from '../views/list';
import Export from '../views/export';
import Seek from '../views/seek';

import * as _ from 'lodash'

export default [
    {
        path: 'list',
        component: List
    },
    {
        path: 'export/list',
        component: Export
    },
    {
        path: 'seek/list',
        component: Seek
    },
]
