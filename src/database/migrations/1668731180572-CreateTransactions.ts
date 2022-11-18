import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTransactions1668731180572 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table(
      {
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()"
          },
          {
            name: "type",
            type: "varchar"
          },
          {
            name: "debited_account_id",
            type: "uuid"
          },
          {
            name: "credited_account_id",
            type: "uuid"
          },
          {
            name: "value",
            type: "decimal"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        foreignKeys: [
          {
            name: "FKDebitedAccount",
            referencedTableName: "accounts",
            referencedColumnNames: ["id"],
            columnNames: ["debited_account_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          },
          {
            name: "FKCreditedAccount",
            referencedTableName: "accounts",
            referencedColumnNames: ["id"],
            columnNames: ["credited_account_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          }
        ]
      }
    ));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions");
  }

}
