import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })  // Matches the existing PostgreSQL table name
export class User {
  @PrimaryColumn() // Assumes the 'id' column is auto-generated
  id: string;

  @Column()
  username: string;  // Maps to 'username' column in the 'users' table

  @Column()
  email: string;  // Maps to 'email' column in the 'users' table
  
  @Column()
  password: string;  // Maps to 'email' column in the 'users' table

  @Column({ nullable: true })
  role: number;  // Maps to 'email' column in the 'users' table

  @Column({ nullable: true })
  status: number;  // Maps to 'email' column in the 'users' table

  @Column({ nullable: true,type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;  // Maps to 'bio' column, nullable means it can be NULL in the database
}
