export const REVA_COMMAND_SUBMIT = "reva-command-submit";

export type RevaCommandDetail = { message: string };

export function dispatchRevaCommand(message: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<RevaCommandDetail>(REVA_COMMAND_SUBMIT, {
      detail: { message },
    }),
  );
}
