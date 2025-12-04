/**
 * Server Actions 统一导出
 *
 * Note: Azure Static Web Apps 使用静态导出，Server Actions 不可用
 * 这里仅保留类型定义和存根函数以维持类型兼容性
 * 实际功能通过客户端 API + Mock 数据实现
 */

// 认证相关
export {
  loginAction,
  logoutAction,
  registerAction,
} from "./user"

// 用户管理
export {
  getUsersAction,
  getUserAction,
  createUserAction,
  updateUserAction,
  updateUserStatusAction,
  deleteUserAction,
  batchDeleteUsersAction,
  resetPasswordAction,
  updateProfileAction,
} from "./user"

// 用户类型
export type {
  ActionResult,
  LoginFormData,
  UserFormData,
} from "./user"

// 文档管理
export {
  getDocumentsAction,
  getDocumentAction,
  createDocumentAction,
  updateDocumentAction,
  deleteDocumentAction,
  batchDeleteDocumentsAction,
} from "./document"

// 文档类型
export type {
  DocumentFormData,
  DocumentSearchParams,
} from "./document"

// 日历事件
export {
  getCalendarEventsAction,
  getCalendarEventAction,
  createCalendarEventAction,
  updateCalendarEventAction,
  deleteCalendarEventAction,
  batchDeleteCalendarEventsAction,
} from "./calendar"

// 日历类型
export type {
  CalendarEventFormData,
  CalendarSearchParams,
} from "./calendar"

// 文件管理
export {
  getFilesAction,
  getFileAction,
  uploadFileAction,
  deleteFileAction,
  batchDeleteFilesAction,
  getStorageInfoAction,
} from "./file"

// 文件类型
export type {
  FileSearchParams,
  FileUploadResult,
} from "./file"
