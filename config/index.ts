//export const SERVER_BASE_URL = 'http://localhost:3000'
// export const SERVER_BASE_URL = '/'

const dev = process.env.NODE_ENV !== 'production';

export const SERVER_BASE_URL = dev ? 'http://localhost:3000' : 'https://dashboard.esicapps.org'
export const LOGIN_URL = dev ? "/auth/login" : "https://dashboard.esicapps.org/auth/login"
export const AWS_S3_URL ="https://esicapps-images.s3.eu-west-2.amazonaws.com/" 

export const AWS_S3_PROFILE_IMAGES_URL ="https://esicapps-profile-images.s3.eu-west-2.amazonaws.com/"

export const AWS_S3_ESICAPPS_IMAGES =  "esicapps-images"