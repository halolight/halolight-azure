import type { Document } from "@/lib/api/types"

// ============================================================================
// 类型定义
// ============================================================================

export interface ActionResult<T = void> {
  success: boolean
  data?: T
  error?: string
}

export interface DocumentFormData {
  name: string
  type: string
  folder?: string
  tags?: string[]
  shared?: boolean
}

export interface DocumentSearchParams {
  page?: number
  pageSize?: number
  type?: string
  folder?: string
  search?: string
}

// ============================================================================
// Stub implementations for type compatibility
// Note: These are not used in static export, client-side API is used instead
// ============================================================================

export async function getDocumentsAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params?: DocumentSearchParams
): Promise<ActionResult<{ items: Document[]; total: number }>> {
  throw new Error("Server actions are not available in static export")
}

export async function getDocumentAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string
): Promise<ActionResult<Document>> {
  throw new Error("Server actions are not available in static export")
}

export async function createDocumentAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: DocumentFormData
): Promise<ActionResult<Document>> {
  throw new Error("Server actions are not available in static export")
}

export async function updateDocumentAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: DocumentFormData
): Promise<ActionResult<Document>> {
  throw new Error("Server actions are not available in static export")
}

export async function deleteDocumentAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string
): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}

export async function batchDeleteDocumentsAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ids: string[]
): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}
