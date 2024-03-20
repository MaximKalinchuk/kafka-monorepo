import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupEntity } from '../domain/entity/group.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupsRepository {
	constructor(@InjectRepository(GroupEntity) private readonly groupsRepository: Repository<GroupEntity>) {}

	async save(groupEntity: GroupEntity) {
		await this.groupsRepository.save(groupEntity);
	}
}
