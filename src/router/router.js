import notification from '../pages/notification.vue'
import input from '../pages/input.vue'
import slotTest from '../pages/slot-test.vue'
import checkbox from '../pages/checkbox.vue'

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
	}
]


export default routes
