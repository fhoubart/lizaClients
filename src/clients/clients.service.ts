import { Injectable, NotFoundException } from '@nestjs/common';
import {Prisma,Client} from '@prisma/client'
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ClientsService {
  constructor(private readonly databaseService:DatabaseService){}
  async create(createClientDto: Prisma.ClientCreateInput) {
    return this.databaseService.client.create({ data: createClientDto });
  }

  findAll() {
    return this.databaseService.client.findMany();
  }

  async findOne(id: number): Promise<Client | null> {
    const client = await this.databaseService.client.findUnique({ where: { id } });
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    return client;
  }

  async update(id: number, updateClientDto: Prisma.ClientUpdateInput): Promise<Client> {
    const existingClient = await this.findOne(id);
    if (!existingClient){
      throw new NotFoundException (`Team with ID ${id} not found`);
    }
    return this.databaseService.client.update({ where: { id }, data: updateClientDto });
  }

  async remove(id: number): Promise<Client> {
    const existingClient = await this.findOne(id);
    if (!existingClient){
    throw new NotFoundException (`Team with ID ${id} not found`);}
    return this.databaseService.client.delete({ where: { id } });
  }
}
