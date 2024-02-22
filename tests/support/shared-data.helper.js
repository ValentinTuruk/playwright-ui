class SharedData {
    indexOfElementFromList;
    currentPriceOfItem;
    titleNameOfItem;
    titleKitOfItem;
    sizeOfItem;

    get indexOfElement() {
        return this.indexOfElementFromList;
    }
    set indexOfElement(indexOfElement) {
        this.indexOfElementFromList = indexOfElement;
    }

    get currentPrice() {
        return this.currentPriceOfItem;
    }
    set currentPrice(currentPrice) {
        this.currentPriceOfItem = this.stringToFormat(currentPrice);
    }

    get titleName() {
        return this.titleNameOfItem;
    }
    set titleName(titleName) {
        this.titleNameOfItem = this.stringToFormat(titleName);
    }

    get titleKit() {
        return this.titleKitOfItem;
    }
    set titleKit(titleKit) {
        this.titleKitOfItem = this.stringToFormat(titleKit);
    }

    get itemSize() {
        return this.sizeOfItem;
    }
    set itemSize(itemSize) {
        this.sizeOfItem = this.stringToFormat(itemSize);
    }

    stringToFormat(string) {
        return string.replace(/\s+/g, ' ').trim()
    }
}

export default new SharedData()