import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './job.dto';
import { Job } from './job.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  @ApiOperation({ summary: 'List all jobs' })
  @ApiResponse({ status: 200, description: 'List of all jobs.' })
  findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get job by job id' })
  @ApiResponse({ status: 200, description: 'job details' })
  findOne(@Param('id') id: number): Promise<Job> {
    return this.jobService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create job' })
  @ApiResponse({ status: 201, description: 'new job created' })
  create(@Body() createJobDto: CreateJobDto): Promise<Job> {
    return this.jobService.create(createJobDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update job details by job id' })
  @ApiResponse({ status: 201, description: 'Job details updated' })
  update(@Param('id') id: number, @Body() updateJobDto: CreateJobDto): Promise<Job> {
    return this.jobService.update(id, updateJobDto);
  }
}

