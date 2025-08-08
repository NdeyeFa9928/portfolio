// Types globaux pour résoudre les erreurs d'import temporaires

// Déclaration du module React
declare module 'react' {
  export = React;
  export as namespace React;
  
  namespace React {
    function createElement(type: any, props?: any, ...children: any[]): any;
    function useState<T>(initialState: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
    function useEffect(effect: () => void | (() => void), deps?: any[]): void;
    const Fragment: any;
    
    interface FunctionComponent<P = {}> {
      (props: P): any;
    }
    
    interface Component<P = {}, S = {}> {
      props: P;
      state: S;
    }
  }
}

// React types
declare namespace React {
  interface HTMLAttributes<T> {
    className?: string;
    key?: string | number;
    id?: string;
    style?: any;
  }
  interface ButtonHTMLAttributes<T> {
    onClick?: () => void;
    className?: string;
    type?: string;
    key?: string | number;
  }
  interface AnchorHTMLAttributes<T> {
    href?: string;
    className?: string;
    key?: string | number;
  }
}

// JSX types
declare namespace JSX {
  interface IntrinsicElements {
    div: React.HTMLAttributes<HTMLDivElement>;
    h1: React.HTMLAttributes<HTMLHeadingElement>;
    h2: React.HTMLAttributes<HTMLHeadingElement>;
    h3: React.HTMLAttributes<HTMLHeadingElement>;
    h4: React.HTMLAttributes<HTMLHeadingElement>;
    p: React.HTMLAttributes<HTMLParagraphElement>;
    span: React.HTMLAttributes<HTMLSpanElement>;
    button: React.ButtonHTMLAttributes<HTMLButtonElement>;
    a: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    section: React.HTMLAttributes<HTMLElement>;
    header: React.HTMLAttributes<HTMLElement>;
    footer: React.HTMLAttributes<HTMLElement>;
    nav: React.HTMLAttributes<HTMLElement>;
    main: React.HTMLAttributes<HTMLElement>;
    ul: React.HTMLAttributes<HTMLUListElement>;
    li: React.HTMLAttributes<HTMLLIElement>;
    form: React.HTMLAttributes<HTMLFormElement>;
    input: React.HTMLAttributes<HTMLInputElement>;
    textarea: React.HTMLAttributes<HTMLTextAreaElement>;
    label: React.HTMLAttributes<HTMLLabelElement>;
  }
}

// Framer Motion (version simplifiée)
declare module 'framer-motion' {
  export const motion: {
    div: any;
    h1: any;
    h2: any;
    h3: any;
    p: any;
    span: any;
    button: any;
    a: any;
    section: any;
    header: any;
    footer: any;
    nav: any;
  };
  export const AnimatePresence: any;
}

// Lucide React Icons
declare module 'lucide-react' {
  export const Menu: any;
  export const X: any;
  export const Home: any;
  export const User: any;
  export const Code: any;
  export const Briefcase: any;
  export const FolderOpen: any;
  export const Mail: any;
  export const ArrowDown: any;
  export const Download: any;
  export const Play: any;
  export const GraduationCap: any;
  export const MapPin: any;
  export const Calendar: any;
  export const Award: any;
  export const Building: any;
  export const ExternalLink: any;
  export const Github: any;
  export const Linkedin: any;
  export const Twitter: any;
  export const Heart: any;
  export const Phone: any;
  export const Send: any;
}

// Next.js Image
declare module 'next/image' {
  const Image: any;
  export default Image;
}
