import { Entity, PrimaryGeneratedColumn, Column, Timestamp,CreateDateColumn,UpdateDateColumn } from "typeorm"

@Entity()
export class Audience {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    discord_id: string

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP()',
    })
    inserted_at: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP()',
    })
    updated_at: Date;
}
