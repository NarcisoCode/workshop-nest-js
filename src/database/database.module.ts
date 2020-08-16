import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            // ssl: true,
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'workshop_user',
            password: 'workshop_password',
            database: 'workshop_db',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
          }),
    ]
})
export class DatabaseModule {}
