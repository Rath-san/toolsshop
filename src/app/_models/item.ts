import { Modifier } from './modifier';

export class Item {
    id: number;
    name: string;
    durability: number;
    type: string;
    quality: number;
    price: number;
    // modifiers?: Modifier[];

    constructor(
        id: number,
        name: string,
        durability: number,
        type: string,
        quality: number,
        price: number,
        // modifier?: Modifier[]
    ) {
        this.id = id;
        this.name = name;
        this.durability = durability;
        this.type = type;
        this.quality = quality;
        this.price = price;
    }

    // modifiers: {
    //     durabilityModifier: Modifier[],
    //     qualityModifier: Modifier[]
    // };

    public getName(): string {
        return this.name;
    }

    public getDurability(): number {
        return this.durability;
    }

    public getType(): string {
        return this.type;
    }

    public getQuality(): number {
        return this.quality;
    }

    public getPrice(): number {
        return this.price;
    }

    // public getModifiers():  {
    //     return this.modifiers;
    // }
}
