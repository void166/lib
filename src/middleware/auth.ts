import jwt from "jsonwebtoken";
import { config } from "../config/config";

const { JWT_SECRET_PUB, JWT_SECRET_STUD} = config;

export type UserType = "student" | "publisher";

export interface JWT_COMMON_PAYLOAD {
  pub_id?: string | null;
  stud_id?: string | null;
  email: string;
  role?: UserType;
}

export const auth = (token: string): JWT_COMMON_PAYLOAD | null => {
  try {
    let decoded: any;
    let isPublisher = false;

    try {
      decoded = jwt.verify(token, JWT_SECRET_PUB!) as JWT_COMMON_PAYLOAD;
      isPublisher = true;
    } catch {
      decoded = jwt.verify(token, JWT_SECRET_STUD!) as JWT_COMMON_PAYLOAD;
      isPublisher = false;
    }

    if (decoded.pub_id) {
      decoded.role = "publisher";
      console.log("Verified publisher:", decoded.pub_id);
      return decoded;
    }
    
    if (decoded.stud_id) {
      decoded.role = "student";
      console.log("Verified student:", decoded.stud_id);
      return decoded;
    }
    
    throw new Error("Invalid token payload");
    
  } catch (err: any) {
    console.log("Token verification error:", err.message);
    return null;
  }
};
