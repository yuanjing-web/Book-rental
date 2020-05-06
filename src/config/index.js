/**
 * @description 系统全局配置
 */
export default {
/**
  * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
  */
  tokenCookieExpires: 1,
  /**
   * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天
     */
  passCookieExpires: 1,
  /**
     * @description 此处修改网站名称
     */
  webName: 'VEGMS',
  /**
     * @description 是否只保持一个子菜单的展开
     */
  uniqueOpened: true,
  /**
     * @description token key
     */
  TokenKey: 'VEGMS-VIEW-TOEKN',
  /**
     * @description 请求超时时间，毫秒（默认2分钟）
     */
  timeout: 1200000,

  /**
     * @description 是否显示 tagsView
     */
  tagsView: true,

  /**
     * @description 固定头部
     */
  fixedHeader: false,
  /**
     * @description 是否显示logo
     */
  sidebarLogo: false,
  /**
     * 是否显示设置的悬浮按钮
     */
  settingBtn: true,

  /**
     * 是否显示设置的底部信息
     */
  showFooter: false,

  /**
     * 是否显示反馈按钮
     */
  showFeedback: false,
  /**
     * 底部文字，支持html语法
     */
  footerTxt: '© 2019 Zheng Jie <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>',

  /**
     * 备案号
     */
  caseNumber: '浙ICP备18005431号'
}
