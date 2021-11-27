import db from "../src/db";
import User from "../src/models/user.model";

class userRepository {
    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;

        const result = await db.query<User>(query);
        const rows = result.rows;

        return rows || [];
    }
}

export default new userRepository();