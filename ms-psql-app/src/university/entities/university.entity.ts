import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class University {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    domain: string;
    
    @Column({ type: 'varchar', length: 255 })
    country: string;

    @Column({ type: 'varchar', length: 20 })
    country_code: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    state_province: string;

    @Column({ type: 'varchar', length: 255 })
    web_page: string;
}