import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${config.apiUrl}/users`);
    }

    register(user) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}