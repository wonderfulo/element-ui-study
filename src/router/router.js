import notification from '../pages/notification.vue'
import input from '../pages/input.vue'
import slotTest from '../pages/slot-test.vue'
import checkbox from '../pages/checkbox.vue'
import select from '../pages/select/select.vue'
import selectGroup from '../pages/select/selectGroup.vue'
import selectByQuery from '../pages/select/selectByQuery.vue'
import selectByRemoteQuery from '../pages/select/selectByRemoteQuery.vue'
import cascader from '../pages/cascader/cascader.vue'
import cascaderDynamicLoading from '../pages/cascader/cascaderDynamicLoading.vue'
import upload from '../pages/upload/upload.vue'
import uploadHeadPortrait from '../pages/upload/uploadHeadPortrait.vue'
import uploadFileThumbnail from '../pages/upload/uploadFileThumbnail.vue'
import uploadImageThumbnail from '../pages/upload/uploadImageThumbnail.vue'
import uploadManual from '../pages/upload/uploadManual.vue'

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
	},
	{
		path: '/cascader',
		component: cascader
	},
	{
		path: '/cascaderDynamicLoading',
		component: cascaderDynamicLoading
	},
	{
		path: '/upload',
		component: upload
	},
	{
		path: '/uploadHeadPortrait',
		component: uploadHeadPortrait
	},
	{
		path: '/uploadFileThumbnail',
		component: uploadFileThumbnail
	},
	{
		path: '/uploadImageThumbnail',
		component: uploadImageThumbnail
	},
	{
		path: '/uploadManual',
		component: uploadManual
	}
]


export default routes
