// src/types/express/index.d.ts

declare global {
    namespace Express {
      interface Request {
        user?: {id: string, role: string};
      }
    }
  }
  
  // Keep this to ensure the file is treated as a module
  export {}; 
  