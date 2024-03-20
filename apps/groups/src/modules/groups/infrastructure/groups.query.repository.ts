import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from '../domain/entity';
import { Repository } from 'typeorm';

export class GroupsQueryRepository {
	constructor(@InjectRepository(GroupEntity) private readonly groupsQueryRepository: Repository<GroupEntity>) {}

	async getGroupById(id: string) {
		return await this.groupsQueryRepository.findOne({ where: { id } });
	}
}
