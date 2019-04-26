class Loader {
    LoadStart: boolean;
    loadFinish: boolean;
    constructor(start: boolean) {
        this.LoadStart = true;
    }
    newLoader() {
        return this;
    }
}
