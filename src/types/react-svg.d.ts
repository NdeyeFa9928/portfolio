// Fichier de déclaration pour étendre les types React et JSX

// Définition des types React et JSX
declare namespace JSX {
  interface IntrinsicElements {
    // Éléments HTML
    a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
    article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
    b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
    bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
    body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
    br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
    button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
    caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
    datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
    dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLElement>, HTMLElement>;
    details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
    dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
    dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
    fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
    figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
    h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
    header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
    html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
    i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
    img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
    kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
    label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
    li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
    link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
    main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
    mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
    menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
    meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
    nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
    ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
    optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
    option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
    output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
    p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
    picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
    progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
    q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
    rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
    section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
    small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
    span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
    sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
    tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
    textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
    tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
    thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
    title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
    tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
    track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
    u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
    var: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
    wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
    
    // Éléments SVG
    svg: React.SVGProps<SVGSVGElement>;
    animate: React.SVGProps<SVGElement>;
    animateMotion: React.SVGProps<SVGElement>;
    animateTransform: React.SVGProps<SVGElement>;
    circle: React.SVGProps<SVGCircleElement>;
    clipPath: React.SVGProps<SVGClipPathElement>;
    defs: React.SVGProps<SVGDefsElement>;
    desc: React.SVGProps<SVGDescElement>;
    ellipse: React.SVGProps<SVGEllipseElement>;
    feBlend: React.SVGProps<SVGFEBlendElement>;
    feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
    feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
    feComposite: React.SVGProps<SVGFECompositeElement>;
    feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
    feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
    feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
    feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
    feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
    feFlood: React.SVGProps<SVGFEFloodElement>;
    feFuncA: React.SVGProps<SVGFEFuncAElement>;
    feFuncB: React.SVGProps<SVGFEFuncBElement>;
    feFuncG: React.SVGProps<SVGFEFuncGElement>;
    feFuncR: React.SVGProps<SVGFEFuncRElement>;
    feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
    feImage: React.SVGProps<SVGFEImageElement>;
    feMerge: React.SVGProps<SVGFEMergeElement>;
    feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
    feMorphology: React.SVGProps<SVGFEMorphologyElement>;
    feOffset: React.SVGProps<SVGFEOffsetElement>;
    fePointLight: React.SVGProps<SVGFEPointLightElement>;
    feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
    feSpotLight: React.SVGProps<SVGFESpotLightElement>;
    feTile: React.SVGProps<SVGFETileElement>;
    feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
    filter: React.SVGProps<SVGFilterElement>;
    foreignObject: React.SVGProps<SVGForeignObjectElement>;
    g: React.SVGProps<SVGGElement>;
    image: React.SVGProps<SVGImageElement>;
    line: React.SVGProps<SVGLineElement>;
    linearGradient: React.SVGProps<SVGLinearGradientElement>;
    marker: React.SVGProps<SVGMarkerElement>;
    mask: React.SVGProps<SVGMaskElement>;
    metadata: React.SVGProps<SVGMetadataElement>;
    mpath: React.SVGProps<SVGElement>;
    path: React.SVGProps<SVGPathElement>;
    pattern: React.SVGProps<SVGPatternElement>;
    polygon: React.SVGProps<SVGPolygonElement>;
    polyline: React.SVGProps<SVGPolylineElement>;
    radialGradient: React.SVGProps<SVGRadialGradientElement>;
    rect: React.SVGProps<SVGRectElement>;
    stop: React.SVGProps<SVGStopElement>;
    switch: React.SVGProps<SVGSwitchElement>;
    symbol: React.SVGProps<SVGSymbolElement>;
    text: React.SVGProps<SVGTextElement>;
    textPath: React.SVGProps<SVGTextPathElement>;
    tspan: React.SVGProps<SVGTSpanElement>;
    use: React.SVGProps<SVGUseElement>;
    view: React.SVGProps<SVGViewElement>;
  }
}

// Définition des types React
declare namespace React {
  // Types de base React
  interface ReactNode {}
  type ReactNodeArray = ReactNode[];
  type ReactText = string | number;
  type ReactChild = ReactElement | ReactText;
  type ReactFragment = {} | ReactNodeArray;
  type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
  interface ReactPortal extends ReactElement {
    key: Key | null;
    children: ReactNode;
  }
  type Key = string | number;
  
  // Types d'événements React
  interface ChangeEvent<T = Element> {
    target: EventTarget & T;
    currentTarget: T;
    type: string;
    preventDefault(): void;
    stopPropagation(): void;
  }
  
  interface FormEvent<T = Element> {
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget & T;
    currentTarget: T;
    type: string;
  }
  
  interface MouseEvent<T = Element> {
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget & T;
    currentTarget: T;
    type: string;
  }
  
  // Attributs HTML
  interface HTMLAttributes<T> {
    className?: string
    id?: string
    lang?: string
    role?: string
    tabIndex?: number
    style?: any
    onClick?: (event: MouseEvent<T>) => void
    onChange?: (event: ChangeEvent<T>) => void
    onSubmit?: (event: FormEvent<T>) => void
    'aria-label'?: string
    'aria-labelledby'?: string
    'aria-describedby'?: string
    accessKey?: string
    contentEditable?: boolean | "true" | "false"
    contextMenu?: string
    dir?: string
    draggable?: boolean | "true" | "false"
    hidden?: boolean
    placeholder?: string
    slot?: string
    spellCheck?: boolean | "true" | "false"
    title?: string
    translate?: "yes" | "no"
    radioGroup?: string
    about?: string
    datatype?: string
    inlist?: any
    prefix?: string
    property?: string
    resource?: string
    typeof?: string
    vocab?: string
    autoCapitalize?: string
    autoCorrect?: string
    autoSave?: string
    color?: string
    itemProp?: string
    itemScope?: boolean
    itemType?: string
    itemID?: string
    itemRef?: string
    results?: number
    security?: string
    unselectable?: "on" | "off"
    inputMode?: string
    is?: string
    // Attributs HTML supplémentaires
    htmlFor?: string
    type?: string
    name?: string
    value?: string | ReadonlyArray<string> | number
    rows?: number
    cols?: number
    required?: boolean
    disabled?: boolean
    autoFocus?: boolean
    readOnly?: boolean
    multiple?: boolean
    selected?: boolean
    checked?: boolean
    defaultValue?: string | number | ReadonlyArray<string>
    defaultChecked?: boolean
    defaultSelected?: boolean
    accept?: string
    alt?: string
    autoComplete?: string
    capture?: boolean | string
    crossOrigin?: string
    form?: string
    formAction?: string
    formEncType?: string
    formMethod?: string
    formNoValidate?: boolean
    formTarget?: string
    height?: number | string
    list?: string
    max?: number | string
    maxLength?: number
    min?: number | string
    minLength?: number
    pattern?: string
    size?: number
    src?: string
    step?: number | string
    width?: number | string
    wrap?: string
    label?: string
    // Attributs pour les liens
    href?: string
    target?: string
    rel?: string
    download?: any
    hrefLang?: string
    media?: string
    ping?: string
    referrerPolicy?: string
    // Attributs pour les meta
    content?: string
    httpEquiv?: string
    property?: string
    charSet?: string
    // Attributs pour les liens CSS/JS
    as?: string
    integrity?: string
    sizes?: string
  }
  
  // Attributs spécifiques
  interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    download?: any
    href?: string
    hrefLang?: string
    media?: string
    ping?: string
    rel?: string
    target?: string
    type?: string
    referrerPolicy?: string
    onClick?: (event: React.MouseEvent<T>) => void;
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
    referrerPolicy?: string;
  }
  
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string | ReadonlyArray<string> | number;
  }
  
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    acceptCharset?: string;
    action?: string;
    autoComplete?: string;
    encType?: string;
    method?: string;
    name?: string;
    noValidate?: boolean;
    target?: string;
  }
  
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: string;
    alt?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    capture?: boolean | string;
    checked?: boolean;
    crossOrigin?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    height?: number | string;
    list?: string;
    max?: number | string;
    maxLength?: number;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number | string;
    type?: string;
    value?: string | ReadonlyArray<string> | number;
    width?: number | string;
  }
  
  interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    htmlFor?: string;
  }
  
  interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string | ReadonlyArray<string> | number;
  }
  
  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
    value?: string | ReadonlyArray<string> | number;
    id?: string;
    className?: string;
    onChange?: (event: ChangeEvent<T>) => void;
  }
  
  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string;
    autoFocus?: boolean;
    cols?: number;
    dirName?: string;
    disabled?: boolean;
    form?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    value?: string | ReadonlyArray<string> | number;
    wrap?: string;
    onChange?: (event: ChangeEvent<T>) => void;
  }
  
  interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
    manifest?: string;
    version?: string;
    xmlns?: string;
    lang?: string;
    className?: string;
  }
  
  interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
    charSet?: string;
    content?: string;
    httpEquiv?: string;
    name?: string;
    property?: string;
  }
  
  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    as?: string;
    crossOrigin?: string;
    href?: string;
    hrefLang?: string;
    integrity?: string;
    media?: string;
    rel?: string;
    sizes?: string;
    type?: string;
  }
  
  // Autres interfaces HTML
  interface AriaAttributes {}
  interface DOMAttributes<T> {}
  interface CSSProperties {}
  interface DetailedHTMLProps<E, T> extends E {}
  interface SVGProps<T> extends SVGAttributes<T> {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<T>) => void;
  }
  
  interface SVGAttributes<T> {
    // Attributs SVG de base
    fill?: string;
    stroke?: string;
    strokeWidth?: number | string;
    strokeLinecap?: 'butt' | 'round' | 'square';
    strokeLinejoin?: 'miter' | 'round' | 'bevel';
    strokeDasharray?: string | number;
    strokeDashoffset?: string | number;
    strokeOpacity?: number | string;
    fillOpacity?: number | string;
    opacity?: number | string;
    
    // Attributs de géométrie
    x?: number | string;
    y?: number | string;
    x1?: number | string;
    y1?: number | string;
    x2?: number | string;
    y2?: number | string;
    cx?: number | string;
    cy?: number | string;
    r?: number | string;
    rx?: number | string;
    ry?: number | string;
    width?: number | string;
    height?: number | string;
    
    // Attributs de chemin
    d?: string;
    pathLength?: number;
    
    // Attributs de transformation
    transform?: string;
    
    // Attributs de viewBox et namespace
    viewBox?: string;
    xmlns?: string;
    xmlnsXlink?: string;
    
    // Attributs de clipping et masking
    clipPath?: string;
    clipRule?: 'nonzero' | 'evenodd';
    fillRule?: 'nonzero' | 'evenodd';
    mask?: string;
    
    // Attributs de texte
    textAnchor?: 'start' | 'middle' | 'end';
    dominantBaseline?: string;
    fontSize?: number | string;
    fontFamily?: string;
    fontWeight?: number | string;
    
    // Attributs de gradient
    gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
    gradientTransform?: string;
    offset?: number | string;
    stopColor?: string;
    stopOpacity?: number | string;
    
    // Attributs de filtre
    filter?: string;
    
    // Attributs d'animation
    dur?: string;
    repeatCount?: number | 'indefinite';
    
    // Attributs génériques
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    
    // Event handlers
    onClick?: (event: React.MouseEvent<T>) => void;
    onMouseEnter?: (event: React.MouseEvent<T>) => void;
    onMouseLeave?: (event: React.MouseEvent<T>) => void;
  }
  
  interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {}
}

declare module 'react' {
  interface ChangeEvent<T = Element> {
    target: EventTarget & T;
    currentTarget: T;
    type: string;
    preventDefault(): void;
    stopPropagation(): void;
  }

  interface FormEvent<T = Element> {
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget & T;
    currentTarget: T;
    type: string;
  }

  interface MouseEvent<T = Element> {
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget & T;
    currentTarget: T;
    type: string;
  }

  interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
    referrerPolicy?: string;
    onClick?: (event: React.MouseEvent<T>) => void;
  }

  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    accessKey?: string;
    className?: string;
    contentEditable?: boolean | "true" | "false";
    contextMenu?: string;
    dir?: string;
    draggable?: boolean | "true" | "false";
    hidden?: boolean;
    id?: string;
    lang?: string;
    placeholder?: string;
    slot?: string;
    spellCheck?: boolean | "true" | "false";
    style?: React.CSSProperties;
    tabIndex?: number;
    title?: string;
    translate?: "yes" | "no";
    radioGroup?: string;
    role?: string;
    about?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: "on" | "off";
    inputMode?: string;
    is?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    onClick?: (event: React.MouseEvent<T>) => void;
    onChange?: (event: React.ChangeEvent<T>) => void;
    onSubmit?: (event: React.FormEvent<T>) => void;
    // Attributs HTML supplémentaires
    htmlFor?: string;
    type?: string;
    name?: string;
    value?: string | ReadonlyArray<string> | number;
    rows?: number;
    cols?: number;
    required?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    readOnly?: boolean;
    multiple?: boolean;
    selected?: boolean;
    checked?: boolean;
    accept?: string;
    alt?: string;
    autoComplete?: string;
    capture?: boolean | string;
    crossOrigin?: string;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    height?: number | string;
    list?: string;
    max?: number | string;
    maxLength?: number;
    min?: number | string;
    minLength?: number;
    pattern?: string;
    size?: number;
    src?: string;
    step?: number | string;
    width?: number | string;
    wrap?: string;
    label?: string;
    // Attributs pour les liens
    href?: string;
    target?: string;
    rel?: string;
    download?: any;
    hrefLang?: string;
    media?: string;
    ping?: string;
    referrerPolicy?: string;
    // Attributs pour les meta
    content?: string;
    httpEquiv?: string;
    charSet?: string;
    // Attributs pour les liens CSS/JS
    as?: string;
    integrity?: string;
    sizes?: string;
  }

  interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    htmlFor?: string;
  }

  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    acceptCharset?: string;
    action?: string;
    autoComplete?: string;
    encType?: string;
    method?: string;
    name?: string;
    noValidate?: boolean;
    target?: string;
    onSubmit?: (event: React.FormEvent<T>) => void;
  }

  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: string;
    alt?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    capture?: boolean | string;
    checked?: boolean;
    crossOrigin?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    height?: number | string;
    list?: string;
    max?: number | string;
    maxLength?: number;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number | string;
    type?: string;
    value?: string | ReadonlyArray<string> | number;
    width?: number | string;
    onChange?: (event: React.ChangeEvent<T>) => void;
  }

  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string;
    autoFocus?: boolean;
    cols?: number;
    dirName?: string;
    disabled?: boolean;
    form?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    value?: string | ReadonlyArray<string> | number;
    wrap?: string;
    onChange?: (event: React.ChangeEvent<T>) => void;
  }

  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
    value?: string | ReadonlyArray<string> | number;
    onChange?: (event: React.ChangeEvent<T>) => void;
  }

  interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string | ReadonlyArray<string> | number;
  }

  interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
    charSet?: string;
    content?: string;
    httpEquiv?: string;
    name?: string;
    property?: string;
  }

  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    as?: string;
    crossOrigin?: string;
    href?: string;
    hrefLang?: string;
    integrity?: string;
    media?: string;
    rel?: string;
    sizes?: string;
    type?: string;
  }

  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string | ReadonlyArray<string> | number;
  }
  
  interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
    manifest?: string;
    version?: string;
    xmlns?: string;
    lang?: string;
    className?: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      svg: React.SVGProps<SVGSVGElement>;
      path: React.SVGProps<SVGPathElement>;
      circle: React.SVGProps<SVGCircleElement>;
      rect: React.SVGProps<SVGRectElement>;
      line: React.SVGProps<SVGLineElement>;
      polyline: React.SVGProps<SVGPolylineElement>;
      polygon: React.SVGProps<SVGPolygonElement>;
      g: React.SVGProps<SVGGElement>;
      defs: React.SVGProps<SVGDefsElement>;
      filter: React.SVGProps<SVGFilterElement>;
      feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
      feOffset: React.SVGProps<SVGFEOffsetElement>;
      feBlend: React.SVGProps<SVGFEBlendElement>;
      stop: React.SVGProps<SVGStopElement>;
      linearGradient: React.SVGProps<SVGLinearGradientElement>;
      radialGradient: React.SVGProps<SVGRadialGradientElement>;

      // HTML Form Elements
      select: React.SelectHTMLAttributes<HTMLSelectElement>;
      option: React.OptionHTMLAttributes<HTMLOptionElement>;
      optgroup: React.OptgroupHTMLAttributes<HTMLOptGroupElement>;
      input: React.InputHTMLAttributes<HTMLInputElement>;
      textarea: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
      button: React.ButtonHTMLAttributes<HTMLButtonElement>;
      label: React.LabelHTMLAttributes<HTMLLabelElement>;
      fieldset: React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
      legend: React.HTMLAttributes<HTMLLegendElement>;
      datalist: React.HTMLAttributes<HTMLDataListElement>;
      output: React.OutputHTMLAttributes<HTMLOutputElement>;
      progress: React.ProgressHTMLAttributes<HTMLProgressElement>;
      meter: React.MeterHTMLAttributes<HTMLMeterElement>;
      form: React.FormHTMLAttributes<HTMLFormElement>;
      a: React.AnchorHTMLAttributes<HTMLAnchorElement>;

      // HTML Document Elements
      html: React.HTMLAttributes<HTMLHtmlElement>;
      head: React.HTMLAttributes<HTMLHeadElement>;
      title: React.HTMLAttributes<HTMLTitleElement>;
      meta: React.MetaHTMLAttributes<HTMLMetaElement>;
      link: React.LinkHTMLAttributes<HTMLLinkElement>;
      body: React.HTMLAttributes<HTMLBodyElement>;
      script: React.ScriptHTMLAttributes<HTMLScriptElement>;
    }
  }
}
