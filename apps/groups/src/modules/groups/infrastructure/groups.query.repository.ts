import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from '../domain/entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupsQueryRepository {
	constructor(@InjectRepository(GroupEntity) private readonly groupsQueryRepository: Repository<GroupEntity>) {}

	async getGroupById(id: string) {
		return await this.groupsQueryRepository.findOne({ where: { id } });
	}

	async getMainGroup() {
		return await this.groupsQueryRepository.findOne({ where: { groupName: 'Main Group' } });
	}
}
