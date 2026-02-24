declare global {
  interface Window {
    ScrollReveal: any;
  }
  
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': {
        name?: string;
        [key: string]: any;
      };
    }
  }
}

export {};