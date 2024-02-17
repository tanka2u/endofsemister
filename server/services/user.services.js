const User = require('../model/user.model');

const KeycloakAdminClient = require('keycloak-admin').default;
class UserAddService {
    constructor() {
        this.kcAdminClient = new KeycloakAdminClient({
            baseUrl: 'http://localhost:8080/auth',
            realmName: 'projectx',
        });
    }
    async create(user) {
        return user.save()
        .then(async (savedUser) => {
            await this.createApiManUser(user);
            console.log('User saved:', savedUser);
            return true;
        })
        .catch(err => {
            console.error('Error saving user:', err);
            return false;
        });
    }

    async createApiManUser(user) {
        try {
            await this.kcAdminClient.auth({
                username: 'admin',
                password: 'admin123!',
                grantType: 'password',
                clientId: 'admin-cli',
            });
    
            const usernew = await this.kcAdminClient.users.create({
                realm: 'projectx',
                username: user.username,
                email: user.email,
                enabled: true,
                credentials: [{
                    type: 'password',
                    value: user.password,
                }],
            });
    
            console.log('User created:', usernew);
        } catch (error) {
            console.error('Error creating user:', error);
        } finally {
            this.kcAdminClient.authenticated ? await this.kcAdminClient.logout() : console.log('Not authenticated');
        }
    }

    async getAllUsers() {
        const users = await User.find();
        return users;
    }
}

module.exports = UserAddService;