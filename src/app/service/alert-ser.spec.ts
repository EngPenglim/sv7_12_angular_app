// alert.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { AlertService } from './alert-ser';
import { CartSer } from '../service/cart-ser';
describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});