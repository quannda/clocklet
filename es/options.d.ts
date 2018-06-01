export interface ClockletOptions {
    className: string;
    format: string;
    placement: 'top' | 'bottom';
    alignment: 'left' | 'right';
    appendTo: 'body' | 'parent';
    zIndex: number | string;
    dispatchesInputEvents: boolean;
}
export declare const defaultDefaultOptions: ClockletOptions;
export declare function parseOptions(optionsString?: string): Partial<ClockletOptions> | undefined;