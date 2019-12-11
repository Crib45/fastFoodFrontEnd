import { BackendService } from '../services/backend.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: BackendService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const authToken = this.auth.getAuthorizationToken();

        const authReq = req.clone({
            setHeaders: {
                Authorization: `Basic ` + sessionStorage.getItem('token')
            }
        });

        return next.handle(authReq);
    }
}