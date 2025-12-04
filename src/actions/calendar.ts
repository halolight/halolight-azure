import type { CalendarEvent } from "@/lib/api/types"

// ============================================================================
// 类型定义
// ============================================================================

export interface ActionResult<T = void> {
  success: boolean
  data?: T
  error?: string
}

export interface CalendarEventFormData {
  title: string
  start: Date
  end: Date
  allDay?: boolean
  description?: string
  location?: string
  color?: string
  category?: string
  attendees?: string[]
  reminders?: number[]
}

export interface CalendarSearchParams {
  start?: string
  end?: string
  category?: string
  keyword?: string
}

// ============================================================================
// Stub implementations for type compatibility
// Note: These are not used in static export, client-side API is used instead
// ============================================================================

export async function getCalendarEventsAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params?: CalendarSearchParams
): Promise<ActionResult<CalendarEvent[]>> {
  throw new Error("Server actions are not available in static export")
}

export async function getCalendarEventAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string
): Promise<ActionResult<CalendarEvent>> {
  throw new Error("Server actions are not available in static export")
}

export async function createCalendarEventAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: CalendarEventFormData
): Promise<ActionResult<CalendarEvent>> {
  throw new Error("Server actions are not available in static export")
}

export async function updateCalendarEventAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: CalendarEventFormData
): Promise<ActionResult<CalendarEvent>> {
  throw new Error("Server actions are not available in static export")
}

export async function deleteCalendarEventAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: string
): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}

export async function batchDeleteCalendarEventsAction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ids: string[]
): Promise<ActionResult> {
  throw new Error("Server actions are not available in static export")
}
