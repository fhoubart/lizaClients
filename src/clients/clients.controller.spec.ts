import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '@prisma/client';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';

describe('ClientsController', () => {
  let controller: ClientsController;
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [
        {
          provide: ClientsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a client', () => {
    const clientDto: Prisma.ClientCreateInput = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };
    controller.create(clientDto);
    expect(service.create).toHaveBeenCalledWith(clientDto);
  });

  it('should find all clients', () => {
    controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one client', () => {
    const id = '1';
    controller.findOne(id);
    expect(service.findOne).toHaveBeenCalledWith(+id);
  });

  it('should update a client', () => {
    const id = '1';
    const clientDto: Prisma.ClientCreateInput = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };
    controller.update(id, clientDto);
    expect(service.update).toHaveBeenCalledWith(+id, clientDto);
  });

  it('should remove a client', () => {
    const id = '1';
    controller.remove(id);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });
});
