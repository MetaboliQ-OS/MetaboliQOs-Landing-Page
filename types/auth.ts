export type SendOtpResponse = {
  success: boolean;
  message: string;
  upgraded?: boolean;
  isVip?: boolean;
  founderNumber?: number | null;
};

export type VerifyOtpResponse = {
  success: boolean;
  message: string;
  verified?: boolean;
  isVip?: boolean;
  founderNumber?: number | null;
  upgraded?: boolean;
};
