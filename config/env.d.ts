declare global {
    namespace NodeJS {
        interface ProcessEnv {
            IG_LOGIN: string;
            IG_PASSWORD: string;
        }
    }
}

export  default global
