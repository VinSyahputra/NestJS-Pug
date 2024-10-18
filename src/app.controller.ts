import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('user-list')
  renderIndex() {
    // Returns no content; only renders the 'index.pug' file
  }
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  
}
