import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './job.dto';
import { Job } from './job.entity';
import * as schedule from 'node-schedule';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) { }

  async scheduleAllJobs() {
    const jobs = await this.jobRepository.find();
    jobs.forEach(job => this.scheduleJob(job));
  }

  scheduleJob(job: Job) {
    const date = new Date(job.nextRunTimestamp);
    schedule.scheduleJob(date, () => {
      console.log(`Executing job: ${job.name}`);
      this.updateJobTimestamps(job);
    });
  }

  async create(createJobDto: CreateJobDto): Promise<Job> {
    try {
      const job = new Job();
      job.name = createJobDto.name;
      job.nextRunTimestamp = createJobDto.nextRunTimestamp;

      return await this.jobRepository.save(job);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.jobRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<Job> {
    try {
      return await this.jobRepository.findOne({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateJobDto: CreateJobDto): Promise<Job> {
    try {
      const job = await this.jobRepository.findOne({ where: { id: id } });
      job.name = updateJobDto.name;
      job.nextRunTimestamp = updateJobDto.nextRunTimestamp;
      return this.jobRepository.save(job);
    } catch (error) {
      return error;
    }
  }

  private async updateJobTimestamps(job: Job) {
    try {
      job.lastRunTimestamp = new Date();
      job.nextRunTimestamp = new Date(job.lastRunTimestamp.getTime() + 24 * 60 * 60 * 1000);
      return await this.jobRepository.save(job);
    } catch (error) {
      return error
    }
  }
}
