interface Window {
  pvTrack: object;
  autoHeaderObj: any;
  AutoSidebar: any;
  trackPageView(...rest: any[]): void;
  trackCustomEvent(type: string, options: object, ext: object): void;
}
