import { Injectable } from '@angular/core';
import {Subject} from "rxjs";


@Injectable()
export class MoodService {
    private addHappyStudentSubject = new Subject<void>();
    private addNormalStudentSubject = new Subject<void>();
    private addSadStudentSubject = new Subject<void>();
    private addAngryStudentSubject = new Subject<void>();

    addHappyStudent$ = this.addHappyStudentSubject.asObservable();
    addNormalStudent$ = this.addNormalStudentSubject.asObservable();
    addSadStudent$ = this.addSadStudentSubject.asObservable();
    addAngryStudent$ = this.addAngryStudentSubject.asObservable();



    triggeraddHappyStudent() {
        this.addHappyStudentSubject.next();
    }
    triggerAddNormalStudent() {
        this.addNormalStudentSubject.next();
    }

    triggerSadStudent() {
        this.addSadStudentSubject.next();
    }

    triggerAngryStudent() {
        this.addAngryStudentSubject.next();
    }
}
