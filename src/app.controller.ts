import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('auth/callback')
  handleGithubCallback(@Query('code') code: string, @Res() res: Response) {
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);
    console.log('GitHub OAuth Code:', code);


    res.send('GitHub OAuth callback received');
  }

}

