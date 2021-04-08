class DeviceService {
  private type: string;

  constructor() {
    this.type = window.navigator.userAgent;
  }

  private android(type = /Android/i) {
    return type.exec(this.type);
  }

  private appleMob(type = /iPhone|iPad|iPod/i) {
    return type.exec(this.type);
  }

  private blackbarry(type = /BlackBerry/i) {
    return type.exec(this.type);
  }

  private opera(type = /Opera Mini/i) {
    return type.exec(this.type);
  }

  private windowsMob(type = /IEMobile/i) {
    return type.exec(this.type);
  }

  public detect(): boolean {
    return !!(
      this.android() || this.appleMob() || this.blackbarry() || this.opera() || this.windowsMob()
    );
  }
}

export default DeviceService;
