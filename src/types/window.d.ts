interface Window {
  pvTrack: object;
  autoHeaderObj: any;
  AutoSidebar: any;
  AMap: any;
  _AMapSecurityConfig: any;
  trackPageView(...rest: any[]): void;
  trackCustomEvent(type: string, options: object, ext: object): void;
}
