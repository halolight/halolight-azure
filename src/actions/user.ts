import type { User } from "@/lib/api/types"

// ============================================================================
// 类型定义
// ============================================================================

export interface ActionResult<T = void> {
  success: boolean
  data?: T
  error?: string
}

export interface LoginFormData {
  email: string
  password: string
  remember?: boolean
}

export interface UserFormData {
  name: string
  email: string
  roleId?: string
  status?: "active" | "inactive" | "suspended"
  avatar?: string
  phone?: string
  department?: string
  position?: string
  bio?: string
}

// ============================================================================
// Stub implementations for type compatibility
// Note: These are not used in static export, client-side API is used instead
// ============================================================================

export async function loginAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: LoginFormData
): Promise<ActionResult<{ user: User; token: string }>> {
  throw new Error("Server actions are not available in static export")
}

export async function logoutAction(): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}

export async function registerAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: LoginFormData & { name: string }
): Promise<ActionResult<{ user: User; token: string }>> {
  throw new Error("Server actions are not available in static export")
}

export async function getUsersAction(): Promise<ActionResult<User[]>> {
  throw new Error("Server actions are not available in static export")
}

export async function getUserAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string
): Promise<ActionResult<User>> {
  throw new Error("Server actions are not available in static export")
}

export async function createUserAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: UserFormData
): Promise<ActionResult<User>> {
  throw new Error("Server actions are not available in static export")
}

export async function updateUserAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: UserFormData
): Promise<ActionResult<User>> {
  throw new Error("Server actions are not available in static export")
}

export async function updateUserStatusAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  status: string
): Promise<ActionResult<User>> {
  throw new Error("Server actions are not available in static export")
}

export async function deleteUserAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string
): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}

export async function batchDeleteUsersAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ids: string[]
): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}

export async function resetPasswordAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  password: string
): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}

export async function updateProfileAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: UserFormData
): Promise<ActionResult<User>> {
  throw new Error("Server actions are not available in static export")
}
