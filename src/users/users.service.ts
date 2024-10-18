import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,  // Injecting the repository
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      
      const newUser = this.userRepository.create({
        ...createUserDto,
        id: uuid(), // Generate the ID here using uuid
      });
      return await this.userRepository.save(newUser);
    } catch (error) {
      // Handle any errors here
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();  // Returns all users
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
