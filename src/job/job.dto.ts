import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({ description: 'Job Id' })
  id : number;

  @ApiProperty({ description: 'Name of the job' })
  name: string;

  @ApiProperty({ description: 'Next run timestamp of the job' })
  nextRunTimestamp: Date;
  
  @ApiProperty({ description: 'Last run timestamp of the job' })
  lastRunTimestamp: Date;
}
