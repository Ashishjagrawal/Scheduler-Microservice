import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobService } from './job/job.service';
import { JobController } from './job/job.controller';
import { Job } from './job/job.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [Job],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Job]),
],
  controllers: [JobController],
  providers: [JobService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly jobService: JobService) {}

  onModuleInit() {
    this.jobService.scheduleAllJobs();
  }
}


