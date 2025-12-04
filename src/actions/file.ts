import type { FileItem, StorageInfo } from "@/lib/api/types"

// ============================================================================
// 类型定义
// ============================================================================

export interface ActionResult<T = void> {
  success: boolean
  data?: T
  error?: string
}

export interface FileUploadResult {
  id: string
  name: string
  url: string
  size: number
  type: string
}

export interface FileSearchParams {
  page?: number
  pageSize?: number
  type?: string
  path?: string
  search?: string
}

// ============================================================================
// Stub implementations for type compatibility
// Note: These are not used in static export, client-side API is used instead
// ============================================================================

export async function getFilesAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params?: FileSearchParams
): Promise<ActionResult<{ items: FileItem[]; total: number }>> {
  throw new Error("Server actions are not available in static export")
}

export async function getFileAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string
): Promise<ActionResult<FileItem>> {
  throw new Error("Server actions are not available in static export")
}

export async function uploadFileAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: FormData
): Promise<ActionResult<FileUploadResult>> {
  throw new Error("Server actions are not available in static export")
}

export async function deleteFileAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string
): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}

export async function batchDeleteFilesAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ids: string[]
): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}

export async function getStorageInfoAction(): Promise<
  ActionResult<StorageInfo>
> {
  throw new Error("Server actions are not available in static export")
}
