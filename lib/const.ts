export const appBaseURL = process.env.NODE_ENV === "production" 
    ? process.env.NEXT_PUBLIC_APP_BASE_URL
    : "http://localhost:8082"

// Auth

//casdoor
export const casdoorEndpoint = process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_CASDOOR_ENDPOINT
    : "http://authtest.cialabs.org";

export const casdoorClientId = process.env.NEXT_PUBLIC_CASDOOR_CLIENT_ID;
export const casdoorClientSecret = process.env.NEXT_PUBLIC_CASDOOR_CLIENT_SECRET;
export const casdoorSignUpRedirectURL = process.env.NEXT_PUBLIC_CASDOOR_REDIRECT_URI;

//google

export const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
export const googleClientSecret = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;
export const googleRedirectURL = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;