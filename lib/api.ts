import { NextResponse } from "next/server";

export function apiError(message: string, status = 400) {
  return NextResponse.json({ success: false, message }, { status });
}

export function apiSuccess(message: string, status = 200, extra?: object) {
  return NextResponse.json({ success: true, message, ...extra }, { status });
}
