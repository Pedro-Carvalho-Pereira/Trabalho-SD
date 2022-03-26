import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariozDto } from './create-usuarioz.dto';

export class UpdateUsuariozDto extends PartialType(CreateUsuariozDto) {}
