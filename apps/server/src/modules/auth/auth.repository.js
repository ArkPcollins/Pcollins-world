import { UserRepository } from "../users/user.repository";
export class AuthRepository {
    users;
    constructor(users = new UserRepository()) {
        this.users = users;
    }
    findByEmail(email) {
        return this.users.findByEmail(email);
    }
    createUser(data) {
        return this.users.create(data);
    }
    updateRefreshToken(id, token) {
        return this.users.updateRefreshToken(id, token);
    }
    async findByFirebaseId(firebaseId) {
        return this.users.findOne({ firebaseId });
    }
    async updateFirebaseId(userId, firebaseId) {
        return this.users.findByIdAndUpdate(userId, { firebaseId });
    }
}
