
export class EMenuGroup {
    constructor(
        public id?: number,
        public name?: string,
        public imgURL?: string,
        public restoId?: number,
    ) {
    }
}

export class EMenuItem {
    constructor(
        public id?: number,
        public groupId?: number,
        public name?: string,
        public description?: string,
        public imgURL?: string,
        public price?: number,
        public restoId?: number,
    ) {
    }
}

export class Resto {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
    ) {
    }
}
