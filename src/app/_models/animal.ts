import { Modifier } from './modifier';

export class Animal {
    name: string;
    hp: number;
    mp: number;
    atk: number;
    def: number;
    modifiers: {
        hpModifiers: Modifier[],
        mpModifiers: Modifier[],
        atkModifiers: Modifier[],
        defModifiers: Modifier[],
    };

    getName() {
        return this.name;
    }

    getHp() {
        return this.hp;
    }

    getMp() {
        return this.mp;
    }

    getAtk() {
        return this.atk;
    }

    getDef() {
        return this.def;
    }

    getModifiers() {
        return this.modifiers;
    }
}

