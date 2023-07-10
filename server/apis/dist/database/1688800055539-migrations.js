"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1688800055539 = void 0;
class Migrations1688800055539 {
    constructor() {
        this.name = 'Migrations1688800055539';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`permission\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`Username\` varchar(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_b000857089edf6cae23b9bc9b8\` (\`Username\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`Password\` varchar(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`Role\` enum ('admin', 'user') NOT NULL DEFAULT 'user'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`Role\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`Password\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_b000857089edf6cae23b9bc9b8\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`Username\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`permission\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
    }
}
exports.Migrations1688800055539 = Migrations1688800055539;
//# sourceMappingURL=1688800055539-migrations.js.map