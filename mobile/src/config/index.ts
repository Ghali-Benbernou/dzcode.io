import { fsConfig } from "../.common/config";
import { getEnv } from "../utils/env";

export const fullstackConfig = fsConfig(getEnv(), { hostname: process.env.LOCAL_API_HOST });