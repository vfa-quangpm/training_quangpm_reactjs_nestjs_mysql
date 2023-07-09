"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1688799533938 = void 0;
class Migrations1688799533938 {
    constructor() {
        this.name = 'Migrations1688799533938';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`permission\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`permission\` enum ('admin', 'user') NOT NULL DEFAULT 'user'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`permission\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`permission\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
    }
}
exports.Migrations1688799533938 = Migrations1688799533938;
//# sourceMappingURL=1688799533938-migrations.js.map