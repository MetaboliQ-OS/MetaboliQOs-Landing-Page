export type SendOtpResponse = {
  success: boolean;
  message: string;
};

export type VerifyOtpResponse = {
  success: boolean;
  message: string;
  verified?: boolean;
};
