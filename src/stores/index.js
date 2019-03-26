import BoardStore from './board';

class RootStore {
    constructor(){
        this.boardStore = new BoardStore(this);
    }
}

export default RootStore;