import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

// import { USER_REPOSITORY } from './constants';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  private readonly logger = new Logger(UsersService.name);
  async create(createUserDto: CreateUserDto) {
    const res = await this.userRepository.create(createUserDto);
    await this.userRepository.save(res);
    return res;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  async findByEmail(email: string) {
    const users = await this.userRepository.findOneBy({
      email: email,
    });
    this.logger.warn(users, email);
    return users;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
