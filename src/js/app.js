class ErrorRepository {
    constructor() {
        this.repo = new Map();
    }
    translate(code) {
        if (this.repo.has(code)) {
            return this.repo.get(code);
        } else {
            return 'Unknown error';
        }
    }
}

module.exports = ErrorRepository;

// const erRep = new ErrorRepository;
// erRep.repo.set(1, 'You have no sleep.')
// erRep.repo.set(2, 'You have no coffee.')
// erRep.repo.set(3, 'You have no rest.')
// console.log(erRep.translate(3))
// console.log(erRep.translate(4))