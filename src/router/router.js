import notification from '../pages/notification.vue'
import input from '../pages/input.vue'
import slotTest from '../pages/slot-test.vue'
import checkbox from '../pages/checkbox.vue'
import select from '../pages/select.vue'
import selectGroup from '../pages/selectGroup.vue'
import selectByQuery from '../pages/selectByQuery.vue'
import selectByRemoteQuery from '../pages/selectByRemoteQuery.vue'

const routes = [
	{
		path: '/notification',
		component: notification
	},
	{
		path: '/input',
		component: input
	},
	{
		path: '/slotTest',
		component: slotTest
	},
	{
		path: '/checkbox',
		component: checkbox
	},
	{
		path: '/select',
		component: select
	},
	{
		path: '/selectGroup',
		component: selectGroup
	},
	{
		path: '/selectByQuery',
		component: selectByQuery
	},
	{
		path: '/selectByRemoteQuery',
		component: selectByRemoteQuery
	}
]


export default routes
