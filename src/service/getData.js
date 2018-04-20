import fetch from '../utils/fetch'

/**
 * WECHAT JSSDK
 */
export const wxJSSDK = (url) => fetch('/api/v1/wechat/jssdk', {
	url: url
});

/**
 * api
 */
export const checkout = (mediaId) => fetch('/api/v1/demo_chat', {
    mediaId: mediaId
});