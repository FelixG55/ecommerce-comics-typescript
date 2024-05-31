/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_AUTHDOMAIN : string
    readonly VITE_PROJECTID : string
    readonly VITE_STORAGEBUCKET : string
    readonly VITE_MESSAGINSENDERID : string
    readonly VITE_APIKEY : string
    // more env variables...
}
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }