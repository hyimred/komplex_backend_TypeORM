import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Storages {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column("int", {default: 1})
    size: number

    @Column("int", {default: 4990})
    price: number

    @Column()
    type: string
}