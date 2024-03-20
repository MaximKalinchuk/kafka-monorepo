import { Entity, Column, PrimaryColumn } from 'typeorm';
import { CreateGroupInputDTO } from '../../api/dto/input';
import { randomUUID } from 'crypto';

@Entity('groups')
export class GroupEntity {
	@PrimaryColumn('uuid')
	public id: string;

	@Column()
	public groupName: string;

	@Column('jsonb', { nullable: true })
	public users: string[];

	static create(dto: CreateGroupInputDTO) {
		const group = new GroupEntity();
		group.id = randomUUID();
		group.groupName = dto.groupName;
		return group;
	}
}
