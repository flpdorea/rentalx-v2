import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class User1664738076060 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true
            },
            {
              name: 'firstName',
              type: 'varchar'
            },
            {
              name: 'lastName',
              type: 'varchar'
            },
            {
              name: 'age',
              type: 'smallint',
              default: '25'
            }
          ]
        }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }

}
