import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { Prisma, Client } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

const mockDatabaseService = {
  client: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('ClientsService', () => {
  let service: ClientsService;
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        { provide: DatabaseService, useValue: mockDatabaseService },
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
    databaseService = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new client', async () => {
      const createClientDto: Prisma.ClientCreateInput = {
        firstName: 'Test Client',
        lastName: 'Last Name',
        email: 'test@example.com'
      };
      const result = { id: 1, ...createClientDto };

      jest.spyOn(databaseService.client, 'create').mockResolvedValue(result as Client);

      expect(await service.create(createClientDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of clients', async () => {
      const result = [{
        id: 1,
        firstName: 'Test',
        lastName: 'Client',
        email: 'test@example.com',
        phoneNumber: '1234567890',
        address: '123 Test Street',
        createdAt: new Date(),
        updatedAt: new Date()
      }];

      jest.spyOn(databaseService.client, 'findMany').mockResolvedValue(result as Client[]);

      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single client', async () => {
      const result: Client = {
        id: 1,
        firstName: 'Test',
        lastName: 'Client',
        email: 'test@example.com',
        phoneNumber: '1234567890',
        address: '123 Test Street',
        createdAt: new Date(),
        updatedAt: new Date()
      };

      jest.spyOn(databaseService.client, 'findUnique').mockResolvedValue(result);

      expect(await service.findOne(1)).toEqual(result);
    });

    it('should throw an error if client is not found', async () => {
      jest.spyOn(databaseService.client, 'findUnique').mockResolvedValue(null);

      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a client', async () => {
      const updateClientDto: Prisma.ClientUpdateInput = { firstName: 'Updatedc Client' };
      const result = { id: 1, ...updateClientDto };

      jest.spyOn(service, 'findOne').mockResolvedValue(result as Client);
      jest.spyOn(databaseService.client, 'update').mockResolvedValue(result as Client);

      expect(await service.update(1, updateClientDto)).toEqual(result);
    });

    it('should throw an error if client to update is not found', async () => {
      const updateClientDto: Prisma.ClientUpdateInput = { firstName: 'Updated Client' };

      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      await expect(service.update(1, updateClientDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a client', async () => {
      const result = { id: 1, name: 'Test Client' };

      jest.spyOn(service, 'findOne').mockResolvedValue(result as unknown as Client);
      jest.spyOn(databaseService.client, 'delete').mockResolvedValue(result as unknown as Client);

      expect(await service.remove(1)).toEqual(result);
    });

    it('should throw an error if client to remove is not found', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      await expect(service.remove(1)).rejects.toThrow(NotFoundException);
    });
  });
});
